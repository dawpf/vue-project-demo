<template>
  <div class="container_user">
    <h1>{{msg_user}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      msg_user: 'user页面'
    }
  },

  computed: {},
  created() {},
  methods: {}
}
</script>
