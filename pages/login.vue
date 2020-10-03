<template>
  <div>
    <form @submit.prevent>
      <label for="password"></label>
      <input
        id="password"
        v-model="password"
        type="text"
        placeholder="password"
      />
      <input type="submit" value="登入" @click="login(password)" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'login',
  data() {
    return {
      password: ''
    }
  },
  methods: {
    login(password) {
      if (password === 'larrylovesummer') {
        this.$router.push('/new-post')
      } else {
        alert('???not valid')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
}
form {
  input[type='text'] {
    font-size: 16px;
  }
}
</style>
