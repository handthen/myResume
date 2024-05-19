

declare module "*.ts"
declare module "*.tsx"
declare module '*.css';
declare module '*.scss';
declare module "@"
declare const NODE_ENV:string

declare class CustomErr extends Error {
    constructor(message: string);
}

// axios 解决返回类型报错
