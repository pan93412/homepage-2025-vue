<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface TocItem {
    id: string
    text: string
    level: 2 | 3
    children?: TocItem[]
}

const props = withDefaults(defineProps<{
    target?: string | HTMLElement
    title?: string
}>(), {
    target: undefined,
    title: 'Table of Contents'
})

const tocItems = ref<TocItem[]>([])
const activeId = ref<string>('')

let targetElement: HTMLElement | null = null
let observer: IntersectionObserver | null = null
let mutationObserver: MutationObserver | null = null

const generateId = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

const extractHeadings = (): TocItem[] => {
    if (!targetElement) return []

    const headings = targetElement.querySelectorAll('h2, h3')
    const items: TocItem[] = []
    let currentH2: TocItem | null = null

    headings.forEach((heading) => {
        const text = heading.textContent?.trim() || ''
        const id = heading.id || generateId(text)
        
        // Set id if not already set
        if (!heading.id) {
            heading.id = id
        }

        if (heading.tagName === 'H2') {
            currentH2 = {
                id,
                text,
                level: 2,
                children: []
            }
            items.push(currentH2)
        } else if (heading.tagName === 'H3' && currentH2) {
            currentH2.children?.push({
                id,
                text,
                level: 3
            })
        } else if (heading.tagName === 'H3') {
            // H3 without parent H2
            items.push({
                id,
                text,
                level: 3
            })
        }
    })

    return items
}

const updateToc = () => {
    tocItems.value = extractHeadings()
}

const setupIntersectionObserver = () => {
    if (!targetElement || typeof window === 'undefined') return

    // Disconnect existing observer
    observer?.disconnect()

    const headings = targetElement.querySelectorAll('h2[id], h3[id]')
    
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeId.value = entry.target.id
                }
            })
        },
        {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        }
    )

    headings.forEach((heading) => {
        observer?.observe(heading)
    })
}

const initializeToc = () => {
    if (typeof window === 'undefined') return

    // Get target element
    if (typeof props.target === 'string') {
        targetElement = document.querySelector(props.target) as HTMLElement
    } else if (props.target instanceof HTMLElement) {
        targetElement = props.target
    } else {
        // Default to document body or main content
        targetElement = document.querySelector('main') || document.body
    }

    if (!targetElement) return

    // Initial extraction
    updateToc()

    // Disconnect existing mutation observer
    mutationObserver?.disconnect()

    // Watch for DOM changes
    mutationObserver = new MutationObserver(() => {
        updateToc()
        // Re-setup intersection observer after DOM changes
        setupIntersectionObserver()
    })

    mutationObserver.observe(targetElement, {
        childList: true,
        subtree: true
    })

    // Setup intersection observer for active section highlighting
    setupIntersectionObserver()
}

const scrollToHeading = (id: string) => {
    const element = targetElement?.querySelector(`#${id}`)
    if (element) {
        const yOffset = -20 // Offset for better visibility
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}

onMounted(async () => {
    await nextTick()
    initializeToc()
})

// Watch for target changes (e.g., when ref becomes available)
watch(() => props.target, async () => {
    await nextTick()
    initializeToc()
})

onUnmounted(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
})
</script>

<template>
    <nav v-if="tocItems.length > 0" class="sticky top-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
        <h3 v-if="title" class="text-sm font-bold mb-3 text-neutral-900 dark:text-neutral-100">{{ title }}</h3>
        <ul class="space-y-1 list-none">
            <li
                v-for="item in tocItems"
                :key="item.id"
                :class="[
                    'text-sm',
                    item.level === 2 ? 'toc-item-h2' : 'toc-item-h3',
                    { 'toc-item-active': activeId === item.id }
                ]"
            >
                <a
                    :href="`#${item.id}`"
                    class="block py-1 px-2 rounded text-neutral-700 dark:text-neutral-300 
                           hover:bg-neutral-200 dark:hover:bg-neutral-700 
                           transition-colors duration-150
                           no-underline"
                    @click.prevent="scrollToHeading(item.id)"
                >
                    {{ item.text }}
                </a>
                <ul v-if="item.children && item.children.length > 0" class="mt-1 space-y-0.5 list-none">
                    <li
                        v-for="child in item.children"
                        :key="child.id"
                        :class="[
                            'text-sm font-normal ml-3',
                            { 'toc-item-active': activeId === child.id }
                        ]"
                    >
                        <a
                            :href="`#${child.id}`"
                            class="block py-1 px-2 rounded text-neutral-700 dark:text-neutral-300 
                                   hover:bg-neutral-200 dark:hover:bg-neutral-700 
                                   transition-colors duration-150
                                   no-underline"
                            @click.prevent="scrollToHeading(child.id)"
                        >
                            {{ child.text }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
