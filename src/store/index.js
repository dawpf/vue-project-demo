import Vue from "vue";
import Vuex from "vuex";

// 导入模块
import user from "./modules/user"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    home: 'zhangsan '
  },
  mutations: {
    setUser_mua(state, val) {
      state.home = val
    }
  },
  actions: {
    setUser_act(connect, val) {
      connect.dispatch('setUser_mua', val)
    }
  },
  modules: {
    user
  }
});
