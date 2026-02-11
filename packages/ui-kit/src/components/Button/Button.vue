<template>
  <button
    class="button"
    :class="type"
    @click="buttonClick($event)"
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

const emits = defineEmits(['click'])

function buttonClick(event) {
  emits('click', event)
}
</script>

<style>
.button {
  padding: 12px 44px;
  border-radius: 28px;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  height: 47px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
}

.default {
  background-color: transparent;
  color: var(--bg-green);
}

.default:hover {
  border-color: var(--bg-green);
}

.dark {
  background-color: transparent;
  color: var(--bg-dark);
  border-color: var(--bg-dark);
}

.dark:hover {
  background-color: var(--bg-dark);
  color: var(--bg-green);
}
</style>