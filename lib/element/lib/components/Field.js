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
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
define(['require', 'exports', 'react', './Text', './InputWrap'], function (
  require,
  exports,
  react_1,
  Text_1,
  InputWrap_1,
) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  /** 字段包裹器 */
  var Field = function (props) {
    var _a;
    var _b = props.mode,
      mode = _b === void 0 ? 'edit' : _b,
      onChange = props.onChange,
      fieldProps = props.fieldProps;
    var value =
      (_a =
        fieldProps === null || fieldProps === void 0
          ? void 0
          : fieldProps.value) !== null && _a !== void 0
        ? _a
        : props === null || props === void 0
        ? void 0
        : props.value;
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      mode === 'read'
        ? react_1.default.createElement(
            Text_1.default,
            __assign({}, fieldProps, { value: value, type: 'text' }),
          )
        : react_1.default.createElement(InputWrap_1.default, {
            fieldProps: fieldProps,
            value: value,
            onChange: onChange,
            type: 'input',
          }),
    );
  };
  Field.displayName = 'Field';
  exports.default = (0, react_1.memo)(Field);
});
//# sourceMappingURL=Field.js.map
