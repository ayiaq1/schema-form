(self.webpackChunk_test_schema_form =
  self.webpackChunk_test_schema_form || []).push([
  [336],
  {
    73602: function (p, c, i) {
      'use strict';
      i.d(c, {
        m: function () {
          return u.m;
        },
      });
      var u = i(67624),
        s = i(93142);
    },
    65466: function (p, c, i) {
      'use strict';
      Object.defineProperty(c, '__esModule', { value: !0 }),
        (c.default = void 0);
      function u() {
        const e = m(i(67294));
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        const e = i(16924);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (f) {
              return Object.getOwnPropertyDescriptor(e, f).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? d(Object(t), !0).forEach(function (r) {
                _(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r),
                );
              });
        }
        return e;
      }
      function _(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      const O = (e) => e.render();
      var h = (e, n) => {
        let t = [];
        const r = e.match.params.uuid,
          f = e.location.query.wrapper === void 0,
          a = n[r];
        if (a) {
          const o = l(
            l({}, a.previewerProps),
            {},
            {
              hideActions: (a.previewerProps.hideActions || []).concat([
                'EXTERNAL',
              ]),
            },
          );
          e.location.query.capture !== void 0 &&
            ((o.motions = (o.motions || []).slice()),
            o.motions.unshift('autoplay'),
            o.motions.every((P) => !P.startsWith('capture')) &&
              o.motions.push('capture:[id|=root]')),
            f
              ? (t = [
                  u().default.createElement(O, {
                    render: () => (
                      (0, s().useMotions)(
                        o.motions || [],
                        typeof window != 'undefined'
                          ? document.documentElement
                          : null,
                      ),
                      u().default.createElement(
                        'div',
                        {},
                        u().default.createElement(a.component),
                      )
                    ),
                  }),
                ])
              : (t = [o, u().default.createElement(a.component)]);
        }
        return t;
      };
      c.default = h;
    },
  },
]);