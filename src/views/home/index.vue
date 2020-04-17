<template>
  <div class="container_home">
    <h1>{{home_msg}}</h1>

    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      home_msg: 'home页面'
    }
  },
  computed: {},
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>