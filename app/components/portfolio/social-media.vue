<script setup lang="ts">
interface BasicContact {
  name: string;
  handle: string;
  link: string;
}

const socialMediaContacts: BasicContact[] = [
  {
    name: "GitHub",
    handle: "pan93412",
    link: "https://github.com/pan93412",
  },
  {
    name: "Threads",
    handle: "@pan93412",
    link: "https://www.threads.net/@pan93412",
  },
  {
    name: "Twitter (X)",
    handle: "@byStarTW",
    link: "https://x.com/byStarTW",
  },
  {
    name: "Telegram",
    handle: "@bystartw_chan",
    link: "https://t.me/bystartw_chan",
  },
  {
    name: "Mastodon",
    handle: "@pan93412@social.slat.org",
    link: "https://social.slat.org/@pan93412",
  },
  {
    name: "Bluesky",
    handle: "@pan93.com",
    link: "https://bsky.app/profile/pan93.com",
  },
  {
    name: "Facebook",
    handle: "Yi-Jyun Pan",
    link: "https://facebook.com/pan93412TW",
  },
  {
    name: "LinkedIn",
    handle: "pan93412",
    link: "https://www.linkedin.com/in/pan93412/",
  },
  {
    name: "Figma",
    handle: "pan93412",
    link: "https://www.figma.com/u/pan93412",
  },
];
</script>

<template>
  <AppArticleBlock class="@container">
    <AppHeading
      id="social-media"
      class="mb-2 scroll-mt-4 text-xl font-bold"
      :level="2"
      :text="$t('social-media.title')"
    />
    <p>{{ $t("social-media.description") }}</p>

    <section
      class="
        mt-2 grid grid-cols-1 gap-2
        @lg:grid-cols-2
        @xl:grid-cols-3
      "
    >
      <div v-for="contact in socialMediaContacts" :key="contact.name">
        <strong>{{ contact.name }}</strong>:&nbsp;<br
          class="
            hidden
            @lg:block
          "
        >
        <NuxtLink :href="contact.link">{{ contact.handle }}</NuxtLink>
      </div>
    </section>
  </AppArticleBlock>
</template>
