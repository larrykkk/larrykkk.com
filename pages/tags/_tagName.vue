<template>
  <TheArticlesList :articles="articles"></TheArticlesList>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    const articles = await $content('articles')
      .where({ tags: { $contains: params.tagName } })
      .fetch()
    return {
      articles
    }
  },
  methods: {
    pathPaser({ slug, url }) {
      return '/' + (url || slug)
    }
  }
}
</script>
