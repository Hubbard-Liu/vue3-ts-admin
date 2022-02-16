/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:49:24
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-16 21:52:06
 * @FilePath: /vue3-ts-init/vue.config.js
 */
const port = 2222;

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  // 跨域
  //   1. 开发
  //     a) webpack devServer  proxy 配置代理
  //     b) cors 后台配置跨域资源共享 可以实现前台无感知请求数据
  //     c) nginx 解决跨域
  //   2. 生成环境
  //     a) 集成到后台  不存在跨域了
  //     b) 如果是前台独立部署
  //       i) 后他开启cors配置
  //       ii) 前台发送的是相对请求,改成绝对地址 axios.baseURL

  // 打包的时候用  参照后台的命名空间
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  css: {
    loaderOptions: {
      // 配置全局scss 不需要引入
      scss: {
        // @/ 是 src/ 的别名
        prependData:
          '@import "./src/styles/mixin.scss";@import "./src/styles/global.scss";' // 此处为scss的位置
      }
    }
  },
  // productionSourceMap: false,
  devServer: {
    port: port,
    // open: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // }
    //  http://xxx.com:80 (80可以省略不写,所有的没有显示端口的域名都是80端口)
    // 跨域 :  协议  域名  端口 任意一个不同 就会产生跨域
    // 浏览器的同源策略导致的 在页面中 通过js语法访问其他域的数据会被限制
    // 解决跨域:
    // 1. 如果是开发阶段,可以通过配置webpack.devServer.proxy 来解决
    // 2. 如果打包部署继承到了后台,webpack失效,但是也不存在跨域了(协议,域名,端口都一致了)
    // 3. 特殊> 如果打包后,前台项目单独部署(apache/nginx等启动),跨域依然存在
    //     - a.后台配置cors忽略跨域请求的主机
    //         .  https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS
    //     - b.后台配置nginx

    proxy: {
      // 配置代理 希望拦截当前的host地址 替换为目标地址
      // key: {}   ;  key为拦截的规则,可以是正则表达式
      '^/(api)': {
        target: 'http://152.136.185.210:5000', // 8080可以省略不写 所以代理地址和当前项目不是同一个地址!!
        changeOrigin: true, // 如果是跨域 需要添加
        pathRewrite: {
          // 当访问 拦截的规则 时，修改路径, 如开发设置axios base接口路径 /api
          '^/api': ''
          // '^/api': '/api'   // 这种接口配置出来     http://XX.XX.XX.XX:5000/api/login
          //'^/api': '/' 这种接口配置出来     http://XX.XX.XX.XX:5000/login
        }
      }
    }
  }
};
