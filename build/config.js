const config = {
  buildDetail: false,
  local: {
    BUILD_ENV: 'local',
    API_PATH: '/api',
    SUB_DIR: 'static',
    PUBLIC_PATH: '/',
    IMGHOST: '//test-zhike.oss-cn-beijing.aliyuncs.com',
    MOBILE_HOST: '//172.16.11.28:8866/m/',
    proxyTable: {
      '/api': {
        target: 'http://test-api-zhike.vhall.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  dev: {
    BUILD_ENV: 'dev',
    API_PATH: '/api',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//dev-zhike.vhall.domain/',
    IMGHOST: '//test-zhike.oss-cn-beijing.aliyuncs.com'
    // PUBLIC_PATH: '//127.0.0.1:8088/'
  },
  test: {
    BUILD_ENV: 'test',
    API_PATH: '/m/api',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//test-zhike.vhall.com/m/',
    IMGHOST: '//test-zhike.oss-cn-beijing.aliyuncs.com',
    MOBILE_HOST: '//test-zhike.vhall.com/m/'
  },
  prod: {
    BUILD_ENV: 'prod',
    API_PATH: '/m/api',
    SUB_DIR: 'static',
    PUBLIC_PATH: '//zhike1.vhall.com/m/',
    IMGHOST: '//static.vhallyun.com',
    MOBILE_HOST: '//zhike1.vhall.com/m/'
  }
}

module.exports = config
