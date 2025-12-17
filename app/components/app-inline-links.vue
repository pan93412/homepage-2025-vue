<script setup lang="ts">
interface Link {
  name: string;
  url: string;
}

defineProps<{
  links: Link[];
}>();
</script>

<template>
  <span role="presentation" class="whitespace-pre-wrap" aria-hidden="true">{{
    $t("inline-links.parenthesis")
  }}</span>

  <div class="inline-flex items-center">
    <div v-for="(link, idx) in links" :key="link.name">
      <NuxtLink :href="link.url" rel="noopener noreferrer" target="_blank">{{
        link.name
      }}</NuxtLink>
      <span
        v-if="idx < links.length - 1"
        role="presentation"
        aria-hidden="true"
        class="whitespace-pre-wrap"
      >{{ $t("inline-links.separator") }}</span>
    </div>
  </div>

  <span role="presentation" class="whitespace-pre-wrap" aria-hidden="true">{{
    $t("inline-links.parenthesis-end")
  }}</span>
</template>
