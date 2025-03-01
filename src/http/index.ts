import axios from 'axios'
import { message } from 'antd'

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  withCredentials: true,
})

// http request 拦截器
http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    message.error(error)
    return error
  }
)
// http response 拦截器
http.interceptors.response.use(
  async (response) => {
    const { data, config } = response
    const { customConfig } = config
    if (data.code != 200) {
      message.error(data.message || '服务异常')
      return Promise.reject(data)
    }
    if (customConfig?.msg) {
      message.success(customConfig.msg)
    }
    return data
  },
  async (error) => {
    const { response } = error
    const { data } = response
    if (data.code != 200) {
      message.error(data.msg || '服务异常')
      return Promise.reject(data)
    }
    return Promise.reject(error)
  }
)

export default http

export {}
