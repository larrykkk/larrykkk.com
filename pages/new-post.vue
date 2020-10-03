<template>
  <div>
    <div>
      <label for="title">標題</label>
      <input v-model="filename" type="text" name="" id="title" />
    </div>
    <br />
    <div>
      <label for="content">內文</label>
      <textarea
        v-model="content"
        name=""
        id="content"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div>
      <input
        type="submit"
        value="上傳"
        @click="upload({ filename, content })"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'new-post',
  data() {
    return {
      filename: '',
      content: ''
    }
  },
  methods: {
    upload({ filename, content }) {
      axios.post('/api/article-upload', { filename, content })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
}
label {
  margin-right: 10px;
}
</style>
