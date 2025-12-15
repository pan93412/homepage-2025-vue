<script setup lang="ts">
interface Project {
    key: string;
    link?: string;
}

const projects: Project[] = [
    {
        key: 'virtual-doctor-2025-12',
    },
    {
        key: 'database-playground-2025-08',
        link: 'https://github.com/database-playground/backend-v2',
    },
    {
        key: 'coscup-2025-07',
        link: 'https://github.com/coscup/2025',
    },
    {
        key: 'crawler-2025-04',
        link: 'https://github.com/pan93412?tab=repositories&q=nkust-crawler&type=source&language=&sort=',
    },
    {
        key: 'yolo-rs-2024-12',
        link: 'https://github.com/pan93412/yolo-rs',
    },
    {
        key: 'nkust-iot-2024-12',
        link: 'https://github.com/nkust-monitor-iot-project-2024/iot-system',
    },
    {
        key: 'database-playground-2024-07',
        link: 'https://github.com/database-playground/app-sf',
    },
    {
        key: 'nkust-iot-2024-06',
        link: 'https://github.com/nkust-monitor-iot-project-2024/central',
    },
];
</script>

<template>
    <AppArticleBlock>
        <h2 id="projects" class="text-xl font-bold mb-2 scroll-mt-4">{{ $t('projects.title') }}</h2>

        <i18n-t keypath="projects.description" tag="p" scope="global">
            <template #my-github>
                <a href="https://github.com/pan93412">{{ $t('projects.my-github') }}</a>
            </template>
            <template #blog>
                <a href="https://blog.pan93.com">{{ $t('projects.blog') }}</a>
            </template>
        </i18n-t>

        <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
            <AppDescriptionList v-for="project in projects" :key="project.key">
                <template #title>
                    <a v-if="project.link" :href="project.link">{{ $t(`projects.${project.key}.title`) }}</a>
                    <span v-else>{{ $t(`projects.${project.key}.title`) }}</span>
                </template>
                <template #description>
                    {{ $t(`projects.${project.key}.description`) }}
                </template>
            </AppDescriptionList>
        </ul>
    </AppArticleBlock>
</template>
