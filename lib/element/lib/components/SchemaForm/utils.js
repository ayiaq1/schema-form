/*
 * @Author: yihuang
 * @Date: 2022-03-01 11:47:38
 * @Description: 转换工具
 * @LastModifiedBy: yihuang
 */
define(['require', 'exports'], function (require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.converChangeEvent = void 0;
  /** 转换所有UI组件的onChange数据 */
  var converChangeEvent = function (params) {
    var str;
    if (params === null || params === void 0 ? void 0 : params.target) {
      str = params.target.value;
    } else {
      str = params;
    }
    return str;
  };
  exports.converChangeEvent = converChangeEvent;
});
//# sourceMappingURL=utils.js.map
