<template>
  <div>
    <Tag :tags="page.tags"></Tag>
    <h1>{{ page.slug }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'article',
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
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.slug,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.keywords,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            this.page.image ||
            `https://ogi.sh/wCmks9_sN?title=${this.page.slug}&subtitle=${this.page.sbutitle || ''}&bg=4&time=${this.page.time || ''}`,
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
.nuxt-content-container img {
  width: 100%;
}
</style>
