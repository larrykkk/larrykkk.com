<template>
  <div>
    <h1>標籤列表</h1>
    <span
      v-for="([tag, count], key) in tags"
      :key="key"
      class="tags"
      @click="filterTag(tag)"
    >
      {{ tag }} ({{ count }})
    </span>
  </div>
</template>

<script>
export default {
  layout: 'tags',
  async asyncData({ $content }) {
    const payload = await $content('articles')
      .only(['tags'])
      .fetch()
    const array = payload.reduce((prev, element) => {
      return prev.concat(element.tags)
    }, [])
    let tags = {}
    array.forEach(x => {
      if (!tags[x]) {
        tags[x] = 1
      } else {
        tags[x]++
      }
    })
    tags = Object.entries(tags).sort((a, b) => b[1] - a[1])

    return {
      tags
    }
  },
  methods: {
    async filterTag(tagName) {
      const res = await this.$content('articles')
        .where({ tags: { $contains: tagName } })
        .fetch()
      this.$router.push({ name: 'tags-tagName', params: { tagName } })
    }
  }
}
</script>

<style lang="scss">
.tags {
  display: inline-block;
  word-break: break-all;
  margin-bottom: 10px;
}
</style>
