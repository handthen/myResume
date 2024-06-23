declare module '*.ts';
declare module '*.tsx';
declare module '*.css';
declare module '*.scss';
declare module '@';
declare const NODE_ENV: string;

declare class CustomErr extends Error {
  constructor(message: string);
}

// axios 解决返回类型报错
declare module 'axios' {
  export interface AxiosRequestConfig {
    // 添加数据类型
    handlerEnabled?: boolean;
    baseURL?: string;
    timeout?: number;
    withCredentials?: boolean;
  }
}
// 处理TS数据类型问题  类型“AxiosResponse<any, any>”上不存在属性“meta”。
declare module 'axios' {
  interface AxiosResponse<T = any> {
    meta: any;
    // 这里追加你的参数
    baseURL?: string;
    timeout?: number;
    withCredentials?: boolean;
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}
