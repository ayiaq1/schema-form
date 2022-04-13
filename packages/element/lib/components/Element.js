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
  DatePicker,
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Rate,
  Slider,
  Switch,
  TimePicker,
  Upload,
  Image,
  Tag,
  Progress,
  Cascader,
  TreeSelect,
  Avatar,
} from 'antd';
import Field from './Field';
import Text from './Text';
import ListWrap from './ListWrap';
import { converChangeEvent } from './SchemaForm/utils';
/** 具体实现 */
function Element(_a) {
  var _b, _c;
  var type = _a.type,
    fieldProps = _a.fieldProps,
    onChange = _a.onChange,
    resetProps = __rest(_a, ['type', 'fieldProps', 'onChange']);
  var _d = (_b = fieldProps) !== null && _b !== void 0 ? _b : {},
    children = _d.children,
    value = _d.value,
    resetFieldProps = __rest(_d, ['children', 'value']);
  var _e = useState(value !== null && value !== void 0 ? value : resetProps.value),
    val = _e[0],
    setVal = _e[1];
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
  switch (type) {
    case 'text':
      return React.createElement(Text, __assign({}, resetProps, resetFieldProps, { value: val }));
    case 'list-wrap':
      return React.createElement(
        ListWrap,
        __assign({}, resetProps, resetFieldProps, { value: val }),
      );
    case 'input':
      return React.createElement(
        Field,
        __assign({}, resetProps, {
          fieldProps: resetFieldProps,
          onChange: onChangeFunc,
          value: val,
          mode: 'edit',
        }),
      );
    // ======== 以下为 antd 组件 ==========
    case 'input-group':
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
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'password':
      return React.createElement(
        Input.Password,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'input-number':
      return React.createElement(
        InputNumber,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'select':
      return React.createElement(
        Select,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'datepicker':
      return React.createElement(
        DatePicker,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'rangepicker':
      return React.createElement(
        DatePicker.RangePicker,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'timePicker':
      return React.createElement(
        TimePicker,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'timeRangePicker':
      return React.createElement(
        TimePicker.RangePicker,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'checkbox':
      return React.createElement(
        Checkbox,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, checked: val }),
      );
    case 'checkbox-group':
      return React.createElement(
        Checkbox.Group,
        __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
      );
    case 'radio-group':
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
        __assign({}, resetFieldProps, { onChange: onChangeFunc }),
        children === null || children === void 0
          ? void 0
          : children(
              __assign(__assign({}, resetFieldProps), {
                onChange: onChangeFunc,
                value: val,
                disabled: resetFieldProps.disabled,
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
              }),
            )
          : val,
      );
    case 'progress':
      return React.createElement(Progress, __assign({}, resetFieldProps, { percent: val }));
    case 'tree-select':
      return React.createElement(
        TreeSelect,
        __assign({}, resetFieldProps, { value: val, onChange: onChangeFunc }),
      );
    case 'cascader':
      return React.createElement(
        Cascader,
        __assign({}, resetFieldProps, { value: val, onChange: onChangeFunc }),
      );
    default:
      throw new Error('没有找到对应的type类型');
  }
}
Element.displayName = 'Element';
export default Element;
