<template>
  <div class="tag">
    <NuxtLink
      v-for="(tagName, index) in tags"
      :key="index"
      :to="`/tags/${tagName}`"
    >
      <span>
        {{ tagName }}
        <slot></slot>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.tag {
  margin-top: 5px;
  margin-bottom: 5px;
  span {
    border-radius: 6px;
    background-color: #f4f4f5;
    color: #6d6f73;
    padding: 0.2rem 0.5rem;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #333;
    }
  }
}
</style>
