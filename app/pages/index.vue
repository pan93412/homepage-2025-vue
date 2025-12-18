<script setup lang="ts">
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
  </div>
</template>
