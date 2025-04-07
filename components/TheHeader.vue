<template>
  <div class="nav">
    <nuxt-link to="/"><h1>拉瑞的技術焦慮</h1></nuxt-link>
    <!-- / -->
    <!-- <nuxt-link to="/blog">文章</nuxt-link>/ -->
    <!-- <nuxt-link to="/about">About</nuxt-link> -->
  </div>
</template>

<style lang="scss" scoped>
h1 {
  display: inline;
  font-size: 2rem;
}
a {
  color: #000;
  text-decoration: none;
}
.nav {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 80px;
  font-size: 1.25rem;
  margin: 0 16px;
  border-radius: 8px;

  a {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
