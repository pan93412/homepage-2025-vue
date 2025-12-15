<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "Table of Contents",
  },
);

const tocItemsRef = useTocItems();
const activeAnchor = useActiveAnchor(tocItemsRef);
</script>

<template>
  <nav
    v-if="tocItemsRef.length > 0"
    class="sticky top-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
  >
    <h3
      v-if="title"
      class="text-sm font-bold mb-3 text-neutral-900 dark:text-neutral-100"
    >
      {{ title }}
    </h3>
    <ul class="space-y-1 list-none">
      <li
        v-for="item in tocItemsRef"
        :key="item.id"
        class="text-sm"
      >
        <NuxtLink
          :to="`#${item.id}`"
          :class="[
            'block py-1 px-2 rounded transition-all duration-200 no-underline',
            activeAnchor === item.id
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700',
            item.level === 2 ? 'ml-0' : 'ml-4',
          ]"
        >{{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
