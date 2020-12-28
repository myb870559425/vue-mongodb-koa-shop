const Router = require('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')

router.get('/insertProductInfo', async (cxt) => {
  fs.readFile('./data/productlist.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    console.log(data)
    let count = 0
    const Productlist = mongoose.model('Productlist')
    data.map((value, index) => {
      console.log(value)
      let productList = new Productlist(value)
      productList.typeId = Math.floor(Math.random * 8) + 1
      productList
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
  cxt.body = '导入成功'
})
router.get('/productList', async (cxt) => {
  const Productlist = mongoose.model('Productlist')
  await Productlist.find({ productType: cxt.query.typeId })
    .skip(parseInt(cxt.query.startSearch))
    .limit(parseInt(cxt.query.endSearch))
    .exec()
    .then((result) => {
      cxt.body = result
    })
    .catch((err) => {
      cxt.body = err
    })
})
module.exports = router
