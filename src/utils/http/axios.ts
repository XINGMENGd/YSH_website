import axios from 'axios';
import authStore from "@/store/auth";
import * as axiosTransform from './axiosTransform'

// 全局的 axios 默认值
axios.defaults.baseURL = 'http://localhost:5666/devApi';
axios.defaults.timeout = 1000 * 20
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => axiosTransform.requestInterceptors(config),
  (error) => axiosTransform.requestInterceptorsCatch(error)
)
// 添加响应拦截器
axios.interceptors.response.use(
  response => axiosTransform.responseInterceptors(response),
  error => axiosTransform.responseInterceptorsCatch(error)
);

interface ResType {
  code: number
  data?: any
  message?: string
  err?: string
}
// interface Http {
//   get(url: string, params?: unknown): Promise<ResType>
//   post(url: string, body?: unknown): Promise<ResType>
//   upload(url: string, file: unknown, body: unknown): Promise<ResType>
//   download(url: string): void
// }

function request(requestOptions: any, AxiosRequestConfig: any = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({ ...requestOptions })
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

const defHttp: any = {
  get: async (options: any, config: any) => {
    const response = await request({ ...options, method: 'GET' }) as any
    return response
  },
  post: async (options: any, config: any) => {
    const response = await request({ ...options, method: 'POST' }) as any
    return response
  },
  upload: async (options: any, config: any) => {
    const response = await request({ ...options, method: 'POST', headers: { 'Content-Type': 'multipart/form-data' } }) as any
    return response
  },
  download: (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = ''
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export default defHttp;
