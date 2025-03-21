<script setup lang="ts">
import { useRoute, useAsyncData, queryCollection } from '#imports'

const route = useRoute()
const tagName = route.params.tagName as string

const { data: articles } = await useAsyncData(`tag-${tagName}`, async () => {
  const allArticles = await queryCollection('content').all()
  return allArticles.filter(article => article.meta?.tags?.includes(tagName))
})
</script>

<template>
  <TheArticlesList :articles="articles || []" />
</template>