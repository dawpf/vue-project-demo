<template>
  <div class="container_news">
    <h1>{{msg_news}}</h1>

    <div>
      <button class="bd" @click="news_btn_click">跳转到user页面</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg_news: 'news页面'
    }
  },
  methods: {
    news_btn_click() {
      // 跳转到 user 页面
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="less" scoped>
</style>