<script setup lang="ts">
const { data: articles } = await useAsyncData(() => queryCollection('content').all())

articles.value = articles.value?.sort((a: any, b: any) => {
  const dateA = new Date(a.meta?.createdAt || 0).getTime()
  const dateB = new Date(b.meta?.createdAt || 0).getTime()
  return dateB - dateA  // 較新的日期（較大的時間戳）會排在前面
})
</script>

<template>
  <TheArticlesList :articles="articles" />
</template>
