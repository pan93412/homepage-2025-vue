<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";

useHead({
  title: "Yi-Jyun Pan",
  meta: [
    {
      name: "description",
      content: "Yi-Jyun Pan's CV.",
    },
  ],
});
</script>
<template>
  <div>
    <PortfolioHeader />

    <AppTocProvider>
      <AppMainLayout>
        <PortfolioAbout />
        <PortfolioProjects />
        <PortfolioExperiences />
        <PortfolioSlides />
        <PortfolioReferrals />
        <PortfolioSocialMedia />
      </AppMainLayout>
    </AppTocProvider>

    <Analytics />
  </div>
</template>
