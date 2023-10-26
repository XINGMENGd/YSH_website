export default function errorInterceptors(error: any) {
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