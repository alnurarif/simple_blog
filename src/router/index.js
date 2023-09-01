import { createRouter, createWebHistory } from 'vue-router'
// import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import CategoryPosts from '../views/CategoryPosts.vue'
import SingleBlog from '../views/SingleBlog.vue'
// import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:category_id',
      name: 'category_post',
      component: CategoryPosts,
      meta: {
        watchParam: 'category_id' //
      }
    },
    {
      path: '/blog/:blog_id',
      name: 'blog_post',
      component: SingleBlog,
      meta: {
        watchParam: 'blog_id' //
      }
    }
  ]
})

export default router