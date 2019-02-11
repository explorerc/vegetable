/* 定义消息类型 */
export default {
  GET_CART_INFO: 'api/cart/info', // 根据用户ID查询购物车中的信息
  GET_CART_MINNUM: 'api/cart/minNum', // 减少购物车中的商品数量
  GET_CART_ADDNUM: 'api/cart/addNum', // 增加购物车中的商品数量
  GET_CART_ADD: 'api/cart/add', // 新增购物车记录
  GET_CART_DEL: 'api/cart/delete' // 删除购物车记录
}
