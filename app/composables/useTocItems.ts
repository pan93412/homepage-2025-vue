export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
  $element: HTMLElement;
}

export function useTocItems(
  targetSelector?: string | HTMLElement | undefined
): Ref<TocItem[]> {
  let mutationObserver: MutationObserver | null = null;
  const tocItems = ref<TocItem[]>([]);

  const refreshTocItems = (target: HTMLElement) => {
    const headings = Array.from(
      target.querySelectorAll("h2[id], h3[id]")
    ) as HTMLElement[];

    tocItems.value = headings.map((heading) => ({
      id: heading.id,
      text: heading.textContent?.trim() || "",
      level: heading.tagName.toLowerCase() === "h2" ? 2 : 3,
      $element: heading,
    }));
  };

  onMounted(async () => {
    await nextTick();

    const target =
      typeof targetSelector === "string"
        ? (document.querySelector(targetSelector) as HTMLElement)
        : targetSelector instanceof HTMLElement
        ? targetSelector
        : null;

    if (!target) {
      return;
    }

    refreshTocItems(target);

    mutationObserver = new MutationObserver(() => {
      refreshTocItems(target);
    });
    mutationObserver.observe(target, { childList: true, subtree: true });
  });

  onUnmounted(() => {
    mutationObserver?.disconnect();
  });

  return tocItems;
}
