<template>
  <div>
    <nuxt-link to="/" class="index"><h1>拉瑞的技術焦慮</h1></nuxt-link>
    <div class="nav">
      <nuxt-link to="/" class="index">文章</nuxt-link>
      <nuxt-link to="/about" class="index">關於</nuxt-link>
    </div>
    <!-- <div>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #000;
}
.nav {
  a {
    width: 50%;
  }
}
</style>
