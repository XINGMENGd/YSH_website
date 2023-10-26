export default function responseInterceptors(response) {
  if (response.headers['response-status']) {
    return Promise.reject(response);
  } else {
    return response
  }
}