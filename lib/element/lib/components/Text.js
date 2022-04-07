define(['require', 'exports', 'react', 'antd'], function (
  require,
  exports,
  react_1,
  antd_1,
) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var Text = function (_a) {
    var value = _a.value,
      _b = _a.ellipsis,
      ellipsis = _b === void 0 ? true : _b,
      style = _a.style;
    return react_1.default.createElement(
      antd_1.Typography.Text,
      {
        ellipsis: ellipsis
          ? {
              tooltip: ellipsis,
            }
          : false,
        style: style,
      },
      value,
    );
  };
  exports.default = (0, react_1.memo)(Text);
});
//# sourceMappingURL=Text.js.map
