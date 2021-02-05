module.exports = {
  devServer: {
    port: 8082,
    proxy: {
      '/': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^': ''
        }
      },
    }
  }
}