<template>
  <div class="about" id="about">
    <div class="about_top-block">
      <p class="about_top-block_text">
        В нашей студии «Равновесие» мы объединяем традиционные практики йоги с современным подходом к здоровью. Здесь каждый найдёт свой путь к гармонии — от мягких хатха-классов до динамичного аштанга-виньяса флоу.
      </p>
      <div class="about_top-block_gallery">
        <img
          :src="topImage"
          class="about_top-block_gallery-top-image"
        >
      </div>
    </div>
    <div class="about_bottom-block">
      <h3 class="about_bottom-block_motto">
        Йога в «Равновесии» — это принятие себя и радость движения.
      </h3>
    </div>
    <div class="about_bg">
      <img
        class="about_bg-image"
        src="/images/gallery/image4.png"
      >
    </div>
  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";

const images = ref()

onMounted(() => {
  const modules = import.meta.glob('/public/images/gallery/*')

  images.value = Object.keys(modules)
    .map(path => path)
})

const topImage = computed(() => {
  return images.value?.[0] || ''
})

</script>

<style scoped>
.about {
  height: 100vh;
  width: 100%;
  background-color: var(--bg-default);
  padding: 162px 0 0 390px;
  color: var(--font-default);
  position: relative;
}

.about_top-block {
  display: flex;
  justify-content: space-between;
  gap: 101px;
  position: relative;
  z-index: 2;
}

.about_top-block_text {
  background-color: var(--bg-green);
  padding: 43px 46px 43px 46px;
  max-width: 683px;
  text-align: center;
  margin-top: 44px;
  height: fit-content;
  border-radius: 48px;
}

.about_top-block_gallery {
  flex: 1;
  text-align: center;
}

.about_top-block_gallery-top-image {
  max-width: 495px;
  object-fit: cover;
  opacity: 0.8;
}

.about_bottom-block {
  margin-top: 55px;
  text-align: end;
  font-size: 35px;
  width: 100%;
  padding-right: 59px;
}

.about_bottom-block_motto {
  max-width: 950px;
  margin-left: auto;
}

.about_bg {
  opacity: 0.8;
  position: absolute;
  left: -23px;
  bottom: 0;
  z-index: 1;
}

.about_bg-image {
  max-width: 559px;
  object-fit: cover;
}

</style>