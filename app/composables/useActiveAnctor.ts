
import { ref, onMounted, onUnmounted, watch, type Ref, type WatchHandle } from 'vue'
import { useThrottleFn } from '@vueuse/core'

/**
 * Get the absolute top position of an element relative to the document.
 */
function getAbsoluteTop(element: HTMLElement): number {
  let top = 0
  let current: HTMLElement | null = element

  while (current) {
    top += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }

  return top
}

/**
 * Get the scroll offset (for fixed headers, etc.)
 * This can be customized based on your layout needs.
 */
function getScrollOffset(): number {
  // You can adjust this based on your fixed header height
  return 0
}

/**
 * Get the active anchor from the toc items.
 * Based on [VitePress's implementation](https://github.com/vuejs/vitepress/blob/8ed6ea048cb49256e3302de2de0edfbe635afd32/src/client/theme-default/composables/outline.ts)
 * for tracking active headings during scroll.
 *
 * @param tocItems - The toc items to get the active anchor from.
 * @returns A ref containing the ID of the active anchor.
 */
export function useActiveAnchor(tocItems: Ref<TocItem[]> | TocItem[]): Ref<string> {
  const activeAnchor = ref<string>('')
  
  // Convert to ref if it's not already
  const tocItemsRef = Array.isArray(tocItems) ? ref(tocItems) : tocItems

  function setActiveLink() {
    if (!tocItemsRef.value.length) {
      activeAnchor.value = ''
      return
    }

    const scrollY = window.scrollY
    const innerHeight = window.innerHeight
    const offsetHeight = document.body.offsetHeight
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1

    // Map headers with their absolute top positions
    const headers = tocItemsRef.value
      .filter((item): item is TocItem & { $element: HTMLElement } => item.$element !== undefined)
      .map((item) => ({
        id: item.id,
        top: getAbsoluteTop(item.$element)
      }))
      .filter(({ top }) => !Number.isNaN(top))
      .sort((a, b) => a.top - b.top)

    // No headers available for active link
    if (!headers.length) {
      activeAnchor.value = ''
      return
    }

    // Page top - no active link
    if (scrollY < 1) {
      activeAnchor.value = ''
      return
    }

    // Page bottom - highlight last link
    if (isBottom && headers.length > 0) {
      activeAnchor.value = headers[headers.length - 1]!.id
      return
    }

    // Find the last header above the top of viewport
    let activeId: string = ''
    const scrollOffset = getScrollOffset()
    for (const { id, top } of headers) {
      if (top > scrollY + scrollOffset + 32 /* mb-8 */) {
        break
      }
      activeId = id
    }
    activeAnchor.value = activeId
  }

  const onScroll = useThrottleFn(setActiveLink, 100)
  let watchHandle: WatchHandle | null = null;

  onMounted(() => {
    requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // Watch for changes in tocItems and update active link
    watchHandle = watch(tocItemsRef, () => {
      requestAnimationFrame(setActiveLink)
    }, { deep: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    watchHandle?.stop()
  })

  return activeAnchor
}
