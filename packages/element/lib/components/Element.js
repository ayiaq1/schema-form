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
define([
  'require',
  'exports',
  'react',
  'antd',
  './Field',
  './Text',
  './ListWrap',
  './SchemaForm/utils',
], function (require, exports, react_1, antd_1, Field_1, Text_1, ListWrap_1, utils_1) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
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
    var _e = (0, react_1.useState)(value !== null && value !== void 0 ? value : resetProps.value),
      val = _e[0],
      setVal = _e[1];
    var onChangeFunc = function (params) {
      var _a;
      var values = (0, utils_1.converChangeEvent)(params);
      setVal(values);
      (_a =
        resetFieldProps === null || resetFieldProps === void 0
          ? void 0
          : resetFieldProps.onChange) === null || _a === void 0
        ? void 0
        : _a.call(resetFieldProps, values);
      onChange === null || onChange === void 0 ? void 0 : onChange(values);
    };
    (0, react_1.useEffect)(
      function () {
        setVal(value);
      },
      [value],
    );
    // 表单重置的时候值为 resetProps.value
    (0, react_1.useEffect)(
      function () {
        setVal(resetProps.value);
      },
      [resetProps.value],
    );
    switch (type) {
      case 'text':
        return react_1.default.createElement(
          Text_1.default,
          __assign({}, resetProps, resetFieldProps, { value: val }),
        );
      case 'list-wrap':
        return react_1.default.createElement(
          ListWrap_1.default,
          __assign({}, resetProps, resetFieldProps, { value: val }),
        );
      case 'input':
        return react_1.default.createElement(
          Field_1.default,
          __assign({}, resetProps, {
            fieldProps: resetFieldProps,
            onChange: onChangeFunc,
            value: val,
            mode: 'edit',
          }),
        );
      // ======== 以下为 antd 组件 ==========
      case 'input-group':
        return react_1.default.createElement(
          antd_1.Input.Group,
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
        return react_1.default.createElement(
          antd_1.Input.TextArea,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'search':
        return react_1.default.createElement(
          antd_1.Input.Search,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'password':
        return react_1.default.createElement(
          antd_1.Input.Password,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'input-number':
        return react_1.default.createElement(
          antd_1.InputNumber,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'select':
        return react_1.default.createElement(
          antd_1.Select,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'datepicker':
        return react_1.default.createElement(
          antd_1.DatePicker,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'rangepicker':
        return react_1.default.createElement(
          antd_1.DatePicker.RangePicker,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'timePicker':
        return react_1.default.createElement(
          antd_1.TimePicker,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'timeRangePicker':
        return react_1.default.createElement(
          antd_1.TimePicker.RangePicker,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'checkbox':
        return react_1.default.createElement(
          antd_1.Checkbox,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, checked: val }),
        );
      case 'checkbox-group':
        return react_1.default.createElement(
          antd_1.Checkbox.Group,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'radio-group':
        return react_1.default.createElement(
          antd_1.Radio.Group,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'rate':
        return react_1.default.createElement(
          antd_1.Rate,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'slider':
        return react_1.default.createElement(
          antd_1.Slider,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, value: val }),
        );
      case 'switch':
        return react_1.default.createElement(
          antd_1.Switch,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, checked: val }),
        );
      case 'upload':
        return react_1.default.createElement(
          antd_1.Upload,
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
        return react_1.default.createElement(
          antd_1.Avatar,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, src: val }),
        );
      case 'image':
        return react_1.default.createElement(
          antd_1.Image,
          __assign({}, resetFieldProps, { onChange: onChangeFunc, src: val }),
        );
      case 'tag':
        return react_1.default.createElement(
          antd_1.Tag,
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
        return react_1.default.createElement(
          antd_1.Progress,
          __assign({}, resetFieldProps, { percent: val }),
        );
      case 'tree-select':
        return react_1.default.createElement(
          antd_1.TreeSelect,
          __assign({}, resetFieldProps, { value: val, onChange: onChangeFunc }),
        );
      case 'cascader':
        return react_1.default.createElement(
          antd_1.Cascader,
          __assign({}, resetFieldProps, { value: val, onChange: onChangeFunc }),
        );
      default:
        throw new Error('没有找到对应的type类型');
    }
  }
  Element.displayName = 'Element';
  exports.default = Element;
});
//# sourceMappingURL=Element.js.map
