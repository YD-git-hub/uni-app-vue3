import { get,post,Uploadpost } from "./setting"
// 公共
export const default_img=""
// 产品
export const get = (data) => get('', data);//get请求
export const post = (data) => post('', data);//post请求
export const Uploadpost = (data) => Uploadpost('', data);//Uploadpost 文件上传
