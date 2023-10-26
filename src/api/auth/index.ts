import defHttp from "@/utils/http/axios";

export const login = (data) => {
  return defHttp.post({ url: '/login', data })
}