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
  '../../index',
  './RenderWrap',
], function (require, exports, react_1, antd_1, index_1, RenderWrap_1) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var Item = antd_1.Form.Item;
  var ItemWrap = function (_a) {
    var formDisabled = _a.formDisabled,
      initialValues = _a.initialValues,
      values = _a.values,
      render = _a.render,
      type = _a.type,
      _b = _a.width,
      width = _b === void 0 ? '100%' : _b,
      _c = _a.fieldProps,
      fieldProps = _c === void 0 ? {} : _c,
      reset = __rest(_a, [
        'formDisabled',
        'initialValues',
        'values',
        'render',
        'type',
        'width',
        'fieldProps',
      ]);
    var _d = fieldProps,
      disabled = _d.disabled,
      resetFieldProps = __rest(_d, ['disabled']);
    return react_1.default.createElement(
      Item,
      __assign({}, reset),
      type === 'custom'
        ? // 自定义的使用外部组件
          react_1.default.createElement(
            RenderWrap_1.default,
            __assign({}, reset, {
              fieldProps: resetFieldProps,
              values: values,
              render: render,
              disabled:
                disabled !== null && disabled !== void 0
                  ? disabled
                  : formDisabled,
              initialValues: initialValues,
            }),
          )
        : // 透传
          react_1.default.createElement(
            index_1.Element,
            __assign(
              {
                style: ['checkbox', 'switch', 'tag'].includes(type)
                  ? undefined
                  : { width: width },
              },
              reset,
              {
                fieldProps: __assign(__assign({}, resetFieldProps), {
                  value: values,
                  disabled:
                    disabled !== null && disabled !== void 0
                      ? disabled
                      : formDisabled,
                }),
                type: type,
              },
            ),
          ),
    );
  };
  exports.default = (0, react_1.memo)(ItemWrap);
});
//# sourceMappingURL=ItemWrap.js.map
