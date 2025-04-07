<script setup lang="ts">
const { data: articles } = await useAsyncData(() => queryCollection('content').all())

articles.value = articles.value?.sort((a: any, b: any) => {
  const dateA = new Date(a.meta?.createdAt || 0).getTime()
  const dateB = new Date(b.meta?.createdAt || 0).getTime()
  return dateB - dateA  // 較新的日期（較大的時間戳）會排在前面
})
// console.log(articles.value)
</script>

<template>
  <div class="container">
    <div class="about-container">
      <About class="container-block"></About>
    </div>
    <TheArticlesList :articles="articles" id="articles-list" class="container-block" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 12px;
}

.container > div {
  margin: 8px 6px;
  border-radius: 8px;
}

.about-container {
  max-width: 300px;
  min-height: 300px;
}

.container-block {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 8px 16px;
  -webkit-box-shadow: 8px 10px 5px -8px rgba(199,199,199,1);
-moz-box-shadow: 8px 10px 5px -8px rgba(199,199,199,1);
box-shadow: 8px 10px 5px -8px rgba(199,199,199,1);
}

#articles-list {
  flex: 1;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;  /* 改為垂直排列 */
  }

  .about-container, #articles-list {
    max-width: 100%;
  }
}

</style>