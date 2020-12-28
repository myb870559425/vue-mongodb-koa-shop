const Router = require('koa-router')
let router = new Router()

// node 与数据库连接的桥梁
const mongoose = require('mongoose')

router.post('/registUser', async (ctx) => {
  // 获取数据库模型
  const User = mongoose.model('User')
  // 将返回内容实例化到模型里面
  let newUser = new User(ctx.request.body)
  // 使用save 方法保存用户信息
  await newUser
    .save()
    .then(() => {
      ctx.body = {
        code: 200,
        message: '注册成功',
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 500,
        message: err,
      }
    })
})
router.post('/loginUser', async (ctx) => {
  // 将返回内容实例化到模型里面
  let loginUser = ctx.request.body
  let userName = loginUser.userName
  let passWord = loginUser.passWord
  // 获取数据库模型
  const User = mongoose.model('User')
  await User.findOne({ userName: userName })
    .exec()
    .then(async (result) => {
      if (result) {
        let newUser = new User()
        await newUser
          .comparePassword(passWord, result.passWord)
          .then((isMatch) => {
            console.log('isMatch', isMatch)
            if (isMatch) {
              ctx.body = {
                code: 200,
                message: '登录成功',
                userInfo: { userName },
              }
            } else {
              ctx.body = {
                code: 201,
                message: '登录失败',
              }
            }
          })
      } else {
        ctx.body = {
          code: 201,
          message: '用户名不存在',
        }
      }
    })
})

module.exports = router
