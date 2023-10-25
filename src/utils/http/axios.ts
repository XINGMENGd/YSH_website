import createErrorLog from "./createErrorLog";
import axios from 'axios';

// 全局的 axios 默认值
axios.defaults.baseURL = 'http://localhost:5666/devApi';
axios.defaults.timeout = 1000 * 10
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, file: unknown, body: unknown): Promise<ResType<T>>
  download(url: string): void
}

interface ResType<T> {
  code: number
  data?: any
  message?: string
  err?: string
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
      console.log(err, 'err');
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

// 添加响应拦截器
axios.interceptors.response.use(response => response, createErrorLog(['status', 'statusText']));

export default defHttp;
