(self.webpackChunk_dawdler_schema_form_doc=self.webpackChunk_dawdler_schema_form_doc||[]).push([[336],{73602:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_0__.m; }
/* harmony export */ });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67624);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93142);
// @ts-nocheck

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM2MDIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi8udW1pLXByb2R1Y3Rpb24vY29yZS91bWlFeHBvcnRzLnRzPzMxOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCB7IGhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xuZXhwb3J0IHsgcGx1Z2luIH0gZnJvbSAnLi9wbHVnaW4nO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///73602
`)},65466:function(__unused_webpack_module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(__webpack_require__(67294));

  _react = function _react() {
    return data;
  };

  return data;
}

function _theme() {
  const data = __webpack_require__(16924);

  _theme = function _theme() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const InlineRender = props => {
  return props.render();
};
/**
 * return demo preview arguments for single page route
 * @return [props, children] or [children]
 */


var _default = (props, demos) => {
  let result = [];
  const uuid = props.match.params.uuid;
  const inline = props.location.query.wrapper === undefined;
  const demo = demos[uuid];

  if (demo) {
    const previewerProps = _objectSpread(_objectSpread({}, demo.previewerProps), {}, {
      // disallowed matryoshka
      hideActions: (demo.previewerProps.hideActions || []).concat(['EXTERNAL'])
    });

    if (props.location.query.capture !== undefined) {
      // unchain refer
      previewerProps.motions = (previewerProps.motions || []).slice(); // unshift autoplay motion

      previewerProps.motions.unshift('autoplay'); // append capture motion if not exist

      if (previewerProps.motions.every(motion => !motion.startsWith('capture'))) {
        // compatible with qiankun app
        previewerProps.motions.push('capture:[id|=root]');
      }
    }

    if (inline) {
      // return demo component with motions handler
      result = [_react().default.createElement(InlineRender, {
        render: () => {
          (0, _theme().useMotions)(previewerProps.motions || [], typeof window !== 'undefined' ? document.documentElement : null);
          return _react().default.createElement('div', {}, _react().default.createElement(demo.component));
        }
      })];
    } else {
      // return demo component with previewer props, for render demo via Previewer.tsx in theme
      result = [previewerProps, _react().default.createElement(demo.component)];
    }
  }

  return result;
};

exports.default = _default;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU0NjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9ub2RlX21vZHVsZXMvQHVtaWpzL3ByZXNldC1kdW1pL2xpYi9wbHVnaW5zL2ZlYXR1cmVzL2RlbW8vZ2V0RGVtb1JlbmRlckFyZ3MuanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX3JlYWN0KCkge1xuICBjb25zdCBkYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4gIF9yZWFjdCA9IGZ1bmN0aW9uIF9yZWFjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RoZW1lKCkge1xuICBjb25zdCBkYXRhID0gcmVxdWlyZShcImR1bWkvdGhlbWVcIik7XG5cbiAgX3RoZW1lID0gZnVuY3Rpb24gX3RoZW1lKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5jb25zdCBJbmxpbmVSZW5kZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiBwcm9wcy5yZW5kZXIoKTtcbn07XG4vKipcbiAqIHJldHVybiBkZW1vIHByZXZpZXcgYXJndW1lbnRzIGZvciBzaW5nbGUgcGFnZSByb3V0ZVxuICogQHJldHVybiBbcHJvcHMsIGNoaWxkcmVuXSBvciBbY2hpbGRyZW5dXG4gKi9cblxuXG52YXIgX2RlZmF1bHQgPSAocHJvcHMsIGRlbW9zKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgY29uc3QgdXVpZCA9IHByb3BzLm1hdGNoLnBhcmFtcy51dWlkO1xuICBjb25zdCBpbmxpbmUgPSBwcm9wcy5sb2NhdGlvbi5xdWVyeS53cmFwcGVyID09PSB1bmRlZmluZWQ7XG4gIGNvbnN0IGRlbW8gPSBkZW1vc1t1dWlkXTtcblxuICBpZiAoZGVtbykge1xuICAgIGNvbnN0IHByZXZpZXdlclByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZW1vLnByZXZpZXdlclByb3BzKSwge30sIHtcbiAgICAgIC8vIGRpc2FsbG93ZWQgbWF0cnlvc2hrYVxuICAgICAgaGlkZUFjdGlvbnM6IChkZW1vLnByZXZpZXdlclByb3BzLmhpZGVBY3Rpb25zIHx8IFtdKS5jb25jYXQoWydFWFRFUk5BTCddKVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BzLmxvY2F0aW9uLnF1ZXJ5LmNhcHR1cmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdW5jaGFpbiByZWZlclxuICAgICAgcHJldmlld2VyUHJvcHMubW90aW9ucyA9IChwcmV2aWV3ZXJQcm9wcy5tb3Rpb25zIHx8IFtdKS5zbGljZSgpOyAvLyB1bnNoaWZ0IGF1dG9wbGF5IG1vdGlvblxuXG4gICAgICBwcmV2aWV3ZXJQcm9wcy5tb3Rpb25zLnVuc2hpZnQoJ2F1dG9wbGF5Jyk7IC8vIGFwcGVuZCBjYXB0dXJlIG1vdGlvbiBpZiBub3QgZXhpc3RcblxuICAgICAgaWYgKHByZXZpZXdlclByb3BzLm1vdGlvbnMuZXZlcnkobW90aW9uID0+ICFtb3Rpb24uc3RhcnRzV2l0aCgnY2FwdHVyZScpKSkge1xuICAgICAgICAvLyBjb21wYXRpYmxlIHdpdGggcWlhbmt1biBhcHBcbiAgICAgICAgcHJldmlld2VyUHJvcHMubW90aW9ucy5wdXNoKCdjYXB0dXJlOltpZHw9cm9vdF0nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICAvLyByZXR1cm4gZGVtbyBjb21wb25lbnQgd2l0aCBtb3Rpb25zIGhhbmRsZXJcbiAgICAgIHJlc3VsdCA9IFtfcmVhY3QoKS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSW5saW5lUmVuZGVyLCB7XG4gICAgICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICAgICgwLCBfdGhlbWUoKS51c2VNb3Rpb25zKShwcmV2aWV3ZXJQcm9wcy5tb3Rpb25zIHx8IFtdLCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGwpO1xuICAgICAgICAgIHJldHVybiBfcmVhY3QoKS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCBfcmVhY3QoKS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZGVtby5jb21wb25lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSldO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gZGVtbyBjb21wb25lbnQgd2l0aCBwcmV2aWV3ZXIgcHJvcHMsIGZvciByZW5kZXIgZGVtbyB2aWEgUHJldmlld2VyLnRzeCBpbiB0aGVtZVxuICAgICAgcmVzdWx0ID0gW3ByZXZpZXdlclByb3BzLCBfcmVhY3QoKS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZGVtby5jb21wb25lbnQpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///65466
`)}}]);
