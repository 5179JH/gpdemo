module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}