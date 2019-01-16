const Layout = () => import('src/pages/layout')
const Home = () => import('src/pages/home/index')

export default [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    // redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'Home',
        component: Home
      }
    ]
  }
]
