/*
 * @Author: yihuang
 * @Date: 2022-03-12 10:59:40
 * @Description: 深度迭代查询
 * @LastModifiedBy: yihuang
 */
/**
 * @param data any[]
 * @param callback any
 * @param childName default:  children
 * @return any[]
 * deepEach(arr, (item, children) => {
      item.value = xx;
  },'childName');
 * 默认使用副本,在callback处理数据，如果不使用副本，那么需要重新对treeData赋值
    treeData = deepEach(treeData, (item, children) => {
        item.value = xx;
    });
 */
const deepEach = (data: any[], callback: any, childName = 'children') => {
  let current;
  let children = [];
  for (let i = 0, len = data.length; i < len; i += 1) {
    current = data[i];
    children = [];
    if (current && current[childName] && current[childName].length) {
      children = current[childName];
    }
    if (callback) {
      callback(current, children, i);
    }
    if (children.length > 0) {
      deepEach(children, callback, childName);
    }
  }
};
export default deepEach;
