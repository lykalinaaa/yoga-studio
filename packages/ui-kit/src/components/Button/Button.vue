<template>
  <button
    class="button"
    :class="type"
  >
    {{title}}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    default: 'default',
    type: String
  },
  title: {
    default: 'Кнопка',
    type: String
  }
})

  defineEmits<{
    click: [event: MouseEvent]
  }>()
</script>

<style>
.button {
  padding: 12px 44px 12px 44px;
  border-radius: 28px;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.default {
  border: 1px solid var(--bg-green);
}

.secondary {
  background-color: #f3f4f6;
  color: #374151;
}
</style>