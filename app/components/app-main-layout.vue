<template>
    <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[6fr_2fr] gap-8">
        <main id="main-content">
            <slot />
        </main>
        <aside ref="tocRef" class="hidden lg:block" hydrate-on-visible>
            <AppToc target="#main-content" :title="$t('table-of-contents')" />
        </aside>
    </div>
</template>
