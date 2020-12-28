const Router = require('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')
// 获取到数据模型

router.get('/insertType', async (ctx) => {
  const Type = mongoose.model('Type')
  fs.readFile('./data/type.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    // 赋值
    let count = 0
    data.map((value, index) => {
      let type = new Type(value)
      type
        .save()
        .then(() => {
          count++
          console.log(`成功${count}`)
        })
        .catch((err) => {
          console.log(`失败${err}`)
        })
    })
  })
  ctx.body = '导入成功'
})
router.get('/productType', async (ctx) => {
  console.log(99999)
  const Type = mongoose.model('Type')
  await Type.find()
    .sort({ typeId: 1 })
    .exec()
    .then(async (result) => {
      ctx.body = result
    })
})
module.exports = router
