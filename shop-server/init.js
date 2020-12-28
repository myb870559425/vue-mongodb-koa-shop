const mongoose = require('mongoose')
const db = 'mongodb://localhost/shop'

const glob = require('glob')
const path = require('path')
// 引入 schema
exports.initSchemas = () => {
  console.log('model success')
  // 请求到该路径的所有js文件
  glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require)
}

// 数据库连接
exports.connect = () => {
  console.log('conect start')
  // 连接数据库
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  // 监听数据库连接
  mongoose.connection.on('disconnected', () => {
    mongoose.connect(db)
  })
  // 数据库出现错误
  mongoose.connection.on('error', (err) => {
    console.log(err)
    mongoose.connect(db)
  })
  //数据库连接成功
  mongoose.connection.once('open', (err) => {
    console.log('mongoose connect success')
  })
}
