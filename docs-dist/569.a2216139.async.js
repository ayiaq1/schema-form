(self.webpackChunk_test_schema_form =
  self.webpackChunk_test_schema_form || []).push([
  [569],
  {
    91896: function (_e, H, M) {
      'use strict';
      M.d(H, {
        Z: function () {
          return e;
        },
      });
      function e() {
        return (
          (e =
            Object.assign ||
            function (p) {
              for (var N = 1; N < arguments.length; N++) {
                var F = arguments[N];
                for (var R in F)
                  Object.prototype.hasOwnProperty.call(F, R) && (p[R] = F[R]);
              }
              return p;
            }),
          e.apply(this, arguments)
        );
      }
    },
    88492: function () {},
    68993: function () {},
    71812: function () {},
    72404: function () {},
    27034: function () {},
    36157: function () {},
    30956: function () {},
    18098: function (_e, H, M) {
      'use strict';
      var e;
      function p(a) {
        return (
          (p =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (u) {
                  return typeof u;
                }
              : function (u) {
                  return u &&
                    typeof Symbol == 'function' &&
                    u.constructor === Symbol &&
                    u !== Symbol.prototype
                    ? 'symbol'
                    : typeof u;
                }),
          p(a)
        );
      }
      (e = { value: !0 }), (H.Z = void 0);
      var N = be(M(67294)),
        F = R(M(20052));
      function R(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function K(a) {
        if (typeof WeakMap != 'function') return null;
        var u = new WeakMap(),
          l = new WeakMap();
        return (K = function (h) {
          return h ? l : u;
        })(a);
      }
      function be(a, u) {
        if (!u && a && a.__esModule) return a;
        if (a === null || (p(a) !== 'object' && typeof a != 'function'))
          return { default: a };
        var l = K(u);
        if (l && l.has(a)) return l.get(a);
        var i = {},
          h = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var m in a)
          if (m !== 'default' && Object.prototype.hasOwnProperty.call(a, m)) {
            var g = h ? Object.getOwnPropertyDescriptor(a, m) : null;
            g && (g.get || g.set)
              ? Object.defineProperty(i, m, g)
              : (i[m] = a[m]);
          }
        return (i.default = a), l && l.set(a, i), i;
      }
      function ie(a, u) {
        var l =
          (typeof Symbol != 'undefined' && a[Symbol.iterator]) ||
          a['@@iterator'];
        if (!l) {
          if (
            Array.isArray(a) ||
            (l = q(a)) ||
            (u && a && typeof a.length == 'number')
          ) {
            l && (a = l);
            var i = 0,
              h = function () {};
            return {
              s: h,
              n: function () {
                return i >= a.length
                  ? { done: !0 }
                  : { done: !1, value: a[i++] };
              },
              e: function (E) {
                throw E;
              },
              f: h,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var m = !0,
          g = !1,
          x;
        return {
          s: function () {
            l = l.call(a);
          },
          n: function () {
            var E = l.next();
            return (m = E.done), E;
          },
          e: function (E) {
            (g = !0), (x = E);
          },
          f: function () {
            try {
              !m && l.return != null && l.return();
            } finally {
              if (g) throw x;
            }
          },
        };
      }
      function U(a, u) {
        return se(a) || ce(a, u) || q(a, u) || Ee();
      }
      function Ee() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function q(a, u) {
        if (!!a) {
          if (typeof a == 'string') return Z(a, u);
          var l = Object.prototype.toString.call(a).slice(8, -1);
          if (
            (l === 'Object' && a.constructor && (l = a.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(a);
          if (
            l === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return Z(a, u);
        }
      }
      function Z(a, u) {
        (u == null || u > a.length) && (u = a.length);
        for (var l = 0, i = new Array(u); l < u; l++) i[l] = a[l];
        return i;
      }
      function ce(a, u) {
        var l =
          a == null
            ? null
            : (typeof Symbol != 'undefined' && a[Symbol.iterator]) ||
              a['@@iterator'];
        if (l != null) {
          var i = [],
            h = !0,
            m = !1,
            g,
            x;
          try {
            for (
              l = l.call(a);
              !(h = (g = l.next()).done) &&
              (i.push(g.value), !(u && i.length === u));
              h = !0
            );
          } catch (A) {
            (m = !0), (x = A);
          } finally {
            try {
              !h && l.return != null && l.return();
            } finally {
              if (m) throw x;
            }
          }
          return i;
        }
      }
      function se(a) {
        if (Array.isArray(a)) return a;
      }
      function ee(a, u) {
        var l = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(a);
          u &&
            (i = i.filter(function (h) {
              return Object.getOwnPropertyDescriptor(a, h).enumerable;
            })),
            l.push.apply(l, i);
        }
        return l;
      }
      function G(a) {
        for (var u = 1; u < arguments.length; u++) {
          var l = arguments[u] != null ? arguments[u] : {};
          u % 2
            ? ee(Object(l), !0).forEach(function (i) {
                Se(a, i, l[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
            : ee(Object(l)).forEach(function (i) {
                Object.defineProperty(
                  a,
                  i,
                  Object.getOwnPropertyDescriptor(l, i),
                );
              });
        }
        return a;
      }
      function Se(a, u, l) {
        return (
          u in a
            ? Object.defineProperty(a, u, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[u] = l),
          a
        );
      }
      var fe = function (u, l) {
          var i = function () {
              for (
                var E, P = arguments.length, S = new Array(P), _ = 0;
                _ < P;
                _++
              )
                S[_] = arguments[_];
              var D = S[1].replace(/([^^])\/$/, '$1');
              return G(
                G(
                  {},
                  ((E = S[0].find(function (J) {
                    var W = J.path;
                    return W === D;
                  })) === null || E === void 0
                    ? void 0
                    : E.meta) || {},
                ),
                {},
                { __pathname: l },
              );
            },
            h = (0, N.useState)(i(u, l)),
            m = U(h, 2),
            g = m[0],
            x = m[1];
          return (
            (0, N.useLayoutEffect)(
              function () {
                x(i(u, l));
              },
              [l],
            ),
            g
          );
        },
        de = function (u, l) {
          var i = function () {
              for (
                var E, P = arguments.length, S = new Array(P), _ = 0;
                _ < P;
                _++
              )
                S[_] = arguments[_];
              return (
                ((E = S[0].find(function (D) {
                  return new RegExp('/'.concat(D.name, '(/|$)')).test(S[1]);
                })) === null || E === void 0
                  ? void 0
                  : E.name) || u[0].name
              );
            },
            h = (0, N.useState)(i(u, l)),
            m = U(h, 2),
            g = m[0],
            x = m[1];
          return (
            (0, N.useLayoutEffect)(
              function () {
                x(i(u, l));
              },
              [l],
            ),
            g
          );
        },
        we = function (u, l, i) {
          var h = function () {
              for (
                var P, S = arguments.length, _ = new Array(S), D = 0;
                D < S;
                D++
              )
                _[D] = arguments[D];
              for (
                var J = _[0].navs[_[1]] || [], W = '*', Q = J.length - 1;
                Q >= 0;
                Q -= 1
              ) {
                var ne = J[Q],
                  re = [ne].concat(ne.children).filter(Boolean),
                  ae = re.find(function (le) {
                    return (
                      le.path &&
                      new RegExp(
                        '^'.concat(le.path.replace(/\.html$/, ''), '(/|.|$)'),
                      ).test(_[2])
                    );
                  });
                if (ae) {
                  W = ae.path;
                  break;
                }
              }
              return (
                ((P = _[0].menus[_[1]]) === null || P === void 0
                  ? void 0
                  : P[W]) || []
              );
            },
            m = (0, N.useState)(h(u, l, i)),
            g = U(m, 2),
            x = g[0],
            A = g[1];
          return (
            (0, N.useLayoutEffect)(
              function () {
                A(h(u, l, i));
              },
              [u.navs, u.menus, l, i],
            ),
            x
          );
        },
        V = function (u, l, i) {
          var h = function () {
              for (
                var P = arguments.length, S = new Array(P), _ = 0;
                _ < P;
                _++
              )
                S[_] = arguments[_];
              return S[0] === S[1][0].name
                ? S[2].path
                : ''.concat(i.path, '/').concat(u).replace(/\/\//, '/');
            },
            m = (0, N.useState)(h(u, l, i)),
            g = U(m, 2),
            x = g[0],
            A = g[1];
          return (
            (0, N.useLayoutEffect)(
              function () {
                A(h(u, l, i));
              },
              [u],
            ),
            x
          );
        },
        te = function a(u) {
          var l,
            i = ie(u),
            h;
          try {
            for (i.s(); !(h = i.n()).done; ) {
              var m = h.value;
              if (m.__dumiRoot) {
                l = m.routes;
                break;
              } else if (m.routes && (l = a(m.routes))) break;
            }
          } catch (g) {
            i.e(g);
          } finally {
            i.f();
          }
          return l;
        },
        me = function (u) {
          var l = u.location,
            i = u.route,
            h = u.children,
            m = u.config,
            g = u.apis,
            x = u.demos,
            A = l.pathname.replace(i.path.replace(/^\/$/, '//'), ''),
            E = te(u.routes) || [],
            P = fe(E, l.pathname),
            S = de(m.locales, A),
            _ = we(m, S, l.pathname),
            D = V(S, m.locales, i);
          return N.default.createElement(
            F.default.Provider,
            {
              value: {
                config: m,
                meta: P.__pathname === l.pathname ? P : {},
                locale: S,
                nav: m.navs[S] || [],
                menu: _,
                base: D,
                routes: E,
                apis: g,
                demos: x,
              },
            },
            h,
          );
        },
        ve = me;
      H.Z = ve;
    },
    32357: function (_e, H, M) {
      'use strict';
      M.r(H),
        M.d(H, {
          default: function () {
            return Pe;
          },
        });
      var e = M(67294),
        p = M(16924),
        N = M(73602),
        F = M(68993),
        R = function (r) {
          var t = r.location,
            o = (0, e.useContext)(p.context),
            c = o.base,
            s = o.locale,
            d = o.config.locales,
            b = d.find(function (y) {
              var w = y.name;
              return w !== s;
            });
          function k(y) {
            var w = c.replace('/'.concat(s), ''),
              f =
                t.pathname.replace(
                  new RegExp('^'.concat(c, '(/|$)')),
                  ''.concat(w, '$1'),
                ) || '/';
            if (y !== d[0].name) {
              var I = ''.concat(w, '/').concat(y).replace(/\/\//, '/'),
                C = t.pathname.replace(c.replace(/^\/$/, '//'), '');
              return ''.concat(I).concat(C).replace(/\/$/, '');
            }
            return f;
          }
          return b
            ? e.createElement(
                'div',
                {
                  className: '__dumi-default-locale-select',
                  'data-locale-count': d.length,
                },
                d.length > 2
                  ? e.createElement(
                      'select',
                      {
                        value: s,
                        onChange: function (w) {
                          return N.m.push(k(w.target.value));
                        },
                      },
                      d.map(function (y) {
                        return e.createElement(
                          'option',
                          { value: y.name, key: y.name },
                          y.label,
                        );
                      }),
                    )
                  : e.createElement(p.Link, { to: k(b.name) }, b.label),
              )
            : null;
        },
        K = R,
        be = M(71812),
        ie = function (r) {
          var t = r.onMobileMenuClick,
            o = r.navPrefix,
            c = r.location,
            s = r.darkPrefix,
            d = (0, e.useContext)(p.context),
            b = d.base,
            k = d.config,
            y = k.mode,
            w = k.title,
            f = k.logo,
            I = d.nav;
          return e.createElement(
            'div',
            { className: '__dumi-default-navbar', 'data-mode': y },
            e.createElement('button', {
              className: '__dumi-default-navbar-toggle',
              onClick: t,
            }),
            e.createElement(
              p.Link,
              {
                className: '__dumi-default-navbar-logo',
                style: { backgroundImage: f && "url('".concat(f, "')") },
                to: b,
                'data-plaintext': f === !1 || void 0,
              },
              w,
            ),
            e.createElement(
              'nav',
              null,
              o,
              I.map(function (C) {
                var B,
                  O =
                    Boolean(
                      (B = C.children) === null || B === void 0
                        ? void 0
                        : B.length,
                    ) &&
                    e.createElement(
                      'ul',
                      null,
                      C.children.map(function (z) {
                        return e.createElement(
                          'li',
                          { key: z.path },
                          e.createElement(p.NavLink, { to: z.path }, z.title),
                        );
                      }),
                    );
                return e.createElement(
                  'span',
                  { key: C.title || C.path },
                  C.path
                    ? e.createElement(
                        p.NavLink,
                        { to: C.path, key: C.path },
                        C.title,
                      )
                    : C.title,
                  O,
                );
              }),
              e.createElement(
                'div',
                { className: '__dumi-default-navbar-tool' },
                e.createElement(K, { location: c }),
                s,
              ),
            ),
          );
        },
        U = ie,
        Ee = M(36157),
        q = ['slugs'];
      function Z() {
        return (
          (Z =
            Object.assign ||
            function (n) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
              }
              return n;
            }),
          Z.apply(this, arguments)
        );
      }
      function ce(n, r) {
        if (n == null) return {};
        var t = se(n, r),
          o,
          c;
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(n);
          for (c = 0; c < s.length; c++)
            (o = s[c]),
              !(r.indexOf(o) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(n, o) ||
                  (t[o] = n[o]));
        }
        return t;
      }
      function se(n, r) {
        if (n == null) return {};
        var t = {},
          o = Object.keys(n),
          c,
          s;
        for (s = 0; s < o.length; s++)
          (c = o[s]), !(r.indexOf(c) >= 0) && (t[c] = n[c]);
        return t;
      }
      var ee = function (r) {
          var t = r.slugs,
            o = ce(r, q);
          return e.createElement(
            'ul',
            Z({ role: 'slug-list' }, o),
            t
              .filter(function (c) {
                var s = c.depth;
                return s > 1 && s < 4;
              })
              .map(function (c) {
                return e.createElement(
                  'li',
                  { key: c.heading, title: c.value, 'data-depth': c.depth },
                  e.createElement(
                    p.AnchorLink,
                    { to: '#'.concat(c.heading) },
                    e.createElement('span', null, c.value),
                  ),
                );
              }),
          );
        },
        G = ee,
        Se = M(27034),
        fe = function (r) {
          var t = r.mobileMenuCollapsed,
            o = r.location,
            c = r.darkPrefix,
            s = (0, e.useContext)(p.context),
            d = s.config,
            b = d.logo,
            k = d.title,
            y = d.description,
            w = d.mode,
            f = d.repository.url,
            I = s.menu,
            C = s.nav,
            B = s.base,
            O = s.meta,
            z =
              Boolean((O.hero || O.features || O.gapless) && w === 'site') ||
              O.sidemenu === !1 ||
              void 0;
          return e.createElement(
            'div',
            {
              className: '__dumi-default-menu',
              'data-mode': w,
              'data-hidden': z,
              'data-mobile-show': !t || void 0,
            },
            e.createElement(
              'div',
              { className: '__dumi-default-menu-inner' },
              e.createElement(
                'div',
                { className: '__dumi-default-menu-header' },
                e.createElement(p.Link, {
                  to: B,
                  className: '__dumi-default-menu-logo',
                  style: { backgroundImage: b && "url('".concat(b, "')") },
                }),
                e.createElement('h1', null, k),
                e.createElement('p', null, y),
                /github\.com/.test(f) &&
                  w === 'doc' &&
                  e.createElement(
                    'p',
                    null,
                    e.createElement('object', {
                      type: 'image/svg+xml',
                      data: 'https://img.shields.io/github/stars'.concat(
                        f.match(/((\/[^\/]+){2})$/)[1],
                        '?style=social',
                      ),
                    }),
                  ),
              ),
              e.createElement(
                'div',
                { className: '__dumi-default-menu-mobile-area' },
                !!C.length &&
                  e.createElement(
                    'ul',
                    { className: '__dumi-default-menu-nav-list' },
                    C.map(function (v) {
                      var L,
                        T =
                          Boolean(
                            (L = v.children) === null || L === void 0
                              ? void 0
                              : L.length,
                          ) &&
                          e.createElement(
                            'ul',
                            null,
                            v.children.map(function ($) {
                              return e.createElement(
                                'li',
                                { key: $.path || $.title },
                                e.createElement(
                                  p.NavLink,
                                  { to: $.path },
                                  $.title,
                                ),
                              );
                            }),
                          );
                      return e.createElement(
                        'li',
                        { key: v.path || v.title },
                        v.path
                          ? e.createElement(p.NavLink, { to: v.path }, v.title)
                          : v.title,
                        T,
                      );
                    }),
                  ),
                e.createElement(K, { location: o }),
                c,
              ),
              e.createElement(
                'ul',
                { className: '__dumi-default-menu-list' },
                !z &&
                  I.map(function (v) {
                    var L,
                      T = Boolean(
                        (L = O.slugs) === null || L === void 0
                          ? void 0
                          : L.length,
                      ),
                      $ = v.children && Boolean(v.children.length),
                      ue =
                        O.toc === 'menu' &&
                        !$ &&
                        T &&
                        v.path === o.pathname.replace(/([^^])\/$/, '$1'),
                      oe = $
                        ? v.children.map(function (j) {
                            return j.path;
                          })
                        : [
                            v.path,
                            o.pathname.startsWith(''.concat(v.path, '/')) &&
                            O.title === v.title
                              ? o.pathname
                              : null,
                          ];
                    return e.createElement(
                      'li',
                      { key: v.path || v.title },
                      e.createElement(
                        p.NavLink,
                        {
                          to: v.path,
                          isActive: function () {
                            return oe.includes(o.pathname);
                          },
                        },
                        v.title,
                      ),
                      Boolean(v.children && v.children.length) &&
                        e.createElement(
                          'ul',
                          null,
                          v.children.map(function (j) {
                            return e.createElement(
                              'li',
                              { key: j.path },
                              e.createElement(
                                p.NavLink,
                                { to: j.path, exact: !0 },
                                e.createElement('span', null, j.title),
                              ),
                              Boolean(
                                O.toc === 'menu' &&
                                  typeof window != 'undefined' &&
                                  j.path === o.pathname &&
                                  T,
                              ) && e.createElement(G, { slugs: O.slugs }),
                            );
                          }),
                        ),
                      ue && e.createElement(G, { slugs: O.slugs }),
                    );
                  }),
              ),
            ),
          );
        },
        de = fe,
        we = M(72404);
      function V() {
        return (
          (V =
            Object.assign ||
            function (n) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
              }
              return n;
            }),
          V.apply(this, arguments)
        );
      }
      function te(n, r) {
        return l(n) || u(n, r) || ve(n, r) || me();
      }
      function me() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ve(n, r) {
        if (!!n) {
          if (typeof n == 'string') return a(n, r);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (t === 'Object' && n.constructor && (t = n.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(n);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return a(n, r);
        }
      }
      function a(n, r) {
        (r == null || r > n.length) && (r = n.length);
        for (var t = 0, o = new Array(r); t < r; t++) o[t] = n[t];
        return o;
      }
      function u(n, r) {
        var t =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) ||
              n['@@iterator'];
        if (t != null) {
          var o = [],
            c = !0,
            s = !1,
            d,
            b;
          try {
            for (
              t = t.call(n);
              !(c = (d = t.next()).done) &&
              (o.push(d.value), !(r && o.length === r));
              c = !0
            );
          } catch (k) {
            (s = !0), (b = k);
          } finally {
            try {
              !c && t.return != null && t.return();
            } finally {
              if (s) throw b;
            }
          }
          return o;
        }
      }
      function l(n) {
        if (Array.isArray(n)) return n;
      }
      var i = function (r, t) {
          var o = t.toLowerCase().indexOf(r.toLowerCase()),
            c = r.length;
          return e.createElement(
            e.Fragment,
            null,
            t.substring(0, o),
            e.createElement(
              'span',
              { className: '__dumi-default-search-highlight' },
              t.substring(o, o + c),
            ),
            t.substring(o + c, t.length),
          );
        },
        h = function () {
          var n = (0, e.useState)(''),
            r = te(n, 2),
            t = r[0],
            o = r[1],
            c = (0, e.useState)([]),
            s = te(c, 2),
            d = s[0],
            b = s[1],
            k = (0, e.useRef)(),
            y = (0, p.useSearch)(t),
            w = e.createElement(
              'svg',
              {
                className: '__dumi-default-search-empty',
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '2347',
                width: '32',
                height: '32',
              },
              e.createElement('path', {
                d: 'M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z',
              }),
            );
          return (
            (0, e.useEffect)(
              function () {
                Array.isArray(y)
                  ? b(y)
                  : typeof y == 'function' &&
                    y('.'.concat(k.current.className));
              },
              [y],
            ),
            e.createElement(
              'div',
              { className: '__dumi-default-search' },
              e.createElement(
                'input',
                V(
                  {
                    className: '__dumi-default-search-input',
                    type: 'search',
                    ref: k,
                  },
                  Array.isArray(y)
                    ? {
                        value: t,
                        onChange: function (I) {
                          return o(I.target.value);
                        },
                      }
                    : {},
                ),
              ),
              e.createElement(
                'ul',
                null,
                d.length > 0 &&
                  d.map(function (f) {
                    var I;
                    return e.createElement(
                      'li',
                      {
                        key: f.path,
                        onClick: function () {
                          return o('');
                        },
                      },
                      e.createElement(
                        p.AnchorLink,
                        { to: f.path },
                        ((I = f.parent) === null || I === void 0
                          ? void 0
                          : I.title) &&
                          e.createElement('span', null, f.parent.title),
                        i(t, f.title),
                      ),
                    );
                  }),
                d.length === 0 &&
                  t &&
                  e.createElement('li', { style: { textAlign: 'center' } }, w),
              ),
            )
          );
        },
        m = M(88492);
      function g(n, r) {
        return S(n) || P(n, r) || A(n, r) || x();
      }
      function x() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function A(n, r) {
        if (!!n) {
          if (typeof n == 'string') return E(n, r);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (t === 'Object' && n.constructor && (t = n.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(n);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return E(n, r);
        }
      }
      function E(n, r) {
        (r == null || r > n.length) && (r = n.length);
        for (var t = 0, o = new Array(r); t < r; t++) o[t] = n[t];
        return o;
      }
      function P(n, r) {
        var t =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) ||
              n['@@iterator'];
        if (t != null) {
          var o = [],
            c = !0,
            s = !1,
            d,
            b;
          try {
            for (
              t = t.call(n);
              !(c = (d = t.next()).done) &&
              (o.push(d.value), !(r && o.length === r));
              c = !0
            );
          } catch (k) {
            (s = !0), (b = k);
          } finally {
            try {
              !c && t.return != null && t.return();
            } finally {
              if (s) throw b;
            }
          }
          return o;
        }
      }
      function S(n) {
        if (Array.isArray(n)) return n;
      }
      var _ = function (r) {
          var t = r.darkSwitch,
            o = r.onDarkSwitchClick,
            c = r.isSideMenu,
            s = ['dark', 'light', 'auto'],
            d = (0, p.usePrefersColor)(),
            b = g(d, 2),
            k = b[0],
            y = b[1],
            w = k,
            f = e.createElement(
              'svg',
              {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '4026',
                width: '22',
                height: '22',
              },
              e.createElement('path', {
                d: 'M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z',
                'p-id': '4027',
              }),
            ),
            I = e.createElement(
              'svg',
              {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '3854',
                width: '22',
                height: '22',
              },
              e.createElement('path', {
                d: 'M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z',
                'p-id': '3855',
              }),
            ),
            C = e.createElement(
              'svg',
              {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '11002',
                width: '22',
                height: '22',
              },
              e.createElement('path', {
                d: 'M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z',
                'p-id': '11003',
              }),
            ),
            B = s.filter(function (v) {
              return v !== w;
            }),
            O = function (L, T) {
              !c && o && o(L), T !== w && y(T);
            },
            z = function (L) {
              switch (L) {
                case 'dark':
                  return e.createElement(
                    'button',
                    {
                      key: 'dumi-dark-btn-moon',
                      title: 'Dark theme',
                      onClick: function ($) {
                        return O($, L);
                      },
                      className: '__dumi-default-dark-moon '.concat(
                        L === w ? '__dumi-default-dark-switch-active' : '',
                      ),
                    },
                    I,
                  );
                case 'light':
                  return e.createElement(
                    'button',
                    {
                      key: 'dumi-dark-btn-sun',
                      title: 'Light theme',
                      onClick: function ($) {
                        return O($, L);
                      },
                      className: '__dumi-default-dark-sun '.concat(
                        L === w ? '__dumi-default-dark-switch-active' : '',
                      ),
                    },
                    f,
                  );
                case 'auto':
                  return e.createElement(
                    'button',
                    {
                      key: 'dumi-dark-btn-auto',
                      title: 'Default to system',
                      onClick: function ($) {
                        return O($, L);
                      },
                      className: '__dumi-default-dark-auto '.concat(
                        L === w ? '__dumi-default-dark-switch-active' : '',
                      ),
                    },
                    C,
                  );
                default:
              }
            };
          return e.createElement(
            'div',
            { className: '__dumi-default-dark' },
            e.createElement(
              'div',
              {
                className: '__dumi-default-dark-switch '.concat(
                  !c && t ? '__dumi-default-dark-switch-open' : '',
                ),
              },
              c
                ? s.map(function (v) {
                    return z(v);
                  })
                : z(w),
            ),
            !c &&
              t &&
              e.createElement(
                'div',
                { className: '__dumi-default-dark-switch-list' },
                B.map(function (v) {
                  return z(v);
                }),
              ),
          );
        },
        D = _,
        J = M(30956);
      function W(n, r) {
        return le(n) || ae(n, r) || ne(n, r) || Q();
      }
      function Q() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ne(n, r) {
        if (!!n) {
          if (typeof n == 'string') return re(n, r);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (t === 'Object' && n.constructor && (t = n.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(n);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return re(n, r);
        }
      }
      function re(n, r) {
        (r == null || r > n.length) && (r = n.length);
        for (var t = 0, o = new Array(r); t < r; t++) o[t] = n[t];
        return o;
      }
      function ae(n, r) {
        var t =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) ||
              n['@@iterator'];
        if (t != null) {
          var o = [],
            c = !0,
            s = !1,
            d,
            b;
          try {
            for (
              t = t.call(n);
              !(c = (d = t.next()).done) &&
              (o.push(d.value), !(r && o.length === r));
              c = !0
            );
          } catch (k) {
            (s = !0), (b = k);
          } finally {
            try {
              !c && t.return != null && t.return();
            } finally {
              if (s) throw b;
            }
          }
          return o;
        }
      }
      function le(n) {
        if (Array.isArray(n)) return n;
      }
      var Oe = function (r) {
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: '__dumi-default-layout-hero' },
              r.image && e.createElement('img', { src: r.image }),
              e.createElement('h1', null, r.title),
              e.createElement('div', {
                dangerouslySetInnerHTML: { __html: r.desc },
              }),
              r.actions &&
                r.actions.map(function (t) {
                  return e.createElement(
                    p.Link,
                    { to: t.link, key: t.text },
                    e.createElement('button', { type: 'button' }, t.text),
                  );
                }),
            ),
          );
        },
        Me = function (r) {
          return e.createElement(
            'div',
            { className: '__dumi-default-layout-features' },
            r.map(function (t) {
              return e.createElement(
                'dl',
                {
                  key: t.title,
                  style: {
                    backgroundImage: t.icon
                      ? 'url('.concat(t.icon, ')')
                      : void 0,
                  },
                },
                t.link
                  ? e.createElement(
                      p.Link,
                      { to: t.link },
                      e.createElement('dt', null, t.title),
                    )
                  : e.createElement('dt', null, t.title),
                e.createElement('dd', {
                  dangerouslySetInnerHTML: { __html: t.desc },
                }),
              );
            }),
          );
        },
        xe = function (r) {
          var t,
            o,
            c = r.children,
            s = r.location,
            d = (0, e.useContext)(p.context),
            b = d.config,
            k = b.mode,
            y = b.repository,
            w = d.nav,
            f = d.meta,
            I = d.locale,
            C = y.url,
            B = y.branch,
            O = y.platform,
            z = (0, e.useState)(!0),
            v = W(z, 2),
            L = v[0],
            T = v[1],
            $ = (0, e.useState)(!1),
            ue = W($, 2),
            oe = ue[0],
            j = ue[1],
            he = k === 'site',
            X = he && f.hero,
            Y = he && f.features,
            Ne = f.sidemenu !== !1 && !X && !Y && !f.gapless,
            ke =
              !X &&
              !Y &&
              Boolean(
                (t = f.slugs) === null || t === void 0 ? void 0 : t.length,
              ) &&
              (f.toc === 'content' || f.toc === void 0) &&
              !f.gapless,
            Ce = /^zh|cn$/i.test(I),
            Le = new Date(f.updatedTime),
            Ie = ''
              .concat(Le.toLocaleDateString([], { hour12: !1 }), ' ')
              .concat(Le.toLocaleTimeString([], { hour12: !1 })),
            pe =
              { github: 'GitHub', gitlab: 'GitLab' }[
                ((o = (C || '').match(/(github|gitlab)/)) === null ||
                o === void 0
                  ? void 0
                  : o[1]) || 'nothing'
              ] || O;
          return e.createElement(
            'div',
            {
              className: '__dumi-default-layout',
              'data-route': s.pathname,
              'data-show-sidemenu': String(Ne),
              'data-show-slugs': String(ke),
              'data-site-mode': he,
              'data-gapless': String(!!f.gapless),
              onClick: function () {
                j(!1), !L && T(!0);
              },
            },
            e.createElement(U, {
              location: s,
              navPrefix: e.createElement(h, null),
              darkPrefix: e.createElement(D, {
                darkSwitch: oe,
                onDarkSwitchClick: function (ge) {
                  j(function (ye) {
                    return !ye;
                  }),
                    ge.stopPropagation();
                },
                isSideMenu: !1,
              }),
              onMobileMenuClick: function (ge) {
                T(function (ye) {
                  return !ye;
                }),
                  ge.stopPropagation();
              },
            }),
            e.createElement(de, {
              darkPrefix: e.createElement(D, {
                darkSwitch: oe,
                isSideMenu: !0,
              }),
              mobileMenuCollapsed: L,
              location: s,
            }),
            ke &&
              e.createElement(G, {
                slugs: f.slugs,
                className: '__dumi-default-layout-toc',
              }),
            X && Oe(f.hero),
            Y && Me(f.features),
            e.createElement(
              'div',
              { className: '__dumi-default-layout-content' },
              c,
              !X &&
                !Y &&
                f.filePath &&
                !f.gapless &&
                e.createElement(
                  'div',
                  { className: '__dumi-default-layout-footer-meta' },
                  pe &&
                    e.createElement(
                      p.Link,
                      {
                        to: ''
                          .concat(C, '/edit/')
                          .concat(B, '/')
                          .concat(f.filePath),
                      },
                      Ce
                        ? '\u5728 '.concat(
                            pe,
                            ' \u4E0A\u7F16\u8F91\u6B64\u9875',
                          )
                        : 'Edit this doc on '.concat(pe),
                    ),
                  e.createElement(
                    'span',
                    {
                      'data-updated-text': Ce
                        ? '\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A'
                        : 'Last update: ',
                    },
                    Ie,
                  ),
                ),
              (X || Y) &&
                f.footer &&
                e.createElement('div', {
                  className: '__dumi-default-layout-footer',
                  dangerouslySetInnerHTML: { __html: f.footer },
                }),
            ),
          );
        },
        Pe = xe;
    },
  },
]);
