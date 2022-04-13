/*
 * @Author: yihuang
 * @Date: 2021-11-30 18:27:39
 * @Description: 字段类型 包含 只读、编辑
 * @LastModifiedBy: yihuang
 */
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
import React, { memo } from 'react';
import Text from './Text';
import InputWrap from './InputWrap';
/** 字段包裹器 */
var Field = function (props) {
  var _a;
  var _b = props.mode,
    mode = _b === void 0 ? 'edit' : _b,
    onChange = props.onChange,
    fieldProps = props.fieldProps;
  var value =
    (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) !== null &&
    _a !== void 0
      ? _a
      : props === null || props === void 0
      ? void 0
      : props.value;
  return React.createElement(
    React.Fragment,
    null,
    mode === 'read'
      ? React.createElement(Text, __assign({}, fieldProps, { value: value, type: 'text' }))
      : React.createElement(InputWrap, {
          fieldProps: fieldProps,
          value: value,
          onChange: onChange,
          type: 'input',
        }),
  );
};
Field.displayName = 'Field';
export default memo(Field);
