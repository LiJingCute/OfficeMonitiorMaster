import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/home'),
        name: 'home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/monitors',
    component: Layout,
    redirect: '/monitors/realTimeMonitors',
    alwaysShow: true, // will always show the root menu
    name: 'monitors',
    meta: {
      title: '设备监控',
      icon: 'lock'
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'realTimeMonitors',
        component: () => import('@/views/monitors/realTimeMonitors'),
        name: 'realTimeMonitors',
        meta: {
          title: '实时信息'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'historyMonitor',
        component: () => import('@/views/monitors/historyMonitor'),
        name: 'historyMonitor',
        meta: {
          title: '历史信息'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/weMessage',
    component: Layout,
    redirect: '/weMessage/electricity',
    alwaysShow: true, // will always show the root menu
    name: 'weMessage',
    meta: {
      title: '信息查询',
      icon: 'lock'
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'electricity',
        component: () => import('@/views/weMessage/electricity'),
        name: 'electricity',
        meta: {
          title: '电表信息'

        }
      },
      {
        path: 'water',
        component: () => import('@/views/weMessage/water'),
        name: 'water',
        meta: {
          title: '水表信息'

        }
      }
    ]
  },
  {
    path: '/warning',
    component: Layout,
    redirect: '/warning/warn',
    name: 'warning',
    children: [
      {
        path: 'warn',
        component: () => import('@/views/warning/warn'),
        name: 'warn',
        meta: {
          title: '信息预警',
          icon: 'lock'
        }
      },
    ]

  },
  {
    path: '/device',
    component: Layout,
    redirect: '/device/deviceService',
    name: 'deviceService',
    children: [
      {
        path: 'deviceService',
        component: () => import('@/views/device/deviceService'),
        name: 'deviceService',
        meta: {
          title: '设备信息',
          icon: 'lock'
        }
      },
    ]

  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
