import Vue from "vue";
import VueRouter from "vue-router";

import NewsRoute from "./modules/news"
import UserRoute from "./modules/user"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/404/index.vue')
  },
  NewsRoute, UserRoute,
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 添加路由守卫
// router.beforeEach((to, from, next) => {
//   // 可以添加登录前的导航守卫

//   console.log('to:', to);
//   console.log('from:', from);
//   next()
// })

export default router;
