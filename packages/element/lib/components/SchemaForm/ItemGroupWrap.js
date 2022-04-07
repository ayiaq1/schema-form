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
define(['require', 'exports', 'react', './ItemWrap'], function (
  require,
  exports,
  react_1,
  ItemWrap_1,
) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var ItemGroupWrap = function (_a) {
    var className = _a.className,
      style = _a.style,
      options = _a.options,
      formDisabled = _a.formDisabled,
      initialValues = _a.initialValues;
    return react_1.default.createElement(
      'div',
      { className: className, style: style },
      (options === null || options === void 0 ? void 0 : options.length)
        ? options.map(function (item, index) {
            var _a, _b;
            return react_1.default.createElement(
              ItemWrap_1.default,
              __assign(
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
                item,
                {
                  values:
                    (item === null || item === void 0 ? void 0 : item.name) &&
                    (initialValues === null || initialValues === void 0
                      ? void 0
                      : initialValues[item === null || item === void 0 ? void 0 : item.name]),
                  formDisabled: formDisabled,
                  initialValues: initialValues,
                },
              ),
            );
          })
        : null,
    );
  };
  exports.default = (0, react_1.memo)(ItemGroupWrap);
});
//# sourceMappingURL=ItemGroupWrap.js.map
