import axios from 'axios'

// 为Promise添加一些方法
Promise.prototype.h_then = function then(success = () => {}, error = () => {}) {
  return this.then(data => success(data)).catch((err) => {
    console.log('err = ', err)
    return error(err)
  })
}

// 创建axios实例
const service = axios.create({
  // baseURL: '',
  timeout: 20000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // console.log('request config', config)
    return config
  },
  (error) => {
    console.log(error) // debug
    Promise.reject(error)
  },
)

// respone拦截器
service.interceptors.response.use((response) => {
  const res = response.data
  // if (res.code !== 200) {
  //   return Promise.reject('error')
  // }
  return res
},
(error) => {
  console.log(`err${error}`) // for debug
  return Promise.reject(error)
})

export default service
export const {
  get,
  post,
} = service
