<template>
    <AppArticleBlock>
        <h2 class="text-xl font-bold mb-2">{{ $t('about.title') }}</h2>

        <p>{{ $t('about.description') }}</p>

        <ul class="list-disc list-inside mb-1.5 [&>li]:mb-0.5">
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.frontend.title') }}
                </template>
                <template #description>
                    {{ $t('about.frontend.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.backend.title') }}
                </template>
                <template #description>
                    {{ $t('about.backend.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.cloud.title') }}
                </template>
                <template #description>
                    {{ $t('about.cloud.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.infra.title') }}
                </template>
                <template #description>
                    {{ $t('about.infra.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.llm.title') }}
                </template>
                <template #description>
                    {{ $t('about.llm.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.apple-ecosystem.title') }}
                </template>
                <template #description>
                    {{ $t('about.apple-ecosystem.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.engineering.title') }}
                </template>
                <template #description>
                    {{ $t('about.engineering.description') }}
                </template>
            </AppDescriptionList>
            <AppDescriptionList>
                <template #title>
                    {{ $t('about.designing.title') }}
                </template>
                <template #description>
                    {{ $t('about.engineering.description') }}
                </template>
            </AppDescriptionList>
        </ul>

        <p>{{ $t('about.cloud-portfolio') }}</p>
        <p>{{ $t('about.solutions-engineering-portfolio') }}</p>
        <p>{{ $t('about.oss-contributions') }}</p>
    </AppArticleBlock>
</template>
