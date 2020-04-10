<template>
  <div class="container_user">
    <h1>{{msg_user}}</h1>

    <div>
      <button class="bd" @click="user_btn_click('user1')">点击加载user1</button>
      <button class="bd ml15" @click="user_btn_click('user2')">点击加载user2</button>
    </div>

    <div>
      <router-view></router-view>
    </div>

    <div>
      <button class="bd" @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg_user: 'user页面的首页',
      routePath: ''
    }
  },
  created() {
    this.routePath = this.$route.path
  },
  methods: {
    user_btn_click(val) {
      let goRoute = '/user'
      if (val === 'user1') {
        if (this.routePath === '/user') {
          return
        }
        goRoute = '/user'
      } else {
        if (this.routePath === '/user/user2') {
          return
        }
        goRoute = '/user/user2'
      }
      this.$router.push(goRoute)
      this.routePath = goRoute
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>
