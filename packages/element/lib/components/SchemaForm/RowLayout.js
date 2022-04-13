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
 * @Date: 2022-02-17 16:18:25
 * @Description: 默认使用 row 布局
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Col, Row } from 'antd';
import ItemGroupWrap from './ItemGroupWrap';
import ItemWrap from './ItemWrap';
import omit from 'omit.js';
var RowLayout = function (_a) {
  var _b = _a.type,
    type = _b === void 0 ? 'row' : _b,
    _c = _a.options,
    options = _c === void 0 ? [] : _c,
    formDisabled = _a.disabled,
    form = _a.form,
    formReset = __rest(_a, ['type', 'options', 'disabled', 'form']);
  var _d = formReset,
    _e = _d.gutter,
    gutter = _e === void 0 ? 16 : _e,
    _f = _d.span,
    span = _f === void 0 ? 6 : _f;
  return React.createElement(
    Row,
    { gutter: gutter },
    options.map(function (_a, index) {
      var _b, _c, _d;
      var col = _a.col,
        reset = __rest(_a, ['col']);
      var colProps = omit(reset, ['fieldProps', 'labelCol', 'wrapperCol', 'render']);
      return React.createElement(
        Col,
        __assign({}, colProps, {
          span: col !== null && col !== void 0 ? col : span,
          key:
            (_c =
              (_b = reset === null || reset === void 0 ? void 0 : reset.name) === null ||
              _b === void 0
                ? void 0
                : _b.toString()) !== null && _c !== void 0
              ? _c
              : index.toString(),
        }),
        reset.type === 'group'
          ? React.createElement(
              ItemGroupWrap,
              __assign({}, reset, {
                formDisabled: formDisabled,
                initialValues: formReset.initialValues,
              }),
            )
          : React.createElement(
              ItemWrap,
              __assign({}, reset, {
                values:
                  (reset === null || reset === void 0 ? void 0 : reset.name) &&
                  ((_d =
                    formReset === null || formReset === void 0
                      ? void 0
                      : formReset.initialValues) === null || _d === void 0
                    ? void 0
                    : _d[reset === null || reset === void 0 ? void 0 : reset.name]),
                formDisabled: formDisabled,
                initialValues: formReset.initialValues,
              }),
            ),
      );
    }),
  );
};
export default memo(RowLayout);
