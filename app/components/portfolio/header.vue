<template>
    <header class="mx-auto py-8 bg-neutral-100 dark:bg-neutral-800 mb-4">
        <div class="container mx-auto space-y-1">
            <h1 class="text-2xl font-bold">{{ $t('header.title') }}</h1>

            <article>
                <i18n-t keypath="header.description1" tag="span" scope="global">
                    <template #company>
                        <a href="https://zeabur.com">Zeabur</a>
                    </template>
                </i18n-t>
                <br>
                {{ $t('header.description2') }}
            </article>

            <nav>
                <ul class="flex items-center gap-1">
                    <LanguageSwitcher />
                </ul>
            </nav>
        </div>
    </header>
</template>
