<template>
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 px-4">
        <main id="main-content" class="min-w-0">
            <slot />
        </main>
        <aside class="hidden lg:block">
            <AppToc target="#main-content" :title="$t('table-of-contents')" />
        </aside>
    </div>
</template>
