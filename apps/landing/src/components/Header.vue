<template>
  <header>
    <div class="menu">
      <Button
        v-for="btn in menuList"
        :key="btn.id"
        :title="btn.title"
        type="default"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import {Button} from "@yoga/ui-kit/src/components";

const menuList = ref([
  { id: 'about', title: 'О нас' },
  { id: 'courses', title: 'Курсы' },
  { id: 'masters', title: 'Наши мастера' }
])
</script>