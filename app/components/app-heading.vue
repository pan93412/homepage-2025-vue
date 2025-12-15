<script setup lang="ts">
const props = defineProps<{
  id: string;
  text: string;
  level: 2 | 3;
}>();
const context = useTocContext();
const headingRef = ref<HTMLElement>();

// register heading on SSR stage
context.register({
  id: props.id,
  text: props.text,
  level: props.level,
});

watch(headingRef, (headingRef) => {
  if (headingRef) {
    context.updateElement(props.id, headingRef);
  }
}, { immediate: true });

onUnmounted(() => {
  context.unregister(props.id);
});

const Tag = `h${props.level}` as const;
</script>

<template>
  <component :is="Tag" :id="id" ref="headingRef">
    {{ text }}
  </component>
</template>
