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
    _b = _a.ellipsis,
    ellipsis = _b === void 0 ? true : _b,
    style = _a.style;
  return React.createElement(
    Typography.Text,
    {
      ellipsis: ellipsis
        ? {
            tooltip: ellipsis,
          }
        : false,
      style: style,
    },
    value,
  );
};
export default memo(Text);
