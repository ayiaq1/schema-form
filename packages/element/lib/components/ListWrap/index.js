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
define(['require', 'exports', 'react', '../Field'], function (require, exports, react_1, Field_1) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var ListWrap = function (props) {
    var value = props.value,
      className = props.className,
      style = props.style;
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      value instanceof Array && value.length
        ? react_1.default.createElement(
            'ul',
            { className: className, style: style },
            value === null || value === void 0
              ? void 0
              : value.map(function (text, index) {
                  return react_1.default.createElement(
                    'li',
                    { key: index },
                    react_1.default.createElement(Field_1.default, __assign({}, props)),
                  );
                }),
          )
        : null,
    );
  };
  ListWrap.displayName = 'ListWrap';
  exports.default = (0, react_1.memo)(ListWrap);
});
//# sourceMappingURL=index.js.map
