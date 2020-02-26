import { lazy } from 'react'
const Home = lazy(() => import('@/views/Home/Index')) // 懒加载import括号里不能用变量
const NoMatch = lazy(() => import('@/views/Home/Index'))

// 路由
const AppRoute = {
  home: {
    path: '/',
    component: Home // ORZ，直接在这里写懒加载会报错，必须用变量存起来
  },
  noMatch: {
    path: '/404',
    component: NoMatch
  }
}
export default AppRoute