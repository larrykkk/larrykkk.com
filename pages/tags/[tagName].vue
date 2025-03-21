<script setup lang="ts">
import { useRoute, useAsyncData, queryCollection } from '#imports'

const route = useRoute()
const tagName = route.params.tagName as string

const { data: articles } = await useAsyncData(`tag-${tagName}`, async () => {
  const allArticles = await queryCollection('content').all()
  return allArticles.filter(article => article.meta?.tags?.includes(tagName))
})

console.log('Found articles:', articles.value)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">標籤: {{ tagName }}</h1>
    <TheArticlesList :articles="articles || []" />
  </div>
</template>