const proxy = require('http-proxy-middleware');

/*
 * 代理：因为浏览器的同源政策导致请求的数据无法返回到自身,通过代理的形式
 */
module.exports = function (app) {
    app.use(
        proxy('/api1', {//遇见api1前缀的请求，就会触发代理
            target: 'http://localhost:3000',
            changeOrigin: true, //控制服务器收到的请求头中Host
            pathRewrite: {'^/api1': ''} //重写路径
        }),
        proxy('/api2', {//遇见api1前缀的请求，就会触发代理
            target: 'http://localhost:3002',
            changeOrigin: true, //控制服务器收到的请求头中Host
            pathRewrite: {'^/api2': ''} //重写路径
        }),
    )
}
