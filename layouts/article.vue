<template>
  <div class="wrapper">
    <TheHeader class="header" />
    <NuxtPage class="nuxt" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 820px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nuxt {
  flex: 1;
}
</style>
