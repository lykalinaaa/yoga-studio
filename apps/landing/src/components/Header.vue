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
    <div class="sign-up-btn">
      <Button
        title="Записаться"
        type="dark"
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

<style>
  header {
    width: 100%;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding: 30px 59px;
  }

  .menu {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 39px;
  }
</style>