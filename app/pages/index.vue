<template>
    <div>
        <PortfolioHeader />

        <main class="container mx-auto">
            <PortfolioAbout />
            <PortfolioProjects />

            <article>
                <h2 class="text-xl font-bold mb-2">{{ $t('experiences.title') }}</h2>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.zeabur-2023-04.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.zeabur-2023-04.company-description') }}
                        <a href="https://zeabur.com" class="text-blue-500">{{ $t('experiences.more-information') }}</a>
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            <strong>
                                <a href="https://github.com/zeabur/zbpack">
                                    {{ $t('experiences.zeabur-2023-04.contributions.zbpack.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.zeabur-2023-04.contributions.zbpack.description') }}
                        </li>
                        <li>
                            <strong>{{ $t('experiences.zeabur-2023-04.contributions.sspec.title') }}</strong>:
                            {{ $t('experiences.zeabur-2023-04.contributions.sspec.description') }}
                        </li>
                        <li>
                            <strong>{{ $t('experiences.zeabur-2023-04.contributions.oci-registry.title') }}</strong>:
                            {{ $t('experiences.zeabur-2023-04.contributions.oci-registry.description') }}
                        </li>
                        <li>
                            <strong>{{ $t('experiences.zeabur-2023-04.contributions.file-management-v2.title') }}</strong>:
                            {{ $t('experiences.zeabur-2023-04.contributions.file-management-v2.description') }}
                        </li>
                    </ul>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.mopcon-2022.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.mopcon-2022.company-description') }}
                    </p>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.nkust-gdsc-2022-10.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.nkust-gdsc-2022-10.company-description') }}
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            {{ $t('experiences.nkust-gdsc-2022-10.contributions.figma-course') }}
                        </li>
                    </ul>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.wmjtyd-2022-07.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.wmjtyd-2022-07.company-description') }}
                        <a href="https://github.com/wmjtyd" class="text-blue-500">{{ $t('experiences.more-information') }}</a>
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            <strong>
                                <a href="https://github.com/wmjtyd/libstock">
                                    {{ $t('experiences.wmjtyd-2022-07.contributions.libstock.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.wmjtyd-2022-07.contributions.libstock.description') }}
                        </li>
                    </ul>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.unm-2021.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.unm-2021.company-description') }}
                        <a href="https://github.com/UnblockNeteaseMusic" class="text-blue-500">{{ $t('experiences.more-information') }}</a>
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            <strong>
                                <a href="https://github.com/UnblockNeteaseMusic/server">
                                    {{ $t('experiences.unm-2021.contributions.js-version.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.unm-2021.contributions.js-version.description') }}
                        </li>
                        <li>
                            <strong>
                                <a href="https://github.com/UnblockNeteaseMusic/server-rust">
                                    {{ $t('experiences.unm-2021.contributions.rust-version.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.unm-2021.contributions.rust-version.description') }}
                        </li>
                    </ul>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.cisc-2020.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.cisc-2020.company-description') }}
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            <strong>{{ $t('experiences.cisc-2020.contributions.ciscc.title') }}</strong>:
                            {{ $t('experiences.cisc-2020.contributions.ciscc.description') }}
                        </li>
                    </ul>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.smhs-os-project-2019.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.smhs-os-project-2019.company-description') }}
                        <a href="https://github.com/smhs-os-project" class="text-blue-500">{{ $t('experiences.more-information') }}</a>
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            <strong>
                                <a href="https://github.com/smhs-os-project/cscheckin-fe">
                                    {{ $t('experiences.smhs-os-project-2019.contributions.cscheckin.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.smhs-os-project-2019.contributions.cscheckin.description') }}
                        </li>
                        <li>
                            <strong>
                                <a href="https://github.com/smhs-os-project/schweb-crawler">
                                    {{ $t('experiences.smhs-os-project-2019.contributions.schweb-crawler.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.smhs-os-project-2019.contributions.schweb-crawler.description') }}
                        </li>
                        <li>
                            <strong>
                                <a href="https://github.com/smhs-os-project/smhs-epf-faq">
                                    {{ $t('experiences.smhs-os-project-2019.contributions.smhs-epf-faq.title') }}
                                </a>
                            </strong>:
                            {{ $t('experiences.smhs-os-project-2019.contributions.smhs-epf-faq.description') }}
                        </li>
                    </ul>
                </section>

                <section class="mb-4 [&>p]:mb-1.5">
                    <h3 class="text-lg font-bold mb-1">
                        {{ $t('experiences.l10n-tw-2018.title') }}
                    </h3>
                    <p>
                        {{ $t('experiences.l10n-tw-2018.company-description') }}
                    </p>

                    <p>Contributions include:</p>

                    <ul class="list-disc list-inside mb-2 [&>li]:mb-0.5">
                        <li>
                            {{ $t('experiences.l10n-tw-2018.contributions.translation') }}
                        </li>

                        <li>
                            <i18n-t keypath="experiences.l10n-tw-2018.contributions.weblate" tag="span" scope="global">
                                <template #slat>
                                    <a rel="noopener noreferrer" href="https://slat.org.tw/">{{ $t('experiences.l10n-tw-2018.slat') }}</a>
                                </template>
                            </i18n-t>
                        </li>

                        <li>
                            <i18n-t keypath="experiences.l10n-tw-2018.contributions.telegram" tag="span" scope="global">
                                <template #telegram>
                                    <a rel="noopener noreferrer" href="https://t.me/l10n_tw">{{ $t('experiences.l10n-tw-2018.telegram') }}</a>
                                </template>
                            </i18n-t>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    </div>
</template>
