<template>
  <div class="nav">
    <nuxt-link to="/"><h1>拉瑞的技術焦慮</h1></nuxt-link>/
    <nuxt-link to="/articles">文章</nuxt-link>/
    <nuxt-link to="/about">關於</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  display: inline;
  font-size: 2rem;
}
a {
  color: #000;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  font-size: 1.25rem;
  a {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
