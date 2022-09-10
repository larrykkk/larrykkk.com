<template>
  <TheArticlesList :articles="articles"></TheArticlesList>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('date', 'desc').fetch()
    console.log(articles)
    return {
      articles,
    }
  }
}
</script>
