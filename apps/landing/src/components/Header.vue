<template>
  <header>
    <div
      v-if="showMenu"
      class="menu"
    >
      <Button
        v-for="btn in menuList"
        :key="btn.id"
        :title="btn.title"
        :isSelected="btn.isSelected"
        type="default"
        @click="scrollToSection(btn.id)"
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

const props = defineProps({
  showMenu: {
    default: false,
    type: Boolean
  },
})

const menuList = ref([
  { id: 'about', title: 'О нас', isSelected: false },
  { id: 'courses', title: 'Курсы', isSelected: false },
  { id: 'masters', title: 'Наши мастера', isSelected: false }
])

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    menuList.value.find(el => el.id === sectionId).isSelected = true
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
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

  .sign-up-btn {
    margin-left: auto;
  }

  @media (max-width: 1000px) {
    header {
      padding: 30px 0;
    }

    .sign-up-btn {
      margin-right: 30px;
    }
  }
</style>