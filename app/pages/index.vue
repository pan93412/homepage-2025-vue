<script setup lang="ts">
    useHead({
        title: 'Yi-Jyun Pan',
        meta: [
            {
                name: 'description',
                content: 'Yi-Jyun Pan\'s CV.',
            }
        ]
    })
</script>
<template>
    <div>
        <PortfolioHeader />

        <AppMainLayout>
            <PortfolioAbout />
            <PortfolioProjects />
            <PortfolioExperiences />
            <PortfolioSlides />
            <PortfolioSocialMedia />
        </AppMainLayout>
    </div>
</template>
