// user 页面路由

const UserRoute = {
  path: "/user",
  name: "User",
  component: () => import('@/views/user/index.vue'),
  children: [
    {
      path: "",
      name: "User1",
      component: () => import('@/views/user/components/user1.vue'),
    },
    {
      path: "user2",
      name: "User2",
      component: () => import('@/views/user/components/user2.vue'),
    }
  ]
}

export default UserRoute