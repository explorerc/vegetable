// 直播引导页框架
const GuidLayout = () =>
  import(/* webpackChunkName: "pages_layout" */ 'src/pages/guide/guid-layout')
// 直播引导页（有观看限制）
const SignUp = () =>
  import('src/pages/guide/sign-up')
// 直播引导页首页
const Guid = () =>
  import('src/pages/guide')
// 报名成功页
const Success = () =>
  import('src/pages/guide/success')
// 报名成功页
const CheckState = () =>
  import('src/pages/guide/check-state')
// 报名成功页
const Live = () =>
  import('src/pages/watch/live')
export default [{
  path: '/',
  name: 'Layout',
  component: GuidLayout,
  redirect: '/live',
  children: [{
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/guid',
    name: 'guid',
    component: Guid
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/checkState',
    name: 'checkState',
    component: CheckState
  }
  ]
},
{
  path: '/live',
  name: 'live',
  component: Live
}
]
