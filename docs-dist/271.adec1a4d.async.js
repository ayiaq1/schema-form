(self.webpackChunk_test_schema_form =
  self.webpackChunk_test_schema_form || []).push([
  [271],
  {
    53432: function (M, m, b) {
      'use strict';
      function _(f) {
        return (
          (_ =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (i) {
                  return typeof i;
                }
              : function (i) {
                  return i &&
                    typeof Symbol == 'function' &&
                    i.constructor === Symbol &&
                    i !== Symbol.prototype
                    ? 'symbol'
                    : typeof i;
                }),
          _(f)
        );
      }
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      var A = j(b(67294)),
        w = b(33761),
        S = T(b(93096));
      function T(f) {
        return f && f.__esModule ? f : { default: f };
      }
      function E(f) {
        if (typeof WeakMap != 'function') return null;
        var i = new WeakMap(),
          s = new WeakMap();
        return (E = function (g) {
          return g ? s : i;
        })(f);
      }
      function j(f, i) {
        if (!i && f && f.__esModule) return f;
        if (f === null || (_(f) !== 'object' && typeof f != 'function'))
          return { default: f };
        var s = E(i);
        if (s && s.has(f)) return s.get(f);
        var v = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var P in f)
          if (P !== 'default' && Object.prototype.hasOwnProperty.call(f, P)) {
            var C = g ? Object.getOwnPropertyDescriptor(f, P) : null;
            C && (C.get || C.set)
              ? Object.defineProperty(v, P, C)
              : (v[P] = f[P]);
          }
        return (v.default = f), s && s.set(f, v), v;
      }
      function O() {
        return (
          (O =
            Object.assign ||
            function (f) {
              for (var i = 1; i < arguments.length; i++) {
                var s = arguments[i];
                for (var v in s)
                  Object.prototype.hasOwnProperty.call(s, v) && (f[v] = s[v]);
              }
              return f;
            }),
          O.apply(this, arguments)
        );
      }
      function d(f, i) {
        return n(f) || u(f, i) || l(f, i) || c();
      }
      function c() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(f, i) {
        if (!!f) {
          if (typeof f == 'string') return r(f, i);
          var s = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (s === 'Object' && f.constructor && (s = f.constructor.name),
            s === 'Map' || s === 'Set')
          )
            return Array.from(f);
          if (
            s === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
          )
            return r(f, i);
        }
      }
      function r(f, i) {
        (i == null || i > f.length) && (i = f.length);
        for (var s = 0, v = new Array(i); s < i; s++) v[s] = f[s];
        return v;
      }
      function u(f, i) {
        var s =
          f == null
            ? null
            : (typeof Symbol != 'undefined' && f[Symbol.iterator]) ||
              f['@@iterator'];
        if (s != null) {
          var v = [],
            g = !0,
            P = !1,
            C,
            I;
          try {
            for (
              s = s.call(f);
              !(g = (C = s.next()).done) &&
              (v.push(C.value), !(i && v.length === i));
              g = !0
            );
          } catch (k) {
            (P = !0), (I = k);
          } finally {
            try {
              !g && s.return != null && s.return();
            } finally {
              if (P) throw I;
            }
          }
          return v;
        }
      }
      function n(f) {
        if (Array.isArray(f)) return f;
      }
      function t(f, i) {
        if (!(f instanceof i))
          throw new TypeError('Cannot call a class as a function');
      }
      function e(f, i) {
        for (var s = 0; s < i.length; s++) {
          var v = i[s];
          (v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            'value' in v && (v.writable = !0),
            Object.defineProperty(f, v.key, v);
        }
      }
      function o(f, i, s) {
        return (
          i && e(f.prototype, i),
          s && e(f, s),
          Object.defineProperty(f, 'prototype', { writable: !1 }),
          f
        );
      }
      var a = new ((function () {
        function f() {
          t(this, f),
            (this.anchors = []),
            (this.listeners = []),
            (this.listener = void 0),
            (this.listener = (0, S.default)(
              this._matchActiveAnchor.bind(this),
              200,
            ));
        }
        return (
          o(f, [
            {
              key: '_matchActiveAnchor',
              value: function () {
                var s = this,
                  v = this.anchors.findIndex(function (C, I) {
                    return (
                      C.getBoundingClientRect().top > 128 ||
                      I === s.anchors.length - 1
                    );
                  }),
                  g = this.anchors[Math.max(0, v - 1)],
                  P = g.parentElement.id;
                this.listeners.forEach(function (C) {
                  return C(P);
                });
              },
            },
            {
              key: 'watch',
              value: function (s) {
                this.anchors.length === 0 &&
                  typeof window != 'undefined' &&
                  window.addEventListener('scroll', this.listener),
                  this.anchors.push(s),
                  this.listener();
              },
            },
            {
              key: 'unwatch',
              value: function (s) {
                this.anchors.splice(
                  this.anchors.findIndex(function (v) {
                    return v === s;
                  }),
                  1,
                ),
                  this.anchors.length === 0 &&
                    typeof window != 'undefined' &&
                    window.removeEventListener('scroll', this.listener);
              },
            },
            {
              key: 'listen',
              value: function (s) {
                this.listeners.push(s);
              },
            },
            {
              key: 'unlisten',
              value: function (s) {
                this.listeners.splice(
                  this.listeners.findIndex(function (v) {
                    return v === s;
                  }),
                  1,
                );
              },
            },
          ]),
          f
        );
      })())();
      function p(f) {
        return f.offsetTop + (f.offsetParent ? p(f.offsetParent) : 0);
      }
      var h = function f(i) {
        var s,
          v =
            ((s = i.to.match(/(#[^&?]*)/)) === null || s === void 0
              ? void 0
              : s[1]) || '',
          g = (0, A.useRef)(null),
          P = (0, A.useState)(!1),
          C = d(P, 2),
          I = C[0],
          k = C[1];
        return (
          (0, A.useEffect)(function () {
            var R, L;
            if (
              ['H1', 'H2', 'H3'].includes(
                (R = g.current) === null ||
                  R === void 0 ||
                  (L = R.parentElement) === null ||
                  L === void 0
                  ? void 0
                  : L.tagName,
              ) &&
              g.current.parentElement.id
            ) {
              var $ = g.current;
              return (
                a.watch($),
                function () {
                  a.unwatch($);
                }
              );
            }
            var x = function (N) {
              k(v === '#'.concat(N));
            };
            return (
              a.listen(x),
              function () {
                return a.unlisten(x);
              }
            );
          }, []),
          A.default.createElement(
            w.NavLink,
            O({}, i, {
              ref: g,
              onClick: function () {
                return f.scrollToAnchor(v.substring(1));
              },
              isActive: function () {
                return I;
              },
            }),
          )
        );
      };
      h.scrollToAnchor = function (f) {
        window.requestAnimationFrame(function () {
          var i = document.getElementById(decodeURIComponent(f));
          i && window.scrollTo(0, p(i) - 100);
        });
      };
      var y = h;
      m.default = y;
    },
    91290: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = m.LinkWrapper = void 0);
      var _ = S(b(67294)),
        A = b(33761),
        w = ['to'];
      function S(c) {
        return c && c.__esModule ? c : { default: c };
      }
      function T() {
        return (
          (T =
            Object.assign ||
            function (c) {
              for (var l = 1; l < arguments.length; l++) {
                var r = arguments[l];
                for (var u in r)
                  Object.prototype.hasOwnProperty.call(r, u) && (c[u] = r[u]);
              }
              return c;
            }),
          T.apply(this, arguments)
        );
      }
      function E(c, l) {
        if (c == null) return {};
        var r = j(c, l),
          u,
          n;
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(c);
          for (n = 0; n < t.length; n++)
            (u = t[n]),
              !(l.indexOf(u) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(c, u) ||
                  (r[u] = c[u]));
        }
        return r;
      }
      function j(c, l) {
        if (c == null) return {};
        var r = {},
          u = Object.keys(c),
          n,
          t;
        for (t = 0; t < u.length; t++)
          (n = u[t]), !(l.indexOf(n) >= 0) && (r[n] = c[n]);
        return r;
      }
      var O = function (l) {
        return function (r) {
          var u = r.to,
            n = E(r, w),
            t = /^(\w+:)?\/\/|^(mailto|tel):/.test(u) || !u,
            e = _.default.isValidElement(n.children);
          return _.default.createElement(
            l,
            T(
              {
                to: u || '',
                component: t
                  ? function () {
                      return _.default.createElement(
                        'a',
                        {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          href: u,
                        },
                        n.children,
                        u &&
                          !e &&
                          _.default.createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            _.default.createElement('path', {
                              fill: 'currentColor',
                              d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            _.default.createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      );
                    }
                  : void 0,
              },
              n,
              t
                ? {}
                : {
                    onClick: function () {
                      var a;
                      window.scrollTo({ top: 0 });
                      for (
                        var p = arguments.length, h = new Array(p), y = 0;
                        y < p;
                        y++
                      )
                        h[y] = arguments[y];
                      (a = n.onClick) === null ||
                        a === void 0 ||
                        a.apply(this, h);
                    },
                  },
            ),
          );
        };
      };
      m.LinkWrapper = O;
      var d = O(A.Link);
      m.default = d;
    },
    20045: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      var _ = b(33761),
        A = b(91290),
        w = (0, A.LinkWrapper)(_.NavLink);
      m.default = w;
    },
    20052: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const S = A(b(67294));
        return (
          (_ = function () {
            return S;
          }),
          S
        );
      }
      function A(S) {
        return S && S.__esModule ? S : { default: S };
      }
      var w = _().default.createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
        apis: {},
        demos: {},
      });
      m.default = w;
    },
    73918: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const r = b(67294);
        return (
          (_ = function () {
            return r;
          }),
          r
        );
      }
      var A = w(b(20052));
      function w(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function S(r, u) {
        return d(r) || O(r, u) || E(r, u) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(r, u) {
        if (!!r) {
          if (typeof r == 'string') return j(r, u);
          var n = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (n === 'Object' && r.constructor && (n = r.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(r);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return j(r, u);
        }
      }
      function j(r, u) {
        (u == null || u > r.length) && (u = r.length);
        for (var n = 0, t = new Array(u); n < u; n++) t[n] = r[n];
        return t;
      }
      function O(r, u) {
        var n =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
              r['@@iterator'];
        if (n != null) {
          var t = [],
            e = !0,
            o = !1,
            a,
            p;
          try {
            for (
              n = n.call(r);
              !(e = (a = n.next()).done) &&
              (t.push(a.value), !(u && t.length === u));
              e = !0
            );
          } catch (h) {
            (o = !0), (p = h);
          } finally {
            try {
              !e && n.return != null && n.return();
            } finally {
              if (o) throw p;
            }
          }
          return t;
        }
      }
      function d(r) {
        if (Array.isArray(r)) return r;
      }
      function c(r, u, n) {
        return Object.entries(r[u]).reduce(
          (t, [e, o]) => (
            (t[e] = o.map((a) => {
              const p = { description: a.description };
              return (
                Object.keys(a).forEach((h) => {
                  if (h.startsWith('description.')) {
                    const y = h.match(/^description\.(.*)$/),
                      f = S(y, 2),
                      i = f[1];
                    i && i === n && (p.description = a[h]);
                  } else p[h] = a[h];
                }),
                p
              );
            })),
            t
          ),
          {},
        );
      }
      var l = (r) => {
        const u = (0, _().useContext)(A.default),
          n = u.locale,
          t = u.apis,
          e = (0, _().useState)(c(t, r, n)),
          o = S(e, 2),
          a = o[0],
          p = o[1];
        return (
          (0, _().useEffect)(() => {
            p(c(t, r, n));
          }, [t, r, n]),
          a
        );
      };
      m.default = l;
    },
    18178: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const t = b(67294);
        return (
          (_ = function () {
            return t;
          }),
          t
        );
      }
      function A() {
        const t = w(b(26961));
        return (
          (A = function () {
            return t;
          }),
          t
        );
      }
      function w(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function S(t, e) {
        return d(t) || O(t, e) || E(t, e) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(t, e) {
        if (!!t) {
          if (typeof t == 'string') return j(t, e);
          var o = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (o === 'Object' && t.constructor && (o = t.constructor.name),
            o === 'Map' || o === 'Set')
          )
            return Array.from(t);
          if (
            o === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          )
            return j(t, e);
        }
      }
      function j(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var o = 0, a = new Array(e); o < e; o++) a[o] = t[o];
        return a;
      }
      function O(t, e) {
        var o =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (o != null) {
          var a = [],
            p = !0,
            h = !1,
            y,
            f;
          try {
            for (
              o = o.call(t);
              !(p = (y = o.next()).done) &&
              (a.push(y.value), !(e && a.length === e));
              p = !0
            );
          } catch (i) {
            (h = !0), (f = i);
          } finally {
            try {
              !p && o.return != null && o.return();
            } finally {
              if (h) throw f;
            }
          }
          return a;
        }
      }
      function d(t) {
        if (Array.isArray(t)) return t;
      }
      const c = 'https://codesandbox.io/api/v1/sandboxes/define';
      function l(t) {
        return A()
          .default.compressToBase64(JSON.stringify(t))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      }
      function r(t) {
        const e = document.createElement('span');
        e.innerHTML = t;
        const o = e.textContent;
        return e.remove(), o;
      }
      function u(t) {
        const e = Boolean(t.sources._.tsx),
          o = e ? '.tsx' : '.jsx',
          a = {},
          p = {},
          h = Object.values(t.dependencies).filter((i) => i.css),
          y = `App${o}`,
          f = `index${o}`;
        return (
          Object.entries(t.dependencies).forEach(([i, { version: s }]) => {
            p[i] = s;
          }),
          p['react-dom'] || (p['react-dom'] = p.react || 'latest'),
          (a['sandbox.config.json'] = {
            content: JSON.stringify(
              {
                template: e
                  ? 'create-react-app-typescript'
                  : 'create-react-app',
              },
              null,
              2,
            ),
          }),
          (a['package.json'] = {
            content: JSON.stringify(
              {
                name: t.title,
                description:
                  r(t.description) || 'An auto-generated demo by dumi',
                main: f,
                dependencies: p,
                devDependencies: e ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
          }),
          (a['index.html'] = {
            content: '<div style="margin: 16px;" id="root"></div>',
          }),
          (a[f] = {
            content: `/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/

import React from 'react';
import ReactDOM from 'react-dom';
${h.map(({ css: i }) => `import '${i}';`).join(`
`)}
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`,
          }),
          Object.entries(t.sources).forEach(
            ([i, { tsx: s, jsx: v, content: g }]) => {
              a[i === '_' ? y : i] = { content: s || v || g };
            },
          ),
          l({ files: a })
        );
      }
      var n = (t, e = c) => {
        const o = (0, _().useState)(),
          a = S(o, 2),
          p = a[0],
          h = a[1];
        return (
          (0, _().useEffect)(() => {
            if (t) {
              const y = document.createElement('form'),
                f = document.createElement('input'),
                i = u(t);
              return (
                (y.method = 'POST'),
                (y.target = '_blank'),
                (y.style.display = 'none'),
                (y.action = e),
                y.appendChild(f),
                y.setAttribute('data-demo', t.title || ''),
                (f.name = 'parameters'),
                (f.value = i),
                document.body.appendChild(y),
                h(() => () => y.submit()),
                () => y.remove()
              );
            }
          }, [t]),
          p
        );
      };
      m.default = n;
    },
    90295: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const l = b(67294);
        return (
          (_ = function () {
            return l;
          }),
          l
        );
      }
      function A() {
        const l = w(b(735));
        return (
          (A = function () {
            return l;
          }),
          l
        );
      }
      function w(l) {
        return l && l.__esModule ? l : { default: l };
      }
      function S(l, r) {
        return d(l) || O(l, r) || E(l, r) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(l, r) {
        if (!!l) {
          if (typeof l == 'string') return j(l, r);
          var u = Object.prototype.toString.call(l).slice(8, -1);
          if (
            (u === 'Object' && l.constructor && (u = l.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(l);
          if (
            u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return j(l, r);
        }
      }
      function j(l, r) {
        (r == null || r > l.length) && (r = l.length);
        for (var u = 0, n = new Array(r); u < r; u++) n[u] = l[u];
        return n;
      }
      function O(l, r) {
        var u =
          l == null
            ? null
            : (typeof Symbol != 'undefined' && l[Symbol.iterator]) ||
              l['@@iterator'];
        if (u != null) {
          var n = [],
            t = !0,
            e = !1,
            o,
            a;
          try {
            for (
              u = u.call(l);
              !(t = (o = u.next()).done) &&
              (n.push(o.value), !(r && n.length === r));
              t = !0
            );
          } catch (p) {
            (e = !0), (a = p);
          } finally {
            try {
              !t && u.return != null && u.return();
            } finally {
              if (e) throw a;
            }
          }
          return n;
        }
      }
      function d(l) {
        if (Array.isArray(l)) return l;
      }
      var c = () => {
        const l = (0, _().useState)(),
          r = S(l, 2),
          u = r[0],
          n = r[1],
          t = (0, _().useState)('ready'),
          e = S(t, 2),
          o = e[0],
          a = e[1];
        return [
          (0, _().useCallback)((h) => {
            (0, A().default)(h),
              a('copied'),
              clearTimeout(u),
              n(
                setTimeout(() => {
                  a('ready');
                }, 2e3),
              );
          }, []),
          o,
        ];
      };
      m.default = c;
    },
    86579: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.getDemoUrl = m.getDemoRouteName = m.default = void 0);
      function _() {
        const n = b(67294);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      var A = w(b(20052));
      function w(n) {
        return n && n.__esModule ? n : { default: n };
      }
      function S(n, t) {
        return d(n) || O(n, t) || E(n, t) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(n, t) {
        if (!!n) {
          if (typeof n == 'string') return j(n, t);
          var e = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (e === 'Object' && n.constructor && (e = n.constructor.name),
            e === 'Map' || e === 'Set')
          )
            return Array.from(n);
          if (
            e === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return j(n, t);
        }
      }
      function j(n, t) {
        (t == null || t > n.length) && (t = n.length);
        for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
        return o;
      }
      function O(n, t) {
        var e =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) ||
              n['@@iterator'];
        if (e != null) {
          var o = [],
            a = !0,
            p = !1,
            h,
            y;
          try {
            for (
              e = e.call(n);
              !(a = (h = e.next()).done) &&
              (o.push(h.value), !(t && o.length === t));
              a = !0
            );
          } catch (f) {
            (p = !0), (y = f);
          } finally {
            try {
              !a && e.return != null && e.return();
            } finally {
              if (p) throw y;
            }
          }
          return o;
        }
      }
      function d(n) {
        if (Array.isArray(n)) return n;
      }
      function c() {
        return { NODE_ENV: 'production' }.PLATFORM_TYPE === 'BASEMENT';
      }
      const l = () => (c() ? '_demos' : '~demos');
      m.getDemoRouteName = l;
      const r = (n, t) => {
        var e;
        const o = window,
          a = o.location,
          p = a.href,
          h = a.origin,
          y = p.split(/#\//),
          f = S(y, 2),
          i = f[0];
        return [
          typeof f[1] == 'string' ? `${i}#` : h,
          `${
            ((e = window) === null || e === void 0 ? void 0 : e.routerBase) ||
            ''
          }/`.replace(/\/\/$/, '/'),
          l(),
          '/',
          n,
          `${t ? '.html' : ''}`,
        ].join('');
      };
      m.getDemoUrl = r;
      var u = (n) => {
        const t = (0, _().useContext)(A.default),
          e = t.config,
          o = (0, _().useState)(''),
          a = S(o, 2),
          p = a[0],
          h = a[1];
        return (
          (0, _().useEffect)(() => {
            h(n ? r(n, e.exportStatic && e.exportStatic.htmlSuffix) : null);
          }, [n, e]),
          p
        );
      };
      m.default = u;
    },
    86660: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const d = b(67294);
        return (
          (_ = function () {
            return d;
          }),
          d
        );
      }
      function A(d, c) {
        return j(d) || E(d, c) || S(d, c) || w();
      }
      function w() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function S(d, c) {
        if (!!d) {
          if (typeof d == 'string') return T(d, c);
          var l = Object.prototype.toString.call(d).slice(8, -1);
          if (
            (l === 'Object' && d.constructor && (l = d.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(d);
          if (
            l === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return T(d, c);
        }
      }
      function T(d, c) {
        (c == null || c > d.length) && (c = d.length);
        for (var l = 0, r = new Array(c); l < c; l++) r[l] = d[l];
        return r;
      }
      function E(d, c) {
        var l =
          d == null
            ? null
            : (typeof Symbol != 'undefined' && d[Symbol.iterator]) ||
              d['@@iterator'];
        if (l != null) {
          var r = [],
            u = !0,
            n = !1,
            t,
            e;
          try {
            for (
              l = l.call(d);
              !(u = (t = l.next()).done) &&
              (r.push(t.value), !(c && r.length === c));
              u = !0
            );
          } catch (o) {
            (n = !0), (e = o);
          } finally {
            try {
              !u && l.return != null && l.return();
            } finally {
              if (n) throw e;
            }
          }
          return r;
        }
      }
      function j(d) {
        if (Array.isArray(d)) return d;
      }
      var O = (d, c) => {
        const l = (...e) => {
            const o = {};
            return (
              Object.keys(e[1]).forEach((a) => {
                const p = (a.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  h = A(p, 2),
                  y = h[0],
                  f = h[1];
                (!f || f === e[0]) && (o[y || a] = e[1][a]);
              }),
              o
            );
          },
          r = (0, _().useState)(l(d, c)),
          u = A(r, 2),
          n = u[0],
          t = u[1];
        return (
          (0, _().useEffect)(() => {
            t(l(d, c));
          }, [d, c]),
          n
        );
      };
      m.default = O;
    },
    49167: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const c = b(67294);
        return (
          (_ = function () {
            return c;
          }),
          c
        );
      }
      function A(c, l) {
        return j(c) || E(c, l) || S(c, l) || w();
      }
      function w() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function S(c, l) {
        if (!!c) {
          if (typeof c == 'string') return T(c, l);
          var r = Object.prototype.toString.call(c).slice(8, -1);
          if (
            (r === 'Object' && c.constructor && (r = c.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(c);
          if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return T(c, l);
        }
      }
      function T(c, l) {
        (l == null || l > c.length) && (l = c.length);
        for (var r = 0, u = new Array(l); r < l; r++) u[r] = c[r];
        return u;
      }
      function E(c, l) {
        var r =
          c == null
            ? null
            : (typeof Symbol != 'undefined' && c[Symbol.iterator]) ||
              c['@@iterator'];
        if (r != null) {
          var u = [],
            n = !0,
            t = !1,
            e,
            o;
          try {
            for (
              r = r.call(c);
              !(n = (e = r.next()).done) &&
              (u.push(e.value), !(l && u.length === l));
              n = !0
            );
          } catch (a) {
            (t = !0), (o = a);
          } finally {
            try {
              !n && r.return != null && r.return();
            } finally {
              if (t) throw o;
            }
          }
          return u;
        }
      }
      function j(c) {
        if (Array.isArray(c)) return c;
      }
      function O(c, l, r, u = 0) {
        var n;
        if (u < l.length) {
          const t = l[u],
            e = () => O(c, l, r, u + 1),
            o = t.match(/^([^:]+):?(.*)$/) || [],
            a = A(o, 3),
            p = a[1],
            h = a[2];
          switch (p) {
            case 'autoplay':
              e();
              break;
            case 'click':
              const y = h.match(/^(global\()?(.+?)\)?$/) || [],
                f = A(y, 3),
                i = f[1],
                s = f[2];
              (n = (i ? document : c).querySelector(s)) === null ||
                n === void 0 ||
                n.click(),
                e();
              break;
            case 'timeout':
              setTimeout(e, Number(h));
              break;
            case 'capture':
              window.postMessage(
                { type: 'dumi:capture-element', value: h },
                '*',
              ),
                e();
              break;
            default:
              console.warn(`[dumi: motion] unknown motion '${t}', skip.`), e();
          }
        } else r();
      }
      var d = (c, l) => {
        const r = (0, _().useState)(!1),
          u = A(r, 2),
          n = u[0],
          t = u[1],
          e = (0, _().useCallback)(() => {
            n ||
              (O(l, c, () => {
                t(!1);
              }),
              t(!0));
          }, [c, l, n]);
        return (
          (0, _().useEffect)(() => {
            c[0] === 'autoplay' && l && e();
          }, [c, l]),
          [e, n]
        );
      };
      m.default = d;
    },
    14045: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const u = b(67294);
        return (
          (_ = function () {
            return u;
          }),
          u
        );
      }
      function A(u, n) {
        return j(u) || E(u, n) || S(u, n) || w();
      }
      function w() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function S(u, n) {
        if (!!u) {
          if (typeof u == 'string') return T(u, n);
          var t = Object.prototype.toString.call(u).slice(8, -1);
          if (
            (t === 'Object' && u.constructor && (t = u.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(u);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return T(u, n);
        }
      }
      function T(u, n) {
        (n == null || n > u.length) && (n = u.length);
        for (var t = 0, e = new Array(n); t < n; t++) e[t] = u[t];
        return e;
      }
      function E(u, n) {
        var t =
          u == null
            ? null
            : (typeof Symbol != 'undefined' && u[Symbol.iterator]) ||
              u['@@iterator'];
        if (t != null) {
          var e = [],
            o = !0,
            a = !1,
            p,
            h;
          try {
            for (
              t = t.call(u);
              !(o = (p = t.next()).done) &&
              (e.push(p.value), !(n && e.length === n));
              o = !0
            );
          } catch (y) {
            (a = !0), (h = y);
          } finally {
            try {
              !o && t.return != null && t.return();
            } finally {
              if (a) throw h;
            }
          }
          return e;
        }
      }
      function j(u) {
        if (Array.isArray(u)) return u;
      }
      const O = 'data-prefers-color',
        d = 'dumi:prefers-color';
      let c;
      class l {
        constructor() {
          (this.color = void 0),
            (this.callbacks = []),
            (this.color =
              localStorage.getItem(d) ||
              document.documentElement.getAttribute(O)),
            ['light', 'dark'].forEach((n) => {
              const t = this.getColorMedia(n),
                e = (o) => {
                  o.matches &&
                    this.color === 'auto' &&
                    (document.documentElement.setAttribute(O, n),
                    this.applyCallbacks());
                };
              t.addEventListener
                ? t.addEventListener('change', e)
                : t.addListener && t.addListener(e);
            });
        }
        getColorMedia(n) {
          return window.matchMedia(`(prefers-color-scheme: ${n})`);
        }
        isColorMode(n) {
          return this.getColorMedia(n).matches;
        }
        applyCallbacks() {
          this.callbacks.forEach((n) => n(this.color));
        }
        listen(n) {
          this.callbacks.push(n);
        }
        unlisten(n) {
          this.callbacks.splice(this.callbacks.indexOf(n), 1);
        }
        set(n) {
          return (
            (this.color = n),
            localStorage.setItem(d, n),
            this.applyCallbacks(),
            n === 'auto'
              ? document.documentElement.setAttribute(
                  O,
                  this.isColorMode('dark') ? 'dark' : 'light',
                )
              : document.documentElement.setAttribute(O, n),
            n
          );
        }
      }
      var r = () => {
        const u = (0, _().useState)(),
          n = A(u, 2),
          t = n[0],
          e = n[1],
          o = (0, _().useCallback)((a) => {
            c.set(a);
          }, []);
        return (
          (0, _().useEffect)(
            () => (
              (c = c || new l()), c.listen(e), e(c.color), () => c.unlisten(e)
            ),
            [],
          ),
          [t, o]
        );
      };
      m.default = r;
    },
    6928: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const e = b(67294);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function A(e, o) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(e);
          o &&
            (p = p.filter(function (h) {
              return Object.getOwnPropertyDescriptor(e, h).enumerable;
            })),
            a.push.apply(a, p);
        }
        return a;
      }
      function w(e) {
        for (var o = 1; o < arguments.length; o++) {
          var a = arguments[o] != null ? arguments[o] : {};
          o % 2
            ? A(Object(a), !0).forEach(function (p) {
                S(e, p, a[p]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : A(Object(a)).forEach(function (p) {
                Object.defineProperty(
                  e,
                  p,
                  Object.getOwnPropertyDescriptor(a, p),
                );
              });
        }
        return e;
      }
      function S(e, o, a) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = a),
          e
        );
      }
      function T(e, o) {
        return c(e) || d(e, o) || j(e, o) || E();
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function j(e, o) {
        if (!!e) {
          if (typeof e == 'string') return O(e, o);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (a === 'Object' && e.constructor && (a = e.constructor.name),
            a === 'Map' || a === 'Set')
          )
            return Array.from(e);
          if (
            a === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return O(e, o);
        }
      }
      function O(e, o) {
        (o == null || o > e.length) && (o = e.length);
        for (var a = 0, p = new Array(o); a < o; a++) p[a] = e[a];
        return p;
      }
      function d(e, o) {
        var a =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (a != null) {
          var p = [],
            h = !0,
            y = !1,
            f,
            i;
          try {
            for (
              a = a.call(e);
              !(h = (f = a.next()).done) &&
              (p.push(f.value), !(o && p.length === o));
              h = !0
            );
          } catch (s) {
            (y = !0), (i = s);
          } finally {
            try {
              !h && a.return != null && a.return();
            } finally {
              if (y) throw i;
            }
          }
          return p;
        }
      }
      function c(e) {
        if (Array.isArray(e)) return e;
      }
      const l = 'https://riddle.alibaba-inc.com/riddles/define';
      let r;
      const u = () => {
        const e = (0, _().useState)(Boolean(r)),
          o = T(e, 2),
          a = o[0],
          p = o[1];
        return (
          (0, _().useEffect)(() => {
            if (r === void 0) {
              const h = document.createElement('img');
              setTimeout(() => {
                (h.src = ''), h.remove();
              }, 200),
                (h.onload = () => {
                  (r = !0), p(!0), h.remove();
                }),
                (h.src =
                  'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png');
            }
          }, []),
          a
        );
      };
      function n(e) {
        let o = e.sources._.tsx || e.sources._.jsx;
        return (
          (o = o
            .replace(
              /^/,
              `import ReactDOM from 'react-dom';
`,
            )
            .replace('export default', 'const DumiDemo =').concat(`
ReactDOM.render(<DumiDemo />, mountNode);`)),
          o
        );
      }
      var t = (e) => {
        const o = (0, _().useState)(),
          a = T(o, 2),
          p = a[0],
          h = a[1],
          y = u();
        return (
          (0, _().useEffect)(() => {
            if (e && y && Object.keys(e.sources).length === 1) {
              var f;
              const i = document.createElement('form'),
                s = document.createElement('input');
              return (
                (i.method = 'POST'),
                (i.target = '_blank'),
                (i.style.display = 'none'),
                (i.action = l),
                i.appendChild(s),
                i.setAttribute('data-demo', e.title || ''),
                (s.name = 'data'),
                (s.value = JSON.stringify({
                  title: e.titlle,
                  js: n(e),
                  css: Object.entries(e.dependencies)
                    .filter(([, v]) => v.css)
                    .map(
                      ([v, { version: g, css: P }]) =>
                        `@import '~${P.replace(
                          new RegExp(`^(${v})`),
                          `$1@${g}`,
                        )}';`,
                    )
                    .concat(
                      e.background
                        ? `body {
  background: ${e.background};
}`
                        : '',
                    ).join(`
`),
                  json: JSON.stringify(
                    {
                      description: e.description,
                      dependencies: Object.entries(e.dependencies).reduce(
                        (v, [g, { version: P }]) => w(w({}, v), {}, { [g]: P }),
                        {
                          'react-dom':
                            ((f = e.dependencies.react) === null || f === void 0
                              ? void 0
                              : f.version) || 'latest',
                        },
                      ),
                    },
                    null,
                    2,
                  ),
                })),
                document.body.appendChild(i),
                h(() => () => i.submit()),
                () => i.remove()
              );
            }
          }, [e, y]),
          p
        );
      };
      m.default = t;
    },
    42949: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const t = b(67294);
        return (
          (_ = function () {
            return t;
          }),
          t
        );
      }
      var A = b(16924);
      function w(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          e &&
            (a = a.filter(function (p) {
              return Object.getOwnPropertyDescriptor(t, p).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? w(Object(o), !0).forEach(function (a) {
                T(t, a, o[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : w(Object(o)).forEach(function (a) {
                Object.defineProperty(
                  t,
                  a,
                  Object.getOwnPropertyDescriptor(o, a),
                );
              });
        }
        return t;
      }
      function T(t, e, o) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = o),
          t
        );
      }
      function E(t, e) {
        return l(t) || c(t, e) || O(t, e) || j();
      }
      function j() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function O(t, e) {
        if (!!t) {
          if (typeof t == 'string') return d(t, e);
          var o = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (o === 'Object' && t.constructor && (o = t.constructor.name),
            o === 'Map' || o === 'Set')
          )
            return Array.from(t);
          if (
            o === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          )
            return d(t, e);
        }
      }
      function d(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var o = 0, a = new Array(e); o < e; o++) a[o] = t[o];
        return a;
      }
      function c(t, e) {
        var o =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (o != null) {
          var a = [],
            p = !0,
            h = !1,
            y,
            f;
          try {
            for (
              o = o.call(t);
              !(p = (y = o.next()).done) &&
              (a.push(y.value), !(e && a.length === e));
              p = !0
            );
          } catch (i) {
            (h = !0), (f = i);
          } finally {
            try {
              !p && o.return != null && o.return();
            } finally {
              if (h) throw f;
            }
          }
          return a;
        }
      }
      function l(t) {
        if (Array.isArray(t)) return t;
      }
      const r = (t) => {
          const e = (0, _().useContext)(A.context),
            o = e.locale,
            a = e.routes,
            p = e.config.locales,
            h = (0, _().useState)([]),
            y = E(h, 2),
            f = y[0],
            i = y[1],
            s = (0, _().useState)([]),
            v = E(s, 2),
            g = v[0],
            P = v[1];
          return (
            (0, _().useEffect)(() => {
              i(
                a
                  .filter(({ title: C, meta: I }) => {
                    const k = (I == null ? void 0 : I.locale) === o,
                      R =
                        !(I == null ? void 0 : I.locale) &&
                        (!p.length || o === p[0].name);
                    return C && (R || k);
                  })
                  .reduce((C, I) => {
                    var k, R, L;
                    const $ = {
                      title:
                        ((k = I.meta) === null || k === void 0
                          ? void 0
                          : k.title) || I.title,
                      path: I.path,
                    };
                    return (
                      ((R = I.meta) === null || R === void 0
                        ? void 0
                        : R.group) && ($.parent = I.meta.group),
                      C.push($),
                      C.push(
                        ...(
                          ((L = I.meta) === null || L === void 0
                            ? void 0
                            : L.slugs) || []
                        )
                          .filter(({ value: x }) => {
                            var W;
                            return (
                              x !==
                              (((W = I.meta) === null || W === void 0
                                ? void 0
                                : W.title) || I.title)
                            );
                          })
                          .map((x) => ({
                            title: x.value,
                            path: `${I.path}#${x.heading}`,
                            parent: $,
                          })),
                      ),
                      C
                    );
                  }, []),
              );
            }, [a.length, o]),
            (0, _().useEffect)(() => {
              const C = t == null ? void 0 : t.trim().toUpperCase();
              if (C) {
                const I = [];
                for (let k = 0; k < f.length; k += 1)
                  f[k].title.toUpperCase().indexOf(C) > -1 && I.push(f[k]);
                P(I);
              } else P([]);
            }, [t, f.length]),
            g
          );
        },
        u = () => {
          const t = (0, _().useContext)(A.context),
            e = t.config.algolia;
          return (0, _().useCallback)(
            (a) => {
              window.docsearch(S({ inputSelector: a }, e));
            },
            [e],
          );
        };
      var n = (t) => {
        const e = (0, _().useContext)(A.context),
          o = e.config,
          a = r(t),
          p = u();
        return o.algolia ? p : a;
      };
      m.default = n;
    },
    65594: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        (m.default = void 0);
      function _() {
        const r = b(67294);
        return (
          (_ = function () {
            return r;
          }),
          r
        );
      }
      function A() {
        const r = w(b(26961));
        return (
          (A = function () {
            return r;
          }),
          r
        );
      }
      function w(r) {
        return r && r.__esModule ? r : { default: r };
      }
      function S(r, u) {
        return d(r) || O(r, u) || E(r, u) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(r, u) {
        if (!!r) {
          if (typeof r == 'string') return j(r, u);
          var n = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (n === 'Object' && r.constructor && (n = r.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(r);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return j(r, u);
        }
      }
      function j(r, u) {
        (u == null || u > r.length) && (u = r.length);
        for (var n = 0, t = new Array(u); n < u; n++) t[n] = r[n];
        return t;
      }
      function O(r, u) {
        var n =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
              r['@@iterator'];
        if (n != null) {
          var t = [],
            e = !0,
            o = !1,
            a,
            p;
          try {
            for (
              n = n.call(r);
              !(e = (a = n.next()).done) &&
              (t.push(a.value), !(u && t.length === u));
              e = !0
            );
          } catch (h) {
            (o = !0), (p = h);
          } finally {
            try {
              !e && n.return != null && n.return();
            } finally {
              if (o) throw p;
            }
          }
          return t;
        }
      }
      function d(r) {
        if (Array.isArray(r)) return r;
      }
      const c = {
        'zh-CN': 'https://www.typescriptlang.org/zh/play',
        'en-US': 'https://www.typescriptlang.org/play',
      };
      var l = (r, u) => {
        const n = (...p) =>
            `${
              /^zh|cn$/.test(p[0]) ? c['zh-CN'] : c['en-US']
            }?skipLibCheck=true&jsx=1#code/${A().default.compressToEncodedURIComponent(
              p[1],
            )}`,
          t = (0, _().useState)(n(r, u)),
          e = S(t, 2),
          o = e[0],
          a = e[1];
        return (
          (0, _().useEffect)(() => {
            a(n(r, u));
          }, [r, u]),
          o
        );
      };
      m.default = l;
    },
    16924: function (M, m, b) {
      'use strict';
      Object.defineProperty(m, '__esModule', { value: !0 }),
        Object.defineProperty(m, 'AnchorLink', {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(m, 'Link', {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(m, 'NavLink', {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(m, 'context', {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(m, 'getDemoUrl', {
          enumerable: !0,
          get: function () {
            return l.getDemoUrl;
          },
        }),
        Object.defineProperty(m, 'useApiData', {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(m, 'useCodeSandbox', {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(m, 'useCopy', {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(m, 'useDemoUrl', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(m, 'useLocaleProps', {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(m, 'useMotions', {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(m, 'usePrefersColor', {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(m, 'useRiddle', {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(m, 'useSearch', {
          enumerable: !0,
          get: function () {
            return T.default;
          },
        }),
        Object.defineProperty(m, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        });
      var _ = o(b(20052)),
        A = o(b(91290)),
        w = o(b(20045)),
        S = o(b(53432)),
        T = o(b(42949)),
        E = o(b(90295)),
        j = o(b(6928)),
        O = o(b(49167)),
        d = o(b(18178)),
        c = o(b(86660)),
        l = e(b(86579)),
        r = o(b(73918)),
        u = o(b(65594)),
        n = o(b(14045));
      function t(a) {
        if (typeof WeakMap != 'function') return null;
        var p = new WeakMap(),
          h = new WeakMap();
        return (t = function (f) {
          return f ? h : p;
        })(a);
      }
      function e(a, p) {
        if (!p && a && a.__esModule) return a;
        if (a === null || (typeof a != 'object' && typeof a != 'function'))
          return { default: a };
        var h = t(p);
        if (h && h.has(a)) return h.get(a);
        var y = {},
          f = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in a)
          if (i !== 'default' && Object.prototype.hasOwnProperty.call(a, i)) {
            var s = f ? Object.getOwnPropertyDescriptor(a, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(y, i, s)
              : (y[i] = a[i]);
          }
        return (y.default = a), h && h.set(a, y), y;
      }
      function o(a) {
        return a && a.__esModule ? a : { default: a };
      }
    },
    735: function (M) {
      'use strict';
      const m = (b, { target: _ = document.body } = {}) => {
        const A = document.createElement('textarea'),
          w = document.activeElement;
        (A.value = b),
          A.setAttribute('readonly', ''),
          (A.style.contain = 'strict'),
          (A.style.position = 'absolute'),
          (A.style.left = '-9999px'),
          (A.style.fontSize = '12pt');
        const S = document.getSelection();
        let T = !1;
        S.rangeCount > 0 && (T = S.getRangeAt(0)),
          _.append(A),
          A.select(),
          (A.selectionStart = 0),
          (A.selectionEnd = b.length);
        let E = !1;
        try {
          E = document.execCommand('copy');
        } catch (j) {}
        return (
          A.remove(),
          T && (S.removeAllRanges(), S.addRange(T)),
          w && w.focus(),
          E
        );
      };
      (M.exports = m), (M.exports.default = m);
    },
    93096: function (M, m, b) {
      var _ = 'Expected a function',
        A = 0 / 0,
        w = '[object Symbol]',
        S = /^\s+|\s+$/g,
        T = /^[-+]0x[0-9a-f]+$/i,
        E = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        O = parseInt,
        d = typeof b.g == 'object' && b.g && b.g.Object === Object && b.g,
        c = typeof self == 'object' && self && self.Object === Object && self,
        l = d || c || Function('return this')(),
        r = Object.prototype,
        u = r.toString,
        n = Math.max,
        t = Math.min,
        e = function () {
          return l.Date.now();
        };
      function o(i, s, v) {
        var g,
          P,
          C,
          I,
          k,
          R,
          L = 0,
          $ = !1,
          x = !1,
          W = !0;
        if (typeof i != 'function') throw new TypeError(_);
        (s = f(s) || 0),
          p(v) &&
            (($ = !!v.leading),
            (x = 'maxWait' in v),
            (C = x ? n(f(v.maxWait) || 0, s) : C),
            (W = 'trailing' in v ? !!v.trailing : W));
        function N(D) {
          var U = g,
            B = P;
          return (g = P = void 0), (L = D), (I = i.apply(B, U)), I;
        }
        function G(D) {
          return (L = D), (k = setTimeout(H, s)), $ ? N(D) : I;
        }
        function X(D) {
          var U = D - R,
            B = D - L,
            K = s - U;
          return x ? t(K, C - B) : K;
        }
        function J(D) {
          var U = D - R,
            B = D - L;
          return R === void 0 || U >= s || U < 0 || (x && B >= C);
        }
        function H() {
          var D = e();
          if (J(D)) return F(D);
          k = setTimeout(H, X(D));
        }
        function F(D) {
          return (k = void 0), W && g ? N(D) : ((g = P = void 0), I);
        }
        function Z() {
          k !== void 0 && clearTimeout(k), (L = 0), (g = R = P = k = void 0);
        }
        function Q() {
          return k === void 0 ? I : F(e());
        }
        function z() {
          var D = e(),
            U = J(D);
          if (((g = arguments), (P = this), (R = D), U)) {
            if (k === void 0) return G(R);
            if (x) return (k = setTimeout(H, s)), N(R);
          }
          return k === void 0 && (k = setTimeout(H, s)), I;
        }
        return (z.cancel = Z), (z.flush = Q), z;
      }
      function a(i, s, v) {
        var g = !0,
          P = !0;
        if (typeof i != 'function') throw new TypeError(_);
        return (
          p(v) &&
            ((g = 'leading' in v ? !!v.leading : g),
            (P = 'trailing' in v ? !!v.trailing : P)),
          o(i, s, { leading: g, maxWait: s, trailing: P })
        );
      }
      function p(i) {
        var s = typeof i;
        return !!i && (s == 'object' || s == 'function');
      }
      function h(i) {
        return !!i && typeof i == 'object';
      }
      function y(i) {
        return typeof i == 'symbol' || (h(i) && u.call(i) == w);
      }
      function f(i) {
        if (typeof i == 'number') return i;
        if (y(i)) return A;
        if (p(i)) {
          var s = typeof i.valueOf == 'function' ? i.valueOf() : i;
          i = p(s) ? s + '' : s;
        }
        if (typeof i != 'string') return i === 0 ? i : +i;
        i = i.replace(S, '');
        var v = E.test(i);
        return v || j.test(i) ? O(i.slice(2), v ? 2 : 8) : T.test(i) ? A : +i;
      }
      M.exports = a;
    },
    26961: function (M, m, b) {
      var _,
        A = (function () {
          var w = String.fromCharCode,
            S =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            T =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            E = {};
          function j(d, c) {
            if (!E[d]) {
              E[d] = {};
              for (var l = 0; l < d.length; l++) E[d][d.charAt(l)] = l;
            }
            return E[d][c];
          }
          var O = {
            compressToBase64: function (d) {
              if (d == null) return '';
              var c = O._compress(d, 6, function (l) {
                return S.charAt(l);
              });
              switch (c.length % 4) {
                default:
                case 0:
                  return c;
                case 1:
                  return c + '===';
                case 2:
                  return c + '==';
                case 3:
                  return c + '=';
              }
            },
            decompressFromBase64: function (d) {
              return d == null
                ? ''
                : d == ''
                ? null
                : O._decompress(d.length, 32, function (c) {
                    return j(S, d.charAt(c));
                  });
            },
            compressToUTF16: function (d) {
              return d == null
                ? ''
                : O._compress(d, 15, function (c) {
                    return w(c + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (d) {
              return d == null
                ? ''
                : d == ''
                ? null
                : O._decompress(d.length, 16384, function (c) {
                    return d.charCodeAt(c) - 32;
                  });
            },
            compressToUint8Array: function (d) {
              for (
                var c = O.compress(d),
                  l = new Uint8Array(c.length * 2),
                  r = 0,
                  u = c.length;
                r < u;
                r++
              ) {
                var n = c.charCodeAt(r);
                (l[r * 2] = n >>> 8), (l[r * 2 + 1] = n % 256);
              }
              return l;
            },
            decompressFromUint8Array: function (d) {
              if (d == null) return O.decompress(d);
              for (
                var c = new Array(d.length / 2), l = 0, r = c.length;
                l < r;
                l++
              )
                c[l] = d[l * 2] * 256 + d[l * 2 + 1];
              var u = [];
              return (
                c.forEach(function (n) {
                  u.push(w(n));
                }),
                O.decompress(u.join(''))
              );
            },
            compressToEncodedURIComponent: function (d) {
              return d == null
                ? ''
                : O._compress(d, 6, function (c) {
                    return T.charAt(c);
                  });
            },
            decompressFromEncodedURIComponent: function (d) {
              return d == null
                ? ''
                : d == ''
                ? null
                : ((d = d.replace(/ /g, '+')),
                  O._decompress(d.length, 32, function (c) {
                    return j(T, d.charAt(c));
                  }));
            },
            compress: function (d) {
              return O._compress(d, 16, function (c) {
                return w(c);
              });
            },
            _compress: function (d, c, l) {
              if (d == null) return '';
              var r,
                u,
                n = {},
                t = {},
                e = '',
                o = '',
                a = '',
                p = 2,
                h = 3,
                y = 2,
                f = [],
                i = 0,
                s = 0,
                v;
              for (v = 0; v < d.length; v += 1)
                if (
                  ((e = d.charAt(v)),
                  Object.prototype.hasOwnProperty.call(n, e) ||
                    ((n[e] = h++), (t[e] = !0)),
                  (o = a + e),
                  Object.prototype.hasOwnProperty.call(n, o))
                )
                  a = o;
                else {
                  if (Object.prototype.hasOwnProperty.call(t, a)) {
                    if (a.charCodeAt(0) < 256) {
                      for (r = 0; r < y; r++)
                        (i = i << 1),
                          s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++;
                      for (u = a.charCodeAt(0), r = 0; r < 8; r++)
                        (i = (i << 1) | (u & 1)),
                          s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                          (u = u >> 1);
                    } else {
                      for (u = 1, r = 0; r < y; r++)
                        (i = (i << 1) | u),
                          s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                          (u = 0);
                      for (u = a.charCodeAt(0), r = 0; r < 16; r++)
                        (i = (i << 1) | (u & 1)),
                          s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                          (u = u >> 1);
                    }
                    p--, p == 0 && ((p = Math.pow(2, y)), y++), delete t[a];
                  } else
                    for (u = n[a], r = 0; r < y; r++)
                      (i = (i << 1) | (u & 1)),
                        s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                        (u = u >> 1);
                  p--,
                    p == 0 && ((p = Math.pow(2, y)), y++),
                    (n[o] = h++),
                    (a = String(e));
                }
              if (a !== '') {
                if (Object.prototype.hasOwnProperty.call(t, a)) {
                  if (a.charCodeAt(0) < 256) {
                    for (r = 0; r < y; r++)
                      (i = i << 1),
                        s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++;
                    for (u = a.charCodeAt(0), r = 0; r < 8; r++)
                      (i = (i << 1) | (u & 1)),
                        s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                        (u = u >> 1);
                  } else {
                    for (u = 1, r = 0; r < y; r++)
                      (i = (i << 1) | u),
                        s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                        (u = 0);
                    for (u = a.charCodeAt(0), r = 0; r < 16; r++)
                      (i = (i << 1) | (u & 1)),
                        s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                        (u = u >> 1);
                  }
                  p--, p == 0 && ((p = Math.pow(2, y)), y++), delete t[a];
                } else
                  for (u = n[a], r = 0; r < y; r++)
                    (i = (i << 1) | (u & 1)),
                      s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                      (u = u >> 1);
                p--, p == 0 && ((p = Math.pow(2, y)), y++);
              }
              for (u = 2, r = 0; r < y; r++)
                (i = (i << 1) | (u & 1)),
                  s == c - 1 ? ((s = 0), f.push(l(i)), (i = 0)) : s++,
                  (u = u >> 1);
              for (;;)
                if (((i = i << 1), s == c - 1)) {
                  f.push(l(i));
                  break;
                } else s++;
              return f.join('');
            },
            decompress: function (d) {
              return d == null
                ? ''
                : d == ''
                ? null
                : O._decompress(d.length, 32768, function (c) {
                    return d.charCodeAt(c);
                  });
            },
            _decompress: function (d, c, l) {
              var r = [],
                u,
                n = 4,
                t = 4,
                e = 3,
                o = '',
                a = [],
                p,
                h,
                y,
                f,
                i,
                s,
                v,
                g = { val: l(0), position: c, index: 1 };
              for (p = 0; p < 3; p += 1) r[p] = p;
              for (y = 0, i = Math.pow(2, 2), s = 1; s != i; )
                (f = g.val & g.position),
                  (g.position >>= 1),
                  g.position == 0 && ((g.position = c), (g.val = l(g.index++))),
                  (y |= (f > 0 ? 1 : 0) * s),
                  (s <<= 1);
              switch ((u = y)) {
                case 0:
                  for (y = 0, i = Math.pow(2, 8), s = 1; s != i; )
                    (f = g.val & g.position),
                      (g.position >>= 1),
                      g.position == 0 &&
                        ((g.position = c), (g.val = l(g.index++))),
                      (y |= (f > 0 ? 1 : 0) * s),
                      (s <<= 1);
                  v = w(y);
                  break;
                case 1:
                  for (y = 0, i = Math.pow(2, 16), s = 1; s != i; )
                    (f = g.val & g.position),
                      (g.position >>= 1),
                      g.position == 0 &&
                        ((g.position = c), (g.val = l(g.index++))),
                      (y |= (f > 0 ? 1 : 0) * s),
                      (s <<= 1);
                  v = w(y);
                  break;
                case 2:
                  return '';
              }
              for (r[3] = v, h = v, a.push(v); ; ) {
                if (g.index > d) return '';
                for (y = 0, i = Math.pow(2, e), s = 1; s != i; )
                  (f = g.val & g.position),
                    (g.position >>= 1),
                    g.position == 0 &&
                      ((g.position = c), (g.val = l(g.index++))),
                    (y |= (f > 0 ? 1 : 0) * s),
                    (s <<= 1);
                switch ((v = y)) {
                  case 0:
                    for (y = 0, i = Math.pow(2, 8), s = 1; s != i; )
                      (f = g.val & g.position),
                        (g.position >>= 1),
                        g.position == 0 &&
                          ((g.position = c), (g.val = l(g.index++))),
                        (y |= (f > 0 ? 1 : 0) * s),
                        (s <<= 1);
                    (r[t++] = w(y)), (v = t - 1), n--;
                    break;
                  case 1:
                    for (y = 0, i = Math.pow(2, 16), s = 1; s != i; )
                      (f = g.val & g.position),
                        (g.position >>= 1),
                        g.position == 0 &&
                          ((g.position = c), (g.val = l(g.index++))),
                        (y |= (f > 0 ? 1 : 0) * s),
                        (s <<= 1);
                    (r[t++] = w(y)), (v = t - 1), n--;
                    break;
                  case 2:
                    return a.join('');
                }
                if ((n == 0 && ((n = Math.pow(2, e)), e++), r[v])) o = r[v];
                else if (v === t) o = h + h.charAt(0);
                else return null;
                a.push(o),
                  (r[t++] = h + o.charAt(0)),
                  n--,
                  (h = o),
                  n == 0 && ((n = Math.pow(2, e)), e++);
              }
            },
          };
          return O;
        })();
      (_ = function () {
        return A;
      }.call(m, b, m, M)),
        _ !== void 0 && (M.exports = _);
    },
  },
]);
