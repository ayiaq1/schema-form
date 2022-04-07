/*
 * @Author: yihuang
 * @Date: 2022-03-01 11:47:38
 * @Description: 转换工具
 * @LastModifiedBy: yihuang
 */

/** 转换所有UI组件的onChange数据 */
export const converChangeEvent = (params: any): any => {
  let str;
  if (params?.target) {
    str = params.target.value;
  } else {
    str = params;
  }
  return str;
};
