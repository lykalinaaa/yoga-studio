<template>
  <div class="main">
    <div class="main_title">
      <h1>Равновесие</h1>
      <h2>Студия йоги</h2>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  background-image: url("/images/main-bg.jpg");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_title {
  margin-top: 17vh;
  text-align: center;
  color: var(--font-white);
}

h1 {
  font-size: 128px;
}

h2 {
  font-size: 48px;
  margin-top: -10px;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 32px;
  }

  .main_title {
    text-align: end;
    margin-top: 1vh;
    margin-right: 15px;
  }

  .main {
    background-position: 63% center;
    justify-content: end;
  }
}
</style>