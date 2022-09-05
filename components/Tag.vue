<template>
  <div class="tag">
    <nuxt-link
      v-for="(tagName, index) in tags"
      :key="index"
      :to="{ name: 'tags-tagName', params: { tagName } }"
    >
      <span
        >{{ tagName }}
        <slot></slot>
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style lang="scss" scoped>
.tag {
  span {
    border-radius: 6px;
    background-color: #f4f4f5;
    color: #6d6f73;
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
