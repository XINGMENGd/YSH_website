import defHttp from "@/utils/http/axios";

export const login = (params) => {
  return defHttp.post('/login', params)
}