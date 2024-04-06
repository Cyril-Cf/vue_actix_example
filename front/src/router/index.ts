import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PermissionListView from '@/views/PermissionListView.vue'
import PermissionCreateView from '@/views/PermissionCreateView.vue'
import UserListView from '@/views/UserListView.vue'
import UserCreateView from '@/views/UserCreateView.vue'
import UserModifyview from '@/views/UserModifyView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/permissions',
      name: 'permissions',
      component: PermissionListView
    },
    {
      path: '/permission-new',
      name: 'permission-new',
      component: PermissionCreateView
    },
    {
      path: '/users',
      name: 'users',
      component: UserListView
    },
    {
      path: '/user-new',
      name: 'user-new',
      component: UserCreateView
    },
    {
      path: '/user/:id',
      name: 'user-modify',
      component: UserModifyview
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFoundView },
  ]
})

export default router
