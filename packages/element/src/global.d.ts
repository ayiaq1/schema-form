/*
 * @Author: yihuang
 * @Date: 2021-07-21 11:16:16
 * @Description: 推导格式
 * @LastModifiedBy: yihuang
 */
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';

declare module '*.module.css' {
  export const content: Record<string, string>;
  export default content;
}
declare module '*.module.less' {
  export const content: Record<string, string>;
  export default content;
}
