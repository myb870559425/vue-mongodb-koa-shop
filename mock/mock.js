// import data from './mokedate/data.json'
import { isUsemokedata } from './config/moke.config'
import url from '@/assets/js/serve.config.js'
const Mock = require('mockjs')
var Random = Mock.Random

;(() => {
  if (!isUsemokedata) {
    return
  }

  let hotProductlist = () => {
    let hotProductlist = []
    for (let index = 0; index < 2000; index++) {
      let product = {
        productId: Random.integer(1, 10000) + '1',
        productNumber: Random.natural(1, 1000) + '1',
        productName: Random.csentence(5, 10),
        productType: Random.integer(1, 10),
        productPrice: Random.float(400, 500, 2, 2),
        productImg: Random.image(
          '200x100',
          '#ffcc33',
          '#FFF',
          'png',
          'Hello Mock.js!' + Random.integer(0, 100)
        ),
        creatDate: Random.date('yyyy-MM-dd'),
      }
      hotProductlist.push(product)
    }
    return hotProductlist
  }
  // Mock.mock(url.registuser, { data: data.list })
  Mock.mock(url.hotProduct, hotProductlist)
})()
