/* 定义消息类型 */
export default {
  GET_CART_INFO: '/cart/info', // 根据用户ID查询购物车中的信息
  GET_CART_MINNUM: '/cart/minNum', // 减少购物车中的商品数量
  GET_CART_ADDNUM: '/cart/addNum', // 增加购物车中的商品数量
  GET_CART_ADD: '/cart/add', // 新增购物车记录
  GET_CART_DEL: '/cart/delete' // 删除购物车记录
}
