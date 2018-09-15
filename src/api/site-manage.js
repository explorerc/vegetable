import utils from 'src/utils'

const Site = {
  getSiteData (data) {
    return utils.ajax({
      url: '/frontend/live/template',
      params: data
    })
  }
}
export default Site
