var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
/*
 * @Author: yihuang
 * @Date: 2021-12-02 14:11:36
 * @Description: 列表包裹器 编辑：input，只读：text
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import Field from '../Field';
var ListWrap = function (props) {
  var value = props.value,
    className = props.className,
    style = props.style;
  return React.createElement(
    React.Fragment,
    null,
    value instanceof Array && value.length
      ? React.createElement(
          'ul',
          { className: className, style: style },
          value === null || value === void 0
            ? void 0
            : value.map(function (text, index) {
                return React.createElement(
                  'li',
                  { key: index },
                  React.createElement(Field, __assign({}, props)),
                );
              }),
        )
      : null,
  );
};
ListWrap.displayName = 'ListWrap';
export default memo(ListWrap);
