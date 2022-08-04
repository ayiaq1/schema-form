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
/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:18:42
 * @Description: 自定义布局，可以使用group混合布局。
 * @LastModifiedBy: yihuang
 */
import React, { Fragment, memo } from 'react';
import ItemWrap from './ItemWrap';
import ItemGroupWrap from './ItemGroupWrap';
var CustomLayout = function (_a) {
  var _b = _a.options,
    options = _b === void 0 ? [] : _b,
    formDisabled = _a.disabled,
    formReadonly = _a.readOnly,
    form = _a.form,
    formReset = __rest(_a, ['options', 'disabled', 'readOnly', 'form']);
  return React.createElement(
    React.Fragment,
    null,
    options.map(function (item, index) {
      var _a, _b, _c;
      return React.createElement(
        Fragment,
        {
          key:
            (_b =
              (_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0
                ? void 0
                : _a.toString()) !== null && _b !== void 0
              ? _b
              : index.toString(),
        },
        item.type === 'group'
          ? React.createElement(
              ItemGroupWrap,
              __assign({}, item, {
                formReadonly: formReadonly,
                formDisabled: formDisabled,
                initialValues: formReset.initialValues,
              }),
            )
          : React.createElement(
              ItemWrap,
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
                formReadonly: formReadonly,
                initialValues: formReset.initialValues,
              }),
            ),
      );
    }),
  );
};
export default memo(CustomLayout);
