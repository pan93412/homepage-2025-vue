<template>
  <header
    class="
      relative mx-auto mb-4 overflow-hidden bg-neutral-100 py-8
      dark:bg-neutral-800
    "
  >
    <div class="container mx-auto px-4">
      <article class="relative z-10 space-y-1">
        <h1 class="text-2xl font-bold">{{ $t("header.title") }}</h1>

        <p>
          <i18n-t keypath="header.description1" tag="span" scope="global">
            <template #company>
              <NuxtLink href="https://zeabur.com">Zeabur</NuxtLink>
            </template>
          </i18n-t>
          <br>
          {{ $t("header.description2") }}
        </p>

        <ul class="flex items-center gap-1">
          <LanguageSwitcher />
        </ul>
      </article>

      <div
        class="
          pointer-events-none absolute top-1/2 right-4 z-0 -translate-y-1/2
          select-none
        "
        aria-hidden="true"
        role="presentation"
      >
        <NuxtImg
          preload
          src="/avatar.avif"
          format="avif"
          loading="lazy"
          fetch-priority="low"
          width="320"
          height="320"
          alt="Avatar"
          class="
            pointer-events-none h-80 w-80 rounded-full object-cover opacity-10
            select-none
          "
        />
      </div>
    </div>
  </header>
</template>
