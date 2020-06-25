<template>
  <div class="wrapper">
    <TheHeader class="header"></TheHeader>
    <nuxt class="tags" />
    <TheFooter class="footer"></TheFooter>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: 'Microsoft JhengHei', 'PT Sans', Helvetica, Arial, sans-serif;
  font-size: 16px;
}
body {
  margin: 0px;
}
ul {
  padding: 0px;
}
.wrapper {
  max-width: 600px;
  /* padding: 20px; */
  /* padding-left: 1rem;
  padding-right: 1rem; */
  margin: 0 auto;
  display: flex;
  /* flex-direction: column; */
  min-height: calc(100vh - 10px);
}
.header {
  text-align: center;
  padding: 1rem;
}
.tags {
  /* display: flex; */
  flex-direction: column;
  flex: 1 0 auto;
  padding: 1rem;
}
.footer {
  text-align: center;
  padding: 1rem;
}
a {
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
}
</style>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #3c4044;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
