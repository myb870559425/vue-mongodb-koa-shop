const Koa = require('koa')
const app = new Koa()

// 解决跨域问题
const cors = require('koa2-cors')
app.use(
  cors({
    origin: ['http://localhost:8080'],
    Credentials: true,
  })
)
// 接收前端请求进行解析
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 加载路由
const Router = require('koa-router')
let user = require('./controller/user.js')
let product = require('./controller/product.js')
let productlist = require('./controller/productlist.js')
let type = require('./controller/type.js')
let router = new Router()
router
  .use('/user', user.routes())
  .use('/product', product.routes())
  .use('/productlist', productlist.routes())
  .use('/type', type.routes())
app.use(router.routes())
app.use(router.allowedMethods()) // 允许特定请求方法请求

const { connect, initSchemas } = require('./init.js')
// 先连接数据库在初始化模型
;(async () => {
  await connect()
  console.log('connect ..... ')
  initSchemas()
})()

app.use(async (ctx) => {
  console.log('0000')
  ctx.body = 'hello'
})

app.listen(3000, () => {
  console.log('启动服务成功')
})
