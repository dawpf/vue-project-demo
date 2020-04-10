// news 页面路由

const NewsRoute = {
  path: "/news",
  name: "News",
  component: () => import('@/views/news/index.vue')
}

export default NewsRoute