<template>
  <li>
    <strong><slot name="title" /></strong>{{
      $t("description-list.colon")
    }}<slot name="description" />
  </li>
</template>
