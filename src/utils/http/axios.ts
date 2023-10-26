import responseInterceptors from "./responseInterceptors";
import errorInterceptors from "./errorInterceptors";
import axios from 'axios';
import authStore from "@/store/auth";

// 全局的 axios 默认值
axios.defaults.baseURL = 'http://localhost:5666/devApi';
axios.defaults.timeout = 1000 * 20
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use(
  (config) => {
    const { id, token } = authStore.getUserInfo

    if (token !== '') {
      config.headers['User-Identifier'] = id
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  response => responseInterceptors(response),
  error => errorInterceptors(error)
);

interface ResType {
  code: number
  data?: any
  message?: string
  err?: string
}
interface Http {
  get(url: string, params?: unknown): Promise<ResType>
  post(url: string, params?: unknown): Promise<ResType>
  upload(url: string, file: unknown, body: unknown): Promise<ResType>
  download(url: string): void
}

const defHttp: Http = {
  get: async (url: string, params: any) => {
    try {
      const res = await axios.get(url, { params })
      return res.data
    } catch (err: any) {
      throw err.response?.data || err?.data || err
    }
  },
  post: async (url: string, params: any) => {
    try {
      const res = await axios.post(url, JSON.stringify(params))
      return res.data
    } catch (err: any) {
      throw err.response?.data || err?.data || err
    }
  },
  upload: async (url: string, file: File, body: any) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      if (body) {
        for (let key in body) {
          formData.append(`${key}`, body[`${key}`])
        }
      }
      const res = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      return res.data
    } catch (err: any) {
      throw err.response?.data || err?.data || err
    }
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
