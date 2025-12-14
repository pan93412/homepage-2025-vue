<script setup lang="ts">
    const { locales } = useI18n()
</script>

<template>
    <template v-for="(locale, index) in locales" :key="locale.code">
        <li><SwitchLocalePathLink :locale="locale.code">{{ locale.name }}</SwitchLocalePathLink></li>
        <li v-if="index !== locales.length - 1" class="separator" aria-hidden="true" role="presentation">・</li>
    </template>
</template>
