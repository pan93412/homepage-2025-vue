<template>
    <li>
        <strong><slot name="title" /></strong>{{ $t('punctuation.colon') }}<slot name="description" />
    </li>
</template>