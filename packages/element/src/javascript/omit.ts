/*
 * @Author: yihuang
 * @Date: 2022-07-19 17:18:56
 * @Description: 过滤对象中的字段
 * const colProps = omit(reset, ['fieldProps', 'labelCol', 'wrapperCol', 'render']);
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */
const omit = (obj: object, fields: any[]) => {
  const shallowCopy = { ...obj };
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
};

export default omit;
