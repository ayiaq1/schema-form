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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
define([
  'require',
  'exports',
  'react',
  'antd',
  './RowLayout',
  './CustomLayout',
], function (require, exports, react_1, antd_1, RowLayout_1, CustomLayout_1) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var SchemaForm = function (_a) {
    var _b = _a.type,
      type = _b === void 0 ? 'row' : _b,
      resetProps = __rest(_a, ['type']);
    var _c = resetProps.options,
      options = _c === void 0 ? [] : _c,
      form = resetProps.form,
      formReset = __rest(resetProps, ['options', 'form']);
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      (options === null || options === void 0 ? void 0 : options.length)
        ? react_1.default.createElement(
            antd_1.Form,
            __assign({}, formReset, { form: form }),
            type === 'row'
              ? react_1.default.createElement(
                  RowLayout_1.default,
                  __assign({ type: type }, resetProps),
                )
              : react_1.default.createElement(
                  CustomLayout_1.default,
                  __assign({ type: type }, resetProps),
                ),
          )
        : null,
    );
  };
  SchemaForm.displayName = 'SchemaForm';
  exports.default = (0, react_1.memo)(SchemaForm);
});
//# sourceMappingURL=index.js.map
