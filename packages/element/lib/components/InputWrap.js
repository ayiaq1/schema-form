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
define(['require', 'exports', 'react', 'antd', './SchemaForm/utils'], function (
  require,
  exports,
  react_1,
  antd_1,
  utils_1,
) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  /** 默认屏蔽空格的Input组件 */
  var InputWrap = function (_a) {
    var onChange = _a.onChange,
      value = _a.value,
      _b = _a.fieldProps,
      fieldProps = _b === void 0 ? {} : _b;
    /** input的值 */
    var _c = (0, react_1.useState)(value),
      inputVal = _c[0],
      setInputVal = _c[1];
    /** 默认屏蔽空格 */
    var _d = fieldProps.isTrim,
      isTrim = _d === void 0 ? true : _d,
      fieldResetProps = __rest(fieldProps, ['isTrim']);
    /** 转换值 */
    var onChangeFun = function (params) {
      var str = (0, utils_1.converChangeEvent)(params);
      setInputVal(str);
      onChange === null || onChange === void 0 ? void 0 : onChange(str);
    };
    /** 失焦去空格 */
    var onBlurFun = function () {
      var str = inputVal;
      if (isTrim && (str !== null || str !== undefined)) {
        if (str instanceof Array) {
          str = str.map(function (item) {
            var v = item === null || item === void 0 ? void 0 : item.trim();
            return v === '' ? null : v;
          });
        } else {
          var v = str === null || str === void 0 ? void 0 : str.trim();
          str = v === '' ? null : v;
        }
      }
      setInputVal(str);
      onChange === null || onChange === void 0 ? void 0 : onChange(str);
    };
    (0, react_1.useEffect)(
      function () {
        if (value && value !== inputVal) {
          onChangeFun(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [value],
    );
    return react_1.default.createElement(
      antd_1.Input,
      __assign({ allowClear: true, maxLength: 200 }, fieldResetProps, {
        value: inputVal,
        onChange: onChangeFun,
        onBlur: onBlurFun,
      }),
    );
  };
  InputWrap.displayName = 'InputWrap';
  exports.default = InputWrap;
});
//# sourceMappingURL=InputWrap.js.map