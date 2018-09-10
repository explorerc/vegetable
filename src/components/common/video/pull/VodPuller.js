import BasePuller from './BasePuller'

export default class VodPuller extends BasePuller {
  constructor () {
    super()
    this.type = 'VodPuller'
  }

  get duration () {
    return this.player.getDuration() || 0
  }

  get currentTime () {
    return this.player.getCurrentTime() || 0
  }

  seek (val) {
    this.player.seek(val)
  }
}
