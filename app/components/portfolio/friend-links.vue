<script setup lang="ts">
import FriendLinksContent from "./friend-links-content.vue";
</script>

<template>
  <AppArticleBlock class="@container">
    <AppHeading
      id="friend-links"
      class="mb-2 scroll-mt-4 text-xl font-bold"
      :level="2"
      :text="$t('friend-links.title')"
    />
    <i18n-t keypath="friend-links.description" tag="p" scope="global">
      <template #form-link>
        <NuxtLink
          href="https://link.pan93.com/friendship-links"
          target="_blank"
          rel="noopener"
        >
          {{ $t("friend-links.form-link") }}
        </NuxtLink>
      </template>
    </i18n-t>

    <FriendLinksContent />
  </AppArticleBlock>
</template>
