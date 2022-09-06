<template>
  <div>
    <nuxt-link to="/"><h1>拉瑞的技術焦慮</h1></nuxt-link>
    <div class="nav">
      <!-- <nuxt-link to="/">首頁</nuxt-link> -->
      <nuxt-link to="/articles">文章/分類</nuxt-link>
      <nuxt-link to="/about">關於我</nuxt-link>
      <!-- <nuxt-link to="/tags">標籤</nuxt-link> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #000;
}
.nav {
  font-size: 1.25rem;
  a {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
