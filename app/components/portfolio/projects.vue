<script setup lang="ts">
interface Project {
    key: string;
    link: string;
}

const projects: Project[] = [
    {
        key: 'nkust-iot-2024-06',
        link: 'https://github.com/nkust-monitor-iot-project-2024/central',
    },
    {
        key: 'database-playground-2024-07',
        link: 'https://github.com/database-playground/app-sf',
    },
    {
        key: 'nkust-iot-2024-12',
        link: 'https://github.com/nkust-monitor-iot-project-2024/iot-system',
    },
    {
        key: 'yolo-rs-2024-12',
        link: 'https://github.com/pan93412/yolo-rs',
    },
    {
        key: 'crawler-2025-04',
        link: 'https://github.com/pan93412?tab=repositories&q=nkust-crawler&type=source&language=&sort=',
    },
    {
        key: 'coscup-2025-07',
        link: 'https://github.com/coscup/2025',
    },
    {
        key: 'database-playground-2025-08',
        link: 'https://github.com/database-playground/backend-v2',
    },
    {
        key: 'virtual-doctor-2025-12',
        link: 'https://github.com/pan93412/virtual-doctor',
    },
];
</script>

<template>
    <AppArticleBlock>
        <h2 id="projects" class="text-xl font-bold mb-2 scroll-mt-4">{{ $t('projects.title') }}</h2>

        <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
            <AppDescriptionList v-for="project in projects" :key="project.key">
                <template #title>
                    {{ $t(`projects.${project.key}.title`) }}
                </template>
                <template #description>
                    {{ $t(`projects.${project.key}.description`) }}
                </template>
            </AppDescriptionList>
        </ul>
    </AppArticleBlock>
</template>
