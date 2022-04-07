define(['require', 'exports', 'react', './utils'], function (require, exports, react_1, utils_1) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var RenderWrap = function (_a) {
    var disabled = _a.disabled,
      render = _a.render,
      values = _a.values,
      initialValues = _a.initialValues,
      onChange = _a.onChange,
      fieldProps = _a.fieldProps;
    var _b = (0, react_1.useState)(),
      val = _b[0],
      setVal = _b[1];
    var onChangeFunc = function (params) {
      var _a;
      var str = (0, utils_1.converChangeEvent)(params);
      setVal(str);
      (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange) === null ||
      _a === void 0
        ? void 0
        : _a.call(fieldProps, str);
      onChange === null || onChange === void 0 ? void 0 : onChange(str);
    };
    (0, react_1.useEffect)(
      function () {
        setVal(values);
      },
      [values],
    );
    (0, react_1.useEffect)(
      function () {
        setVal(fieldProps.value);
      },
      [fieldProps.value],
    );
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      render === null || render === void 0
        ? void 0
        : render({
            value: val,
            onChange: onChangeFunc,
            disabled: disabled,
            initialValues: initialValues,
          }),
    );
  };
  exports.default = RenderWrap;
});
//# sourceMappingURL=RenderWrap.js.map
