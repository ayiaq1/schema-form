(self.webpackChunk_dawdler_schema_form_doc=self.webpackChunk_dawdler_schema_form_doc||[]).push([[760],{45034:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16924);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11695);










 // memo for page content, to avoid useless re-render since other context fields changed

var PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(_ref => {
  var DUMI_ALL_DEMOS = _ref.demos;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    id: "\\u4FDD\\u5B58\\u4E0A\\u4E00\\u6B21\\u72B6\\u6001\\u7684-hook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
    to: "#\\u4FDD\\u5B58\\u4E0A\\u4E00\\u6B21\\u72B6\\u6001\\u7684-hook",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon icon-link"
  })), "\\u4FDD\\u5B58\\u4E0A\\u4E00\\u6B21\\u72B6\\u6001\\u7684 Hook\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon icon-link"
  })), "Demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    code: "const preValue = usePrevious(value);\\n\\npreValue: {\\n  preValue;\\n}",
    lang: "jsx"
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDUwMzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9wYWNrYWdlcy9lbGVtZW50L3NyYy9ob29rcy91c2VQcmV2aW91cy9SRUFETUUubWQ/OGQ0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICAgIGltcG9ydCB7IGR5bmFtaWMgfSBmcm9tICdkdW1pJztcbiAgICBpbXBvcnQgeyBMaW5rLCBBbmNob3JMaW5rLCBjb250ZXh0IH0gZnJvbSAnZHVtaS90aGVtZSc7XG4gICAgaW1wb3J0IEFQSSBmcm9tICdkdW1pLXRoZW1lLWRlZmF1bHQvZXMvYnVpbHRpbnMvQVBJLmpzJztcbmltcG9ydCBBbGVydCBmcm9tICdkdW1pLXRoZW1lLWRlZmF1bHQvZXMvYnVpbHRpbnMvQWxlcnQuanMnO1xuaW1wb3J0IEJhZGdlIGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9CYWRnZS5qcyc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICdkdW1pLXRoZW1lLWRlZmF1bHQvZXMvYnVpbHRpbnMvRXhhbXBsZS5qcyc7XG5pbXBvcnQgUHJldmlld2VyIGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9QcmV2aWV3ZXIuanMnO1xuaW1wb3J0IFNvdXJjZUNvZGUgZnJvbSAnZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL1NvdXJjZUNvZGUuanMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ2R1bWktdGhlbWUtZGVmYXVsdC9lcy9idWlsdGlucy9UYWJsZS5qcyc7XG5pbXBvcnQgVHJlZSBmcm9tICdkdW1pLXRoZW1lLWRlZmF1bHQvZXMvYnVpbHRpbnMvVHJlZS5qcyc7XG5cbiAgICAvLyBtZW1vIGZvciBwYWdlIGNvbnRlbnQsIHRvIGF2b2lkIHVzZWxlc3MgcmUtcmVuZGVyIHNpbmNlIG90aGVyIGNvbnRleHQgZmllbGRzIGNoYW5nZWRcbiAgICBjb25zdCBQYWdlQ29udGVudCA9IFJlYWN0Lm1lbW8oKHsgZGVtb3M6IERVTUlfQUxMX0RFTU9TIH0pID0+IHtcbiAgICAgIFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj48aDEgaWQ9XCLkv53lrZjkuIrkuIDmrKHnirbmgIHnmoQtaG9va1wiPjxBbmNob3JMaW5rIHRvPVwiI+S/neWtmOS4iuS4gOasoeeKtuaAgeeahC1ob29rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9ey0xfT48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9BbmNob3JMaW5rPuS/neWtmOS4iuS4gOasoeeKtuaAgeeahCBIb29r44CCPC9oMT5cbjxoMiBpZD1cImRlbW9cIj48QW5jaG9yTGluayB0bz1cIiNkZW1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9ey0xfT48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiIC8+PC9BbmNob3JMaW5rPkRlbW88L2gyPlxuPFNvdXJjZUNvZGUgY29kZT17XCJjb25zdCBwcmVWYWx1ZSA9IHVzZVByZXZpb3VzKHZhbHVlKTtcXG5cXG5wcmVWYWx1ZToge1xcbiAgcHJlVmFsdWU7XFxufVwifSBsYW5nPVwianN4XCIgLz48L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pXG5cbiAgICBleHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgZGVtb3MgfSA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG5cbiAgICAgIC8vIHNjcm9sbCB0byBhbmNob3IgYWZ0ZXIgcGFnZSBjb21wb25lbnQgbG9hZGVkXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHM/LmxvY2F0aW9uPy5oYXNoKSB7XG4gICAgICAgICAgQW5jaG9yTGluay5zY3JvbGxUb0FuY2hvcihkZWNvZGVVUklDb21wb25lbnQocHJvcHMubG9jYXRpb24uaGFzaC5zbGljZSgxKSkpO1xuICAgICAgICB9XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIHJldHVybiA8UGFnZUNvbnRlbnQgZGVtb3M9e2RlbW9zfSAvPjtcbiAgfSJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///45034
`)}}]);
