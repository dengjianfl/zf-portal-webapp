// 引入koa模块
const Koa = require('koa');
// 实例化koa
const app = new Koa();

const router = require('koa-router')()


const swiperData = [
  {
    "url": "http://img.zhufengpeixun.cn/zfjgk.png"
  },
  {
    "url": "http://img.zhufengpeixun.cn/zfjgk.png"
  },
  {
    "url": "http://img.zhufengpeixun.cn/zfjgk.png"
  }
]

router.get('/slider/list', function (ctx, next) {
  ctx.body = {
    data: swiperData,
    code: '0',
    msg: '成功'
  }
})


// 配置post路由
router.get('/course/list', function (ctx, next) {
  ctx.body = {
    data: swiperData,
    code: '0',
    msg: '成功'
  }
})
// 注册路由
app.use(router.routes(), router.allowedMethods())

// 监听并启动服务
app.listen(3000);