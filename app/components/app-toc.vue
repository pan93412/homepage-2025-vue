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
    class="
      sticky top-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4
      dark:border-neutral-700 dark:bg-neutral-800
    "
  >
    <h3
      v-if="title"
      class="
        mb-3 text-sm font-bold text-neutral-900
        dark:text-neutral-100
      "
    >
      {{ title }}
    </h3>
    <ul class="list-none space-y-1">
      <li
        v-for="item in tocItemsRef"
        :key="item.id"
        class="text-sm"
      >
        <NuxtLink
          :to="`#${item.id}`"
          :class="[
            `
              block rounded-sm px-2 py-1 no-underline transition-all
              duration-200
            `,
            activeAnchor === item.id
              ? `
                bg-blue-100 text-blue-900
                dark:bg-blue-900 dark:text-blue-100
              `
              : `
                text-neutral-700
                hover:bg-neutral-200
                dark:text-neutral-300
                dark:hover:bg-neutral-700
              `,
            item.level === 2 ? 'ml-0' : 'ml-4',
          ]"
        >{{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
