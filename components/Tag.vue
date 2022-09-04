<template>
  <div class="tag">
    <span v-for="(item, index) in tags" :key="index" @click="filterTag(item)"
      >{{ item }}
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  methods: {
    async filterTag(tagName) {
      // const res = await this.$content('articles')
      //   .where({ tags: { $contains: tagName } })
      //   .fetch()
      this.$router.push({ name: 'tags-tagName', params: { tagName } })
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  span {
    border-radius: 6px;
    background-color: #f4f4f5;
    color: #909399;
    padding: 0.2rem 0.5rem;
    margin-bottom: 10px;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #333;
    }
  }
}
</style>
