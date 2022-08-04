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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
/*
 * @Author: yihuang
 * @Date: 2022-02-16 10:42:13
 * @Description: 组件的适配层，用于判断使用什么类型的组件。
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import {
  Select,
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Rate,
  Slider,
  Switch,
  Upload,
  Image,
  Tag,
  Progress,
  Cascader,
  TreeSelect,
  Avatar,
  Divider,
} from 'antd';
import { converChangeEvent } from './SchemaForm/utils';
import TimeConvertWrap from './TimeConvertWrap';
import InputWrap from './InputWrap';
import Text from './Text';
import DescriptionWrap from './DescriptionWrap';
/** 具体实现 */
function Element(_a) {
  var _b, _c;
  var type = _a.type,
    render = _a.render,
    fieldProps = _a.fieldProps,
    onChange = _a.onChange,
    resetProps = __rest(_a, ['type', 'render', 'fieldProps', 'onChange']);
  var _d = (_b = fieldProps) !== null && _b !== void 0 ? _b : {},
    children = _d.children,
    value = _d.value,
    resetFieldProps = __rest(_d, ['children', 'value']);
  var _e = useState(value !== null && value !== void 0 ? value : resetProps.value),
    val = _e[0],
    setVal = _e[1];
  /** 转换 form 表单的 change */
  var onChangeFunc = function (params) {
    var _a;
    var values = converChangeEvent(params);
    setVal(values);
    (_a =
      resetFieldProps === null || resetFieldProps === void 0
        ? void 0
        : resetFieldProps.onChange) === null || _a === void 0
      ? void 0
      : _a.call(resetFieldProps, values);
    onChange === null || onChange === void 0 ? void 0 : onChange(values);
  };
  /** 去前后空格，主要给 Search\Password 等组件 onBlur\onPressEnter 时使用 */
  var onTrimFunc = function (params) {
    var _a, _b, _c;
    var currentVal = params;
    // 如果明确参数, 不去掉前后空格，则直接返回
    if (resetFieldProps.isTrim === false) {
      onChangeFunc === null || onChangeFunc === void 0 ? void 0 : onChangeFunc(currentVal);
      return;
    }
    if (typeof currentVal === 'string') {
      var v = currentVal === null || currentVal === void 0 ? void 0 : currentVal.trim();
      currentVal = v === '' ? null : v;
      // onBlur时不触发
      (_a =
        resetFieldProps === null || resetFieldProps === void 0
          ? void 0
          : resetFieldProps.onSearch) === null || _a === void 0
        ? void 0
        : _a.call(resetFieldProps, currentVal);
    } else if (currentVal === null || currentVal === void 0 ? void 0 : currentVal.target) {
      var v =
        (_c = (_b = currentVal.target) === null || _b === void 0 ? void 0 : _b.value) === null ||
        _c === void 0
          ? void 0
          : _c.trim();
      currentVal = v === '' ? null : v;
    }
    onChangeFunc === null || onChangeFunc === void 0 ? void 0 : onChangeFunc(currentVal);
  };
  useEffect(
    function () {
      setVal(value);
    },
    [value],
  );
  // 表单重置的时候值为 resetProps.value
  useEffect(
    function () {
      setVal(resetProps.value);
    },
    [resetProps.value],
  );
  // 表单 使用 valuePropName 时用的字段为resetProps?.id
  useEffect(
    function () {
      var baseFieldProps = resetFieldProps;
      if (
        baseFieldProps === null || baseFieldProps === void 0 ? void 0 : baseFieldProps.valuePropName
      ) {
        setVal(
          resetProps[
            baseFieldProps === null || baseFieldProps === void 0
              ? void 0
              : baseFieldProps.valuePropName
          ],
        );
      }
    },
    [resetProps, resetFieldProps],
  );
  switch (type) {
    case 'text':
      return React.createElement(
        Text,
        __assign({}, resetProps, { fieldProps: resetFieldProps, value: val }),
      );
    case 'input':
      return React.createElement(
        InputWrap,
        __assign({}, resetProps, {
          fieldProps: resetFieldProps,
          value: val,
          onChange: onChangeFunc,
        }),
      );
    case 'descriptions':
      return React.createElement(DescriptionWrap, { fieldProps: resetFieldProps });
    // 日期类型做一层数据转换
    case 'datePicker':
    case 'rangePicker':
    case 'timePicker':
    case 'timeRangePicker':
      return React.createElement(
        TimeConvertWrap,
        __assign({}, resetProps, {
          type: type,
          fieldProps: resetFieldProps,
          onChange: onChangeFunc,
          value: val,
        }),
      );
    // ======== 以下为 antd 组件 ==========
    case 'divider':
      return React.createElement(Divider, __assign({}, resetFieldProps));
    case 'inputGroup':
      return React.createElement(
        Input.Group,
        __assign({}, resetFieldProps),
        children === null || children === void 0
          ? void 0
          : children(
              __assign(__assign({}, resetFieldProps), {
                onChange: onChangeFunc,
                value: val,
                disabled: resetFieldProps.disabled,
                readOnly: resetFieldProps.readOnly,
              }),
            ),
      );
    case 'textarea':
      return React.createElement(
        Input.TextArea,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'search':
      return React.createElement(
        Input.Search,
        __assign({}, resetFieldProps, {
          onChange: onChangeFunc,
          onSearch: onTrimFunc,
          onBlur: onTrimFunc,
          value: val,
        }),
      );
    case 'password':
      return React.createElement(
        Input.Password,
        __assign({}, resetFieldProps, {
          onChange: onChangeFunc,
          onPressEnter: onTrimFunc,
          onBlur: onTrimFunc,
          value: val,
        }),
      );
    case 'inputNumber':
      return React.createElement(
        InputNumber,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'select':
      return React.createElement(
        Select,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'checkbox':
      return React.createElement(
        Checkbox,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, checked: val }),
      );
    case 'checkboxGroup':
      return React.createElement(
        Checkbox.Group,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'radioGroup':
      return React.createElement(
        Radio.Group,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'rate':
      return React.createElement(
        Rate,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'slider':
      return React.createElement(
        Slider,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'switch':
      return React.createElement(
        Switch,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, checked: val }),
      );
    case 'upload':
      return React.createElement(
        Upload,
        __assign({ fileList: val }, resetFieldProps, { onChange: onChangeFunc }),
        children === null || children === void 0
          ? void 0
          : children(
              __assign(__assign({}, resetFieldProps), {
                onChange: onChangeFunc,
                value: val,
                disabled: resetFieldProps.disabled,
                readOnly: resetFieldProps.readOnly,
              }),
            ),
      );
    case 'avatar':
      return React.createElement(
        Avatar,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, src: val }),
      );
    case 'image':
      return React.createElement(
        Image,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, src: val }),
      );
    case 'tag':
      return React.createElement(
        Tag,
        __assign({}, resetFieldProps, {
          closable:
            (_c = !resetFieldProps.disabled) !== null && _c !== void 0
              ? _c
              : resetFieldProps.closable,
          onClose: onChangeFunc,
          onChange: onChangeFunc,
        }),
        children
          ? children(
              __assign(__assign({}, resetFieldProps), {
                onChange: onChangeFunc,
                value: val,
                disabled: resetFieldProps.disabled,
                readOnly: resetFieldProps.readOnly,
              }),
            )
          : val,
      );
    case 'progress':
      return React.createElement(Progress, __assign({}, resetFieldProps, { percent: val }));
    case 'treeSelect':
      return React.createElement(
        TreeSelect,
        __assign({}, resetFieldProps, { value: val, onChange: onChangeFunc }),
      );
    case 'cascader':
      return React.createElement(
        Cascader,
        __assign({}, resetFieldProps, { value: val, onChange: onChangeFunc }),
      );
    case 'custom':
      return render === null || render === void 0
        ? void 0
        : render(
            __assign(__assign({}, resetFieldProps), {
              onChange: onChangeFunc,
              value: val,
              disabled: resetFieldProps.disabled,
              readOnly: resetFieldProps.readOnly,
            }),
          );
    default:
      throw new Error('\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684type\u7C7B\u578B: '.concat(type));
  }
}
Element.displayName = 'Element';
export default Element;
