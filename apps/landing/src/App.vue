<template>
  <div class="app">
    <Header
      :showMenu="showHeader"
    />
    <Main />
    <About />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import {computed, ref} from "vue";
import {useWindowWidth} from "@/components";
import About from "@/components/About.vue";

const routeID = ref<string>('main')

const { windowWidth } = useWindowWidth()
const isMobile = () => {
  return windowWidth.value < 1000
}

const showHeader = computed(() => {
  return !isMobile() || isMobile() && routeID.value !== 'main'
})

</script>

<style scoped>

</style>
