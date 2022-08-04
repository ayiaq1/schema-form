(self.webpackChunk_dawdler_schema_form_doc=self.webpackChunk_dawdler_schema_form_doc||[]).push([[892],{73602:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_0__.m; }
/* harmony export */ });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67624);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93142);
// @ts-nocheck

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM2MDIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi8udW1pLXByb2R1Y3Rpb24vY29yZS91bWlFeHBvcnRzLnRzPzMxOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCB7IGhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xuZXhwb3J0IHsgcGx1Z2luIH0gZnJvbSAnLi9wbHVnaW4nO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///73602
`)},4179:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16924);
/* harmony import */ var dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44663);
/* harmony import */ var dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25016);










 // memo for page content, to avoid useless re-render since other context fields changed

var PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(_ref => {
  var DUMI_ALL_DEMOS = _ref.demos;
  var DumiDemo1 = DUMI_ALL_DEMOS['element-schemademocustom'].component;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    id: "schemaform-custom\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
    to: "#schemaform-custom\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon icon-link"
  })), "SchemaForm: custom\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40-schemaform-custom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
    to: "#\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40-schemaform-custom",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40 SchemaForm: custom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_2__.default, DUMI_ALL_DEMOS['element-schemademocustom'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
    to: "#api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon icon-link"
  })), "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    src: "../../packages/element/src/components/SchemaForm/index.tsx",
    identifier: "SchemaForm",
    export: "default"
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),
      demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink.scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageContent, {
    demos: demos
  });
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE3OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkYXdkbGVyL3NjaGVtYS1mb3JtLWRvYy8uL2RvY3MvZ3VpZGUvU2NoZW1hRm9ybUN1c3RvbS5tZD85N2RmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4gICAgaW1wb3J0IHsgZHluYW1pYyB9IGZyb20gJ2R1bWknO1xuICAgIGltcG9ydCB7IExpbmssIEFuY2hvckxpbmssIGNvbnRleHQgfSBmcm9tICdkdW1pL3RoZW1lJztcbiAgICBpbXBvcnQgQVBJIGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9BUEkuanMnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9BbGVydC5qcyc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL0JhZGdlLmpzJztcbmltcG9ydCBFeGFtcGxlIGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9FeGFtcGxlLmpzJztcbmltcG9ydCBQcmV2aWV3ZXIgZnJvbSAnZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL1ByZXZpZXdlci5qcyc7XG5pbXBvcnQgU291cmNlQ29kZSBmcm9tICdkdW1pLXRoZW1lLWRlZmF1bHQvZXMvYnVpbHRpbnMvU291cmNlQ29kZS5qcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL1RhYmxlLmpzJztcbmltcG9ydCBUcmVlIGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9UcmVlLmpzJztcblxuICAgIC8vIG1lbW8gZm9yIHBhZ2UgY29udGVudCwgdG8gYXZvaWQgdXNlbGVzcyByZS1yZW5kZXIgc2luY2Ugb3RoZXIgY29udGV4dCBmaWVsZHMgY2hhbmdlZFxuICAgIGNvbnN0IFBhZ2VDb250ZW50ID0gUmVhY3QubWVtbygoeyBkZW1vczogRFVNSV9BTExfREVNT1MgfSkgPT4ge1xuICAgICAgY29uc3QgRHVtaURlbW8xID0gRFVNSV9BTExfREVNT1NbJ2VsZW1lbnQtc2NoZW1hZGVtb2N1c3RvbSddLmNvbXBvbmVudFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD48ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+PGgxIGlkPVwic2NoZW1hZm9ybS1jdXN0b23oh6rlrprkuYnluIPlsYBcIj48QW5jaG9yTGluayB0bz1cIiNzY2hlbWFmb3JtLWN1c3RvbeiHquWumuS5ieW4g+WxgFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYkluZGV4PXstMX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIiAvPjwvQW5jaG9yTGluaz5TY2hlbWFGb3JtOiBjdXN0b23oh6rlrprkuYnluIPlsYA8L2gxPlxuPGgyIGlkPVwi6Ieq5a6a5LmJ5biD5bGALXNjaGVtYWZvcm0tY3VzdG9tXCI+PEFuY2hvckxpbmsgdG89XCIj6Ieq5a6a5LmJ5biD5bGALXNjaGVtYWZvcm0tY3VzdG9tXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9ey0xfT48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9BbmNob3JMaW5rPuiHquWumuS5ieW4g+WxgCBTY2hlbWFGb3JtOiBjdXN0b208L2gyPlxuPC9kaXY+PFByZXZpZXdlciB7Li4uRFVNSV9BTExfREVNT1NbJ2VsZW1lbnQtc2NoZW1hZGVtb2N1c3RvbSddLnByZXZpZXdlclByb3BzfT48RHVtaURlbW8xIC8+PC9QcmV2aWV3ZXI+XG48ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+PGgyIGlkPVwiYXBpXCI+PEFuY2hvckxpbmsgdG89XCIjYXBpXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9ey0xfT48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9BbmNob3JMaW5rPkFQSTwvaDI+XG48QVBJIHNyYz1cIi4uLy4uL3BhY2thZ2VzL2VsZW1lbnQvc3JjL2NvbXBvbmVudHMvU2NoZW1hRm9ybS9pbmRleC50c3hcIiBpZGVudGlmaWVyPVwiU2NoZW1hRm9ybVwiIGV4cG9ydD1cImRlZmF1bHRcIiAvPjwvZGl2PjwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9KVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IGRlbW9zIH0gPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAvLyBzY3JvbGwgdG8gYW5jaG9yIGFmdGVyIHBhZ2UgY29tcG9uZW50IGxvYWRlZFxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzPy5sb2NhdGlvbj8uaGFzaCkge1xuICAgICAgICAgIEFuY2hvckxpbmsuc2Nyb2xsVG9BbmNob3IoZGVjb2RlVVJJQ29tcG9uZW50KHByb3BzLmxvY2F0aW9uLmhhc2guc2xpY2UoMSkpKTtcbiAgICAgICAgfVxuICAgICAgfSwgW10pO1xuXG4gICAgICByZXR1cm4gPFBhZ2VDb250ZW50IGRlbW9zPXtkZW1vc30gLz47XG4gIH0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///4179
`)},44663:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16924);


