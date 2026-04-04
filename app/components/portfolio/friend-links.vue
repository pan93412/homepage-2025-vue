<script setup lang="ts">
const { data, error } = await useFetch("/api/friendship");
</script>

<template>
  <AppArticleBlock class="@container">
    <AppHeading
      id="friend-links"
      class="mb-2 scroll-mt-4 text-xl font-bold"
      :level="2"
      :text="$t('friend-links.title')"
    />
    <p>{{ $t("friend-links.description") }}</p>

    <div
      v-if="error"
      class="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700 dark:border-red-700 dark:bg-red-950 dark:text-red-300"
    >
      {{ $t("friend-links.error") }}
    </div>

    <section
      v-else
      class="mt-4 grid grid-cols-1 gap-3 @lg:grid-cols-2 @xl:grid-cols-3"
    >
      <a
        v-for="link in data"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener"
        class="
          flex items-center gap-3 rounded-lg border border-neutral-200
          p-3 no-underline transition-colors
          hover:border-neutral-400 hover:bg-neutral-50
          dark:border-neutral-700 dark:hover:border-neutral-500
          dark:hover:bg-neutral-800
        "
      >
        <img
          :src="link.avatar"
          :alt="link.name"
          class="size-12 shrink-0 rounded-full object-cover"
        >
        <div class="min-w-0">
          <p class="truncate font-bold text-neutral-900 dark:text-neutral-100">
            {{ link.name }}
          </p>
          <p class="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
            {{ link.description }}
          </p>
        </div>
      </a>
    </section>
  </AppArticleBlock>
</template>
