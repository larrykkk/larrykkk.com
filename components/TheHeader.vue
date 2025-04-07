<script setup lang="ts">
// const toggleLanguage = () => {
//   console.log('toggleLanguage')
// }
</script>

<template>
  <div class="nav">
    <div>
      <h1>拉瑞的技術焦慮</h1>
    </div>

    <div>
      <nuxt-link to="/">首頁</nuxt-link>
      <!-- <nuxt-link to="/en" @click="toggleLanguage">English</nuxt-link> -->
    </div>
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
  color: #2F2F2F;
  text-decoration: none;
}
.nav {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  margin: 18px;
  margin-bottom: 0px;
  border-radius: 8px;
  -webkit-box-shadow: 8px 10px 5px -8px rgba(199,199,199,1);
  -moz-box-shadow: 8px 10px 5px -8px rgba(199,199,199,1);
  box-shadow: 8px 10px 5px -8px rgba(199,199,199,1);
  padding: 8px;

  a {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
