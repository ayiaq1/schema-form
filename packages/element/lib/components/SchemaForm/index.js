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
import React, { memo } from 'react';
import { Form } from 'antd';
import RowLayout from './RowLayout';
import CustomLayout from './CustomLayout';
var SchemaForm = function (_a) {
  var _b = _a.type,
    type = _b === void 0 ? 'row' : _b,
    resetProps = __rest(_a, ['type']);
  var _c = resetProps.options,
    options = _c === void 0 ? [] : _c,
    form = resetProps.form,
    formReset = __rest(resetProps, ['options', 'form']);
  return React.createElement(
    React.Fragment,
    null,
    (options === null || options === void 0 ? void 0 : options.length)
      ? React.createElement(
          Form,
          __assign({}, formReset, { form: form }),
          type === 'row'
            ? React.createElement(RowLayout, __assign({ type: type }, resetProps))
            : React.createElement(CustomLayout, __assign({ type: type }, resetProps)),
        )
      : null,
  );
};
SchemaForm.displayName = 'SchemaForm';
export default memo(SchemaForm);
