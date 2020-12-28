const mongoose = require('mongoose')
// 加密加盐
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
// 创建模型
const userSchema = new Schema({
  userId: Schema.Types.ObjectId,
  userName: { unique: true, type: String },
  passWord: String,
  creatDate: { type: Date, default: Date.now() },
})

userSchema.pre('save', function (next) {
  // 随机生成salt 10迭代次数
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(this.passWord, salt, (err, hash) => {
      if (err) return next(err)
      this.passWord = hash
      next()
    })
  })
})

// 匹配加盐过后的密码
userSchema.methods = {
  comparePassword: (_password, passWord) => {
    return new Promise((resolve, reject) => {
      console.log(_password, passWord)
      bcrypt.compare(_password, passWord, (err, imMatch) => {
        if (!err) {
          resolve(imMatch)
        } else {
          reject(err)
        }
      })
    })
  },
}
// 发布模型
mongoose.model('User', userSchema)
