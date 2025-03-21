<script setup lang="ts">
import { useRoute, useAsyncData, queryCollection, useSeoMeta } from '#imports'
const url = useRoute().params.url

const { data: page } = await useAsyncData(() => 
  queryCollection('content')
    .all()
    .then(articles => articles.find(article => article.meta?.url === url))
)

// SEO
useSeoMeta({
  title: () => page.value?.title || '',
  ogTitle: () => page.value?.title || '',
  keywords: () => page.value?.keywords || '',
  description: () => page.value?.description || '',
  ogDescription: () => page.value?.description || '',
  ogImage: () => page.value?.image || 
    `https://ogi.sh/wCmks9_sN?title=${page.value?.title || ''}&subtitle=${page.value?.subtitle || ''}&bg=4&time=${page.value?.time || ''}`
})

definePageMeta({
  layout: 'article'
})
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <Tag v-if="page.meta?.tags" :tags="page.meta?.tags" />
    <p class="text-gray-500 mb-4">發布日期：{{ new Date(page.meta?.createdAt).toLocaleDateString('zh-TW') }}</p>
    <ContentRenderer :value="page" />
  </div>
</template>

<style>
.nuxt-content a {
  color: #1970af;
}
.nuxt-content ul {
  padding-left: 20px;
}
.nuxt-content-container img {
  width: 100%;
}
</style>
