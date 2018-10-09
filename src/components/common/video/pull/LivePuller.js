import BasePuller from './BasePuller'

/**
 *
 * 普通观看  非互动的时候用的播放器
 * @export
 * @class LivePuller
 */
export default class LivePuller extends BasePuller {
  constructor (appId, roomId, rootEleId, token) {
    super(appId, rootEleId, token)
    this.type = 'live'
    this.roomId = roomId
  }

  initLivePlayer (autoplay = false, isAndroid = false, completionBK = null) {
    alert(isAndroid)
    // let VhallSDK = window.Vhall
    // let VhallPlayer = window.VhallPlayer
    console.log('1调用初始化拉流器')
    window.Vhall.ready(() => {
      console.log('2SDK初始化完成')
      window.VhallPlayer.init({
        roomId: this.roomId,
        type: 'live',
        videoNode: this.rootEleId,
        complete: () => {
          console.log('3播放器初始化完成')
          completionBK && completionBK()
          if (autoplay) {
            window.VhallPlayer.play()
          }
        }
      })

      this.player = window.VhallPlayer
    })
  }

  set accountId (val) {
    super.accoundId = val

    console.log('aaa', this.appId, this.roomId, this.rootEleId, this.token)
    window.Vhall.config({
      appId: this.appId,
      accountId: val,
      token: this.token
    })
  }
}
