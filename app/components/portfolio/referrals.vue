<script setup lang="ts">
interface Referral {
    key: string;
    url: string;
}

const referrals: Referral[] = [
    {
        key: 'zeabur',
        url: 'https://zeabur.com/?referralCode=pan93412',
    },
    {
        key: 'bunny-cdn',
        url: 'https://bunny.net?ref=gimn53pr0d',
    }
];
</script>

<template>
    <AppArticleBlock>
        <AppHeading
            id="referrals"
            class="text-xl font-bold mb-2 scroll-mt-4"
            :level="2"
            :text="$t('referrals.title')"
        />
        <p>{{ $t('referrals.description') }}</p>

        <section v-for="referral in referrals" :key="referral.key" class="mt-4">
            <AppHeading
                :id="`referrals-${referral.key}`"
                :level="3"
                class="text-lg font-bold mb-2"
                :text="$t(`referrals.${referral.key}.title`)"
            />
            <p>{{ $t(`referrals.${referral.key}.description`) }}</p>
            <p class="mt-2"><a :href="referral.url">{{ $t('referrals.register-now') }}</a></p>
        </section>
    </AppArticleBlock>
</template>