import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import authStore from "@/store/auth";

/**
 * @description: 请求拦截器
 */
export function requestInterceptors(config: InternalAxiosRequestConfig, options: any = {}): any {
  const { id, token } = authStore.getUserInfo

  if (token !== '') {
    config.headers['User-Identifier'] = id
    config.headers['Authorization'] = token
  }
  return config
}

/**
 * @description: 请求拦截器错误处理
 */
export function requestInterceptorsCatch(error: Error) {
  return Promise.reject(error)
}

/**
 * @description: 响应拦截器
 */
export function responseInterceptors(response: any) {
  if (response.status === 200) {
    if (response.headers['response-status']) {
      console.log('错误');

      return Promise.reject(response.data)
    }

    return response
  } else {
    if (response.data.code === 401) {
      // 退出登录
      // const useStore = LoginStore()
      // return useStore.LOGOUT()
    }
    return Promise.reject(response)
  }
}

/**
 * @description: 响应拦截器错误处理
 */
export function responseInterceptorsCatch(error: any) {
  console.log(error);

  const status = 'status'
  const message = 'statusText'
  // 对响应错误做点什么
  const { response = {}, config: { url, params, data } } = error;
  console.error(`
      =========warn begin===========
      当前请求：${url} 异常
      当前请求参数 👇
      ${JSON.stringify(params) || JSON.stringify(data)}
      错误码 ${response?.[status]}
      错误消息 ${response?.[message]}
      =========warn end=============
  `)
  return Promise.reject(error);
}