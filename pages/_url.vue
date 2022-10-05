<template>
  <div>
    <Tag :tags="page.tags"></Tag> 
    <h1>{{ page.slug }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    console.log({ $content, params, error })
    const page = await $content('articles')
      .where({ url: params.url })
      .limit(1)
      .fetch()
      .catch((err) => {
        error(err)
      })

    console.log(page)

    return {
      page: page[0],
    }
  },
  head() {
    return {
      title: this.page.slug,
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

<style>
.nuxt-content a {
  color: #1970af;
}
.nuxt-content ul {
  padding-left: 20px;
}
</style>
