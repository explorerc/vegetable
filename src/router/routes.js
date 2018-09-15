// 直播引导页框架
const GuidLayout = () =>
  import(/* webpackChunkName: "pages_layout" */ 'src/pages/guide/guid-layout')
// 直播引导页（有观看限制）
const SignUp = () => import('src/pages/guide/sign-up')
// 直播引导页首页
const Guid = () => import('src/pages/guide')
// 报名成功页
const Success = () => import('src/pages/guide/success')
// 报名成功页
const CheckState = () => import('src/pages/guide/check-state')
// 直播页面
const Live = () => import('src/pages/watch/live')
// 直播页面
const Playback = () => import('src/pages/watch/playback')
const Test = () => import('src/pages/test-login')
export default [
  {
    path: '/',
    name: 'Layout',
    component: GuidLayout,
    redirect: '/live',
    children: [
      {
        path: '/signUp/:id',
        name: 'signUp',
        component: SignUp
      },
      {
        path: '/guid/:id',
        name: 'guid',
        component: Guid
      },
      {
        path: '/success/:id',
        name: 'success',
        component: Success
      },
      {
        path: '/checkState/:id',
        name: 'checkState',
        component: CheckState
      }
    ]
  },
  {
    path: '/live/:id',
    name: 'live',
    component: Live
  },
  {
    path: '/playback/:id',
    name: 'playback',
    component: Playback
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]
