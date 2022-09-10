<template>
  <div>
    <h2>標籤列表</h2>
    <div class="tags">
      <Tag
        class="tags"
        v-for="([tag, count], key) in tags"
        :key="key"
        :tags="[tag]"
        @click="filterTag(tag)"
      >
        {{ `(${count})` }}
      </Tag>
    </div>
    <h2>文章列表</h2>
    <li class="articles" v-for="article in articles.filter((x) => !x.draft)" :key="article.title">
      <nuxt-link :to="pathPaser(article)"
        ><h3 style="display: inline">{{ article.title }}</h3>
      </nuxt-link>
      <!-- <span class="date">{{ article.date.slice(0, 10) }}</span> -->
    </li>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('date', 'desc').fetch()
    const payload = await $content('articles').only(['tags']).fetch()
    const array = payload.reduce((prev, element) => {
      return prev.concat(element.tags)
    }, [])
    let tags = {}
    array.forEach((x) => {
      if (!tags[x]) {
        tags[x] = 1
      } else {
        tags[x]++
      }
    })
    tags = Object.entries(tags).sort((a, b) => b[1] - a[1])

    return {
      articles,
      tags,
    }
  },
  methods: {
    async filterTag(tagName) {
      // const res = await this.$content('articles')
      //   .where({ tags: { $contains: tagName } })
      //   .fetch()
      this.$router.push({ name: 'tags-tagName', params: { tagName } })
    },
    pathPaser({ slug }) {
      return slug
    },
  },
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
}

.articles {
  h3 {
    font-size: 1.25rem;
  }
  .date {
    margin-right: 10px;
    color: rgba(117, 117, 117, 1);
  }
}
</style>
