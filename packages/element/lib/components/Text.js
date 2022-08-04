/*
 * @Author: yihuang
 * @Date: 2021-12-01 14:07:25
 * @Description: 只读文本，超长省略
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Typography } from 'antd';
var Text = function (_a) {
  var value = _a.value,
    fieldProps = _a.fieldProps;
  var _b = fieldProps !== null && fieldProps !== void 0 ? fieldProps : {},
    _c = _b.ellipsis,
    ellipsis = _c === void 0 ? true : _c,
    style = _b.style,
    className = _b.className;
  return React.createElement(
    Typography.Text,
    {
      ellipsis: ellipsis
        ? {
            tooltip: ellipsis,
          }
        : false,
      style: style,
      className: className,
    },
    value,
  );
};
export default memo(Text);
