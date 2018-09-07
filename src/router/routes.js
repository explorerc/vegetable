const GuidLayout = () =>
  import(/* webpackChunkName: "pages_layout" */ 'src/pages/guide/guid-layout')
const SignUp = () =>
  import('src/pages/guide/sign-up')
const Guid = () =>
  import('src/pages/guide')
export default [{
  path: '/',
  name: 'Layout',
  component: GuidLayout,
  redirect: 'setAccount',
  children: [{
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/guid',
    name: 'guid',
    component: Guid
  }
  ]
}]
