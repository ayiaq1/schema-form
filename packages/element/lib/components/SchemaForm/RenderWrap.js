/*
 * @Author: yihuang
 * @Date: 2022-03-01 11:39:38
 * @Description: 自定义渲染
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import { converChangeEvent } from './utils';
var RenderWrap = function (_a) {
  var disabled = _a.disabled,
    render = _a.render,
    values = _a.values,
    initialValues = _a.initialValues,
    onChange = _a.onChange,
    fieldProps = _a.fieldProps;
  var _b = useState(),
    val = _b[0],
    setVal = _b[1];
  var onChangeFunc = function (params) {
    var _a;
    var str = converChangeEvent(params);
    setVal(str);
    (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange) === null ||
    _a === void 0
      ? void 0
      : _a.call(fieldProps, str);
    onChange === null || onChange === void 0 ? void 0 : onChange(str);
  };
  useEffect(
    function () {
      setVal(values);
    },
    [values],
  );
  useEffect(
    function () {
      setVal(fieldProps.value);
    },
    [fieldProps.value],
  );
  return React.createElement(
    React.Fragment,
    null,
    render === null || render === void 0
      ? void 0
      : render({
          value: val,
          onChange: onChangeFunc,
          disabled: disabled,
          initialValues: initialValues,
        }),
  );
};
export default RenderWrap;
