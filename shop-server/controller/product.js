const Router = require('koa-router')
let router = new Router()

const mongoose = require('mongoose')

router.post('/hotProduct', async (cxt) => {
  //获取数据模型
  console.log('hotproduct success')
  const HotProduct = mongoose.model('Product')
  // 查询数据库
  await HotProduct.find()
    .exec()
    .then(async (result) => {
      cxt.body = {
        hotProductlist: result,
      }
    })
})

module.exports = router
