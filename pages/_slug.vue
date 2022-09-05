<template>
  <div>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content('articles', params.slug)
      .fetch()
      .catch((err) => {
        error(err)
      })

    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>
