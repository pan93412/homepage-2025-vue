<script setup lang="ts">
import { h, defineComponent, type FunctionalComponent } from 'vue';
import { I18nT } from 'vue-i18n';

interface ExperienceItem {
    key: string; // title and company-description will be inferred
    moreInformationLink?: string;
    contributions?: (ExperienceContributionItem | SimpleExperienceContributionItem)[];
}

interface ExperienceContributionItem {
    type: "complete";
    key: string; // title and content will be inferred
    url?: string;
    slots?: Record<string, FunctionalComponent>;
}

interface SimpleExperienceContributionItem {
    type: "simple";
    key: string; // content will be inferred
    slots?: Record<string, FunctionalComponent>;
}

const experiences: ExperienceItem[] = [
    {
        key: 'zeabur-2023-04',
        moreInformationLink: 'https://zeabur.com',
        contributions: [
            {
                type: 'complete',
                key: 'zbpack',
                url: "https://github.com/zeabur/zbpack",
            },
            {
                type: 'complete',
                key: 'sspec',
            },
            {
                type: 'complete',
                key: 'oci-registry',
            },
            {
                type: 'complete',
                key: 'file-management-v2',
            },
        ],
    },
    {
        key: 'mopcon-2022',
        moreInformationLink: 'https://mopcon.org',
    },
    {
        key: 'nkust-gdsc-2022-10',
        contributions: [
            {
                type: 'simple',
                key: 'figma-course',
            },
        ],
    },
    {
        key: 'wmjtyd-2022-07',
        moreInformationLink: 'https://github.com/wmjtyd',
        contributions: [
            {
                type: 'complete',
                key: 'libstock',
                url: 'https://github.com/wmjtyd/libstock',
            },
        ],
    },
    {
        key: 'unm-2021',
        moreInformationLink: 'https://github.com/UnblockNeteaseMusic',
        contributions: [
            {
                type: 'complete',
                key: 'js-version',
                url: 'https://github.com/UnblockNeteaseMusic/server',
            },
            {
                type: 'complete',
                key: 'rust-version',
                url: 'https://github.com/UnblockNeteaseMusic/server-rust',
            },
        ],
    },
    {
        key: 'cisc-2020',
        contributions: [
            {
                type: 'complete',
                key: 'ciscc',
            },
        ],
    },
    {
        key: 'smhs-os-project-2019',
        moreInformationLink: 'https://github.com/smhs-os-project',
        contributions: [
            {
                type: 'complete',
                key: 'cscheckin',
                url: 'https://github.com/smhs-os-project/cscheckin-fe',
            },
            {
                type: 'complete',
                key: 'schweb-crawler',
                url: 'https://github.com/smhs-os-project/schweb-crawler',
            },
            {
                type: 'complete',
                key: 'smhs-epf-faq',
                url: 'https://github.com/smhs-os-project/smhs-epf-faq',
            },
        ],
    },
    {
        key: 'l10n-tw-2018',
        moreInformationLink: 'https://github.com/l10n-tw',
        contributions: [
            {
                type: 'simple',
                key: 'translation',
            },
            {
                type: 'simple',
                key: 'weblate',
                slots: {
                    slat: () => h('a', { 
                        href: 'https://slat.org.tw/', 
                        rel: 'noopener noreferrer' 
                    }, $t('experiences.l10n-tw-2018.slat')),
                },
            },
            {
                type: 'simple',
                key: 'telegram',
                slots: {
                    telegram: () => h('a', { 
                        href: 'https://t.me/l10n_tw', 
                        rel: 'noopener noreferrer' 
                    }, $t('experiences.l10n-tw-2018.telegram')),
                },
            },
        ],
    },
];

const ContributionItem = defineComponent({
    props: {
        experienceKey: {
            type: String,
            required: true,
        },
        contributionItem: {
            type: Object as PropType<ExperienceContributionItem | SimpleExperienceContributionItem>,
            required: true,
        },
    },
    setup(props) {
        return () => {
            switch (props.contributionItem.type) {
                case 'complete':
                    return h(I18nT, {
                        keypath: `experiences.${props.experienceKey}.contributions.${props.contributionItem.key}.description`,
                        tag: 'span',
                        scope: 'global',
                    }, props.contributionItem.slots);
                case 'simple':
                    return h(I18nT, {
                        keypath: `experiences.${props.experienceKey}.contributions.${props.contributionItem.key}`,
                        tag: 'span',
                        scope: 'global',
                    }, props.contributionItem.slots);
                default:
                    return null;
            }
        }
    }
});
</script>

<template>
    <AppArticleBlock>
        <AppHeading
            id="experiences"
            class="text-xl font-bold mb-2 scroll-mt-4"
            :level="2"
            :text="$t('experiences.title')"
        />
        <section v-for="experience in experiences" :key="experience.key" class="mb-4 [&>p]:mb-1.5">
            <AppHeading
                :id="`experience-${experience.key}`"
                :level="3"
                class="text-lg font-bold mb-1 scroll-mt-2"
                :text="$t(`experiences.${experience.key}.title`)"
            />

            <p>
                {{ $t(`experiences.${experience.key}.company-description`) }}
                <a v-if="experience.moreInformationLink" :href="experience.moreInformationLink" class="text-blue-500">{{
                    $t('experiences.more-information') }}</a>
            </p>

            <template v-if="experience.contributions">
                <p>{{ $t('experiences.contributions') }}</p>

                <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                    <li v-for="contribution in experience.contributions" :key="contribution.key">
                        <template v-if="contribution.type === 'complete'">
                            <strong>
                                <a
                                    v-if="contribution.url"
                                    :href="contribution.url"
                                    rel="noopener noreferrer"
                                    class="text-blue-500"
                                >{{
                                        $t(`experiences.${experience.key}.contributions.${contribution.key}.title`)
                                    }}</a>
                                <template v-else>{{
                                    $t(`experiences.${experience.key}.contributions.${contribution.key}.title`)
                                    }}</template>
                            </strong>{{
                                $t('punctuation.colon')
                            }}<ContributionItem
                                :experience-key="experience.key"
                                :contribution-item="contribution" />
                        </template>
                        <template v-else>
                            <ContributionItem
                                :experience-key="experience.key"
                                :contribution-item="contribution"
                            />
                        </template>
                    </li>
                </ul>
            </template>
        </section>
    </AppArticleBlock>
</template>