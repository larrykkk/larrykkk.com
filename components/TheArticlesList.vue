<template>
  <div>
    <li
      v-for="article in articles"
      :key="article.slug"
      class="item"
    >
      <div class="post-date">
        {{
          article.meta?.createdAt
            ? new Date(article.meta.createdAt).toLocaleDateString('zh-TW')
            : new Date().toLocaleDateString('zh-TW')
        }}
      </div>

      <NuxtLink :to="article.meta?.url || ''">
        <h2>{{ article.title || article.slug }}</h2>
      </NuxtLink>

      <NuxtLink :to="article.meta?.url || ''">
        <div style="margin-top: 15px; margin-bottom: 15px">
          {{ article.description }}
        </div>
      </NuxtLink>

      <Tag :tags="article.meta?.tags || []"></Tag>
    </li>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'

const route = useRoute()
const props = defineProps<{
  articles: any[]
}>()
</script>

<style lang="scss" scoped>
:deep(li) {
  list-style-type: none;
}
:deep(a) {
  color: #000;
}
h2 {
  margin-top: 5px;
}
.post-date {
  font-size: 1rem;
  color: #757575;
}
.item {
  padding: 20px 0px;
  + .item {
    padding-top: 20px;
  }
  a {
    overflow-wrap: anywhere;
  }
  border-bottom: 1px solid #e8e8e8;
  p {
    color: #515151;
    font-weight: 700;
  }
}
</style>
