// 直播引导页框架
const GuidLayout = () =>
  import(/* webpackChunkName: "pages_layout" */ 'src/pages/guide/guide-layout')
// 直播引导页（有观看限制）
const SignUp = () =>
  import('src/pages/guide/sign-up')
// // 直播引导页首页
const Subscribe = () =>
  import('src/pages/guide/index')
// // 直播引导页首页
const Guide = () =>
  import('src/pages/guide/index')
// 报名成功页
const Success = () =>
  import('src/pages/guide/success')
// 报名成功页
const CheckState = () =>
  import('src/pages/guide/check-state')
// 观看页面
const Watch = () =>
  import('src/pages/watch/watch')
// // 直播页面
// const Live = () =>
//   import('src/pages/watch/live')
// // 回放页面
// const Playback = () =>
//   import('src/pages/watch/playback')
const Test = () =>
  import('src/pages/test-login')
// 活动官网
const SiteTemplate = () =>
  import('src/pages/site/template.vue')
const kicked = () =>
  import('src/pages/watch/kicked')
const userInfo = () =>
  import('src/pages/user/info')

export default [{
  path: '/',
  name: 'Layout',
  component: GuidLayout,
  children: [{
    path: '/signUp/:id',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/subscribe/:id',
    name: 'subscribe',
    component: Subscribe
  },
  {
    path: '/guide/:id',
    name: 'guide',
    component: Guide
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
}, {
  path: '/site/:id',
  name: 'SiteTemplate',
  component: SiteTemplate
}, {
  path: '/sitePreview/:id',
  name: 'SiteTemplate',
  component: SiteTemplate
},
{
  path: '/watch/:id',
  name: 'watch',
  component: Watch
},
// {
//   path: '/live/:id',
//   name: 'live',
//   component: Live
// },
// {
//   path: '/playback/:id',
//   name: 'playback',
//   component: Playback
// },
{
  path: '/test',
  name: 'Test',
  component: Test
},
{
  path: '/kicked',
  name: 'kicked',
  component: kicked
},
{
  path: '/userInfo',
  name: 'userInfo',
  component: userInfo
}
]
