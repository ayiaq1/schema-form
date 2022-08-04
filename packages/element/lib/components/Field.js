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
import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Checkbox,
  Divider,
  Image,
  Input,
  Progress,
  Radio,
  Rate,
  Slider,
  Switch,
  Tag,
  Upload,
} from 'antd';
import DateField from './DateField';
import Text from './Text';
import SelectField from './SelectField';
import TreeSelectField from './TreeSelectField';
import CascaderField from './CascaderField';
import DescriptionWrap from './DescriptionWrap';
function Field(_a) {
  var _b;
  var type = _a.type,
    render = _a.render,
    fieldProps = _a.fieldProps,
    resetProps = __rest(_a, ['type', 'render', 'fieldProps']);
  var _c = (_b = fieldProps) !== null && _b !== void 0 ? _b : {},
    children = _c.children,
    value = _c.value,
    resetFieldProps = __rest(_c, ['children', 'value']);
  var _d = useState(value !== null && value !== void 0 ? value : resetProps.value),
    val = _d[0],
    setVal = _d[1];
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
    case 'descriptions':
      return React.createElement(DescriptionWrap, { fieldProps: resetFieldProps });
    // 日期类型做一层数据转换
    case 'datePicker':
    case 'rangePicker':
    case 'timePicker':
    case 'timeRangePicker':
      return React.createElement(DateField, { fieldProps: fieldProps, value: val, type: type });
    case 'tag':
      return React.createElement(
        Tag,
        __assign({ color: 'default' }, fieldProps, { closable: false }),
        children
          ? children({
              value: val,
            })
          : val,
      );
    case 'avatar':
      return React.createElement(Avatar, __assign({}, resetFieldProps, { src: val }));
    case 'image':
      return React.createElement(
        Image,
        __assign({}, resetFieldProps, { preview: false, src: val }),
      );
    case 'checkbox':
      return React.createElement(
        Checkbox,
        __assign({}, resetFieldProps, { disabled: true, checked: val }),
      );
    case 'checkboxGroup':
      return React.createElement(
        Checkbox.Group,
        __assign({}, resetFieldProps, { disabled: true, value: val }),
      );
    case 'radioGroup':
      return React.createElement(
        Radio.Group,
        __assign({}, resetFieldProps, { disabled: true, value: val }),
      );
    case 'rate':
      return React.createElement(
        Rate,
        __assign({}, resetFieldProps, { disabled: true, value: val }),
      );
    case 'slider':
      return React.createElement(
        Slider,
        __assign({}, resetFieldProps, { disabled: true, value: val }),
      );
    case 'switch':
      return React.createElement(
        Switch,
        __assign({}, resetFieldProps, { disabled: true, checked: val }),
      );
    case 'progress':
      return React.createElement(Progress, __assign({}, resetFieldProps, { percent: val }));
    case 'upload':
      return React.createElement(
        Upload,
        __assign({}, resetFieldProps, {
          fileList: val,
          disabled: true,
          showUploadList: {
            showPreviewIcon: false,
            showRemoveIcon: false,
            showDownloadIcon: false,
          },
        }),
        children === null || children === void 0
          ? void 0
          : children(__assign(__assign({}, resetFieldProps), { value: val, disabled: true })),
      );
    case 'text':
    case 'textarea':
    case 'input':
    case 'search':
    case 'inputNumber':
    case 'inputGroup':
      return React.createElement(Text, { fieldProps: fieldProps, value: val });
    case 'password':
      return React.createElement(
        Input.Password,
        __assign({}, resetFieldProps, {
          visibilityToggle: false,
          bordered: false,
          disabled: true,
          value: val,
        }),
      );
    case 'select':
      return React.createElement(SelectField, { fieldProps: fieldProps, value: val });
    case 'treeSelect':
      return React.createElement(TreeSelectField, { fieldProps: fieldProps, value: val });
    case 'cascader':
      return React.createElement(CascaderField, { fieldProps: fieldProps, value: val });
    case 'divider':
      return React.createElement(Divider, __assign({}, resetFieldProps));
    case 'custom':
      return render === null || render === void 0
        ? void 0
        : render({
            value: val,
          });
    default:
      // 为以后做兼容 未识别的类型 也转换
      return React.createElement(
        React.Fragment,
        null,
        val === null || val === void 0 ? void 0 : val.toString(),
      );
  }
}
Field.displayName = 'Field';
export default Field;
