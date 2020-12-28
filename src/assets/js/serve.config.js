import { isUsemokedata } from '../../../mock/config/moke.config'
const MOCKURL = 'http://moke.com/'
const SERVEURL = 'http://localhost:3000/'
let mokeOrserverurl = isUsemokedata ? MOCKURL : SERVEURL

const URL = {
  registUser: `${mokeOrserverurl}user/registUser`,
  loginUser: `${mokeOrserverurl}user/loginUser`,
  hotProduct: `${mokeOrserverurl}product/hotProduct`,
  productType: `${mokeOrserverurl}type/productType`,
  productList: `${mokeOrserverurl}productlist/productList`,
}

export default URL
