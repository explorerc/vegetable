const Layout = () => import('src/pages/layout')
const Home = () => import('src/pages/home/index')
const GoodDetail = () => import('src/pages/good/goodDetail')
const Coupon = () => import('src/pages/home/coupon')
const Record = () => import('src/pages/record/index')
const Cart = () => import('src/pages/cart/index')
const User = () => import('src/pages/user/index')
const Edit = () => import('src/pages/user/edit')
const Kind = () => import('src/pages/kind/kind')
const SearchPage = () => import('src/pages/good/search')
const Pay = () => import('src/pages/cart/pay')
const Book = () => import('src/pages/good/book')

export default [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    // redirect: '/home/index',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/coupon',
        name: 'Coupon',
        component: Coupon
      },
      {
        path: '/record',
        name: 'Record',
        component: Record
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/edit',
        name: 'Edit',
        component: Edit
      },
      {
        path: '/kind',
        name: 'KindIndex',
        component: Kind
      },
      {
        path: '/kind/:id',
        name: 'Kind',
        component: Kind
      },
      {
        path: '/search',
        name: 'SearchPage',
        component: SearchPage
      },
      {
        path: '/pay',
        name: 'Pay',
        component: Pay
      },
      {
        path: '/book',
        name: 'Book',
        component: Book
      },
      {
        path: '/goodDetail/:id',
        name: 'GoodDetail',
        component: GoodDetail
      }
    ]
  }
]
