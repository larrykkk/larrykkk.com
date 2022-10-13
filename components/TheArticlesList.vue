<template>
  <div>
    <h1 v-if="$route.name === 'tags-tagName'">{{ $route.params.tagName }}</h1>
    <li
      v-for="article in articles.filter((x) => !x.draft)"
      :key="article.slug"
      class="item"
    >
      <div class="post-date">
        {{
          article.createdAt
            ? article.createdAt.slice(0, 10)
            : new Date().toLocaleString()
        }}
      </div>

      <nuxt-link :to="pathPaser(article)">
        <h2>{{ article.title || article.slug }}</h2>
      </nuxt-link>

      <nuxt-link :to="pathPaser(article)">
        <div style="margin-top: 15px; margin-bottom: 15px">
          {{ article.description }}
        </div>
      </nuxt-link>

      <Tag :tags="article.tags"></Tag>
    </li>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {
    pathPaser({ slug, url }) {
      return '/' + (url || slug)
    },
  },
}
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
