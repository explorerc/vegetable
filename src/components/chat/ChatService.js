const msgHandler = Symbol('msgHandler')
const dispatchHandler = Symbol('dispatchHandler')
/**
 *
 *
 * @export
 * @class ChatService
 * @author zhenliang.sun
 */
export default class ChatService {
  constructor () {
    if (this._instance) {
      throw new Error('ChatService is singlton')
    }
    this._instance = this
    this._activityId = ''
    this.handlerMap = {}
  }

  static get OBJ () {
    if (!this._instance) {
      this._instance = new ChatService()
    }

    return this._instance
  }

  init (opts) {
    if (this.service || window.vhallChat) {
      return
    }

    window.Vhall.ready(() => {
      this.service = VhallChat({
        channelId: opts.channelId
      })
      window.vhallChat = this.service
      this[msgHandler]()
    })
    window.Vhall.config({
      appId: opts.appId,
      accountId: opts.accountId,
      token: opts.token
    })
    // debugger
    console.log(JSON.stringify(opts))
  }

  set activityId (val) {
    this._activityId = val
  }

  get activityId () {
    return this._activityId
  }

  sendChat (msg) {
    this.service.emit(msg)
  }

  sendCustomMsg (type, msg) {
    this.service.emitCustomMsg({
      type: type,
      body: msg
    })
  }

  [msgHandler] () {
    window.vhallChat.join(msg => {
      this[dispatchHandler]('Join', msg)
    })

    window.vhallChat.leave(msg => {
      this[dispatchHandler]('Leave', msg)
    })

    window.vhallChat.onCustomMsg(res => {
      let {
        type,
        body
      } = JSON.parse(res)
      this[dispatchHandler](type, body)
    })

    window.vhallChat.on(res => {
      this[dispatchHandler]('chat', res)
    })
  }

  /**
   *
   *
   * @param {*} type
   * @param {*} handler
   * @memberof ChatService
   */
  regHandler (type, handler) {
    if (!this.handlerMap[type]) {
      this.handlerMap[type] = []
    }

    let innerHandlers = this.handlerMap[type]
    if (innerHandlers.includes(handler)) {
      console.log('重复注册消息')
      return
    }

    innerHandlers.push(handler)
  }

  /**
   *
   *
   * @param {*} type
   * @param {*} handler
   * @memberof ChatService
   */
  unregHandler (type, handler) {
    if (!this.handlerMap[type]) {
      return
    }

    let innerHandlers = this.handlerMap[type]
    let existIdx = innerHandlers.indexOf(handler)
    if (existIdx === -1) {
      return
    }

    innerHandlers.splice(existIdx, 1)
  }

  [dispatchHandler] (type, body) {
    let handlers = this.handlerMap[type]
    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(handler => {
      handler(body)
    })
  }
}
