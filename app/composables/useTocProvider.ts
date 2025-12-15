import { provide, inject, ref, type InjectionKey } from 'vue';

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
  $element?: HTMLElement;
}

interface TocContext {
  items: Ref<Map<string, TocItem>>;
  register: (item: TocItem) => void;
  unregister: (id: string) => void;
  updateElement: (id: string, element: HTMLElement) => void;
}

const TocContextKey: InjectionKey<TocContext> = Symbol('TocContext');

export function provideTocContext() {
  const items = ref<Map<string, TocItem>>(new Map());

  const register = (item: TocItem) => {
    if (!items.value.has(item.id)) {
      items.value.set(item.id, item);
    } else {
      throw new Error(`Item with id ${item.id} already registered`);
    }
  };

  const unregister = (id: string) => {
    items.value.delete(id);
  };

  const updateElement = (id: string, element: HTMLElement) => {
    const item = items.value.get(id);
    if (item) {
      item.$element = element;
    }
  };

  const context: TocContext = {
    items,
    register,
    unregister,
    updateElement,
  };

  provide(TocContextKey, context);

  return context;
}

export function useTocContext() {
  const context = inject(TocContextKey);
  if (!context) {
    throw new Error('useTocContext must be used within a TocProvider');
  }
  return context;
}

export function useTocItems(): Ref<TocItem[]> {
  const context = useTocContext();
  return computed(() => Array.from(context.items.value.values()));
}
