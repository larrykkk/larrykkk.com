<template>
  <div>
    <!-- <button @click="qqq()">123</button> -->
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content('articles', params.slug)
      .fetch()
      .catch(err => {
        error(err)
      })

    return {
      page
    }
  }
}
</script>