var LOCALE_TEXTS = {
  'zh-CN': {
    name: '\u5C5E\u6027\u540D',
    description: '\u63CF\u8FF0',
    type: '\u7C7B\u578B',
    default: '\u9ED8\u8BA4\u503C',
    required: '(\u5FC5\u9009)'
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)'
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (function (_ref) {
  var identifier = _ref.identifier,
      expt = _ref.export;
  var data = (0,dumi_theme__WEBPACK_IMPORTED_MODULE_1__.useApiData)(identifier);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),
      locale = _useContext.locale;

  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, data[expt].map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row.identifier
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, row.description || '--'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, row.default || row.required && texts.required || '--')));
  }))));
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ2NjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9ub2RlX21vZHVsZXMvZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL0FQSS5qcz9mYTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29udGV4dCwgdXNlQXBpRGF0YSB9IGZyb20gJ2R1bWkvdGhlbWUnO1xudmFyIExPQ0FMRV9URVhUUyA9IHtcbiAgJ3poLUNOJzoge1xuICAgIG5hbWU6ICflsZ7mgKflkI0nLFxuICAgIGRlc2NyaXB0aW9uOiAn5o+P6L+wJyxcbiAgICB0eXBlOiAn57G75Z6LJyxcbiAgICBkZWZhdWx0OiAn6buY6K6k5YC8JyxcbiAgICByZXF1aXJlZDogJyjlv4XpgIkpJ1xuICB9LFxuICAnZW4tVVMnOiB7XG4gICAgbmFtZTogJ05hbWUnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24nLFxuICAgIHR5cGU6ICdUeXBlJyxcbiAgICBkZWZhdWx0OiAnRGVmYXVsdCcsXG4gICAgcmVxdWlyZWQ6ICcocmVxdWlyZWQpJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBpZGVudGlmaWVyID0gX3JlZi5pZGVudGlmaWVyLFxuICAgICAgZXhwdCA9IF9yZWYuZXhwb3J0O1xuICB2YXIgZGF0YSA9IHVzZUFwaURhdGEoaWRlbnRpZmllcik7XG5cbiAgdmFyIF91c2VDb250ZXh0ID0gdXNlQ29udGV4dChjb250ZXh0KSxcbiAgICAgIGxvY2FsZSA9IF91c2VDb250ZXh0LmxvY2FsZTtcblxuICB2YXIgdGV4dHMgPSAvXnpofGNuJC9pLnRlc3QobG9jYWxlKSA/IExPQ0FMRV9URVhUU1snemgtQ04nXSA6IExPQ0FMRV9URVhUU1snZW4tVVMnXTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBkYXRhICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6IDI0XG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCB0ZXh0cy5uYW1lKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCB0ZXh0cy5kZXNjcmlwdGlvbiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgdGV4dHMudHlwZSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgdGV4dHMuZGVmYXVsdCkpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBkYXRhW2V4cHRdLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge1xuICAgICAga2V5OiByb3cuaWRlbnRpZmllclxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgcm93LmlkZW50aWZpZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHJvdy5kZXNjcmlwdGlvbiB8fCAnLS0nKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgcm93LnR5cGUpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgcm93LmRlZmF1bHQgfHwgcm93LnJlcXVpcmVkICYmIHRleHRzLnJlcXVpcmVkIHx8ICctLScpKSk7XG4gIH0pKSkpO1xufSk7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///44663
`)}}]);
