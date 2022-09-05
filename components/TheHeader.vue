<template>
  <div>
    <nuxt-link to="/" class="index"><h1>拉瑞的技術焦慮</h1></nuxt-link>
    <div class="nav">
      <nuxt-link to="/" class="index">文章</nuxt-link>
      <nuxt-link to="/about" class="index">關於</nuxt-link>
      <nuxt-link to="/tags" class="index">標籤</nuxt-link>
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
