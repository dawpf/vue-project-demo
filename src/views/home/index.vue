<template>
  <div class="container_home">
    <h1>{{home_msg}}</h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>
      <button class="home_btn bd" @click="home_btn_click">跳转到news页面</button>
    </div>

    <button @click="btnClick">按钮</button>
  </div>
</template>


<script>
import { getMockData_home } from '@/api/home.js'

import { setToken } from '@/utils/auth'

export default {
  data() {
    return {
      home_msg: 'home页面的数据'
    }
  },
  created() {
    setToken('1111')
  },
  methods: {
    home_btn_click() {
      this.$router.push('/news')
    },
    async btnClick() {
      try {
        let res = await getMockData_home() // 请求数据
        console.log('请求回来的数据:', res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>