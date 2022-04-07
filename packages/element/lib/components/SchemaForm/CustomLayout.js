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
define(['require', 'exports', 'react', './ItemWrap', './ItemGroupWrap'], function (
  require,
  exports,
  react_1,
  ItemWrap_1,
  ItemGroupWrap_1,
) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var CustomLayout = function (_a) {
    var _b = _a.type,
      type = _b === void 0 ? 'custom' : _b,
      _c = _a.options,
      options = _c === void 0 ? [] : _c,
      formDisabled = _a.disabled,
      form = _a.form,
      formReset = __rest(_a, ['type', 'options', 'disabled', 'form']);
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      options.map(function (item, index) {
        var _a, _b, _c;
        return react_1.default.createElement(
          react_1.Fragment,
          {
            key:
              (_b =
                (_a = item === null || item === void 0 ? void 0 : item.name) === null ||
                _a === void 0
                  ? void 0
                  : _a.toString()) !== null && _b !== void 0
                ? _b
                : index.toString(),
          },
          item.type === 'group'
            ? react_1.default.createElement(
                ItemGroupWrap_1.default,
                __assign({}, item, {
                  formDisabled: formDisabled,
                  initialValues: formReset.initialValues,
                }),
              )
            : react_1.default.createElement(
                ItemWrap_1.default,
                __assign({}, item, {
                  values:
                    (item === null || item === void 0 ? void 0 : item.name) &&
                    ((_c =
                      formReset === null || formReset === void 0
                        ? void 0
                        : formReset.initialValues) === null || _c === void 0
                      ? void 0
                      : _c[item === null || item === void 0 ? void 0 : item.name]),
                  formDisabled: formDisabled,
                  initialValues: formReset.initialValues,
                }),
              ),
        );
      }),
    );
  };
  exports.default = (0, react_1.memo)(CustomLayout);
});
//# sourceMappingURL=CustomLayout.js.map
