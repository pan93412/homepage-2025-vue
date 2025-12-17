<script setup lang="ts">
interface Slide {
  conferenceName: string;
  slideTitle: string;
  links: { name: string; url: string }[];
}

const slides: Slide[] = [
  {
    conferenceName: "MOPCON 2025",
    slideTitle: "帳號驗證機制怎麼噴掉 5 萬元 (Lightning Talk)",
    links: [
      {
        name: $t("slides.slide"),
        url: "https://link.pan93.com/mopcon-2025-lightning-talk",
      },
    ],
  },
  {
    conferenceName: "Cursor Meetup Taipei (June 2025)",
    slideTitle: "Vibe in the efficient way",
    links: [
      {
        name: $t("slides.slide"),
        url: "https://link.pan93.com/cursor-meetup-202506-slide",
      },
    ],
  },
  {
    conferenceName: "SITCON 2025",
    slideTitle: "選課卡成狗？微服務架構帶你翻轉校園系統",
    links: [
      {
        name: $t("slides.slide"),
        url: "https://link.pan93.com/sitcon2025-ppt",
      },
      { name: "SITCON", url: "https://sitcon.org/2025/agenda/a03517/" },
      {
        name: $t("slides.article"),
        url: "https://blog.pan93.com/tags/sitcon-2025/",
      },
    ],
  },
  {
    conferenceName: "MOPCON 2024",
    slideTitle: "導入可監控性：OpenTelemetry 實踐和 Request ID 實作",
    links: [
      {
        name: $t("slides.slide"),
        url: "https://link.pan93.com/mopcon2024-ppt",
      },
      { name: "MOPCON", url: "https://mopcon.org/2024/speaker/?id=2024010" },
    ],
  },
  {
    conferenceName: "PyCon 2024",
    slideTitle: "如何將 Python 程式碼的環境遷移到其他地方？",
    links: [
      {
        name: $t("slides.article"),
        url: "https://blog.pan93.com/posts/move-venv-to-other-machines/",
      },
      { name: $t("slides.slide"), url: "https://link.pan93.com/pycon2024-ppt" },
      {
        name: "PyCon",
        url: "https://tw.pycon.org/2024/zh-hant/conference/talk/319",
      },
    ],
  },
  {
    conferenceName: "DevFest 2022",
    slideTitle: "透過重構實戰，探索 Web App DX 和 UX 的最佳做法",
    links: [
      {
        name: $t("slides.slide"),
        url: "https://1drv.ms/b/s!AiC-9Gl0ltrahdo4tp-3GQz7FFiYxw?e=xM4dXd",
      },
      {
        name: "GDG",
        url:
          "https://gdg.community.dev/events/details/google-gdg-kaohsiung-presents-devfest-kaohsiung-tainan-2022/",
      },
    ],
  },
  {
    conferenceName: "MOPCON 2021",
    slideTitle: "應到未到，一看就知道！",
    links: [
      { name: $t("slides.slide"), url: "https://imych.one/mopcon2021p" },
      { name: "MOPCON", url: "https://mopcon.org/2021/schedule/2021039" },
    ],
  },
];
</script>

<template>
  <AppArticleBlock>
    <AppHeading
      id="slides"
      class="mb-2 scroll-mt-4 text-xl font-bold"
      :level="2"
      :text="$t('slides.title')"
    />

    <ul
      class="
        mb-2 list-inside list-disc
        [&>li]:mb-0.5
      "
    >
      <AppDescriptionList v-for="slide in slides" :key="slide.conferenceName">
        <template #title>
          {{ slide.conferenceName }}
        </template>
        <template #description>
          {{ slide.slideTitle }}<AppInlineLinks :links="slide.links" />
        </template>
      </AppDescriptionList>
    </ul>
  </AppArticleBlock>
</template>
