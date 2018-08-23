import axios from 'axios'
import qs from 'qs'
import {
  Loading
} from 'components/common/loading'
import {
  MessageBox
} from 'components/common/message-box'

const BASE_URL = process.env.API_PATH

const defaultOptions = {
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
}

axios.interceptors.request.use(
  config => {
    if (config.params.__loading) {
      Loading(true)
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.params)
      delete config.params
    }

    // jwt
    // config.headers.Authorization = localStorage.token
    return config
  },
  error => {
    Loading(false)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    Loading(false)
    if (res.data.code !== 200) {
      // 错误处理
      return Promise.reject(res.data.msg)
    }
    return res
  }, error => {
    return Promise.reject(error)
  }
)

export const ajax = (options) => {
  options.url = options.abPath || BASE_URL + options.url
  let _options = Object.assign({}, defaultOptions, options)
  console.log(_options)
  return axios(_options).then((res) => {
    return res.data
  }).catch((error) => {
    Loading(false)
    console.log('出错了', error)
    MessageBox({
      header: '提示',
      content: error
    })
    return new Promise(() => {})
  })
}
