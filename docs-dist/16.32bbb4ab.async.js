(self.webpackChunk_test_element_form =
  self.webpackChunk_test_element_form || []).push([
  [16],
  {
    87757: function (p, S, c) {
      p.exports = c(51776);
    },
    86845: function () {},
    94184: function (p, S) {
      var c, r;
      /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function () {
        'use strict';
        var d = {}.hasOwnProperty;
        function v() {
          for (var E = [], x = 0; x < arguments.length; x++) {
            var C = arguments[x];
            if (!!C) {
              var T = typeof C;
              if (T === 'string' || T === 'number') E.push(C);
              else if (Array.isArray(C)) {
                if (C.length) {
                  var K = v.apply(null, C);
                  K && E.push(K);
                }
              } else if (T === 'object')
                if (C.toString === Object.prototype.toString)
                  for (var R in C) d.call(C, R) && C[R] && E.push(R);
                else E.push(C.toString());
            }
          }
          return E.join(' ');
        }
        p.exports
          ? ((v.default = v), (p.exports = v))
          : ((c = []),
            (r = function () {
              return v;
            }.apply(S, c)),
            r !== void 0 && (p.exports = r));
      })();
    },
    25016: function (p, S, c) {
      'use strict';
      c.r(S),
        c.d(S, {
          default: function () {
            return hc;
          },
        });
      var r = c(67294),
        d = c(22122);
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function E(e) {
        if (Array.isArray(e)) return e;
      }
      function x(e, t) {
        var n =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (n != null) {
          var i = [],
            o = !0,
            u = !1,
            a,
            l;
          try {
            for (
              n = n.call(e);
              !(o = (a = n.next()).done) &&
              (i.push(a.value), !(t && i.length === t));
              o = !0
            );
          } catch (s) {
            (u = !0), (l = s);
          } finally {
            try {
              !o && n.return != null && n.return();
            } finally {
              if (u) throw l;
            }
          }
          return i;
        }
      }
      function C(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function T(e, t) {
        if (!!e) {
          if (typeof e == 'string') return C(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(e);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return C(e, t);
        }
      }
      function K() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function R(e, t) {
        return E(e) || x(e, t) || T(e, t) || K();
      }
      function G(e) {
        return (
          (G =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    typeof Symbol == 'function' &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          G(e)
        );
      }
      var be = c(19756);
      function z(e, t) {
        if (e == null) return {};
        var n = (0, be.Z)(e, t),
          i,
          o;
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (o = 0; o < u.length; o++)
            (i = u[o]),
              !(t.indexOf(i) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(e, i) ||
                  (n[i] = e[i]));
        }
        return n;
      }
      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? Oe(Object(n), !0).forEach(function (i) {
                v(e, i, n[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (i) {
                Object.defineProperty(
                  e,
                  i,
                  Object.getOwnPropertyDescriptor(n, i),
                );
              });
        }
        return e;
      }
      var $e = c(94184),
        X = c.n($e),
        Te = c(59864);
      function pe(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n = [];
        return (
          r.Children.forEach(e, function (i) {
            (i == null && !t.keepEmpty) ||
              (Array.isArray(i)
                ? (n = n.concat(pe(i)))
                : (0, Te.isFragment)(i) && i.props
                ? (n = n.concat(pe(i.props.children, t)))
                : n.push(i));
          }),
          n
        );
      }
      var ce = function () {
        if (typeof navigator == 'undefined' || typeof window == 'undefined')
          return !1;
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return !!(
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            e == null ? void 0 : e.substr(0, 4),
          )
        );
      };
      function Ie(e) {
        var t = r.useRef(!1),
          n = r.useState(e),
          i = R(n, 2),
          o = i[0],
          u = i[1];
        r.useEffect(function () {
          return (
            (t.current = !1),
            function () {
              t.current = !0;
            }
          );
        }, []);
        function a(l, s) {
          (s && t.current) || u(l);
        }
        return [o, a];
      }
      function ue(e, t) {
        var n = t || {},
          i = n.defaultValue,
          o = n.value,
          u = n.onChange,
          a = n.postState,
          l = Ie(function () {
            return o !== void 0
              ? o
              : i !== void 0
              ? typeof i == 'function'
                ? i()
                : i
              : typeof e == 'function'
              ? e()
              : e;
          }),
          s = R(l, 2),
          f = s[0],
          m = s[1],
          h = o !== void 0 ? o : f;
        a && (h = a(h));
        var g = r.useRef(u);
        g.current = u;
        var b = r.useCallback(
            function (w, O) {
              m(w, O), h !== w && g.current && g.current(w, h);
            },
            [h, g],
          ),
          y = r.useRef(o);
        return (
          r.useEffect(
            function () {
              o === void 0 && o !== y.current && m(o), (y.current = o);
            },
            [o],
          ),
          [h, b]
        );
      }
      function He(e) {
        if (Array.isArray(e)) return C(e);
      }
      function Ee(e) {
        if (
          (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
          e['@@iterator'] != null
        )
          return Array.from(e);
      }
      function me() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ne(e) {
        return He(e) || Ee(e) || T(e) || me();
      }
      var Ge = function (t) {
          return +setTimeout(t, 16);
        },
        nt = function (t) {
          return clearTimeout(t);
        };
      typeof window != 'undefined' &&
        'requestAnimationFrame' in window &&
        ((Ge = function (t) {
          return window.requestAnimationFrame(t);
        }),
        (nt = function (t) {
          return window.cancelAnimationFrame(t);
        }));
      var de = 0,
        rt = new Map();
      function Je(e) {
        rt.delete(e);
      }
      function _e(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        de += 1;
        var n = de;
        function i(o) {
          if (o === 0) Je(n), e();
          else {
            var u = Ge(function () {
              i(o - 1);
            });
            rt.set(n, u);
          }
        }
        return i(t), n;
      }
      _e.cancel = function (e) {
        var t = rt.get(e);
        return Je(t), nt(t);
      };
      var Ct = {};
      function tr(e, t) {}
      function Wa(e, t) {}
      function yc() {
        Ct = {};
      }
      function Wr(e, t, n) {
        !t && !Ct[n] && (e(!1, n), (Ct[n] = !0));
      }
      function ja(e, t) {
        Wr(tr, e, t);
      }
      function bc(e, t) {
        Wr(Wa, e, t);
      }
      var jr = ja;
      function Ua(e, t, n) {
        var i = r.useRef({});
        return (
          (!('value' in i.current) || n(i.current.condition, t)) &&
            ((i.current.value = e()), (i.current.condition = t)),
          i.current.value
        );
      }
      function Ur(e, t) {
        typeof e == 'function'
          ? e(t)
          : G(e) === 'object' && e && 'current' in e && (e.current = t);
      }
      function Jt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = t.filter(function (o) {
          return o;
        });
        return i.length <= 1
          ? i[0]
          : function (o) {
              t.forEach(function (u) {
                Ur(u, o);
              });
            };
      }
      function Ec() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return useMemo(
          function () {
            return Jt.apply(void 0, t);
          },
          t,
          function (i, o) {
            return (
              i.length === o.length &&
              i.every(function (u, a) {
                return u === o[a];
              })
            );
          },
        );
      }
      function nr(e) {
        var t,
          n,
          i = (0, Te.isMemo)(e) ? e.type.type : e.type;
        return !(
          (typeof i == 'function' &&
            !((t = i.prototype) === null || t === void 0
              ? void 0
              : t.render)) ||
          (typeof e == 'function' &&
            !((n = e.prototype) === null || n === void 0 ? void 0 : n.render))
        );
      }
      var qt = c(73935);
      function bn(e) {
        return e instanceof HTMLElement ? e : qt.findDOMNode(e);
      }
      var Br = (function () {
          if (typeof Map != 'undefined') return Map;
          function e(t, n) {
            var i = -1;
            return (
              t.some(function (o, u) {
                return o[0] === n ? ((i = u), !0) : !1;
              }),
              i
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (n) {
                var i = e(this.__entries__, n),
                  o = this.__entries__[i];
                return o && o[1];
              }),
              (t.prototype.set = function (n, i) {
                var o = e(this.__entries__, n);
                ~o
                  ? (this.__entries__[o][1] = i)
                  : this.__entries__.push([n, i]);
              }),
              (t.prototype.delete = function (n) {
                var i = this.__entries__,
                  o = e(i, n);
                ~o && i.splice(o, 1);
              }),
              (t.prototype.has = function (n) {
                return !!~e(this.__entries__, n);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (n, i) {
                i === void 0 && (i = null);
                for (var o = 0, u = this.__entries__; o < u.length; o++) {
                  var a = u[o];
                  n.call(i, a[1], a[0]);
                }
              }),
              t
            );
          })();
        })(),
        rr =
          typeof window != 'undefined' &&
          typeof document != 'undefined' &&
          window.document === document,
        En = (function () {
          return typeof c.g != 'undefined' && c.g.Math === Math
            ? c.g
            : typeof self != 'undefined' && self.Math === Math
            ? self
            : typeof window != 'undefined' && window.Math === Math
            ? window
            : Function('return this')();
        })(),
        Ba = (function () {
          return typeof requestAnimationFrame == 'function'
            ? requestAnimationFrame.bind(En)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
        })(),
        za = 2;
      function $a(e, t) {
        var n = !1,
          i = !1,
          o = 0;
        function u() {
          n && ((n = !1), e()), i && l();
        }
        function a() {
          Ba(u);
        }
        function l() {
          var s = Date.now();
          if (n) {
            if (s - o < za) return;
            i = !0;
          } else (n = !0), (i = !1), setTimeout(a, t);
          o = s;
        }
        return l;
      }
      var Ga = 20,
        Xa = [
          'top',
          'right',
          'bottom',
          'left',
          'width',
          'height',
          'size',
          'weight',
        ],
        Ya = typeof MutationObserver != 'undefined',
        Za = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = $a(this.refresh.bind(this), Ga));
          }
          return (
            (e.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (t) {
              var n = this.observers_,
                i = n.indexOf(t);
              ~i && n.splice(i, 1),
                !n.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              var t = this.updateObservers_();
              t && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (n) {
                return n.gatherActive(), n.hasActive();
              });
              return (
                t.forEach(function (n) {
                  return n.broadcastActive();
                }),
                t.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              !rr ||
                this.connected_ ||
                (document.addEventListener(
                  'transitionend',
                  this.onTransitionEnd_,
                ),
                window.addEventListener('resize', this.refresh),
                Ya
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh,
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              !rr ||
                !this.connected_ ||
                (document.removeEventListener(
                  'transitionend',
                  this.onTransitionEnd_,
                ),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    'DOMSubtreeModified',
                    this.refresh,
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (t) {
              var n = t.propertyName,
                i = n === void 0 ? '' : n,
                o = Xa.some(function (u) {
                  return !!~i.indexOf(u);
                });
              o && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        zr = function (e, t) {
          for (var n = 0, i = Object.keys(t); n < i.length; n++) {
            var o = i[n];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        Ht = function (e) {
          var t = e && e.ownerDocument && e.ownerDocument.defaultView;
          return t || En;
        },
        $r = Cn(0, 0, 0, 0);
      function Sn(e) {
        return parseFloat(e) || 0;
      }
      function Gr(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (i, o) {
          var u = e['border-' + o + '-width'];
          return i + Sn(u);
        }, 0);
      }
      function Qa(e) {
        for (
          var t = ['top', 'right', 'bottom', 'left'], n = {}, i = 0, o = t;
          i < o.length;
          i++
        ) {
          var u = o[i],
            a = e['padding-' + u];
          n[u] = Sn(a);
        }
        return n;
      }
      function Ja(e) {
        var t = e.getBBox();
        return Cn(0, 0, t.width, t.height);
      }
      function qa(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return $r;
        var i = Ht(e).getComputedStyle(e),
          o = Qa(i),
          u = o.left + o.right,
          a = o.top + o.bottom,
          l = Sn(i.width),
          s = Sn(i.height);
        if (
          (i.boxSizing === 'border-box' &&
            (Math.round(l + u) !== t && (l -= Gr(i, 'left', 'right') + u),
            Math.round(s + a) !== n && (s -= Gr(i, 'top', 'bottom') + a)),
          !to(e))
        ) {
          var f = Math.round(l + u) - t,
            m = Math.round(s + a) - n;
          Math.abs(f) !== 1 && (l -= f), Math.abs(m) !== 1 && (s -= m);
        }
        return Cn(o.left, o.top, l, s);
      }
      var eo = (function () {
        return typeof SVGGraphicsElement != 'undefined'
          ? function (e) {
              return e instanceof Ht(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof Ht(e).SVGElement && typeof e.getBBox == 'function'
              );
            };
      })();
      function to(e) {
        return e === Ht(e).document.documentElement;
      }
      function no(e) {
        return rr ? (eo(e) ? Ja(e) : qa(e)) : $r;
      }
      function ro(e) {
        var t = e.x,
          n = e.y,
          i = e.width,
          o = e.height,
          u = typeof DOMRectReadOnly != 'undefined' ? DOMRectReadOnly : Object,
          a = Object.create(u.prototype);
        return (
          zr(a, {
            x: t,
            y: n,
            width: i,
            height: o,
            top: n,
            right: t + i,
            bottom: o + n,
            left: t,
          }),
          a
        );
      }
      function Cn(e, t, n, i) {
        return { x: e, y: t, width: n, height: i };
      }
      var io = (function () {
          function e(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = Cn(0, 0, 0, 0)),
              (this.target = t);
          }
          return (
            (e.prototype.isActive = function () {
              var t = no(this.target);
              return (
                (this.contentRect_ = t),
                t.width !== this.broadcastWidth ||
                  t.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            }),
            e
          );
        })(),
        ao = (function () {
          function e(t, n) {
            var i = ro(n);
            zr(this, { target: t, contentRect: i });
          }
          return e;
        })(),
        oo = (function () {
          function e(t, n, i) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new Br()),
              typeof t != 'function')
            )
              throw new TypeError(
                'The callback provided as parameter 1 is not a function.',
              );
            (this.callback_ = t),
              (this.controller_ = n),
              (this.callbackCtx_ = i);
          }
          return (
            (e.prototype.observe = function (t) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if (
                !(typeof Element == 'undefined' || !(Element instanceof Object))
              ) {
                if (!(t instanceof Ht(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                n.has(t) ||
                  (n.set(t, new io(t)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if (
                !(typeof Element == 'undefined' || !(Element instanceof Object))
              ) {
                if (!(t instanceof Ht(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                !n.has(t) ||
                  (n.delete(t),
                  n.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var t = this;
              this.clearActive(),
                this.observations_.forEach(function (n) {
                  n.isActive() && t.activeObservations_.push(n);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (!!this.hasActive()) {
                var t = this.callbackCtx_,
                  n = this.activeObservations_.map(function (i) {
                    return new ao(i.target, i.broadcastRect());
                  });
                this.callback_.call(t, n, t), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        Xr = typeof WeakMap != 'undefined' ? new WeakMap() : new Br(),
        Yr = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            var n = Za.getInstance(),
              i = new oo(t, n, this);
            Xr.set(this, i);
          }
          return e;
        })();
      ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
        Yr.prototype[e] = function () {
          var t;
          return (t = Xr.get(this))[e].apply(t, arguments);
        };
      });
      var uo = (function () {
          return typeof En.ResizeObserver != 'undefined'
            ? En.ResizeObserver
            : Yr;
        })(),
        Zr = uo,
        wt = new Map();
      function so(e) {
        e.forEach(function (t) {
          var n,
            i = t.target;
          (n = wt.get(i)) === null ||
            n === void 0 ||
            n.forEach(function (o) {
              return o(i);
            });
        });
      }
      var Qr = new Zr(so),
        Sc = null,
        Cc = null;
      function co(e, t) {
        wt.has(e) || (wt.set(e, new Set()), Qr.observe(e)), wt.get(e).add(t);
      }
      function lo(e, t) {
        wt.has(e) &&
          (wt.get(e).delete(t),
          wt.get(e).size || (Qr.unobserve(e), wt.delete(e)));
      }
      function en(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Jr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function tn(e, t, n) {
        return (
          t && Jr(e.prototype, t),
          n && Jr(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      var fo = c(14665);
      function nn(e, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && (0, fo.Z)(e, t);
      }
      function wn(e) {
        return (
          (wn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          wn(e)
        );
      }
      function vo() {
        if (
          typeof Reflect == 'undefined' ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function qr(e) {
        if (e === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function po(e, t) {
        if (t && (G(t) === 'object' || typeof t == 'function')) return t;
        if (t !== void 0)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return qr(e);
      }
      function rn(e) {
        var t = vo();
        return function () {
          var i = wn(e),
            o;
          if (t) {
            var u = wn(this).constructor;
            o = Reflect.construct(i, arguments, u);
          } else o = i.apply(this, arguments);
          return po(this, o);
        };
      }
      var mo = (function (e) {
          nn(n, e);
          var t = rn(n);
          function n() {
            return en(this, n), t.apply(this, arguments);
          }
          return (
            tn(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(r.Component),
        ir = r.createContext(null);
      function ho(e) {
        var t = e.children,
          n = e.onBatchResize,
          i = r.useRef(0),
          o = r.useRef([]),
          u = r.useContext(ir),
          a = r.useCallback(
            function (l, s, f) {
              i.current += 1;
              var m = i.current;
              o.current.push({ size: l, element: s, data: f }),
                Promise.resolve().then(function () {
                  m === i.current &&
                    (n == null || n(o.current), (o.current = []));
                }),
                u == null || u(l, s, f);
            },
            [n, u],
          );
        return r.createElement(ir.Provider, { value: a }, t);
      }
      function go(e) {
        var t = e.children,
          n = e.disabled,
          i = r.useRef(null),
          o = r.useRef(null),
          u = r.useContext(ir),
          a = typeof t == 'function',
          l = a ? t(i) : t,
          s = r.useRef({
            width: -1,
            height: -1,
            offsetWidth: -1,
            offsetHeight: -1,
          }),
          f = !a && r.isValidElement(l) && nr(l),
          m = f ? l.ref : null,
          h = r.useMemo(
            function () {
              return Jt(m, i);
            },
            [m, i],
          ),
          g = r.useRef(e);
        g.current = e;
        var b = r.useCallback(function (y) {
          var w = g.current,
            O = w.onResize,
            L = w.data,
            N = y.getBoundingClientRect(),
            A = N.width,
            M = N.height,
            D = y.offsetWidth,
            _ = y.offsetHeight,
            F = Math.floor(A),
            V = Math.floor(M);
          if (
            s.current.width !== F ||
            s.current.height !== V ||
            s.current.offsetWidth !== D ||
            s.current.offsetHeight !== _
          ) {
            var I = { width: F, height: V, offsetWidth: D, offsetHeight: _ };
            s.current = I;
            var j = D === Math.round(A) ? A : D,
              W = _ === Math.round(M) ? M : _,
              k = P(P({}, I), {}, { offsetWidth: j, offsetHeight: W });
            u == null || u(k, y, L),
              O &&
                Promise.resolve().then(function () {
                  O(k, y);
                });
          }
        }, []);
        return (
          r.useEffect(
            function () {
              var y = bn(i.current) || bn(o.current);
              return (
                y && !n && co(y, b),
                function () {
                  return lo(y, b);
                }
              );
            },
            [i.current, n],
          ),
          r.createElement(mo, { ref: o }, f ? r.cloneElement(l, { ref: h }) : l)
        );
      }
      var yo = 'rc-observer-key';
      function ei(e) {
        var t = e.children,
          n = typeof t == 'function' ? [t] : pe(t);
        return n.map(function (i, o) {
          var u = (i == null ? void 0 : i.key) || ''.concat(yo, '-').concat(o);
          return r.createElement(go, (0, d.Z)({}, e, { key: u }), i);
        });
      }
      ei.Collection = ho;
      var xn = ei;
      function ti(e) {
        var t = (0, r.useRef)(),
          n = (0, r.useRef)(!1);
        function i() {
          for (var o = arguments.length, u = new Array(o), a = 0; a < o; a++)
            u[a] = arguments[a];
          n.current ||
            (_e.cancel(t.current),
            (t.current = _e(function () {
              e.apply(void 0, u);
            })));
        }
        return (
          (0, r.useEffect)(function () {
            return function () {
              (n.current = !0), _e.cancel(t.current);
            };
          }, []),
          i
        );
      }
      function bo(e) {
        var t = (0, r.useRef)([]),
          n = (0, r.useState)({}),
          i = R(n, 2),
          o = i[1],
          u = (0, r.useRef)(typeof e == 'function' ? e() : e),
          a = ti(function () {
            var s = u.current;
            t.current.forEach(function (f) {
              s = f(s);
            }),
              (t.current = []),
              (u.current = s),
              o({});
          });
        function l(s) {
          t.current.push(s), a();
        }
        return [u.current, l];
      }
      var Z = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (t) {
            var n = t.keyCode;
            if (
              (t.altKey && !t.ctrlKey) ||
              t.metaKey ||
              (n >= Z.F1 && n <= Z.F12)
            )
              return !1;
            switch (n) {
              case Z.ALT:
              case Z.CAPS_LOCK:
              case Z.CONTEXT_MENU:
              case Z.CTRL:
              case Z.DOWN:
              case Z.END:
              case Z.ESC:
              case Z.HOME:
              case Z.INSERT:
              case Z.LEFT:
              case Z.MAC_FF_META:
              case Z.META:
              case Z.NUMLOCK:
              case Z.NUM_CENTER:
              case Z.PAGE_DOWN:
              case Z.PAGE_UP:
              case Z.PAUSE:
              case Z.PRINT_SCREEN:
              case Z.RIGHT:
              case Z.SHIFT:
              case Z.UP:
              case Z.WIN_KEY:
              case Z.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function (t) {
            if (
              (t >= Z.ZERO && t <= Z.NINE) ||
              (t >= Z.NUM_ZERO && t <= Z.NUM_MULTIPLY) ||
              (t >= Z.A && t <= Z.Z) ||
              (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
            )
              return !0;
            switch (t) {
              case Z.SPACE:
              case Z.QUESTION_MARK:
              case Z.NUM_PLUS:
              case Z.NUM_MINUS:
              case Z.NUM_PERIOD:
              case Z.NUM_DIVISION:
              case Z.SEMICOLON:
              case Z.DASH:
              case Z.EQUALS:
              case Z.COMMA:
              case Z.PERIOD:
              case Z.SLASH:
              case Z.APOSTROPHE:
              case Z.SINGLE_QUOTE:
              case Z.OPEN_SQUARE_BRACKET:
              case Z.BACKSLASH:
              case Z.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        Ve = Z;
      function Eo(e, t) {
        var n,
          i = e.prefixCls,
          o = e.id,
          u = e.active,
          a = e.tab,
          l = a.key,
          s = a.tab,
          f = a.disabled,
          m = a.closeIcon,
          h = e.closable,
          g = e.renderWrapper,
          b = e.removeAriaLabel,
          y = e.editable,
          w = e.onClick,
          O = e.onRemove,
          L = e.onFocus,
          N = e.style,
          A = ''.concat(i, '-tab');
        r.useEffect(function () {
          return O;
        }, []);
        var M = y && h !== !1 && !f;
        function D(V) {
          f || w(V);
        }
        function _(V) {
          V.preventDefault(),
            V.stopPropagation(),
            y.onEdit('remove', { key: l, event: V });
        }
        var F = r.createElement(
          'div',
          {
            key: l,
            ref: t,
            className: X()(
              A,
              ((n = {}),
              v(n, ''.concat(A, '-with-remove'), M),
              v(n, ''.concat(A, '-active'), u),
              v(n, ''.concat(A, '-disabled'), f),
              n),
            ),
            style: N,
            onClick: D,
          },
          r.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': u,
              id: o && ''.concat(o, '-tab-').concat(l),
              className: ''.concat(A, '-btn'),
              'aria-controls': o && ''.concat(o, '-panel-').concat(l),
              'aria-disabled': f,
              tabIndex: f ? null : 0,
              onClick: function (I) {
                I.stopPropagation(), D(I);
              },
              onKeyDown: function (I) {
                [Ve.SPACE, Ve.ENTER].includes(I.which) &&
                  (I.preventDefault(), D(I));
              },
              onFocus: L,
            },
            s,
          ),
          M &&
            r.createElement(
              'button',
              {
                type: 'button',
                'aria-label': b || 'remove',
                tabIndex: 0,
                className: ''.concat(A, '-remove'),
                onClick: function (I) {
                  I.stopPropagation(), _(I);
                },
              },
              m || y.removeIcon || '\xD7',
            ),
        );
        return g ? g(F) : F;
      }
      var So = r.forwardRef(Eo),
        ni = { width: 0, height: 0, left: 0, top: 0 };
      function Co(e, t, n) {
        return (0, r.useMemo)(
          function () {
            for (
              var i,
                o = new Map(),
                u =
                  t.get((i = e[0]) === null || i === void 0 ? void 0 : i.key) ||
                  ni,
                a = u.left + u.width,
                l = 0;
              l < e.length;
              l += 1
            ) {
              var s = e[l].key,
                f = t.get(s);
              if (!f) {
                var m;
                f =
                  t.get(
                    (m = e[l - 1]) === null || m === void 0 ? void 0 : m.key,
                  ) || ni;
              }
              var h = o.get(s) || P({}, f);
              (h.right = a - h.left - h.width), o.set(s, h);
            }
            return o;
          },
          [
            e
              .map(function (i) {
                return i.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var ri = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function wo(e, t, n, i, o) {
        var u = o.tabs,
          a = o.tabPosition,
          l = o.rtl,
          s,
          f,
          m;
        ['top', 'bottom'].includes(a)
          ? ((s = 'width'), (f = l ? 'right' : 'left'), (m = Math.abs(t.left)))
          : ((s = 'height'), (f = 'top'), (m = -t.top));
        var h = t[s],
          g = n[s],
          b = i[s],
          y = h;
        return (
          g + b > h && g < h && (y = h - b),
          (0, r.useMemo)(
            function () {
              if (!u.length) return [0, 0];
              for (var w = u.length, O = w, L = 0; L < w; L += 1) {
                var N = e.get(u[L].key) || ri;
                if (N[f] + N[s] > m + y) {
                  O = L - 1;
                  break;
                }
              }
              for (var A = 0, M = w - 1; M >= 0; M -= 1) {
                var D = e.get(u[M].key) || ri;
                if (D[f] < m) {
                  A = M + 1;
                  break;
                }
              }
              return [A, O];
            },
            [
              e,
              m,
              y,
              a,
              u
                .map(function (w) {
                  return w.key;
                })
                .join('_'),
              l,
            ],
          )
        );
      }
      var xo = c(96774),
        ii = c.n(xo);
      function an() {
        return !!(
          typeof window != 'undefined' &&
          window.document &&
          window.document.createElement
        );
      }
      var Ro = an() ? r.useLayoutEffect : r.useEffect,
        To = Ro,
        Po = [
          'prefixCls',
          'invalidate',
          'item',
          'renderItem',
          'responsive',
          'registerSize',
          'itemKey',
          'className',
          'style',
          'children',
          'display',
          'order',
          'component',
        ],
        Vt = void 0;
      function Mo(e, t) {
        var n = e.prefixCls,
          i = e.invalidate,
          o = e.item,
          u = e.renderItem,
          a = e.responsive,
          l = e.registerSize,
          s = e.itemKey,
          f = e.className,
          m = e.style,
          h = e.children,
          g = e.display,
          b = e.order,
          y = e.component,
          w = y === void 0 ? 'div' : y,
          O = z(e, Po),
          L = a && !g;
        function N(F) {
          l(s, F);
        }
        r.useEffect(function () {
          return function () {
            N(null);
          };
        }, []);
        var A = u && o !== Vt ? u(o) : h,
          M;
        i ||
          (M = {
            opacity: L ? 0 : 1,
            height: L ? 0 : Vt,
            overflowY: L ? 'hidden' : Vt,
            order: a ? b : Vt,
            pointerEvents: L ? 'none' : Vt,
            position: L ? 'absolute' : Vt,
          });
        var D = {};
        L && (D['aria-hidden'] = !0);
        var _ = r.createElement(
          w,
          (0, d.Z)(
            { className: X()(!i && n, f), style: P(P({}, M), m) },
            D,
            O,
            { ref: t },
          ),
          A,
        );
        return (
          a &&
            (_ = r.createElement(
              xn,
              {
                onResize: function (V) {
                  var I = V.offsetWidth;
                  N(I);
                },
              },
              _,
            )),
          _
        );
      }
      var ai = r.forwardRef(Mo);
      ai.displayName = 'Item';
      var Rn = ai;
      function Ao() {
        var e = Ie({}),
          t = R(e, 2),
          n = t[1],
          i = (0, r.useRef)([]),
          o = 0,
          u = 0;
        function a(l) {
          var s = o;
          (o += 1), i.current.length < s + 1 && (i.current[s] = l);
          var f = i.current[s];
          function m(h) {
            (i.current[s] = typeof h == 'function' ? h(i.current[s]) : h),
              _e.cancel(u),
              (u = _e(function () {
                n({}, !0);
              }));
          }
          return [f, m];
        }
        return a;
      }
      var Oo = ['component'],
        Io = ['className'],
        No = ['className'],
        _o = function (t, n) {
          var i = r.useContext(Tn);
          if (!i) {
            var o = t.component,
              u = o === void 0 ? 'div' : o,
              a = z(t, Oo);
            return r.createElement(u, (0, d.Z)({}, a, { ref: n }));
          }
          var l = i.className,
            s = z(i, Io),
            f = t.className,
            m = z(t, No);
          return r.createElement(
            Tn.Provider,
            { value: null },
            r.createElement(
              Rn,
              (0, d.Z)({ ref: n, className: X()(l, f) }, s, m),
            ),
          );
        },
        oi = r.forwardRef(_o);
      oi.displayName = 'RawItem';
      var Do = oi,
        Lo = [
          'prefixCls',
          'data',
          'renderItem',
          'renderRawItem',
          'itemKey',
          'itemWidth',
          'ssr',
          'style',
          'className',
          'maxCount',
          'renderRest',
          'renderRawRest',
          'suffix',
          'component',
          'itemComponent',
          'onVisibleChange',
        ],
        Tn = r.createContext(null),
        ui = 'responsive',
        si = 'invalidate';
      function ko(e) {
        return '+ '.concat(e.length, ' ...');
      }
      function Ko(e, t) {
        var n = e.prefixCls,
          i = n === void 0 ? 'rc-overflow' : n,
          o = e.data,
          u = o === void 0 ? [] : o,
          a = e.renderItem,
          l = e.renderRawItem,
          s = e.itemKey,
          f = e.itemWidth,
          m = f === void 0 ? 10 : f,
          h = e.ssr,
          g = e.style,
          b = e.className,
          y = e.maxCount,
          w = e.renderRest,
          O = e.renderRawRest,
          L = e.suffix,
          N = e.component,
          A = N === void 0 ? 'div' : N,
          M = e.itemComponent,
          D = e.onVisibleChange,
          _ = z(e, Lo),
          F = Ao(),
          V = h === 'full',
          I = F(null),
          j = R(I, 2),
          W = j[0],
          k = j[1],
          U = W || 0,
          $ = F(new Map()),
          H = R($, 2),
          ne = H[0],
          Q = H[1],
          we = F(0),
          he = R(we, 2),
          Y = he[0],
          re = he[1],
          ge = F(0),
          te = R(ge, 2),
          ve = te[0],
          se = te[1],
          B = F(0),
          ae = R(B, 2),
          q = ae[0],
          Me = ae[1],
          le = (0, r.useState)(null),
          ie = R(le, 2),
          fe = ie[0],
          Be = ie[1],
          Fe = (0, r.useState)(null),
          je = R(Fe, 2),
          Pe = je[0],
          ye = je[1],
          oe = r.useMemo(
            function () {
              return Pe === null && V ? Number.MAX_SAFE_INTEGER : Pe || 0;
            },
            [Pe, W],
          ),
          De = (0, r.useState)(!1),
          it = R(De, 2),
          qe = it[0],
          Rt = it[1],
          pt = ''.concat(i, '-item'),
          mt = Math.max(Y, ve),
          et = u.length && y === ui,
          ut = y === si,
          Tt = et || (typeof y == 'number' && u.length > y),
          Ze = (0, r.useMemo)(
            function () {
              var ee = u;
              return (
                et
                  ? W === null && V
                    ? (ee = u)
                    : (ee = u.slice(0, Math.min(u.length, U / m)))
                  : typeof y == 'number' && (ee = u.slice(0, y)),
                ee
              );
            },
            [u, m, W, y, et],
          ),
          st = (0, r.useMemo)(
            function () {
              return et ? u.slice(oe + 1) : u.slice(Ze.length);
            },
            [u, Ze, et, oe],
          ),
          at = (0, r.useCallback)(
            function (ee, Ce) {
              var Ke;
              return typeof s == 'function'
                ? s(ee)
                : (Ke = s && (ee == null ? void 0 : ee[s])) !== null &&
                  Ke !== void 0
                ? Ke
                : Ce;
            },
            [s],
          ),
          We = (0, r.useCallback)(
            a ||
              function (ee) {
                return ee;
              },
            [a],
          );
        function Qe(ee, Ce) {
          ye(ee), Ce || (Rt(ee < u.length - 1), D == null || D(ee));
        }
        function dt(ee, Ce) {
          k(Ce.clientWidth);
        }
        function ct(ee, Ce) {
          Q(function (Ke) {
            var Ue = new Map(Ke);
            return Ce === null ? Ue.delete(ee) : Ue.set(ee, Ce), Ue;
          });
        }
        function Xe(ee, Ce) {
          se(Ce), re(ve);
        }
        function Ye(ee, Ce) {
          Me(Ce);
        }
        function lt(ee) {
          return ne.get(at(Ze[ee], ee));
        }
        To(
          function () {
            if (U && mt && Ze) {
              var ee = q,
                Ce = Ze.length,
                Ke = Ce - 1;
              if (!Ce) {
                Qe(0), Be(null);
                return;
              }
              for (var Ue = 0; Ue < Ce; Ue += 1) {
                var Mt = lt(Ue);
                if (Mt === void 0) {
                  Qe(Ue - 1, !0);
                  break;
                }
                if (
                  ((ee += Mt),
                  (Ke === 0 && ee <= U) || (Ue === Ke - 1 && ee + lt(Ke) <= U))
                ) {
                  Qe(Ke), Be(null);
                  break;
                } else if (ee + mt > U) {
                  Qe(Ue - 1), Be(ee - Mt - q + ve);
                  break;
                }
              }
              L && lt(0) + q > U && Be(null);
            }
          },
          [U, ne, ve, q, at, Ze],
        );
        var _t = qe && !!st.length,
          yt = {};
        fe !== null && et && (yt = { position: 'absolute', left: fe, top: 0 });
        var ze = {
            prefixCls: pt,
            responsive: et,
            component: M,
            invalidate: ut,
          },
          Dt = l
            ? function (ee, Ce) {
                var Ke = at(ee, Ce);
                return r.createElement(
                  Tn.Provider,
                  {
                    key: Ke,
                    value: P(
                      P({}, ze),
                      {},
                      {
                        order: Ce,
                        item: ee,
                        itemKey: Ke,
                        registerSize: ct,
                        display: Ce <= oe,
                      },
                    ),
                  },
                  l(ee, Ce),
                );
              }
            : function (ee, Ce) {
                var Ke = at(ee, Ce);
                return r.createElement(
                  Rn,
                  (0, d.Z)({}, ze, {
                    order: Ce,
                    key: Ke,
                    item: ee,
                    renderItem: We,
                    itemKey: Ke,
                    registerSize: ct,
                    display: Ce <= oe,
                  }),
                );
              },
          bt,
          Lt = {
            order: _t ? oe : Number.MAX_SAFE_INTEGER,
            className: ''.concat(pt, '-rest'),
            registerSize: Xe,
            display: _t,
          };
        if (O)
          O &&
            (bt = r.createElement(
              Tn.Provider,
              { value: P(P({}, ze), Lt) },
              O(st),
            ));
        else {
          var Pt = w || ko;
          bt = r.createElement(
            Rn,
            (0, d.Z)({}, ze, Lt),
            typeof Pt == 'function' ? Pt(st) : Pt,
          );
        }
        var kt = r.createElement(
          A,
          (0, d.Z)({ className: X()(!ut && i, b), style: g, ref: t }, _),
          Ze.map(Dt),
          Tt ? bt : null,
          L &&
            r.createElement(
              Rn,
              (0, d.Z)({}, ze, {
                order: oe,
                className: ''.concat(pt, '-suffix'),
                registerSize: Ye,
                display: !0,
                style: yt,
              }),
              L,
            ),
        );
        return et && (kt = r.createElement(xn, { onResize: dt }, kt)), kt;
      }
      var on = r.forwardRef(Ko);
      (on.displayName = 'Overflow'),
        (on.Item = Do),
        (on.RESPONSIVE = ui),
        (on.INVALIDATE = si);
      var Fo = on,
        un = Fo;
      function ci(e, t) {
        var n = P({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (i) {
              delete n[i];
            }),
          n
        );
      }
      var Ho = ['children', 'locked'],
        ft = r.createContext(null);
      function Vo(e, t) {
        var n = P({}, e);
        return (
          Object.keys(t).forEach(function (i) {
            var o = t[i];
            o !== void 0 && (n[i] = o);
          }),
          n
        );
      }
      function sn(e) {
        var t = e.children,
          n = e.locked,
          i = z(e, Ho),
          o = r.useContext(ft),
          u = Ua(
            function () {
              return Vo(o, i);
            },
            [o, i],
            function (a, l) {
              return !n && (a[0] !== l[0] || !ii()(a[1], l[1]));
            },
          );
        return r.createElement(ft.Provider, { value: u }, t);
      }
      function li(e, t, n, i) {
        var o = r.useContext(ft),
          u = o.activeKey,
          a = o.onActive,
          l = o.onInactive,
          s = { active: u === e };
        return (
          t ||
            ((s.onMouseEnter = function (f) {
              n == null || n({ key: e, domEvent: f }), a(e);
            }),
            (s.onMouseLeave = function (f) {
              i == null || i({ key: e, domEvent: f }), l(e);
            })),
          s
        );
      }
      var Wo = ['item'];
      function Pn(e) {
        var t = e.item,
          n = z(e, Wo);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                jr(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function fi(e) {
        var t = e.icon,
          n = e.props,
          i = e.children,
          o;
        return (
          typeof t == 'function' ? (o = r.createElement(t, P({}, n))) : (o = t),
          o || i || null
        );
      }
      function di(e) {
        var t = r.useContext(ft),
          n = t.mode,
          i = t.rtl,
          o = t.inlineIndent;
        if (n !== 'inline') return null;
        var u = e;
        return i ? { paddingRight: u * o } : { paddingLeft: u * o };
      }
      var jo = [],
        vi = r.createContext(null);
      function Mn() {
        return r.useContext(vi);
      }
      var pi = r.createContext(jo);
      function Wt(e) {
        var t = r.useContext(pi);
        return r.useMemo(
          function () {
            return e !== void 0 ? [].concat(Ne(t), [e]) : t;
          },
          [t, e],
        );
      }
      var mi = r.createContext(null),
        hi = r.createContext(null);
      function gi(e, t) {
        return e === void 0 ? null : ''.concat(e, '-').concat(t);
      }
      function yi(e) {
        var t = r.useContext(hi);
        return gi(t, e);
      }
      var Uo = r.createContext({}),
        ar = Uo,
        Bo = ['title', 'attribute', 'elementRef'],
        zo = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        $o = ['active'],
        Go = (function (e) {
          nn(n, e);
          var t = rn(n);
          function n() {
            return en(this, n), t.apply(this, arguments);
          }
          return (
            tn(n, [
              {
                key: 'render',
                value: function () {
                  var o = this.props,
                    u = o.title,
                    a = o.attribute,
                    l = o.elementRef,
                    s = z(o, Bo),
                    f = ci(s, ['eventKey']);
                  return (
                    jr(
                      !a,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    r.createElement(
                      un.Item,
                      (0, d.Z)(
                        {},
                        a,
                        { title: typeof u == 'string' ? u : void 0 },
                        f,
                        { ref: l },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        Xo = function (t) {
          var n,
            i = t.style,
            o = t.className,
            u = t.eventKey,
            a = t.warnKey,
            l = t.disabled,
            s = t.itemIcon,
            f = t.children,
            m = t.role,
            h = t.onMouseEnter,
            g = t.onMouseLeave,
            b = t.onClick,
            y = t.onKeyDown,
            w = t.onFocus,
            O = z(t, zo),
            L = yi(u),
            N = r.useContext(ft),
            A = N.prefixCls,
            M = N.onItemClick,
            D = N.disabled,
            _ = N.overflowDisabled,
            F = N.itemIcon,
            V = N.selectedKeys,
            I = N.onActive,
            j = r.useContext(ar),
            W = j._internalRenderMenuItem,
            k = ''.concat(A, '-item'),
            U = r.useRef(),
            $ = r.useRef(),
            H = D || l,
            ne = Wt(u),
            Q = function (le) {
              return {
                key: u,
                keyPath: Ne(ne).reverse(),
                item: U.current,
                domEvent: le,
              };
            },
            we = s || F,
            he = li(u, H, h, g),
            Y = he.active,
            re = z(he, $o),
            ge = V.includes(u),
            te = di(ne.length),
            ve = function (le) {
              if (!H) {
                var ie = Q(le);
                b == null || b(Pn(ie)), M(ie);
              }
            },
            se = function (le) {
              if ((y == null || y(le), le.which === Ve.ENTER)) {
                var ie = Q(le);
                b == null || b(Pn(ie)), M(ie);
              }
            },
            B = function (le) {
              I(u), w == null || w(le);
            },
            ae = {};
          t.role === 'option' && (ae['aria-selected'] = ge);
          var q = r.createElement(
            Go,
            (0, d.Z)(
              {
                ref: U,
                elementRef: $,
                role: m === null ? 'none' : m || 'menuitem',
                tabIndex: l ? null : -1,
                'data-menu-id': _ && L ? null : L,
              },
              O,
              re,
              ae,
              {
                component: 'li',
                'aria-disabled': l,
                style: P(P({}, te), i),
                className: X()(
                  k,
                  ((n = {}),
                  v(n, ''.concat(k, '-active'), Y),
                  v(n, ''.concat(k, '-selected'), ge),
                  v(n, ''.concat(k, '-disabled'), H),
                  n),
                  o,
                ),
                onClick: ve,
                onKeyDown: se,
                onFocus: B,
              },
            ),
            f,
            r.createElement(fi, {
              props: P(P({}, t), {}, { isSelected: ge }),
              icon: we,
            }),
          );
          return W && (q = W(q, t, { selected: ge })), q;
        };
      function Yo(e) {
        var t = e.eventKey,
          n = Mn(),
          i = Wt(t);
        return (
          r.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, i),
                  function () {
                    n.unregisterPath(t, i);
                  }
                );
            },
            [i],
          ),
          n ? null : r.createElement(Xo, e)
        );
      }
      var An = Yo,
        Zo = ['label', 'children', 'key', 'type'];
      function or(e, t) {
        return pe(e).map(function (n, i) {
          if (r.isValidElement(n)) {
            var o,
              u,
              a = n.key,
              l =
                (o =
                  (u = n.props) === null || u === void 0
                    ? void 0
                    : u.eventKey) !== null && o !== void 0
                  ? o
                  : a,
              s = l == null;
            s && (l = 'tmp_key-'.concat([].concat(Ne(t), [i]).join('-')));
            var f = { key: l, eventKey: l };
            return r.cloneElement(n, f);
          }
          return n;
        });
      }
      function ur(e) {
        return (e || [])
          .map(function (t, n) {
            if (t && G(t) === 'object') {
              var i = t.label,
                o = t.children,
                u = t.key,
                a = t.type,
                l = z(t, Zo),
                s = u != null ? u : 'tmp-'.concat(n);
              return o || a === 'group'
                ? a === 'group'
                  ? r.createElement(
                      Ma,
                      (0, d.Z)({ key: s }, l, { title: i }),
                      ur(o),
                    )
                  : r.createElement(
                      Tr,
                      (0, d.Z)({ key: s }, l, { title: i }),
                      ur(o),
                    )
                : a === 'divider'
                ? r.createElement(Aa, (0, d.Z)({ key: s }, l))
                : r.createElement(An, (0, d.Z)({ key: s }, l), i);
            }
            return null;
          })
          .filter(function (t) {
            return t;
          });
      }
      function Qo(e, t, n) {
        var i = e;
        return t && (i = ur(t)), or(i, n);
      }
      function jt(e) {
        var t = r.useRef(e);
        t.current = e;
        var n = r.useCallback(function () {
          for (var i, o = arguments.length, u = new Array(o), a = 0; a < o; a++)
            u[a] = arguments[a];
          return (i = t.current) === null || i === void 0
            ? void 0
            : i.call.apply(i, [t].concat(u));
        }, []);
        return e ? n : void 0;
      }
      var Jo = ['className', 'children'],
        qo = function (t, n) {
          var i = t.className,
            o = t.children,
            u = z(t, Jo),
            a = r.useContext(ft),
            l = a.prefixCls,
            s = a.mode,
            f = a.rtl;
          return r.createElement(
            'ul',
            (0, d.Z)(
              {
                className: X()(
                  l,
                  f && ''.concat(l, '-rtl'),
                  ''.concat(l, '-sub'),
                  ''
                    .concat(l, '-')
                    .concat(s === 'inline' ? 'inline' : 'vertical'),
                  i,
                ),
              },
              u,
              { 'data-menu-list': !0, ref: n },
            ),
            o,
          );
        },
        bi = r.forwardRef(qo);
      bi.displayName = 'SubMenuList';
      var Ei = bi;
      function On(e, t) {
        return e ? e.contains(t) : !1;
      }
      function cn(e, t, n, i) {
        var o = qt.unstable_batchedUpdates
          ? function (a) {
              qt.unstable_batchedUpdates(n, a);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, o, i),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, o);
            },
          }
        );
      }
      var eu = (0, r.forwardRef)(function (e, t) {
          var n = e.didUpdate,
            i = e.getContainer,
            o = e.children,
            u = (0, r.useRef)(),
            a = (0, r.useRef)();
          (0, r.useImperativeHandle)(t, function () {
            return {};
          });
          var l = (0, r.useRef)(!1);
          return (
            !l.current &&
              an() &&
              ((a.current = i()),
              (u.current = a.current.parentNode),
              (l.current = !0)),
            (0, r.useEffect)(function () {
              n == null || n(e);
            }),
            (0, r.useEffect)(function () {
              return (
                a.current.parentNode === null &&
                  u.current !== null &&
                  u.current.appendChild(a.current),
                function () {
                  var s, f;
                  (s = a.current) === null ||
                    s === void 0 ||
                    (f = s.parentNode) === null ||
                    f === void 0 ||
                    f.removeChild(a.current);
                }
              );
            }, []),
            a.current ? qt.createPortal(o, a.current) : null
          );
        }),
        tu = eu;
      function nu(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      function ru(e, t, n) {
        var i = e[t] || {};
        return P(P({}, i), n);
      }
      function iu(e, t, n, i) {
        for (
          var o = n.points, u = Object.keys(e), a = 0;
          a < u.length;
          a += 1
        ) {
          var l = u[a];
          if (nu(e[l].points, o, i))
            return ''.concat(t, '-placement-').concat(l);
        }
        return '';
      }
      function Si(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
          (n['Moz'.concat(e)] = 'moz'.concat(t)),
          (n['ms'.concat(e)] = 'MS'.concat(t)),
          (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
          n
        );
      }
      function au(e, t) {
        var n = {
          animationend: Si('Animation', 'AnimationEnd'),
          transitionend: Si('Transition', 'TransitionEnd'),
        };
        return (
          e &&
            ('AnimationEvent' in t || delete n.animationend.animation,
            'TransitionEvent' in t || delete n.transitionend.transition),
          n
        );
      }
      var ou = au(an(), typeof window != 'undefined' ? window : {}),
        Ci = {};
      if (an()) {
        var uu = document.createElement('div');
        Ci = uu.style;
      }
      var In = {};
      function wi(e) {
        if (In[e]) return In[e];
        var t = ou[e];
        if (t)
          for (var n = Object.keys(t), i = n.length, o = 0; o < i; o += 1) {
            var u = n[o];
            if (Object.prototype.hasOwnProperty.call(t, u) && u in Ci)
              return (In[e] = t[u]), In[e];
          }
        return '';
      }
      var xi = wi('animationend'),
        Ri = wi('transitionend'),
        Ti = !!(xi && Ri),
        Pi = xi || 'animationend',
        Mi = Ri || 'transitionend';
      function Ai(e, t) {
        if (!e) return null;
        if (G(e) === 'object') {
          var n = t.replace(/-\w/g, function (i) {
            return i[1].toUpperCase();
          });
          return e[n];
        }
        return ''.concat(e, '-').concat(t);
      }
      var Ut = 'none',
        Nn = 'appear',
        _n = 'enter',
        Dn = 'leave',
        Oi = 'none',
        gt = 'prepare',
        Bt = 'start',
        zt = 'active',
        sr = 'end',
        su = an() ? r.useLayoutEffect : r.useEffect,
        Ii = su,
        cu = function () {
          var e = r.useRef(null);
          function t() {
            _e.cancel(e.current);
          }
          function n(i) {
            var o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 2;
            t();
            var u = _e(function () {
              o <= 1
                ? i({
                    isCanceled: function () {
                      return u !== e.current;
                    },
                  })
                : n(i, o - 1);
            });
            e.current = u;
          }
          return (
            r.useEffect(function () {
              return function () {
                t();
              };
            }, []),
            [n, t]
          );
        },
        Ni = [gt, Bt, zt, sr],
        _i = !1,
        lu = !0;
      function Di(e) {
        return e === zt || e === sr;
      }
      var fu = function (e, t) {
          var n = Ie(Oi),
            i = R(n, 2),
            o = i[0],
            u = i[1],
            a = cu(),
            l = R(a, 2),
            s = l[0],
            f = l[1];
          function m() {
            u(gt, !0);
          }
          return (
            Ii(
              function () {
                if (o !== Oi && o !== sr) {
                  var h = Ni.indexOf(o),
                    g = Ni[h + 1],
                    b = t(o);
                  b === _i
                    ? u(g, !0)
                    : s(function (y) {
                        function w() {
                          y.isCanceled() || u(g, !0);
                        }
                        b === !0 ? w() : Promise.resolve(b).then(w);
                      });
                }
              },
              [e, o],
            ),
            r.useEffect(function () {
              return function () {
                f();
              };
            }, []),
            [m, o]
          );
        },
        du = function (e) {
          var t = (0, r.useRef)(),
            n = (0, r.useRef)(e);
          n.current = e;
          var i = r.useCallback(function (a) {
            n.current(a);
          }, []);
          function o(a) {
            a && (a.removeEventListener(Mi, i), a.removeEventListener(Pi, i));
          }
          function u(a) {
            t.current && t.current !== a && o(t.current),
              a &&
                a !== t.current &&
                (a.addEventListener(Mi, i),
                a.addEventListener(Pi, i),
                (t.current = a));
          }
          return (
            r.useEffect(function () {
              return function () {
                o(t.current);
              };
            }, []),
            [u, o]
          );
        };
      function vu(e, t, n, i) {
        var o = i.motionEnter,
          u = o === void 0 ? !0 : o,
          a = i.motionAppear,
          l = a === void 0 ? !0 : a,
          s = i.motionLeave,
          f = s === void 0 ? !0 : s,
          m = i.motionDeadline,
          h = i.motionLeaveImmediately,
          g = i.onAppearPrepare,
          b = i.onEnterPrepare,
          y = i.onLeavePrepare,
          w = i.onAppearStart,
          O = i.onEnterStart,
          L = i.onLeaveStart,
          N = i.onAppearActive,
          A = i.onEnterActive,
          M = i.onLeaveActive,
          D = i.onAppearEnd,
          _ = i.onEnterEnd,
          F = i.onLeaveEnd,
          V = i.onVisibleChanged,
          I = Ie(),
          j = R(I, 2),
          W = j[0],
          k = j[1],
          U = Ie(Ut),
          $ = R(U, 2),
          H = $[0],
          ne = $[1],
          Q = Ie(null),
          we = R(Q, 2),
          he = we[0],
          Y = we[1],
          re = (0, r.useRef)(!1),
          ge = (0, r.useRef)(null),
          te = (0, r.useRef)(null);
        function ve() {
          var ye = n();
          return ye || te.current;
        }
        var se = (0, r.useRef)(!1);
        function B(ye) {
          var oe = ve();
          if (!(ye && !ye.deadline && ye.target !== oe)) {
            var De = se.current,
              it;
            H === Nn && De
              ? (it = D == null ? void 0 : D(oe, ye))
              : H === _n && De
              ? (it = _ == null ? void 0 : _(oe, ye))
              : H === Dn && De && (it = F == null ? void 0 : F(oe, ye)),
              H !== Ut && De && it !== !1 && (ne(Ut, !0), Y(null, !0));
          }
        }
        var ae = du(B),
          q = R(ae, 1),
          Me = q[0],
          le = r.useMemo(
            function () {
              var ye, oe, De;
              switch (H) {
                case Nn:
                  return (
                    (ye = {}), v(ye, gt, g), v(ye, Bt, w), v(ye, zt, N), ye
                  );
                case _n:
                  return (
                    (oe = {}), v(oe, gt, b), v(oe, Bt, O), v(oe, zt, A), oe
                  );
                case Dn:
                  return (
                    (De = {}), v(De, gt, y), v(De, Bt, L), v(De, zt, M), De
                  );
                default:
                  return {};
              }
            },
            [H],
          ),
          ie = fu(H, function (ye) {
            if (ye === gt) {
              var oe = le[gt];
              return oe ? oe(ve()) : _i;
            }
            if (Fe in le) {
              var De;
              Y(
                ((De = le[Fe]) === null || De === void 0
                  ? void 0
                  : De.call(le, ve(), null)) || null,
              );
            }
            return (
              Fe === zt &&
                (Me(ve()),
                m > 0 &&
                  (clearTimeout(ge.current),
                  (ge.current = setTimeout(function () {
                    B({ deadline: !0 });
                  }, m)))),
              lu
            );
          }),
          fe = R(ie, 2),
          Be = fe[0],
          Fe = fe[1],
          je = Di(Fe);
        (se.current = je),
          Ii(
            function () {
              k(t);
              var ye = re.current;
              if (((re.current = !0), !!e)) {
                var oe;
                !ye && t && l && (oe = Nn),
                  ye && t && u && (oe = _n),
                  ((ye && !t && f) || (!ye && h && !t && f)) && (oe = Dn),
                  oe && (ne(oe), Be());
              }
            },
            [t],
          ),
          (0, r.useEffect)(
            function () {
              ((H === Nn && !l) || (H === _n && !u) || (H === Dn && !f)) &&
                ne(Ut);
            },
            [l, u, f],
          ),
          (0, r.useEffect)(function () {
            return function () {
              clearTimeout(ge.current);
            };
          }, []),
          (0, r.useEffect)(
            function () {
              W !== void 0 && H === Ut && (V == null || V(W));
            },
            [W, H],
          );
        var Pe = he;
        return (
          le[gt] && Fe === Bt && (Pe = P({ transition: 'none' }, Pe)),
          [H, Fe, Pe, W != null ? W : t]
        );
      }
      var pu = (function (e) {
          nn(n, e);
          var t = rn(n);
          function n() {
            return en(this, n), t.apply(this, arguments);
          }
          return (
            tn(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(r.Component),
        mu = pu;
      function hu(e) {
        var t = e;
        G(e) === 'object' && (t = e.transitionSupport);
        function n(o) {
          return !!(o.motionName && t);
        }
        var i = r.forwardRef(function (o, u) {
          var a = o.visible,
            l = a === void 0 ? !0 : a,
            s = o.removeOnLeave,
            f = s === void 0 ? !0 : s,
            m = o.forceRender,
            h = o.children,
            g = o.motionName,
            b = o.leavedClassName,
            y = o.eventProps,
            w = n(o),
            O = (0, r.useRef)(),
            L = (0, r.useRef)();
          function N() {
            try {
              return O.current instanceof HTMLElement
                ? O.current
                : bn(L.current);
            } catch (H) {
              return null;
            }
          }
          var A = vu(w, l, N, o),
            M = R(A, 4),
            D = M[0],
            _ = M[1],
            F = M[2],
            V = M[3],
            I = r.useRef(V);
          V && (I.current = !0);
          var j = r.useCallback(function (H) {
              (O.current = H), Ur(u, H);
            }, []),
            W,
            k = P(P({}, y), {}, { visible: l });
          if (!h) W = null;
          else if (D === Ut || !n(o))
            V
              ? (W = h(P({}, k), j))
              : !f && I.current
              ? (W = h(P(P({}, k), {}, { className: b }), j))
              : m
              ? (W = h(P(P({}, k), {}, { style: { display: 'none' } }), j))
              : (W = null);
          else {
            var U, $;
            _ === gt
              ? ($ = 'prepare')
              : Di(_)
              ? ($ = 'active')
              : _ === Bt && ($ = 'start'),
              (W = h(
                P(
                  P({}, k),
                  {},
                  {
                    className: X()(
                      Ai(g, D),
                      ((U = {}),
                      v(U, Ai(g, ''.concat(D, '-').concat($)), $),
                      v(U, g, typeof g == 'string'),
                      U),
                    ),
                    style: F,
                  },
                ),
                j,
              ));
          }
          return r.createElement(mu, { ref: L }, W);
        });
        return (i.displayName = 'CSSMotion'), i;
      }
      var Li = hu(Ti),
        cr = 'add',
        lr = 'keep',
        fr = 'remove',
        ki = 'removed';
      function gu(e) {
        var t;
        return (
          e && G(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
          P(P({}, t), {}, { key: String(t.key) })
        );
      }
      function dr() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return e.map(gu);
      }
      function yu() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          n = [],
          i = 0,
          o = t.length,
          u = dr(e),
          a = dr(t);
        u.forEach(function (f) {
          for (var m = !1, h = i; h < o; h += 1) {
            var g = a[h];
            if (g.key === f.key) {
              i < h &&
                ((n = n.concat(
                  a.slice(i, h).map(function (b) {
                    return P(P({}, b), {}, { status: cr });
                  }),
                )),
                (i = h)),
                n.push(P(P({}, g), {}, { status: lr })),
                (i += 1),
                (m = !0);
              break;
            }
          }
          m || n.push(P(P({}, f), {}, { status: fr }));
        }),
          i < o &&
            (n = n.concat(
              a.slice(i).map(function (f) {
                return P(P({}, f), {}, { status: cr });
              }),
            ));
        var l = {};
        n.forEach(function (f) {
          var m = f.key;
          l[m] = (l[m] || 0) + 1;
        });
        var s = Object.keys(l).filter(function (f) {
          return l[f] > 1;
        });
        return (
          s.forEach(function (f) {
            (n = n.filter(function (m) {
              var h = m.key,
                g = m.status;
              return h !== f || g !== fr;
            })),
              n.forEach(function (m) {
                m.key === f && (m.status = lr);
              });
          }),
          n
        );
      }
      var bu = ['component', 'children', 'onVisibleChanged'],
        Eu = ['status'],
        Su = [
          'eventProps',
          'visible',
          'children',
          'motionName',
          'motionAppear',
          'motionEnter',
          'motionLeave',
          'motionLeaveImmediately',
          'motionDeadline',
          'removeOnLeave',
          'leavedClassName',
          'onAppearStart',
          'onAppearActive',
          'onAppearEnd',
          'onEnterStart',
          'onEnterActive',
          'onEnterEnd',
          'onLeaveStart',
          'onLeaveActive',
          'onLeaveEnd',
        ];
      function Cu(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Li,
          n = (function (i) {
            nn(u, i);
            var o = rn(u);
            function u() {
              var a;
              en(this, u);
              for (
                var l = arguments.length, s = new Array(l), f = 0;
                f < l;
                f++
              )
                s[f] = arguments[f];
              return (
                (a = o.call.apply(o, [this].concat(s))),
                (a.state = { keyEntities: [] }),
                (a.removeKey = function (m) {
                  a.setState(function (h) {
                    var g = h.keyEntities;
                    return {
                      keyEntities: g.map(function (b) {
                        return b.key !== m
                          ? b
                          : P(P({}, b), {}, { status: ki });
                      }),
                    };
                  });
                }),
                a
              );
            }
            return (
              tn(
                u,
                [
                  {
                    key: 'render',
                    value: function () {
                      var l = this,
                        s = this.state.keyEntities,
                        f = this.props,
                        m = f.component,
                        h = f.children,
                        g = f.onVisibleChanged,
                        b = z(f, bu),
                        y = m || r.Fragment,
                        w = {};
                      return (
                        Su.forEach(function (O) {
                          (w[O] = b[O]), delete b[O];
                        }),
                        delete b.keys,
                        r.createElement(
                          y,
                          b,
                          s.map(function (O) {
                            var L = O.status,
                              N = z(O, Eu),
                              A = L === cr || L === lr;
                            return r.createElement(
                              t,
                              (0, d.Z)({}, w, {
                                key: N.key,
                                visible: A,
                                eventProps: N,
                                onVisibleChanged: function (D) {
                                  g == null || g(D, { key: N.key }),
                                    D || l.removeKey(N.key);
                                },
                              }),
                              h,
                            );
                          }),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (l, s) {
                      var f = l.keys,
                        m = s.keyEntities,
                        h = dr(f),
                        g = yu(m, h);
                      return {
                        keyEntities: g.filter(function (b) {
                          var y = m.find(function (w) {
                            var O = w.key;
                            return b.key === O;
                          });
                          return !(y && y.status === ki && b.status === fr);
                        }),
                      };
                    },
                  },
                ],
              ),
              u
            );
          })(r.Component);
        return (n.defaultProps = { component: 'div' }), n;
      }
      var wc = Cu(Ti),
        Ln = Li;
      function Ki(e) {
        var t = e.prefixCls,
          n = e.motion,
          i = e.animation,
          o = e.transitionName;
        return (
          n ||
          (i
            ? { motionName: ''.concat(t, '-').concat(i) }
            : o
            ? { motionName: o }
            : null)
        );
      }
      function wu(e) {
        var t = e.prefixCls,
          n = e.visible,
          i = e.zIndex,
          o = e.mask,
          u = e.maskMotion,
          a = e.maskAnimation,
          l = e.maskTransitionName;
        if (!o) return null;
        var s = {};
        return (
          (u || l || a) &&
            (s = P(
              { motionAppear: !0 },
              Ki({ motion: u, prefixCls: t, transitionName: l, animation: a }),
            )),
          r.createElement(
            Ln,
            (0, d.Z)({}, s, { visible: n, removeOnLeave: !0 }),
            function (f) {
              var m = f.className;
              return r.createElement('div', {
                style: { zIndex: i },
                className: X()(''.concat(t, '-mask'), m),
              });
            },
          )
        );
      }
      var Fi = function (e) {
        if (!e) return !1;
        if (e.offsetParent) return !0;
        if (e.getBBox) {
          var t = e.getBBox();
          if (t.width || t.height) return !0;
        }
        if (e.getBoundingClientRect) {
          var n = e.getBoundingClientRect();
          if (n.width || n.height) return !0;
        }
        return !1;
      };
      function Hi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function Vi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? Hi(Object(n), !0).forEach(function (i) {
                xu(e, i, n[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Hi(Object(n)).forEach(function (i) {
                Object.defineProperty(
                  e,
                  i,
                  Object.getOwnPropertyDescriptor(n, i),
                );
              });
        }
        return e;
      }
      function kn(e) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (kn = function (t) {
                return typeof t;
              })
            : (kn = function (t) {
                return t &&
                  typeof Symbol == 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
          kn(e)
        );
      }
      function xu(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ln,
        Ru = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
      function Kn() {
        if (ln !== void 0) return ln;
        ln = '';
        var e = document.createElement('p').style,
          t = 'Transform';
        for (var n in Ru) n + t in e && (ln = n);
        return ln;
      }
      function Wi() {
        return Kn()
          ? ''.concat(Kn(), 'TransitionProperty')
          : 'transitionProperty';
      }
      function Fn() {
        return Kn() ? ''.concat(Kn(), 'Transform') : 'transform';
      }
      function ji(e, t) {
        var n = Wi();
        n &&
          ((e.style[n] = t),
          n !== 'transitionProperty' && (e.style.transitionProperty = t));
      }
      function vr(e, t) {
        var n = Fn();
        n && ((e.style[n] = t), n !== 'transform' && (e.style.transform = t));
      }
      function Tu(e) {
        return e.style.transitionProperty || e.style[Wi()];
      }
      function Pu(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(Fn());
        if (n && n !== 'none') {
          var i = n.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(i[12] || i[4], 0),
            y: parseFloat(i[13] || i[5], 0),
          };
        }
        return { x: 0, y: 0 };
      }
      var Mu = /matrix\((.*)\)/,
        Au = /matrix3d\((.*)\)/;
      function Ou(e, t) {
        var n = window.getComputedStyle(e, null),
          i = n.getPropertyValue('transform') || n.getPropertyValue(Fn());
        if (i && i !== 'none') {
          var o,
            u = i.match(Mu);
          if (u)
            (u = u[1]),
              (o = u.split(',').map(function (l) {
                return parseFloat(l, 10);
              })),
              (o[4] = t.x),
              (o[5] = t.y),
              vr(e, 'matrix('.concat(o.join(','), ')'));
          else {
            var a = i.match(Au)[1];
            (o = a.split(',').map(function (l) {
              return parseFloat(l, 10);
            })),
              (o[12] = t.x),
              (o[13] = t.y),
              vr(e, 'matrix3d('.concat(o.join(','), ')'));
          }
        } else
          vr(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          );
      }
      var Iu = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        fn;
      function Ui(e) {
        var t = e.style.display;
        (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
      }
      function $t(e, t, n) {
        var i = n;
        if (kn(t) === 'object') {
          for (var o in t) t.hasOwnProperty(o) && $t(e, o, t[o]);
          return;
        }
        if (typeof i != 'undefined') {
          typeof i == 'number' && (i = ''.concat(i, 'px')), (e.style[t] = i);
          return;
        }
        return fn(e, t);
      }
      function Nu(e) {
        var t,
          n,
          i,
          o = e.ownerDocument,
          u = o.body,
          a = o && o.documentElement;
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (i = t.top),
          (n -= a.clientLeft || u.clientLeft || 0),
          (i -= a.clientTop || u.clientTop || 0),
          { left: n, top: i }
        );
      }
      function Bi(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          i = 'scroll'.concat(t ? 'Top' : 'Left');
        if (typeof n != 'number') {
          var o = e.document;
          (n = o.documentElement[i]), typeof n != 'number' && (n = o.body[i]);
        }
        return n;
      }
      function zi(e) {
        return Bi(e);
      }
      function $i(e) {
        return Bi(e, !0);
      }
      function dn(e) {
        var t = Nu(e),
          n = e.ownerDocument,
          i = n.defaultView || n.parentWindow;
        return (t.left += zi(i)), (t.top += $i(i)), t;
      }
      function pr(e) {
        return e != null && e == e.window;
      }
      function Gi(e) {
        return pr(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      }
      function _u(e, t, n) {
        var i = n,
          o = '',
          u = Gi(e);
        return (
          (i = i || u.defaultView.getComputedStyle(e, null)),
          i && (o = i.getPropertyValue(t) || i[t]),
          o
        );
      }
      var Du = new RegExp('^('.concat(Iu, ')(?!px)[a-z%]+$'), 'i'),
        Lu = /^(top|right|bottom|left)$/,
        mr = 'currentStyle',
        hr = 'runtimeStyle',
        It = 'left',
        ku = 'px';
      function Ku(e, t) {
        var n = e[mr] && e[mr][t];
        if (Du.test(n) && !Lu.test(t)) {
          var i = e.style,
            o = i[It],
            u = e[hr][It];
          (e[hr][It] = e[mr][It]),
            (i[It] = t === 'fontSize' ? '1em' : n || 0),
            (n = i.pixelLeft + ku),
            (i[It] = o),
            (e[hr][It] = u);
        }
        return n === '' ? 'auto' : n;
      }
      typeof window != 'undefined' && (fn = window.getComputedStyle ? _u : Ku);
      function Hn(e, t) {
        return e === 'left'
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e;
      }
      function Xi(e) {
        if (e === 'left') return 'right';
        if (e === 'right') return 'left';
        if (e === 'top') return 'bottom';
        if (e === 'bottom') return 'top';
      }
      function Yi(e, t, n) {
        $t(e, 'position') === 'static' && (e.style.position = 'relative');
        var i = -999,
          o = -999,
          u = Hn('left', n),
          a = Hn('top', n),
          l = Xi(u),
          s = Xi(a);
        u !== 'left' && (i = 999), a !== 'top' && (o = 999);
        var f = '',
          m = dn(e);
        ('left' in t || 'top' in t) && ((f = Tu(e) || ''), ji(e, 'none')),
          'left' in t && ((e.style[l] = ''), (e.style[u] = ''.concat(i, 'px'))),
          'top' in t && ((e.style[s] = ''), (e.style[a] = ''.concat(o, 'px'))),
          Ui(e);
        var h = dn(e),
          g = {};
        for (var b in t)
          if (t.hasOwnProperty(b)) {
            var y = Hn(b, n),
              w = b === 'left' ? i : o,
              O = m[b] - h[b];
            y === b ? (g[y] = w + O) : (g[y] = w - O);
          }
        $t(e, g), Ui(e), ('left' in t || 'top' in t) && ji(e, f);
        var L = {};
        for (var N in t)
          if (t.hasOwnProperty(N)) {
            var A = Hn(N, n),
              M = t[N] - m[N];
            N === A ? (L[A] = g[A] + M) : (L[A] = g[A] - M);
          }
        $t(e, L);
      }
      function Fu(e, t) {
        var n = dn(e),
          i = Pu(e),
          o = { x: i.x, y: i.y };
        'left' in t && (o.x = i.x + t.left - n.left),
          'top' in t && (o.y = i.y + t.top - n.top),
          Ou(e, o);
      }
      function Hu(e, t, n) {
        if (n.ignoreShake) {
          var i = dn(e),
            o = i.left.toFixed(0),
            u = i.top.toFixed(0),
            a = t.left.toFixed(0),
            l = t.top.toFixed(0);
          if (o === a && u === l) return;
        }
        n.useCssRight || n.useCssBottom
          ? Yi(e, t, n)
          : n.useCssTransform && Fn() in document.body.style
          ? Fu(e, t)
          : Yi(e, t, n);
      }
      function gr(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function Zi(e) {
        return fn(e, 'boxSizing') === 'border-box';
      }
      var Vu = ['margin', 'border', 'padding'],
        yr = -1,
        Wu = 2,
        br = 1,
        ju = 0;
      function Uu(e, t, n) {
        var i = {},
          o = e.style,
          u;
        for (u in t) t.hasOwnProperty(u) && ((i[u] = o[u]), (o[u] = t[u]));
        n.call(e);
        for (u in t) t.hasOwnProperty(u) && (o[u] = i[u]);
      }
      function vn(e, t, n) {
        var i = 0,
          o,
          u,
          a;
        for (u = 0; u < t.length; u++)
          if (((o = t[u]), o))
            for (a = 0; a < n.length; a++) {
              var l = void 0;
              o === 'border'
                ? (l = ''.concat(o).concat(n[a], 'Width'))
                : (l = o + n[a]),
                (i += parseFloat(fn(e, l)) || 0);
            }
        return i;
      }
      var vt = {
        getParent: function (t) {
          var n = t;
          do n.nodeType === 11 && n.host ? (n = n.host) : (n = n.parentNode);
          while (n && n.nodeType !== 1 && n.nodeType !== 9);
          return n;
        },
      };
      gr(['Width', 'Height'], function (e) {
        (vt['doc'.concat(e)] = function (t) {
          var n = t.document;
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            vt['viewport'.concat(e)](n),
          );
        }),
          (vt['viewport'.concat(e)] = function (t) {
            var n = 'client'.concat(e),
              i = t.document,
              o = i.body,
              u = i.documentElement,
              a = u[n];
            return (i.compatMode === 'CSS1Compat' && a) || (o && o[n]) || a;
          });
      });
      function Qi(e, t, n) {
        var i = n;
        if (pr(e))
          return t === 'width' ? vt.viewportWidth(e) : vt.viewportHeight(e);
        if (e.nodeType === 9)
          return t === 'width' ? vt.docWidth(e) : vt.docHeight(e);
        var o = t === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
          u =
            t === 'width'
              ? e.getBoundingClientRect().width
              : e.getBoundingClientRect().height,
          a = Zi(e),
          l = 0;
        (u == null || u <= 0) &&
          ((u = void 0),
          (l = fn(e, t)),
          (l == null || Number(l) < 0) && (l = e.style[t] || 0),
          (l = parseFloat(l) || 0)),
          i === void 0 && (i = a ? br : yr);
        var s = u !== void 0 || a,
          f = u || l;
        return i === yr
          ? s
            ? f - vn(e, ['border', 'padding'], o)
            : l
          : s
          ? i === br
            ? f
            : f + (i === Wu ? -vn(e, ['border'], o) : vn(e, ['margin'], o))
          : l + vn(e, Vu.slice(i), o);
      }
      var Bu = { position: 'absolute', visibility: 'hidden', display: 'block' };
      function Ji() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i,
          o = t[0];
        return (
          o.offsetWidth !== 0
            ? (i = Qi.apply(void 0, t))
            : Uu(o, Bu, function () {
                i = Qi.apply(void 0, t);
              }),
          i
        );
      }
      gr(['width', 'height'], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        vt['outer'.concat(t)] = function (i, o) {
          return i && Ji(i, e, o ? ju : br);
        };
        var n = e === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
        vt[e] = function (i, o) {
          var u = o;
          if (u !== void 0) {
            if (i) {
              var a = Zi(i);
              return a && (u += vn(i, ['padding', 'border'], n)), $t(i, e, u);
            }
            return;
          }
          return i && Ji(i, e, yr);
        };
      });
      function qi(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      var J = {
        getWindow: function (t) {
          if (t && t.document && t.setTimeout) return t;
          var n = t.ownerDocument || t;
          return n.defaultView || n.parentWindow;
        },
        getDocument: Gi,
        offset: function (t, n, i) {
          if (typeof n != 'undefined') Hu(t, n, i || {});
          else return dn(t);
        },
        isWindow: pr,
        each: gr,
        css: $t,
        clone: function (t) {
          var n,
            i = {};
          for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
          var o = t.overflow;
          if (o)
            for (n in t) t.hasOwnProperty(n) && (i.overflow[n] = t.overflow[n]);
          return i;
        },
        mix: qi,
        getWindowScrollLeft: function (t) {
          return zi(t);
        },
        getWindowScrollTop: function (t) {
          return $i(t);
        },
        merge: function () {
          for (var t = {}, n = 0; n < arguments.length; n++)
            J.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
          return t;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      qi(J, vt);
      var Er = J.getParent;
      function Sr(e) {
        if (J.isWindow(e) || e.nodeType === 9) return null;
        var t = J.getDocument(e),
          n = t.body,
          i,
          o = J.css(e, 'position'),
          u = o === 'fixed' || o === 'absolute';
        if (!u) return e.nodeName.toLowerCase() === 'html' ? null : Er(e);
        for (i = Er(e); i && i !== n && i.nodeType !== 9; i = Er(i))
          if (((o = J.css(i, 'position')), o !== 'static')) return i;
        return null;
      }
      var ea = J.getParent;
      function zu(e) {
        if (J.isWindow(e) || e.nodeType === 9) return !1;
        var t = J.getDocument(e),
          n = t.body,
          i = null;
        for (i = ea(e); i && i !== n && i !== t; i = ea(i)) {
          var o = J.css(i, 'position');
          if (o === 'fixed') return !0;
        }
        return !1;
      }
      function Cr(e, t) {
        for (
          var n = { left: 0, right: Infinity, top: 0, bottom: Infinity },
            i = Sr(e),
            o = J.getDocument(e),
            u = o.defaultView || o.parentWindow,
            a = o.body,
            l = o.documentElement;
          i;

        ) {
          if (
            (navigator.userAgent.indexOf('MSIE') === -1 ||
              i.clientWidth !== 0) &&
            i !== a &&
            i !== l &&
            J.css(i, 'overflow') !== 'visible'
          ) {
            var s = J.offset(i);
            (s.left += i.clientLeft),
              (s.top += i.clientTop),
              (n.top = Math.max(n.top, s.top)),
              (n.right = Math.min(n.right, s.left + i.clientWidth)),
              (n.bottom = Math.min(n.bottom, s.top + i.clientHeight)),
              (n.left = Math.max(n.left, s.left));
          } else if (i === a || i === l) break;
          i = Sr(i);
        }
        var f = null;
        if (!J.isWindow(e) && e.nodeType !== 9) {
          f = e.style.position;
          var m = J.css(e, 'position');
          m === 'absolute' && (e.style.position = 'fixed');
        }
        var h = J.getWindowScrollLeft(u),
          g = J.getWindowScrollTop(u),
          b = J.viewportWidth(u),
          y = J.viewportHeight(u),
          w = l.scrollWidth,
          O = l.scrollHeight,
          L = window.getComputedStyle(a);
        if (
          (L.overflowX === 'hidden' && (w = u.innerWidth),
          L.overflowY === 'hidden' && (O = u.innerHeight),
          e.style && (e.style.position = f),
          t || zu(e))
        )
          (n.left = Math.max(n.left, h)),
            (n.top = Math.max(n.top, g)),
            (n.right = Math.min(n.right, h + b)),
            (n.bottom = Math.min(n.bottom, g + y));
        else {
          var N = Math.max(w, h + b);
          n.right = Math.min(n.right, N);
          var A = Math.max(O, g + y);
          n.bottom = Math.min(n.bottom, A);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function $u(e, t, n, i) {
        var o = J.clone(e),
          u = { width: t.width, height: t.height };
        return (
          i.adjustX && o.left < n.left && (o.left = n.left),
          i.resizeWidth &&
            o.left >= n.left &&
            o.left + u.width > n.right &&
            (u.width -= o.left + u.width - n.right),
          i.adjustX &&
            o.left + u.width > n.right &&
            (o.left = Math.max(n.right - u.width, n.left)),
          i.adjustY && o.top < n.top && (o.top = n.top),
          i.resizeHeight &&
            o.top >= n.top &&
            o.top + u.height > n.bottom &&
            (u.height -= o.top + u.height - n.bottom),
          i.adjustY &&
            o.top + u.height > n.bottom &&
            (o.top = Math.max(n.bottom - u.height, n.top)),
          J.mix(o, u)
        );
      }
      function wr(e) {
        var t, n, i;
        if (!J.isWindow(e) && e.nodeType !== 9)
          (t = J.offset(e)), (n = J.outerWidth(e)), (i = J.outerHeight(e));
        else {
          var o = J.getWindow(e);
          (t = {
            left: J.getWindowScrollLeft(o),
            top: J.getWindowScrollTop(o),
          }),
            (n = J.viewportWidth(o)),
            (i = J.viewportHeight(o));
        }
        return (t.width = n), (t.height = i), t;
      }
      function ta(e, t) {
        var n = t.charAt(0),
          i = t.charAt(1),
          o = e.width,
          u = e.height,
          a = e.left,
          l = e.top;
        return (
          n === 'c' ? (l += u / 2) : n === 'b' && (l += u),
          i === 'c' ? (a += o / 2) : i === 'r' && (a += o),
          { left: a, top: l }
        );
      }
      function Vn(e, t, n, i, o) {
        var u = ta(t, n[1]),
          a = ta(e, n[0]),
          l = [a.left - u.left, a.top - u.top];
        return {
          left: Math.round(e.left - l[0] + i[0] - o[0]),
          top: Math.round(e.top - l[1] + i[1] - o[1]),
        };
      }
      function na(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function ra(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function Gu(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }
      function Xu(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }
      function Wn(e, t, n) {
        var i = [];
        return (
          J.each(e, function (o) {
            i.push(
              o.replace(t, function (u) {
                return n[u];
              }),
            );
          }),
          i
        );
      }
      function jn(e, t) {
        return (e[t] = -e[t]), e;
      }
      function ia(e, t) {
        var n;
        return (
          /%$/.test(e)
            ? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t)
            : (n = parseInt(e, 10)),
          n || 0
        );
      }
      function aa(e, t) {
        (e[0] = ia(e[0], t.width)), (e[1] = ia(e[1], t.height));
      }
      function oa(e, t, n, i) {
        var o = n.points,
          u = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          l = n.overflow,
          s = n.source || e;
        (u = [].concat(u)), (a = [].concat(a)), (l = l || {});
        var f = {},
          m = 0,
          h = !!(l && l.alwaysByViewport),
          g = Cr(s, h),
          b = wr(s);
        aa(u, b), aa(a, t);
        var y = Vn(b, t, o, u, a),
          w = J.merge(b, y);
        if (g && (l.adjustX || l.adjustY) && i) {
          if (l.adjustX && na(y, b, g)) {
            var O = Wn(o, /[lr]/gi, { l: 'r', r: 'l' }),
              L = jn(u, 0),
              N = jn(a, 0),
              A = Vn(b, t, O, L, N);
            Gu(A, b, g) || ((m = 1), (o = O), (u = L), (a = N));
          }
          if (l.adjustY && ra(y, b, g)) {
            var M = Wn(o, /[tb]/gi, { t: 'b', b: 't' }),
              D = jn(u, 1),
              _ = jn(a, 1),
              F = Vn(b, t, M, D, _);
            Xu(F, b, g) || ((m = 1), (o = M), (u = D), (a = _));
          }
          m && ((y = Vn(b, t, o, u, a)), J.mix(w, y));
          var V = na(y, b, g),
            I = ra(y, b, g);
          if (V || I) {
            var j = o;
            V && (j = Wn(o, /[lr]/gi, { l: 'r', r: 'l' })),
              I && (j = Wn(o, /[tb]/gi, { t: 'b', b: 't' })),
              (o = j),
              (u = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0]);
          }
          (f.adjustX = l.adjustX && V),
            (f.adjustY = l.adjustY && I),
            (f.adjustX || f.adjustY) && (w = $u(y, b, g, f));
        }
        return (
          w.width !== b.width &&
            J.css(s, 'width', J.width(s) + w.width - b.width),
          w.height !== b.height &&
            J.css(s, 'height', J.height(s) + w.height - b.height),
          J.offset(
            s,
            { left: w.left, top: w.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: o, offset: u, targetOffset: a, overflow: f }
        );
      }
      function Yu(e, t) {
        var n = Cr(e, t),
          i = wr(e);
        return (
          !n ||
          i.left + i.width <= n.left ||
          i.top + i.height <= n.top ||
          i.left >= n.right ||
          i.top >= n.bottom
        );
      }
      function xr(e, t, n) {
        var i = n.target || t,
          o = wr(i),
          u = !Yu(i, n.overflow && n.overflow.alwaysByViewport);
        return oa(e, o, n, u);
      }
      (xr.__getOffsetParent = Sr), (xr.__getVisibleRectForElement = Cr);
      function Zu(e, t, n) {
        var i,
          o,
          u = J.getDocument(e),
          a = u.defaultView || u.parentWindow,
          l = J.getWindowScrollLeft(a),
          s = J.getWindowScrollTop(a),
          f = J.viewportWidth(a),
          m = J.viewportHeight(a);
        'pageX' in t ? (i = t.pageX) : (i = l + t.clientX),
          'pageY' in t ? (o = t.pageY) : (o = s + t.clientY);
        var h = { left: i, top: o, width: 0, height: 0 },
          g = i >= 0 && i <= l + f && o >= 0 && o <= s + m,
          b = [n.points[0], 'cc'];
        return oa(e, h, Vi(Vi({}, n), {}, { points: b }), g);
      }
      var xc = null,
        Qu = c(18446),
        Ju = c.n(Qu);
      function qu(e, t) {
        return e === t
          ? !0
          : !e || !t
          ? !1
          : 'pageX' in t && 'pageY' in t
          ? e.pageX === t.pageX && e.pageY === t.pageY
          : 'clientX' in t && 'clientY' in t
          ? e.clientX === t.clientX && e.clientY === t.clientY
          : !1;
      }
      function es(e, t) {
        e !== document.activeElement &&
          On(t, e) &&
          typeof e.focus == 'function' &&
          e.focus();
      }
      function ua(e, t) {
        var n = null,
          i = null;
        function o(a) {
          var l = R(a, 1),
            s = l[0].target;
          if (!!document.documentElement.contains(s)) {
            var f = s.getBoundingClientRect(),
              m = f.width,
              h = f.height,
              g = Math.floor(m),
              b = Math.floor(h);
            (n !== g || i !== b) &&
              Promise.resolve().then(function () {
                t({ width: g, height: b });
              }),
              (n = g),
              (i = b);
          }
        }
        var u = new Zr(o);
        return (
          e && u.observe(e),
          function () {
            u.disconnect();
          }
        );
      }
      var ts = function (e, t) {
        var n = r.useRef(!1),
          i = r.useRef(null);
        function o() {
          window.clearTimeout(i.current);
        }
        function u(a) {
          if (!n.current || a === !0) {
            if (e() === !1) return;
            (n.current = !0),
              o(),
              (i.current = window.setTimeout(function () {
                n.current = !1;
              }, t));
          } else
            o(),
              (i.current = window.setTimeout(function () {
                (n.current = !1), u();
              }, t));
        }
        return [
          u,
          function () {
            (n.current = !1), o();
          },
        ];
      };
      function sa(e) {
        return typeof e != 'function' ? null : e();
      }
      function ca(e) {
        return G(e) !== 'object' || !e ? null : e;
      }
      var ns = function (t, n) {
          var i = t.children,
            o = t.disabled,
            u = t.target,
            a = t.align,
            l = t.onAlign,
            s = t.monitorWindowResize,
            f = t.monitorBufferTime,
            m = f === void 0 ? 0 : f,
            h = r.useRef({}),
            g = r.useRef(),
            b = r.Children.only(i),
            y = r.useRef({});
          (y.current.disabled = o),
            (y.current.target = u),
            (y.current.align = a),
            (y.current.onAlign = l);
          var w = ts(function () {
              var _ = y.current,
                F = _.disabled,
                V = _.target,
                I = _.align,
                j = _.onAlign;
              if (!F && V) {
                var W = g.current,
                  k,
                  U = sa(V),
                  $ = ca(V);
                (h.current.element = U),
                  (h.current.point = $),
                  (h.current.align = I);
                var H = document,
                  ne = H.activeElement;
                return (
                  U && Fi(U) ? (k = xr(W, U, I)) : $ && (k = Zu(W, $, I)),
                  es(ne, W),
                  j && k && j(W, k),
                  !0
                );
              }
              return !1;
            }, m),
            O = R(w, 2),
            L = O[0],
            N = O[1],
            A = r.useRef({ cancel: function () {} }),
            M = r.useRef({ cancel: function () {} });
          r.useEffect(function () {
            var _ = sa(u),
              F = ca(u);
            g.current !== M.current.element &&
              (M.current.cancel(),
              (M.current.element = g.current),
              (M.current.cancel = ua(g.current, L))),
              (h.current.element !== _ ||
                !qu(h.current.point, F) ||
                !Ju()(h.current.align, a)) &&
                (L(),
                A.current.element !== _ &&
                  (A.current.cancel(),
                  (A.current.element = _),
                  (A.current.cancel = ua(_, L))));
          }),
            r.useEffect(
              function () {
                o ? N() : L();
              },
              [o],
            );
          var D = r.useRef(null);
          return (
            r.useEffect(
              function () {
                s
                  ? D.current || (D.current = cn(window, 'resize', L))
                  : D.current && (D.current.remove(), (D.current = null));
              },
              [s],
            ),
            r.useEffect(function () {
              return function () {
                A.current.cancel(),
                  M.current.cancel(),
                  D.current && D.current.remove(),
                  N();
              };
            }, []),
            r.useImperativeHandle(n, function () {
              return {
                forceAlign: function () {
                  return L(!0);
                },
              };
            }),
            r.isValidElement(b) &&
              (b = r.cloneElement(b, { ref: Jt(b.ref, g) })),
            b
          );
        },
        la = r.forwardRef(ns);
      la.displayName = 'Align';
      var rs = la,
        is = rs,
        as = c(87757),
        fa = c.n(as);
      function da(e, t, n, i, o, u, a) {
        try {
          var l = e[u](a),
            s = l.value;
        } catch (f) {
          n(f);
          return;
        }
        l.done ? t(s) : Promise.resolve(s).then(i, o);
      }
      function os(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var u = e.apply(t, n);
            function a(s) {
              da(u, i, o, a, l, 'next', s);
            }
            function l(s) {
              da(u, i, o, a, l, 'throw', s);
            }
            a(void 0);
          });
        };
      }
      var va = ['measure', 'align', null, 'motion'],
        us = function (e, t) {
          var n = Ie(null),
            i = R(n, 2),
            o = i[0],
            u = i[1],
            a = (0, r.useRef)();
          function l(m) {
            u(m, !0);
          }
          function s() {
            _e.cancel(a.current);
          }
          function f(m) {
            s(),
              (a.current = _e(function () {
                l(function (h) {
                  switch (o) {
                    case 'align':
                      return 'motion';
                    case 'motion':
                      return 'stable';
                    default:
                  }
                  return h;
                }),
                  m == null || m();
              }));
          }
          return (
            (0, r.useEffect)(
              function () {
                l('measure');
              },
              [e],
            ),
            (0, r.useEffect)(
              function () {
                switch (o) {
                  case 'measure':
                    t();
                    break;
                  default:
                }
                o &&
                  (a.current = _e(
                    os(
                      fa().mark(function m() {
                        var h, g;
                        return fa().wrap(function (y) {
                          for (;;)
                            switch ((y.prev = y.next)) {
                              case 0:
                                (h = va.indexOf(o)),
                                  (g = va[h + 1]),
                                  g && h !== -1 && l(g);
                              case 3:
                              case 'end':
                                return y.stop();
                            }
                        }, m);
                      }),
                    ),
                  ));
              },
              [o],
            ),
            (0, r.useEffect)(function () {
              return function () {
                s();
              };
            }, []),
            [o, f]
          );
        },
        ss = function (e) {
          var t = r.useState({ width: 0, height: 0 }),
            n = R(t, 2),
            i = n[0],
            o = n[1];
          function u(l) {
            o({ width: l.offsetWidth, height: l.offsetHeight });
          }
          var a = r.useMemo(
            function () {
              var l = {};
              if (e) {
                var s = i.width,
                  f = i.height;
                e.indexOf('height') !== -1 && f
                  ? (l.height = f)
                  : e.indexOf('minHeight') !== -1 && f && (l.minHeight = f),
                  e.indexOf('width') !== -1 && s
                    ? (l.width = s)
                    : e.indexOf('minWidth') !== -1 && s && (l.minWidth = s);
              }
              return l;
            },
            [e, i],
          );
          return [a, u];
        },
        pa = r.forwardRef(function (e, t) {
          var n = e.visible,
            i = e.prefixCls,
            o = e.className,
            u = e.style,
            a = e.children,
            l = e.zIndex,
            s = e.stretch,
            f = e.destroyPopupOnHide,
            m = e.forceRender,
            h = e.align,
            g = e.point,
            b = e.getRootDomNode,
            y = e.getClassNameFromAlign,
            w = e.onAlign,
            O = e.onMouseEnter,
            L = e.onMouseLeave,
            N = e.onMouseDown,
            A = e.onTouchStart,
            M = (0, r.useRef)(),
            D = (0, r.useRef)(),
            _ = (0, r.useState)(),
            F = R(_, 2),
            V = F[0],
            I = F[1],
            j = ss(s),
            W = R(j, 2),
            k = W[0],
            U = W[1];
          function $() {
            s && U(b());
          }
          var H = us(n, $),
            ne = R(H, 2),
            Q = ne[0],
            we = ne[1],
            he = (0, r.useRef)();
          function Y() {
            return g || b;
          }
          function re() {
            var q;
            (q = M.current) === null || q === void 0 || q.forceAlign();
          }
          function ge(q, Me) {
            var le = y(Me);
            V !== le && I(le),
              Q === 'align' &&
                (V !== le
                  ? Promise.resolve().then(function () {
                      re();
                    })
                  : we(function () {
                      var ie;
                      (ie = he.current) === null ||
                        ie === void 0 ||
                        ie.call(he);
                    }),
                w == null || w(q, Me));
          }
          var te = P({}, Ki(e));
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (q) {
            var Me = te[q];
            te[q] = function (le, ie) {
              return we(), Me == null ? void 0 : Me(le, ie);
            };
          });
          function ve() {
            return new Promise(function (q) {
              he.current = q;
            });
          }
          r.useEffect(
            function () {
              !te.motionName && Q === 'motion' && we();
            },
            [te.motionName, Q],
          ),
            r.useImperativeHandle(t, function () {
              return {
                forceAlign: re,
                getElement: function () {
                  return D.current;
                },
              };
            });
          var se = P(
              P({}, k),
              {},
              {
                zIndex: l,
                opacity: Q === 'motion' || Q === 'stable' || !n ? void 0 : 0,
                pointerEvents: Q === 'stable' ? void 0 : 'none',
              },
              u,
            ),
            B = !0;
          (h == null ? void 0 : h.points) &&
            (Q === 'align' || Q === 'stable') &&
            (B = !1);
          var ae = a;
          return (
            r.Children.count(a) > 1 &&
              (ae = r.createElement(
                'div',
                { className: ''.concat(i, '-content') },
                a,
              )),
            r.createElement(
              Ln,
              (0, d.Z)(
                {
                  visible: n,
                  ref: D,
                  leavedClassName: ''.concat(i, '-hidden'),
                },
                te,
                {
                  onAppearPrepare: ve,
                  onEnterPrepare: ve,
                  removeOnLeave: f,
                  forceRender: m,
                },
              ),
              function (q, Me) {
                var le = q.className,
                  ie = q.style,
                  fe = X()(i, o, V, le);
                return r.createElement(
                  is,
                  {
                    target: Y(),
                    key: 'popup',
                    ref: M,
                    monitorWindowResize: !0,
                    disabled: B,
                    align: h,
                    onAlign: ge,
                  },
                  r.createElement(
                    'div',
                    {
                      ref: Me,
                      className: fe,
                      onMouseEnter: O,
                      onMouseLeave: L,
                      onMouseDownCapture: N,
                      onTouchStartCapture: A,
                      style: P(P({}, ie), se),
                    },
                    ae,
                  ),
                );
              },
            )
          );
        });
      pa.displayName = 'PopupInner';
      var cs = pa,
        ma = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            i = e.visible,
            o = e.zIndex,
            u = e.children,
            a = e.mobile;
          a = a === void 0 ? {} : a;
          var l = a.popupClassName,
            s = a.popupStyle,
            f = a.popupMotion,
            m = f === void 0 ? {} : f,
            h = a.popupRender,
            g = r.useRef();
          r.useImperativeHandle(t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return g.current;
              },
            };
          });
          var b = P({ zIndex: o }, s),
            y = u;
          return (
            r.Children.count(u) > 1 &&
              (y = r.createElement(
                'div',
                { className: ''.concat(n, '-content') },
                u,
              )),
            h && (y = h(y)),
            r.createElement(
              Ln,
              (0, d.Z)({ visible: i, ref: g, removeOnLeave: !0 }, m),
              function (w, O) {
                var L = w.className,
                  N = w.style,
                  A = X()(n, l, L);
                return r.createElement(
                  'div',
                  { ref: O, className: A, style: P(P({}, N), b) },
                  y,
                );
              },
            )
          );
        });
      ma.displayName = 'MobilePopupInner';
      var ls = ma,
        fs = ['visible', 'mobile'],
        ha = r.forwardRef(function (e, t) {
          var n = e.visible,
            i = e.mobile,
            o = z(e, fs),
            u = (0, r.useState)(n),
            a = R(u, 2),
            l = a[0],
            s = a[1],
            f = (0, r.useState)(!1),
            m = R(f, 2),
            h = m[0],
            g = m[1],
            b = P(P({}, o), {}, { visible: l });
          (0, r.useEffect)(
            function () {
              s(n), n && i && g(ce());
            },
            [n, i],
          );
          var y = h
            ? r.createElement(ls, (0, d.Z)({}, b, { mobile: i, ref: t }))
            : r.createElement(cs, (0, d.Z)({}, b, { ref: t }));
          return r.createElement('div', null, r.createElement(wu, b), y);
        });
      ha.displayName = 'Popup';
      var ds = ha,
        vs = r.createContext(null),
        ga = vs;
      function Rr() {}
      function ps() {
        return '';
      }
      function ms(e) {
        return e ? e.ownerDocument : window.document;
      }
      var hs = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];
      function gs(e) {
        var t = (function (n) {
          nn(o, n);
          var i = rn(o);
          function o(u) {
            var a;
            en(this, o),
              (a = i.call(this, u)),
              (a.popupRef = r.createRef()),
              (a.triggerRef = r.createRef()),
              (a.attachId = void 0),
              (a.clickOutsideHandler = void 0),
              (a.touchOutsideHandler = void 0),
              (a.contextMenuOutsideHandler1 = void 0),
              (a.contextMenuOutsideHandler2 = void 0),
              (a.mouseDownTimeout = void 0),
              (a.focusTime = void 0),
              (a.preClickTime = void 0),
              (a.preTouchTime = void 0),
              (a.delayTimer = void 0),
              (a.hasPopupMouseDown = void 0),
              (a.onMouseEnter = function (s) {
                var f = a.props.mouseEnterDelay;
                a.fireEvents('onMouseEnter', s),
                  a.delaySetPopupVisible(!0, f, f ? null : s);
              }),
              (a.onMouseMove = function (s) {
                a.fireEvents('onMouseMove', s), a.setPoint(s);
              }),
              (a.onMouseLeave = function (s) {
                a.fireEvents('onMouseLeave', s),
                  a.delaySetPopupVisible(!1, a.props.mouseLeaveDelay);
              }),
              (a.onPopupMouseEnter = function () {
                a.clearDelayTimer();
              }),
              (a.onPopupMouseLeave = function (s) {
                var f;
                (s.relatedTarget &&
                  !s.relatedTarget.setTimeout &&
                  On(
                    (f = a.popupRef.current) === null || f === void 0
                      ? void 0
                      : f.getElement(),
                    s.relatedTarget,
                  )) ||
                  a.delaySetPopupVisible(!1, a.props.mouseLeaveDelay);
              }),
              (a.onFocus = function (s) {
                a.fireEvents('onFocus', s),
                  a.clearDelayTimer(),
                  a.isFocusToShow() &&
                    ((a.focusTime = Date.now()),
                    a.delaySetPopupVisible(!0, a.props.focusDelay));
              }),
              (a.onMouseDown = function (s) {
                a.fireEvents('onMouseDown', s), (a.preClickTime = Date.now());
              }),
              (a.onTouchStart = function (s) {
                a.fireEvents('onTouchStart', s), (a.preTouchTime = Date.now());
              }),
              (a.onBlur = function (s) {
                a.fireEvents('onBlur', s),
                  a.clearDelayTimer(),
                  a.isBlurToHide() &&
                    a.delaySetPopupVisible(!1, a.props.blurDelay);
              }),
              (a.onContextMenu = function (s) {
                s.preventDefault(),
                  a.fireEvents('onContextMenu', s),
                  a.setPopupVisible(!0, s);
              }),
              (a.onContextMenuClose = function () {
                a.isContextMenuToShow() && a.close();
              }),
              (a.onClick = function (s) {
                if ((a.fireEvents('onClick', s), a.focusTime)) {
                  var f;
                  if (
                    (a.preClickTime && a.preTouchTime
                      ? (f = Math.min(a.preClickTime, a.preTouchTime))
                      : a.preClickTime
                      ? (f = a.preClickTime)
                      : a.preTouchTime && (f = a.preTouchTime),
                    Math.abs(f - a.focusTime) < 20)
                  )
                    return;
                  a.focusTime = 0;
                }
                (a.preClickTime = 0),
                  (a.preTouchTime = 0),
                  a.isClickToShow() &&
                    (a.isClickToHide() || a.isBlurToHide()) &&
                    s &&
                    s.preventDefault &&
                    s.preventDefault();
                var m = !a.state.popupVisible;
                ((a.isClickToHide() && !m) || (m && a.isClickToShow())) &&
                  a.setPopupVisible(!a.state.popupVisible, s);
              }),
              (a.onPopupMouseDown = function () {
                if (
                  ((a.hasPopupMouseDown = !0),
                  clearTimeout(a.mouseDownTimeout),
                  (a.mouseDownTimeout = window.setTimeout(function () {
                    a.hasPopupMouseDown = !1;
                  }, 0)),
                  a.context)
                ) {
                  var s;
                  (s = a.context).onPopupMouseDown.apply(s, arguments);
                }
              }),
              (a.onDocumentClick = function (s) {
                if (!(a.props.mask && !a.props.maskClosable)) {
                  var f = s.target,
                    m = a.getRootDomNode(),
                    h = a.getPopupDomNode();
                  (!On(m, f) || a.isContextMenuOnly()) &&
                    !On(h, f) &&
                    !a.hasPopupMouseDown &&
                    a.close();
                }
              }),
              (a.getRootDomNode = function () {
                var s = a.props.getTriggerDOMNode;
                if (s) return s(a.triggerRef.current);
                try {
                  var f = bn(a.triggerRef.current);
                  if (f) return f;
                } catch (m) {}
                return qt.findDOMNode(qr(a));
              }),
              (a.getPopupClassNameFromAlign = function (s) {
                var f = [],
                  m = a.props,
                  h = m.popupPlacement,
                  g = m.builtinPlacements,
                  b = m.prefixCls,
                  y = m.alignPoint,
                  w = m.getPopupClassNameFromAlign;
                return (
                  h && g && f.push(iu(g, b, s, y)),
                  w && f.push(w(s)),
                  f.join(' ')
                );
              }),
              (a.getComponent = function () {
                var s = a.props,
                  f = s.prefixCls,
                  m = s.destroyPopupOnHide,
                  h = s.popupClassName,
                  g = s.onPopupAlign,
                  b = s.popupMotion,
                  y = s.popupAnimation,
                  w = s.popupTransitionName,
                  O = s.popupStyle,
                  L = s.mask,
                  N = s.maskAnimation,
                  A = s.maskTransitionName,
                  M = s.maskMotion,
                  D = s.zIndex,
                  _ = s.popup,
                  F = s.stretch,
                  V = s.alignPoint,
                  I = s.mobile,
                  j = s.forceRender,
                  W = a.state,
                  k = W.popupVisible,
                  U = W.point,
                  $ = a.getPopupAlign(),
                  H = {};
                return (
                  a.isMouseEnterToShow() &&
                    (H.onMouseEnter = a.onPopupMouseEnter),
                  a.isMouseLeaveToHide() &&
                    (H.onMouseLeave = a.onPopupMouseLeave),
                  (H.onMouseDown = a.onPopupMouseDown),
                  (H.onTouchStart = a.onPopupMouseDown),
                  r.createElement(
                    ds,
                    (0, d.Z)(
                      {
                        prefixCls: f,
                        destroyPopupOnHide: m,
                        visible: k,
                        point: V && U,
                        className: h,
                        align: $,
                        onAlign: g,
                        animation: y,
                        getClassNameFromAlign: a.getPopupClassNameFromAlign,
                      },
                      H,
                      {
                        stretch: F,
                        getRootDomNode: a.getRootDomNode,
                        style: O,
                        mask: L,
                        zIndex: D,
                        transitionName: w,
                        maskAnimation: N,
                        maskTransitionName: A,
                        maskMotion: M,
                        ref: a.popupRef,
                        motion: b,
                        mobile: I,
                        forceRender: j,
                      },
                    ),
                    typeof _ == 'function' ? _() : _,
                  )
                );
              }),
              (a.attachParent = function (s) {
                _e.cancel(a.attachId);
                var f = a.props,
                  m = f.getPopupContainer,
                  h = f.getDocument,
                  g = a.getRootDomNode(),
                  b;
                m
                  ? (g || m.length === 0) && (b = m(g))
                  : (b = h(a.getRootDomNode()).body),
                  b
                    ? b.appendChild(s)
                    : (a.attachId = _e(function () {
                        a.attachParent(s);
                      }));
              }),
              (a.getContainer = function () {
                var s = a.props.getDocument,
                  f = s(a.getRootDomNode()).createElement('div');
                return (
                  (f.style.position = 'absolute'),
                  (f.style.top = '0'),
                  (f.style.left = '0'),
                  (f.style.width = '100%'),
                  a.attachParent(f),
                  f
                );
              }),
              (a.setPoint = function (s) {
                var f = a.props.alignPoint;
                !f ||
                  !s ||
                  a.setState({ point: { pageX: s.pageX, pageY: s.pageY } });
              }),
              (a.handlePortalUpdate = function () {
                a.state.prevPopupVisible !== a.state.popupVisible &&
                  a.props.afterPopupVisibleChange(a.state.popupVisible);
              }),
              (a.triggerContextValue = {
                onPopupMouseDown: a.onPopupMouseDown,
              });
            var l;
            return (
              'popupVisible' in u
                ? (l = !!u.popupVisible)
                : (l = !!u.defaultPopupVisible),
              (a.state = { prevPopupVisible: l, popupVisible: l }),
              hs.forEach(function (s) {
                a['fire'.concat(s)] = function (f) {
                  a.fireEvents(s, f);
                };
              }),
              a
            );
          }
          return (
            tn(
              o,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var a = this.props,
                      l = this.state;
                    if (l.popupVisible) {
                      var s;
                      !this.clickOutsideHandler &&
                        (this.isClickToHide() || this.isContextMenuToShow()) &&
                        ((s = a.getDocument(this.getRootDomNode())),
                        (this.clickOutsideHandler = cn(
                          s,
                          'mousedown',
                          this.onDocumentClick,
                        ))),
                        this.touchOutsideHandler ||
                          ((s = s || a.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = cn(
                            s,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((s = s || a.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = cn(
                            s,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = cn(
                            window,
                            'blur',
                            this.onContextMenuClose,
                          ));
                      return;
                    }
                    this.clearOutsideHandler();
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      _e.cancel(this.attachId);
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var a;
                    return (
                      ((a = this.popupRef.current) === null || a === void 0
                        ? void 0
                        : a.getElement()) || null
                    );
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var a = this.props,
                      l = a.popupPlacement,
                      s = a.popupAlign,
                      f = a.builtinPlacements;
                    return l && f ? ru(f, l, s) : s;
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (a, l) {
                    var s = this.props.alignPoint,
                      f = this.state.popupVisible;
                    this.clearDelayTimer(),
                      f !== a &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: a,
                            prevPopupVisible: f,
                          }),
                        this.props.onPopupVisibleChange(a)),
                      s && l && a && this.setPoint(l);
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (a, l, s) {
                    var f = this,
                      m = l * 1e3;
                    if ((this.clearDelayTimer(), m)) {
                      var h = s ? { pageX: s.pageX, pageY: s.pageY } : null;
                      this.delayTimer = window.setTimeout(function () {
                        f.setPopupVisible(a, h), f.clearDelayTimer();
                      }, m);
                    } else this.setPopupVisible(a, s);
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null));
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (a) {
                    var l = this.props.children.props,
                      s = this.props;
                    return l[a] && s[a] ? this['fire'.concat(a)] : l[a] || s[a];
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.showAction;
                    return (
                      l.indexOf('click') !== -1 || s.indexOf('click') !== -1
                    );
                  },
                },
                {
                  key: 'isContextMenuOnly',
                  value: function () {
                    var a = this.props.action;
                    return (
                      a === 'contextMenu' ||
                      (a.length === 1 && a[0] === 'contextMenu')
                    );
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.showAction;
                    return (
                      l.indexOf('contextMenu') !== -1 ||
                      s.indexOf('contextMenu') !== -1
                    );
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.hideAction;
                    return (
                      l.indexOf('click') !== -1 || s.indexOf('click') !== -1
                    );
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.showAction;
                    return (
                      l.indexOf('hover') !== -1 ||
                      s.indexOf('mouseEnter') !== -1
                    );
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.hideAction;
                    return (
                      l.indexOf('hover') !== -1 ||
                      s.indexOf('mouseLeave') !== -1
                    );
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.showAction;
                    return (
                      l.indexOf('focus') !== -1 || s.indexOf('focus') !== -1
                    );
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var a = this.props,
                      l = a.action,
                      s = a.hideAction;
                    return (
                      l.indexOf('focus') !== -1 || s.indexOf('blur') !== -1
                    );
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    if (this.state.popupVisible) {
                      var a;
                      (a = this.popupRef.current) === null ||
                        a === void 0 ||
                        a.forceAlign();
                    }
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (a, l) {
                    var s = this.props.children.props[a];
                    s && s(l);
                    var f = this.props[a];
                    f && f(l);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var a = this.state.popupVisible,
                      l = this.props,
                      s = l.children,
                      f = l.forceRender,
                      m = l.alignPoint,
                      h = l.className,
                      g = l.autoDestroy,
                      b = r.Children.only(s),
                      y = { key: 'trigger' };
                    this.isContextMenuToShow()
                      ? (y.onContextMenu = this.onContextMenu)
                      : (y.onContextMenu =
                          this.createTwoChains('onContextMenu')),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((y.onClick = this.onClick),
                          (y.onMouseDown = this.onMouseDown),
                          (y.onTouchStart = this.onTouchStart))
                        : ((y.onClick = this.createTwoChains('onClick')),
                          (y.onMouseDown = this.createTwoChains('onMouseDown')),
                          (y.onTouchStart =
                            this.createTwoChains('onTouchStart'))),
                      this.isMouseEnterToShow()
                        ? ((y.onMouseEnter = this.onMouseEnter),
                          m && (y.onMouseMove = this.onMouseMove))
                        : (y.onMouseEnter =
                            this.createTwoChains('onMouseEnter')),
                      this.isMouseLeaveToHide()
                        ? (y.onMouseLeave = this.onMouseLeave)
                        : (y.onMouseLeave =
                            this.createTwoChains('onMouseLeave')),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((y.onFocus = this.onFocus), (y.onBlur = this.onBlur))
                        : ((y.onFocus = this.createTwoChains('onFocus')),
                          (y.onBlur = this.createTwoChains('onBlur')));
                    var w = X()(b && b.props && b.props.className, h);
                    w && (y.className = w);
                    var O = P({}, y);
                    nr(b) && (O.ref = Jt(this.triggerRef, b.ref));
                    var L = r.cloneElement(b, O),
                      N;
                    return (
                      (a || this.popupRef.current || f) &&
                        (N = r.createElement(
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !a && g && (N = null),
                      r.createElement(
                        ga.Provider,
                        { value: this.triggerContextValue },
                        L,
                        N,
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (a, l) {
                    var s = a.popupVisible,
                      f = {};
                    return (
                      s !== void 0 &&
                        l.popupVisible !== s &&
                        ((f.popupVisible = s),
                        (f.prevPopupVisible = l.popupVisible)),
                      f
                    );
                  },
                },
              ],
            ),
            o
          );
        })(r.Component);
        return (
          (t.contextType = ga),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: ps,
            getDocument: ms,
            onPopupVisibleChange: Rr,
            afterPopupVisibleChange: Rr,
            onPopupAlign: Rr,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        );
      }
      var ya = gs(tu),
        xt = { adjustX: 1, adjustY: 1 },
        ys = {
          topLeft: { points: ['bl', 'tl'], overflow: xt, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: xt, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: xt, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: xt, offset: [4, 0] },
        },
        bs = {
          topLeft: { points: ['bl', 'tl'], overflow: xt, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: xt, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: xt, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: xt, offset: [4, 0] },
        },
        Rc = null;
      function ba(e, t, n) {
        if (t) return t;
        if (n) return n[e] || n.other;
      }
      var Es = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function Ss(e) {
        var t = e.prefixCls,
          n = e.visible,
          i = e.children,
          o = e.popup,
          u = e.popupClassName,
          a = e.popupOffset,
          l = e.disabled,
          s = e.mode,
          f = e.onVisibleChange,
          m = r.useContext(ft),
          h = m.getPopupContainer,
          g = m.rtl,
          b = m.subMenuOpenDelay,
          y = m.subMenuCloseDelay,
          w = m.builtinPlacements,
          O = m.triggerSubMenuAction,
          L = m.forceSubMenuRender,
          N = m.motion,
          A = m.defaultMotions,
          M = r.useState(!1),
          D = R(M, 2),
          _ = D[0],
          F = D[1],
          V = P(g ? P({}, bs) : P({}, ys), w),
          I = Es[s],
          j = ba(s, N, A),
          W = P(
            P({}, j),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          k = r.useRef();
        return (
          r.useEffect(
            function () {
              return (
                (k.current = _e(function () {
                  F(n);
                })),
                function () {
                  _e.cancel(k.current);
                }
              );
            },
            [n],
          ),
          r.createElement(
            ya,
            {
              prefixCls: t,
              popupClassName: X()(
                ''.concat(t, '-popup'),
                v({}, ''.concat(t, '-rtl'), g),
                u,
              ),
              stretch: s === 'horizontal' ? 'minWidth' : null,
              getPopupContainer: h,
              builtinPlacements: V,
              popupPlacement: I,
              popupVisible: _,
              popup: o,
              popupAlign: a && { offset: a },
              action: l ? [] : [O],
              mouseEnterDelay: b,
              mouseLeaveDelay: y,
              onPopupVisibleChange: f,
              forceRender: L,
              popupMotion: W,
            },
            i,
          )
        );
      }
      function Cs(e) {
        var t = e.id,
          n = e.open,
          i = e.keyPath,
          o = e.children,
          u = 'inline',
          a = r.useContext(ft),
          l = a.prefixCls,
          s = a.forceSubMenuRender,
          f = a.motion,
          m = a.defaultMotions,
          h = a.mode,
          g = r.useRef(!1);
        g.current = h === u;
        var b = r.useState(!g.current),
          y = R(b, 2),
          w = y[0],
          O = y[1],
          L = g.current ? n : !1;
        r.useEffect(
          function () {
            g.current && O(!1);
          },
          [h],
        );
        var N = P({}, ba(u, f, m));
        i.length > 1 && (N.motionAppear = !1);
        var A = N.onVisibleChanged;
        return (
          (N.onVisibleChanged = function (M) {
            return !g.current && !M && O(!0), A == null ? void 0 : A(M);
          }),
          w
            ? null
            : r.createElement(
                sn,
                { mode: u, locked: !g.current },
                r.createElement(
                  Ln,
                  (0, d.Z)({ visible: L }, N, {
                    forceRender: s,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(l, '-hidden'),
                  }),
                  function (M) {
                    var D = M.className,
                      _ = M.style;
                    return r.createElement(
                      Ei,
                      { id: t, className: D, style: _ },
                      o,
                    );
                  },
                ),
              )
        );
      }
      var ws = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        xs = ['active'],
        Rs = function (t) {
          var n,
            i = t.style,
            o = t.className,
            u = t.title,
            a = t.eventKey,
            l = t.warnKey,
            s = t.disabled,
            f = t.internalPopupClose,
            m = t.children,
            h = t.itemIcon,
            g = t.expandIcon,
            b = t.popupClassName,
            y = t.popupOffset,
            w = t.onClick,
            O = t.onMouseEnter,
            L = t.onMouseLeave,
            N = t.onTitleClick,
            A = t.onTitleMouseEnter,
            M = t.onTitleMouseLeave,
            D = z(t, ws),
            _ = yi(a),
            F = r.useContext(ft),
            V = F.prefixCls,
            I = F.mode,
            j = F.openKeys,
            W = F.disabled,
            k = F.overflowDisabled,
            U = F.activeKey,
            $ = F.selectedKeys,
            H = F.itemIcon,
            ne = F.expandIcon,
            Q = F.onItemClick,
            we = F.onOpenChange,
            he = F.onActive,
            Y = r.useContext(ar),
            re = Y._internalRenderSubMenuItem,
            ge = r.useContext(mi),
            te = ge.isSubPathKey,
            ve = Wt(),
            se = ''.concat(V, '-submenu'),
            B = W || s,
            ae = r.useRef(),
            q = r.useRef(),
            Me = h || H,
            le = g || ne,
            ie = j.includes(a),
            fe = !k && ie,
            Be = te($, a),
            Fe = li(a, B, A, M),
            je = Fe.active,
            Pe = z(Fe, xs),
            ye = r.useState(!1),
            oe = R(ye, 2),
            De = oe[0],
            it = oe[1],
            qe = function (Ye) {
              B || it(Ye);
            },
            Rt = function (Ye) {
              qe(!0), O == null || O({ key: a, domEvent: Ye });
            },
            pt = function (Ye) {
              qe(!1), L == null || L({ key: a, domEvent: Ye });
            },
            mt = r.useMemo(
              function () {
                return je || (I !== 'inline' ? De || te([U], a) : !1);
              },
              [I, je, U, De, a, te],
            ),
            et = di(ve.length),
            ut = function (Ye) {
              B ||
                (N == null || N({ key: a, domEvent: Ye }),
                I === 'inline' && we(a, !ie));
            },
            Tt = jt(function (Xe) {
              w == null || w(Pn(Xe)), Q(Xe);
            }),
            Ze = function (Ye) {
              I !== 'inline' && we(a, Ye);
            },
            st = function () {
              he(a);
            },
            at = _ && ''.concat(_, '-popup'),
            We = r.createElement(
              'div',
              (0, d.Z)(
                {
                  role: 'menuitem',
                  style: et,
                  className: ''.concat(se, '-title'),
                  tabIndex: B ? null : -1,
                  ref: ae,
                  title: typeof u == 'string' ? u : null,
                  'data-menu-id': k && _ ? null : _,
                  'aria-expanded': fe,
                  'aria-haspopup': !0,
                  'aria-controls': at,
                  'aria-disabled': B,
                  onClick: ut,
                  onFocus: st,
                },
                Pe,
              ),
              u,
              r.createElement(
                fi,
                {
                  icon: I !== 'horizontal' ? le : null,
                  props: P(P({}, t), {}, { isOpen: fe, isSubMenu: !0 }),
                },
                r.createElement('i', { className: ''.concat(se, '-arrow') }),
              ),
            ),
            Qe = r.useRef(I);
          if (
            (I !== 'inline' && (Qe.current = ve.length > 1 ? 'vertical' : I),
            !k)
          ) {
            var dt = Qe.current;
            We = r.createElement(
              Ss,
              {
                mode: dt,
                prefixCls: se,
                visible: !f && fe && I !== 'inline',
                popupClassName: b,
                popupOffset: y,
                popup: r.createElement(
                  sn,
                  { mode: dt === 'horizontal' ? 'vertical' : dt },
                  r.createElement(Ei, { id: at, ref: q }, m),
                ),
                disabled: B,
                onVisibleChange: Ze,
              },
              We,
            );
          }
          var ct = r.createElement(
            un.Item,
            (0, d.Z)({ role: 'none' }, D, {
              component: 'li',
              style: i,
              className: X()(
                se,
                ''.concat(se, '-').concat(I),
                o,
                ((n = {}),
                v(n, ''.concat(se, '-open'), fe),
                v(n, ''.concat(se, '-active'), mt),
                v(n, ''.concat(se, '-selected'), Be),
                v(n, ''.concat(se, '-disabled'), B),
                n),
              ),
              onMouseEnter: Rt,
              onMouseLeave: pt,
            }),
            We,
            !k && r.createElement(Cs, { id: at, open: fe, keyPath: ve }, m),
          );
          return (
            re &&
              (ct = re(ct, t, {
                selected: Be,
                active: mt,
                open: fe,
                disabled: B,
              })),
            r.createElement(
              sn,
              {
                onItemClick: Tt,
                mode: I === 'horizontal' ? 'vertical' : I,
                itemIcon: Me,
                expandIcon: le,
              },
              ct,
            )
          );
        };
      function Tr(e) {
        var t = e.eventKey,
          n = e.children,
          i = Wt(t),
          o = or(n, i),
          u = Mn();
        r.useEffect(
          function () {
            if (u)
              return (
                u.registerPath(t, i),
                function () {
                  u.unregisterPath(t, i);
                }
              );
          },
          [i],
        );
        var a;
        return (
          u ? (a = o) : (a = r.createElement(Rs, e, o)),
          r.createElement(pi.Provider, { value: i }, a)
        );
      }
      function Ea(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (Fi(e)) {
          var n = e.nodeName.toLowerCase(),
            i =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              (n === 'a' && !!e.getAttribute('href')),
            o = e.getAttribute('tabindex'),
            u = Number(o),
            a = null;
          return (
            o && !Number.isNaN(u) ? (a = u) : i && a === null && (a = 0),
            i && e.disabled && (a = null),
            a !== null && (a >= 0 || (t && a < 0))
          );
        }
        return !1;
      }
      function Sa(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          n = Ne(e.querySelectorAll('*')).filter(function (i) {
            return Ea(i, t);
          });
        return Ea(e, t) && n.unshift(e), n;
      }
      var Un = null;
      function Tc() {
        Un = document.activeElement;
      }
      function Pc() {
        Un = null;
      }
      function Mc() {
        if (Un)
          try {
            Un.focus();
          } catch (e) {}
      }
      function Ac(e, t) {
        if (t.keyCode === 9) {
          var n = Sa(e),
            i = n[t.shiftKey ? 0 : n.length - 1],
            o = i === document.activeElement || e === document.activeElement;
          if (o) {
            var u = n[t.shiftKey ? n.length - 1 : 0];
            u.focus(), t.preventDefault();
          }
        }
      }
      var Pr = Ve.LEFT,
        Mr = Ve.RIGHT,
        Ar = Ve.UP,
        Bn = Ve.DOWN,
        zn = Ve.ENTER,
        Ca = Ve.ESC,
        pn = Ve.HOME,
        mn = Ve.END,
        wa = [Ar, Bn, Pr, Mr];
      function Ts(e, t, n, i) {
        var o,
          u,
          a,
          l,
          s = 'prev',
          f = 'next',
          m = 'children',
          h = 'parent';
        if (e === 'inline' && i === zn) return { inlineTrigger: !0 };
        var g = ((o = {}), v(o, Ar, s), v(o, Bn, f), o),
          b =
            ((u = {}),
            v(u, Pr, n ? f : s),
            v(u, Mr, n ? s : f),
            v(u, Bn, m),
            v(u, zn, m),
            u),
          y =
            ((a = {}),
            v(a, Ar, s),
            v(a, Bn, f),
            v(a, zn, m),
            v(a, Ca, h),
            v(a, Pr, n ? m : h),
            v(a, Mr, n ? h : m),
            a),
          w = {
            inline: g,
            horizontal: b,
            vertical: y,
            inlineSub: g,
            horizontalSub: y,
            verticalSub: y,
          },
          O =
            (l = w[''.concat(e).concat(t ? '' : 'Sub')]) === null ||
            l === void 0
              ? void 0
              : l[i];
        switch (O) {
          case s:
            return { offset: -1, sibling: !0 };
          case f:
            return { offset: 1, sibling: !0 };
          case h:
            return { offset: -1, sibling: !1 };
          case m:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function Ps(e) {
        for (var t = e; t; ) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function Ms(e, t) {
        for (var n = e || document.activeElement; n; ) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function xa(e, t) {
        var n = Sa(e, !0);
        return n.filter(function (i) {
          return t.has(i);
        });
      }
      function Ra(e, t, n) {
        var i =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        if (!e) return null;
        var o = xa(e, t),
          u = o.length,
          a = o.findIndex(function (l) {
            return n === l;
          });
        return (
          i < 0 ? (a === -1 ? (a = u - 1) : (a -= 1)) : i > 0 && (a += 1),
          (a = (a + u) % u),
          o[a]
        );
      }
      function As(e, t, n, i, o, u, a, l, s, f) {
        var m = r.useRef(),
          h = r.useRef();
        h.current = t;
        var g = function () {
          _e.cancel(m.current);
        };
        return (
          r.useEffect(function () {
            return function () {
              g();
            };
          }, []),
          function (b) {
            var y = b.which;
            if ([].concat(wa, [zn, Ca, pn, mn]).includes(y)) {
              var w,
                O,
                L,
                N = function () {
                  (w = new Set()), (O = new Map()), (L = new Map());
                  var H = u();
                  return (
                    H.forEach(function (ne) {
                      var Q = document.querySelector(
                        "[data-menu-id='".concat(gi(i, ne), "']"),
                      );
                      Q && (w.add(Q), L.set(Q, ne), O.set(ne, Q));
                    }),
                    w
                  );
                };
              N();
              var A = O.get(t),
                M = Ms(A, w),
                D = L.get(M),
                _ = Ts(e, a(D, !0).length === 1, n, y);
              if (!_ && y !== pn && y !== mn) return;
              (wa.includes(y) || [pn, mn].includes(y)) && b.preventDefault();
              var F = function (H) {
                if (H) {
                  var ne = H,
                    Q = H.querySelector('a');
                  (Q == null ? void 0 : Q.getAttribute('href')) && (ne = Q);
                  var we = L.get(H);
                  l(we),
                    g(),
                    (m.current = _e(function () {
                      h.current === we && ne.focus();
                    }));
                }
              };
              if ([pn, mn].includes(y) || _.sibling || !M) {
                var V;
                !M || e === 'inline' ? (V = o.current) : (V = Ps(M));
                var I,
                  j = xa(V, w);
                y === pn
                  ? (I = j[0])
                  : y === mn
                  ? (I = j[j.length - 1])
                  : (I = Ra(V, w, M, _.offset)),
                  F(I);
              } else if (_.inlineTrigger) s(D);
              else if (_.offset > 0)
                s(D, !0),
                  g(),
                  (m.current = _e(function () {
                    N();
                    var $ = M.getAttribute('aria-controls'),
                      H = document.getElementById($),
                      ne = Ra(H, w);
                    F(ne);
                  }, 5));
              else if (_.offset < 0) {
                var W = a(D, !0),
                  k = W[W.length - 2],
                  U = O.get(k);
                s(k, !1), F(U);
              }
            }
            f == null || f(b);
          }
        );
      }
      var Os = Math.random().toFixed(5).toString().slice(2),
        Ta = 0;
      function Is(e) {
        var t = ue(e, { value: e }),
          n = R(t, 2),
          i = n[0],
          o = n[1];
        return (
          r.useEffect(function () {
            Ta += 1;
            var u = ''.concat(Os, '-').concat(Ta);
            o('rc-menu-uuid-'.concat(u));
          }, []),
          i
        );
      }
      function Ns(e) {
        Promise.resolve().then(e);
      }
      var Or = '__RC_UTIL_PATH_SPLIT__',
        Pa = function (t) {
          return t.join(Or);
        },
        _s = function (t) {
          return t.split(Or);
        },
        Ir = 'rc-menu-more';
      function Ds() {
        var e = r.useState({}),
          t = R(e, 2),
          n = t[1],
          i = (0, r.useRef)(new Map()),
          o = (0, r.useRef)(new Map()),
          u = r.useState([]),
          a = R(u, 2),
          l = a[0],
          s = a[1],
          f = (0, r.useRef)(0),
          m = (0, r.useRef)(!1),
          h = function () {
            m.current || n({});
          },
          g = (0, r.useCallback)(function (A, M) {
            var D = Pa(M);
            o.current.set(D, A), i.current.set(A, D), (f.current += 1);
            var _ = f.current;
            Ns(function () {
              _ === f.current && h();
            });
          }, []),
          b = (0, r.useCallback)(function (A, M) {
            var D = Pa(M);
            o.current.delete(D), i.current.delete(A);
          }, []),
          y = (0, r.useCallback)(function (A) {
            s(A);
          }, []),
          w = (0, r.useCallback)(
            function (A, M) {
              var D = i.current.get(A) || '',
                _ = _s(D);
              return M && l.includes(_[0]) && _.unshift(Ir), _;
            },
            [l],
          ),
          O = (0, r.useCallback)(
            function (A, M) {
              return A.some(function (D) {
                var _ = w(D, !0);
                return _.includes(M);
              });
            },
            [w],
          ),
          L = function () {
            var M = Ne(i.current.keys());
            return l.length && M.push(Ir), M;
          },
          N = (0, r.useCallback)(function (A) {
            var M = ''.concat(i.current.get(A)).concat(Or),
              D = new Set();
            return (
              Ne(o.current.keys()).forEach(function (_) {
                _.startsWith(M) && D.add(o.current.get(_));
              }),
              D
            );
          }, []);
        return (
          r.useEffect(function () {
            return function () {
              m.current = !0;
            };
          }, []),
          {
            registerPath: g,
            unregisterPath: b,
            refreshOverflowKeys: y,
            isSubPathKey: O,
            getKeyPath: w,
            getKeys: L,
            getSubPathKeys: N,
          }
        );
      }
      var Ls = [
          'prefixCls',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        Gt = [],
        ks = r.forwardRef(function (e, t) {
          var n,
            i,
            o = e.prefixCls,
            u = o === void 0 ? 'rc-menu' : o,
            a = e.style,
            l = e.className,
            s = e.tabIndex,
            f = s === void 0 ? 0 : s,
            m = e.items,
            h = e.children,
            g = e.direction,
            b = e.id,
            y = e.mode,
            w = y === void 0 ? 'vertical' : y,
            O = e.inlineCollapsed,
            L = e.disabled,
            N = e.disabledOverflow,
            A = e.subMenuOpenDelay,
            M = A === void 0 ? 0.1 : A,
            D = e.subMenuCloseDelay,
            _ = D === void 0 ? 0.1 : D,
            F = e.forceSubMenuRender,
            V = e.defaultOpenKeys,
            I = e.openKeys,
            j = e.activeKey,
            W = e.defaultActiveFirst,
            k = e.selectable,
            U = k === void 0 ? !0 : k,
            $ = e.multiple,
            H = $ === void 0 ? !1 : $,
            ne = e.defaultSelectedKeys,
            Q = e.selectedKeys,
            we = e.onSelect,
            he = e.onDeselect,
            Y = e.inlineIndent,
            re = Y === void 0 ? 24 : Y,
            ge = e.motion,
            te = e.defaultMotions,
            ve = e.triggerSubMenuAction,
            se = ve === void 0 ? 'hover' : ve,
            B = e.builtinPlacements,
            ae = e.itemIcon,
            q = e.expandIcon,
            Me = e.overflowedIndicator,
            le = Me === void 0 ? '...' : Me,
            ie = e.overflowedIndicatorPopupClassName,
            fe = e.getPopupContainer,
            Be = e.onClick,
            Fe = e.onOpenChange,
            je = e.onKeyDown,
            Pe = e.openAnimation,
            ye = e.openTransitionName,
            oe = e._internalRenderMenuItem,
            De = e._internalRenderSubMenuItem,
            it = z(e, Ls),
            qe = Qo(h, m, Gt),
            Rt = r.useState(!1),
            pt = R(Rt, 2),
            mt = pt[0],
            et = pt[1],
            ut = r.useRef();
          (0, r.useImperativeHandle)(t, function () {
            return {
              list: ut.current,
              focus: function (Re) {
                var Ae;
                (Ae = ut.current) === null || Ae === void 0 || Ae.focus(Re);
              },
            };
          });
          var Tt = Is(b),
            Ze = g === 'rtl',
            st = r.useMemo(
              function () {
                return (w === 'inline' || w === 'vertical') && O
                  ? ['vertical', O]
                  : [w, !1];
              },
              [w, O],
            ),
            at = R(st, 2),
            We = at[0],
            Qe = at[1],
            dt = r.useState(0),
            ct = R(dt, 2),
            Xe = ct[0],
            Ye = ct[1],
            lt = Xe >= qe.length - 1 || We !== 'horizontal' || N,
            _t = ue(V, {
              value: I,
              postState: function (Re) {
                return Re || Gt;
              },
            }),
            yt = R(_t, 2),
            ze = yt[0],
            Dt = yt[1],
            bt = function (Re) {
              Dt(Re), Fe == null || Fe(Re);
            },
            Lt = r.useState(ze),
            Pt = R(Lt, 2),
            kt = Pt[0],
            ee = Pt[1],
            Ce = We === 'inline',
            Ke = r.useRef(!1);
          r.useEffect(
            function () {
              Ce && ee(ze);
            },
            [ze],
          ),
            r.useEffect(
              function () {
                if (!Ke.current) {
                  Ke.current = !0;
                  return;
                }
                Ce ? Dt(kt) : bt(Gt);
              },
              [Ce],
            );
          var Ue = Ds(),
            Mt = Ue.registerPath,
            gn = Ue.unregisterPath,
            Lr = Ue.refreshOverflowKeys,
            yn = Ue.isSubPathKey,
            kr = Ue.getKeyPath,
            Kr = Ue.getKeys,
            ht = Ue.getSubPathKeys,
            Gn = r.useMemo(
              function () {
                return { registerPath: Mt, unregisterPath: gn };
              },
              [Mt, gn],
            ),
            Xn = r.useMemo(
              function () {
                return { isSubPathKey: yn };
              },
              [yn],
            );
          r.useEffect(
            function () {
              Lr(
                lt
                  ? Gt
                  : qe.slice(Xe + 1).map(function (ke) {
                      return ke.key;
                    }),
              );
            },
            [Xe, lt],
          );
          var Yn = ue(
              j ||
                (W && ((n = qe[0]) === null || n === void 0 ? void 0 : n.key)),
              { value: j },
            ),
            At = R(Yn, 2),
            Zt = At[0],
            Kt = At[1],
            Zn = jt(function (ke) {
              Kt(ke);
            }),
            Qn = jt(function () {
              Kt(void 0);
            }),
            xe = ue(ne || [], {
              value: Q,
              postState: function (Re) {
                return Array.isArray(Re) ? Re : Re == null ? Gt : [Re];
              },
            }),
            Se = R(xe, 2),
            Le = Se[0],
            tt = Se[1],
            Et = function (Re) {
              if (U) {
                var Ae = Re.key,
                  Ot = Le.includes(Ae),
                  St;
                H
                  ? Ot
                    ? (St = Le.filter(function (gc) {
                        return gc !== Ae;
                      }))
                    : (St = [].concat(Ne(Le), [Ae]))
                  : (St = [Ae]),
                  tt(St);
                var Va = P(P({}, Re), {}, { selectedKeys: St });
                Ot ? he == null || he(Va) : we == null || we(Va);
              }
              !H && ze.length && We !== 'inline' && bt(Gt);
            },
            Ft = jt(function (ke) {
              Be == null || Be(Pn(ke)), Et(ke);
            }),
            Qt = jt(function (ke, Re) {
              var Ae = ze.filter(function (St) {
                return St !== ke;
              });
              if (Re) Ae.push(ke);
              else if (We !== 'inline') {
                var Ot = ht(ke);
                Ae = Ae.filter(function (St) {
                  return !Ot.has(St);
                });
              }
              ii()(ze, Ae) || bt(Ae);
            }),
            Fr = jt(fe),
            Jn = function (Re, Ae) {
              var Ot = Ae != null ? Ae : !ze.includes(Re);
              Qt(Re, Ot);
            },
            qn = As(We, Zt, Ze, Tt, ut, Kr, kr, Kt, Jn, je);
          r.useEffect(function () {
            et(!0);
          }, []);
          var Hr = r.useMemo(
              function () {
                return {
                  _internalRenderMenuItem: oe,
                  _internalRenderSubMenuItem: De,
                };
              },
              [oe, De],
            ),
            Vr =
              We !== 'horizontal' || N
                ? qe
                : qe.map(function (ke, Re) {
                    return r.createElement(
                      sn,
                      { key: ke.key, overflowDisabled: Re > Xe },
                      ke,
                    );
                  }),
            er = r.createElement(
              un,
              (0, d.Z)(
                {
                  id: b,
                  ref: ut,
                  prefixCls: ''.concat(u, '-overflow'),
                  component: 'ul',
                  itemComponent: An,
                  className: X()(
                    u,
                    ''.concat(u, '-root'),
                    ''.concat(u, '-').concat(We),
                    l,
                    ((i = {}),
                    v(i, ''.concat(u, '-inline-collapsed'), Qe),
                    v(i, ''.concat(u, '-rtl'), Ze),
                    i),
                  ),
                  dir: g,
                  style: a,
                  role: 'menu',
                  tabIndex: f,
                  data: Vr,
                  renderRawItem: function (Re) {
                    return Re;
                  },
                  renderRawRest: function (Re) {
                    var Ae = Re.length,
                      Ot = Ae ? qe.slice(-Ae) : null;
                    return r.createElement(
                      Tr,
                      {
                        eventKey: Ir,
                        title: le,
                        disabled: lt,
                        internalPopupClose: Ae === 0,
                        popupClassName: ie,
                      },
                      Ot,
                    );
                  },
                  maxCount:
                    We !== 'horizontal' || N ? un.INVALIDATE : un.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (Re) {
                    Ye(Re);
                  },
                  onKeyDown: qn,
                },
                it,
              ),
            );
          return r.createElement(
            ar.Provider,
            { value: Hr },
            r.createElement(
              hi.Provider,
              { value: Tt },
              r.createElement(
                sn,
                {
                  prefixCls: u,
                  mode: We,
                  openKeys: ze,
                  rtl: Ze,
                  disabled: L,
                  motion: mt ? ge : null,
                  defaultMotions: mt ? te : null,
                  activeKey: Zt,
                  onActive: Zn,
                  onInactive: Qn,
                  selectedKeys: Le,
                  inlineIndent: re,
                  subMenuOpenDelay: M,
                  subMenuCloseDelay: _,
                  forceSubMenuRender: F,
                  builtinPlacements: B,
                  triggerSubMenuAction: se,
                  getPopupContainer: Fr,
                  itemIcon: ae,
                  expandIcon: q,
                  onItemClick: Ft,
                  onOpenChange: Qt,
                },
                r.createElement(mi.Provider, { value: Xn }, er),
                r.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  r.createElement(vi.Provider, { value: Gn }, qe),
                ),
              ),
            ),
          );
        }),
        Ks = ks,
        Fs = ['className', 'title', 'eventKey', 'children'],
        Hs = ['children'],
        Vs = function (t) {
          var n = t.className,
            i = t.title,
            o = t.eventKey,
            u = t.children,
            a = z(t, Fs),
            l = r.useContext(ft),
            s = l.prefixCls,
            f = ''.concat(s, '-item-group');
          return r.createElement(
            'li',
            (0, d.Z)({}, a, {
              onClick: function (h) {
                return h.stopPropagation();
              },
              className: X()(f, n),
            }),
            r.createElement(
              'div',
              {
                className: ''.concat(f, '-title'),
                title: typeof i == 'string' ? i : void 0,
              },
              i,
            ),
            r.createElement('ul', { className: ''.concat(f, '-list') }, u),
          );
        };
      function Ma(e) {
        var t = e.children,
          n = z(e, Hs),
          i = Wt(n.eventKey),
          o = or(t, i),
          u = Mn();
        return u ? o : r.createElement(Vs, ci(n, ['warnKey']), o);
      }
      function Aa(e) {
        var t = e.className,
          n = e.style,
          i = r.useContext(ft),
          o = i.prefixCls,
          u = Mn();
        return u
          ? null
          : r.createElement('li', {
              className: X()(''.concat(o, '-item-divider'), t),
              style: n,
            });
      }
      var Oc = Wt,
        hn = Ks;
      (hn.Item = An), (hn.SubMenu = Tr), (hn.ItemGroup = Ma), (hn.Divider = Aa);
      var Ws = hn,
        Xt = { adjustX: 1, adjustY: 1 },
        Yt = [0, 0],
        js = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: Xt,
            offset: [0, -4],
            targetOffset: Yt,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: Xt,
            offset: [0, -4],
            targetOffset: Yt,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: Xt,
            offset: [0, -4],
            targetOffset: Yt,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: Xt,
            offset: [0, 4],
            targetOffset: Yt,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: Xt,
            offset: [0, 4],
            targetOffset: Yt,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: Xt,
            offset: [0, 4],
            targetOffset: Yt,
          },
        },
        Us = js,
        Bs = Ve.ESC,
        zs = Ve.TAB;
      function $s(e) {
        var t = e.visible,
          n = e.setTriggerVisible,
          i = e.triggerRef,
          o = e.menuRef,
          u = e.onVisibleChange,
          a = function () {
            if (t && i.current) {
              var h, g, b;
              (h = i.current) === null ||
                h === void 0 ||
                (g = h.triggerRef) === null ||
                g === void 0 ||
                (b = g.current) === null ||
                b === void 0 ||
                b.focus(),
                n(!1),
                typeof u == 'function' && u(!1);
            }
          },
          l = function (h) {
            switch (h.keyCode) {
              case Bs:
                a();
                break;
              case zs:
                a();
                break;
            }
          },
          s = function () {
            var h, g;
            (h = o.current) === null ||
              h === void 0 ||
              (g = h.focus) === null ||
              g === void 0 ||
              g.call(h);
          };
        r.useEffect(
          function () {
            return t
              ? (setTimeout(function () {
                  s(), window.addEventListener('keydown', l);
                }, 100),
                function () {
                  window.removeEventListener('keydown', l);
                })
              : function () {
                  return null;
                };
          },
          [t],
        );
        var f = function () {
          t &&
            setTimeout(function () {
              var h, g, b, y;
              (h = i.current) === null ||
                h === void 0 ||
                (g = h.triggerRef) === null ||
                g === void 0 ||
                (b = g.current) === null ||
                b === void 0 ||
                (y = b.focus) === null ||
                y === void 0 ||
                y.call(b);
            }, 100);
        };
        return { returnFocus: f };
      }
      var Gs = [
        'arrow',
        'prefixCls',
        'transitionName',
        'animation',
        'align',
        'placement',
        'placements',
        'getPopupContainer',
        'showAction',
        'hideAction',
        'overlayClassName',
        'overlayStyle',
        'visible',
        'trigger',
      ];
      function Xs(e, t) {
        var n = e.arrow,
          i = n === void 0 ? !1 : n,
          o = e.prefixCls,
          u = o === void 0 ? 'rc-dropdown' : o,
          a = e.transitionName,
          l = e.animation,
          s = e.align,
          f = e.placement,
          m = f === void 0 ? 'bottomLeft' : f,
          h = e.placements,
          g = h === void 0 ? Us : h,
          b = e.getPopupContainer,
          y = e.showAction,
          w = e.hideAction,
          O = e.overlayClassName,
          L = e.overlayStyle,
          N = e.visible,
          A = e.trigger,
          M = A === void 0 ? ['hover'] : A,
          D = z(e, Gs),
          _ = r.useState(),
          F = R(_, 2),
          V = F[0],
          I = F[1],
          j = 'visible' in e ? N : V,
          W = r.useRef(null);
        r.useImperativeHandle(t, function () {
          return W.current;
        });
        var k = r.useRef(null),
          U = ''.concat(u, '-menu'),
          $ = $s({
            visible: j,
            setTriggerVisible: I,
            triggerRef: W,
            menuRef: k,
            onVisibleChange: e.onVisibleChange,
          }),
          H = $.returnFocus,
          ne = function () {
            var B = e.overlay,
              ae;
            return typeof B == 'function' ? (ae = B()) : (ae = B), ae;
          },
          Q = function (B) {
            var ae = e.onOverlayClick,
              q = ne().props;
            I(!1), ae && ae(B), q.onClick && q.onClick(B), H();
          },
          we = function (B) {
            var ae = e.onVisibleChange;
            I(B), typeof ae == 'function' && ae(B);
          },
          he = function () {
            var B = ne(),
              ae = Jt(k, B.ref),
              q = { prefixCls: U, onClick: Q, ref: nr(B) ? ae : void 0 };
            return (
              typeof B.type == 'string' && delete q.prefixCls,
              r.createElement(
                r.Fragment,
                null,
                i &&
                  r.createElement('div', { className: ''.concat(u, '-arrow') }),
                r.cloneElement(B, q),
              )
            );
          },
          Y = function () {
            var B = e.overlay;
            return typeof B == 'function' ? he : he();
          },
          re = function () {
            var B = e.minOverlayWidthMatchTrigger,
              ae = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? B : !ae;
          },
          ge = function () {
            var B = e.openClassName;
            return B !== void 0 ? B : ''.concat(u, '-open');
          },
          te = function () {
            var B = e.children,
              ae = B.props ? B.props : {},
              q = X()(ae.className, ge());
            return j && B ? r.cloneElement(B, { className: q }) : B;
          },
          ve = w;
        return (
          !ve && M.indexOf('contextMenu') !== -1 && (ve = ['click']),
          r.createElement(
            ya,
            P(
              P({ builtinPlacements: g }, D),
              {},
              {
                prefixCls: u,
                ref: W,
                popupClassName: X()(O, v({}, ''.concat(u, '-show-arrow'), i)),
                popupStyle: L,
                action: M,
                showAction: y,
                hideAction: ve || [],
                popupPlacement: m,
                popupAlign: s,
                popupTransitionName: a,
                popupAnimation: l,
                popupVisible: j,
                stretch: re() ? 'minWidth' : '',
                popup: Y(),
                onPopupVisibleChange: we,
                getPopupContainer: b,
              },
            ),
            te(),
          )
        );
      }
      var Ys = r.forwardRef(Xs),
        Zs = Ys;
      function Qs(e, t) {
        var n = e.prefixCls,
          i = e.editable,
          o = e.locale,
          u = e.style;
        return !i || i.showAdd === !1
          ? null
          : r.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: u,
                'aria-label':
                  (o == null ? void 0 : o.addAriaLabel) || 'Add tab',
                onClick: function (l) {
                  i.onEdit('add', { event: l });
                },
              },
              i.addIcon || '+',
            );
      }
      var Oa = r.forwardRef(Qs);
      function Js(e, t) {
        var n = e.prefixCls,
          i = e.id,
          o = e.tabs,
          u = e.locale,
          a = e.mobile,
          l = e.moreIcon,
          s = l === void 0 ? 'More' : l,
          f = e.moreTransitionName,
          m = e.style,
          h = e.className,
          g = e.editable,
          b = e.tabBarGutter,
          y = e.rtl,
          w = e.removeAriaLabel,
          O = e.onTabClick,
          L = (0, r.useState)(!1),
          N = R(L, 2),
          A = N[0],
          M = N[1],
          D = (0, r.useState)(null),
          _ = R(D, 2),
          F = _[0],
          V = _[1],
          I = ''.concat(i, '-more-popup'),
          j = ''.concat(n, '-dropdown'),
          W = F !== null ? ''.concat(I, '-').concat(F) : null,
          k = u == null ? void 0 : u.dropdownAriaLabel;
        function U(Y, re) {
          Y.preventDefault(),
            Y.stopPropagation(),
            g.onEdit('remove', { key: re, event: Y });
        }
        var $ = r.createElement(
          Ws,
          {
            onClick: function (re) {
              var ge = re.key,
                te = re.domEvent;
              O(ge, te), M(!1);
            },
            id: I,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': W,
            selectedKeys: [F],
            'aria-label': k !== void 0 ? k : 'expanded dropdown',
          },
          o.map(function (Y) {
            var re = g && Y.closable !== !1 && !Y.disabled;
            return r.createElement(
              An,
              {
                key: Y.key,
                id: ''.concat(I, '-').concat(Y.key),
                role: 'option',
                'aria-controls': i && ''.concat(i, '-panel-').concat(Y.key),
                disabled: Y.disabled,
              },
              r.createElement('span', null, Y.tab),
              re &&
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': w || 'remove',
                    tabIndex: 0,
                    className: ''.concat(j, '-menu-item-remove'),
                    onClick: function (te) {
                      te.stopPropagation(), U(te, Y.key);
                    },
                  },
                  Y.closeIcon || g.removeIcon || '\xD7',
                ),
            );
          }),
        );
        function H(Y) {
          for (
            var re = o.filter(function (B) {
                return !B.disabled;
              }),
              ge =
                re.findIndex(function (B) {
                  return B.key === F;
                }) || 0,
              te = re.length,
              ve = 0;
            ve < te;
            ve += 1
          ) {
            ge = (ge + Y + te) % te;
            var se = re[ge];
            if (!se.disabled) {
              V(se.key);
              return;
            }
          }
        }
        function ne(Y) {
          var re = Y.which;
          if (!A) {
            [Ve.DOWN, Ve.SPACE, Ve.ENTER].includes(re) &&
              (M(!0), Y.preventDefault());
            return;
          }
          switch (re) {
            case Ve.UP:
              H(-1), Y.preventDefault();
              break;
            case Ve.DOWN:
              H(1), Y.preventDefault();
              break;
            case Ve.ESC:
              M(!1);
              break;
            case Ve.SPACE:
            case Ve.ENTER:
              F !== null && O(F, Y);
              break;
          }
        }
        (0, r.useEffect)(
          function () {
            var Y = document.getElementById(W);
            Y && Y.scrollIntoView && Y.scrollIntoView(!1);
          },
          [F],
        ),
          (0, r.useEffect)(
            function () {
              A || V(null);
            },
            [A],
          );
        var Q = v({}, y ? 'marginRight' : 'marginLeft', b);
        o.length || ((Q.visibility = 'hidden'), (Q.order = 1));
        var we = X()(v({}, ''.concat(j, '-rtl'), y)),
          he = a
            ? null
            : r.createElement(
                Zs,
                {
                  prefixCls: j,
                  overlay: $,
                  trigger: ['hover'],
                  visible: A,
                  transitionName: f,
                  onVisibleChange: M,
                  overlayClassName: we,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: Q,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': I,
                    id: ''.concat(i, '-more'),
                    'aria-expanded': A,
                    onKeyDown: ne,
                  },
                  s,
                ),
              );
        return r.createElement(
          'div',
          {
            className: X()(''.concat(n, '-nav-operations'), h),
            style: m,
            ref: t,
          },
          he,
          r.createElement(Oa, { prefixCls: n, locale: u, editable: g }),
        );
      }
      var qs = r.memo(r.forwardRef(Js), function (e, t) {
          return t.tabMoving;
        }),
        Nr = (0, r.createContext)(null),
        ec = 0.1,
        Ia = 0.01,
        $n = 20,
        Na = Math.pow(0.995, $n);
      function tc(e, t) {
        var n = (0, r.useState)(),
          i = R(n, 2),
          o = i[0],
          u = i[1],
          a = (0, r.useState)(0),
          l = R(a, 2),
          s = l[0],
          f = l[1],
          m = (0, r.useState)(0),
          h = R(m, 2),
          g = h[0],
          b = h[1],
          y = (0, r.useState)(),
          w = R(y, 2),
          O = w[0],
          L = w[1],
          N = (0, r.useRef)();
        function A(I) {
          var j = I.touches[0],
            W = j.screenX,
            k = j.screenY;
          u({ x: W, y: k }), window.clearInterval(N.current);
        }
        function M(I) {
          if (!!o) {
            I.preventDefault();
            var j = I.touches[0],
              W = j.screenX,
              k = j.screenY;
            u({ x: W, y: k });
            var U = W - o.x,
              $ = k - o.y;
            t(U, $);
            var H = Date.now();
            f(H), b(H - s), L({ x: U, y: $ });
          }
        }
        function D() {
          if (!!o && (u(null), L(null), O)) {
            var I = O.x / g,
              j = O.y / g,
              W = Math.abs(I),
              k = Math.abs(j);
            if (Math.max(W, k) < ec) return;
            var U = I,
              $ = j;
            N.current = window.setInterval(function () {
              if (Math.abs(U) < Ia && Math.abs($) < Ia) {
                window.clearInterval(N.current);
                return;
              }
              (U *= Na), ($ *= Na), t(U * $n, $ * $n);
            }, $n);
          }
        }
        var _ = (0, r.useRef)();
        function F(I) {
          var j = I.deltaX,
            W = I.deltaY,
            k = 0,
            U = Math.abs(j),
            $ = Math.abs(W);
          U === $
            ? (k = _.current === 'x' ? j : W)
            : U > $
            ? ((k = j), (_.current = 'x'))
            : ((k = W), (_.current = 'y')),
            t(-k, -k) && I.preventDefault();
        }
        var V = (0, r.useRef)(null);
        (V.current = {
          onTouchStart: A,
          onTouchMove: M,
          onTouchEnd: D,
          onWheel: F,
        }),
          r.useEffect(function () {
            function I(U) {
              V.current.onTouchStart(U);
            }
            function j(U) {
              V.current.onTouchMove(U);
            }
            function W(U) {
              V.current.onTouchEnd(U);
            }
            function k(U) {
              V.current.onWheel(U);
            }
            return (
              document.addEventListener('touchmove', j, { passive: !1 }),
              document.addEventListener('touchend', W, { passive: !1 }),
              e.current.addEventListener('touchstart', I, { passive: !1 }),
              e.current.addEventListener('wheel', k),
              function () {
                document.removeEventListener('touchmove', j),
                  document.removeEventListener('touchend', W);
              }
            );
          }, []);
      }
      function nc() {
        var e = (0, r.useRef)(new Map());
        function t(i) {
          return (
            e.current.has(i) || e.current.set(i, r.createRef()),
            e.current.get(i)
          );
        }
        function n(i) {
          e.current.delete(i);
        }
        return [t, n];
      }
      function _a(e, t) {
        var n = r.useRef(e),
          i = r.useState({}),
          o = R(i, 2),
          u = o[1];
        function a(l) {
          var s = typeof l == 'function' ? l(n.current) : l;
          s !== n.current && t(s, n.current), (n.current = s), u({});
        }
        return [n.current, a];
      }
      var Da = function (t) {
        var n = t.position,
          i = t.prefixCls,
          o = t.extra;
        if (!o) return null;
        var u,
          a = {};
        return (
          o && G(o) === 'object' && !r.isValidElement(o)
            ? (a = o)
            : (a.right = o),
          n === 'right' && (u = a.right),
          n === 'left' && (u = a.left),
          u
            ? r.createElement(
                'div',
                { className: ''.concat(i, '-extra-content') },
                u,
              )
            : null
        );
      };
      function rc(e, t) {
        var n,
          i = r.useContext(Nr),
          o = i.prefixCls,
          u = i.tabs,
          a = e.className,
          l = e.style,
          s = e.id,
          f = e.animated,
          m = e.activeKey,
          h = e.rtl,
          g = e.extra,
          b = e.editable,
          y = e.locale,
          w = e.tabPosition,
          O = e.tabBarGutter,
          L = e.children,
          N = e.onTabClick,
          A = e.onTabScroll,
          M = (0, r.useRef)(),
          D = (0, r.useRef)(),
          _ = (0, r.useRef)(),
          F = (0, r.useRef)(),
          V = nc(),
          I = R(V, 2),
          j = I[0],
          W = I[1],
          k = w === 'top' || w === 'bottom',
          U = _a(0, function (xe, Se) {
            k && A && A({ direction: xe > Se ? 'left' : 'right' });
          }),
          $ = R(U, 2),
          H = $[0],
          ne = $[1],
          Q = _a(0, function (xe, Se) {
            !k && A && A({ direction: xe > Se ? 'top' : 'bottom' });
          }),
          we = R(Q, 2),
          he = we[0],
          Y = we[1],
          re = (0, r.useState)(0),
          ge = R(re, 2),
          te = ge[0],
          ve = ge[1],
          se = (0, r.useState)(0),
          B = R(se, 2),
          ae = B[0],
          q = B[1],
          Me = (0, r.useState)(null),
          le = R(Me, 2),
          ie = le[0],
          fe = le[1],
          Be = (0, r.useState)(null),
          Fe = R(Be, 2),
          je = Fe[0],
          Pe = Fe[1],
          ye = (0, r.useState)(0),
          oe = R(ye, 2),
          De = oe[0],
          it = oe[1],
          qe = (0, r.useState)(0),
          Rt = R(qe, 2),
          pt = Rt[0],
          mt = Rt[1],
          et = bo(new Map()),
          ut = R(et, 2),
          Tt = ut[0],
          Ze = ut[1],
          st = Co(u, Tt, te),
          at = ''.concat(o, '-nav-operations-hidden'),
          We = 0,
          Qe = 0;
        k
          ? h
            ? ((We = 0), (Qe = Math.max(0, te - ie)))
            : ((We = Math.min(0, ie - te)), (Qe = 0))
          : ((We = Math.min(0, je - ae)), (Qe = 0));
        function dt(xe) {
          return xe < We ? We : xe > Qe ? Qe : xe;
        }
        var ct = (0, r.useRef)(),
          Xe = (0, r.useState)(),
          Ye = R(Xe, 2),
          lt = Ye[0],
          _t = Ye[1];
        function yt() {
          _t(Date.now());
        }
        function ze() {
          window.clearTimeout(ct.current);
        }
        tc(M, function (xe, Se) {
          function Le(tt, Et) {
            tt(function (Ft) {
              var Qt = dt(Ft + Et);
              return Qt;
            });
          }
          if (k) {
            if (ie >= te) return !1;
            Le(ne, xe);
          } else {
            if (je >= ae) return !1;
            Le(Y, Se);
          }
          return ze(), yt(), !0;
        }),
          (0, r.useEffect)(
            function () {
              return (
                ze(),
                lt &&
                  (ct.current = window.setTimeout(function () {
                    _t(0);
                  }, 100)),
                ze
              );
            },
            [lt],
          );
        function Dt() {
          var xe =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : m,
            Se = st.get(xe) || {
              width: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0,
            };
          if (k) {
            var Le = H;
            h
              ? Se.right < H
                ? (Le = Se.right)
                : Se.right + Se.width > H + ie &&
                  (Le = Se.right + Se.width - ie)
              : Se.left < -H
              ? (Le = -Se.left)
              : Se.left + Se.width > -H + ie &&
                (Le = -(Se.left + Se.width - ie)),
              Y(0),
              ne(dt(Le));
          } else {
            var tt = he;
            Se.top < -he
              ? (tt = -Se.top)
              : Se.top + Se.height > -he + je &&
                (tt = -(Se.top + Se.height - je)),
              ne(0),
              Y(dt(tt));
          }
        }
        var bt = wo(
            st,
            { width: ie, height: je, left: H, top: he },
            { width: te, height: ae },
            { width: De, height: pt },
            P(P({}, e), {}, { tabs: u }),
          ),
          Lt = R(bt, 2),
          Pt = Lt[0],
          kt = Lt[1],
          ee = {};
        w === 'top' || w === 'bottom'
          ? (ee[h ? 'marginRight' : 'marginLeft'] = O)
          : (ee.marginTop = O);
        var Ce = u.map(function (xe, Se) {
            var Le = xe.key;
            return r.createElement(So, {
              id: s,
              prefixCls: o,
              key: Le,
              tab: xe,
              style: Se === 0 ? void 0 : ee,
              closable: xe.closable,
              editable: b,
              active: Le === m,
              renderWrapper: L,
              removeAriaLabel: y == null ? void 0 : y.removeAriaLabel,
              ref: j(Le),
              onClick: function (Et) {
                N(Le, Et);
              },
              onRemove: function () {
                W(Le);
              },
              onFocus: function () {
                Dt(Le),
                  yt(),
                  !!M.current &&
                    (h || (M.current.scrollLeft = 0),
                    (M.current.scrollTop = 0));
              },
            });
          }),
          Ke = ti(function () {
            var xe,
              Se,
              Le,
              tt,
              Et,
              Ft,
              Qt =
                ((xe = M.current) === null || xe === void 0
                  ? void 0
                  : xe.offsetWidth) || 0,
              Fr =
                ((Se = M.current) === null || Se === void 0
                  ? void 0
                  : Se.offsetHeight) || 0,
              Jn =
                ((Le = F.current) === null || Le === void 0
                  ? void 0
                  : Le.offsetWidth) || 0,
              qn =
                ((tt = F.current) === null || tt === void 0
                  ? void 0
                  : tt.offsetHeight) || 0;
            fe(Qt), Pe(Fr), it(Jn), mt(qn);
            var Hr =
                (((Et = D.current) === null || Et === void 0
                  ? void 0
                  : Et.offsetWidth) || 0) - Jn,
              Vr =
                (((Ft = D.current) === null || Ft === void 0
                  ? void 0
                  : Ft.offsetHeight) || 0) - qn;
            ve(Hr),
              q(Vr),
              Ze(function () {
                var er = new Map();
                return (
                  u.forEach(function (ke) {
                    var Re = ke.key,
                      Ae = j(Re).current;
                    Ae &&
                      er.set(Re, {
                        width: Ae.offsetWidth,
                        height: Ae.offsetHeight,
                        left: Ae.offsetLeft,
                        top: Ae.offsetTop,
                      });
                  }),
                  er
                );
              });
          }),
          Ue = u.slice(0, Pt),
          Mt = u.slice(kt + 1),
          gn = [].concat(Ne(Ue), Ne(Mt)),
          Lr = (0, r.useState)(),
          yn = R(Lr, 2),
          kr = yn[0],
          Kr = yn[1],
          ht = st.get(m),
          Gn = (0, r.useRef)();
        function Xn() {
          _e.cancel(Gn.current);
        }
        (0, r.useEffect)(
          function () {
            var xe = {};
            return (
              ht &&
                (k
                  ? (h ? (xe.right = ht.right) : (xe.left = ht.left),
                    (xe.width = ht.width))
                  : ((xe.top = ht.top), (xe.height = ht.height))),
              Xn(),
              (Gn.current = _e(function () {
                Kr(xe);
              })),
              Xn
            );
          },
          [ht, k, h],
        ),
          (0, r.useEffect)(
            function () {
              Dt();
            },
            [m, ht, st, k],
          ),
          (0, r.useEffect)(
            function () {
              Ke();
            },
            [
              h,
              O,
              m,
              u
                .map(function (xe) {
                  return xe.key;
                })
                .join('_'),
            ],
          );
        var Yn = !!gn.length,
          At = ''.concat(o, '-nav-wrap'),
          Zt,
          Kt,
          Zn,
          Qn;
        return (
          k
            ? h
              ? ((Kt = H > 0), (Zt = H + ie < te))
              : ((Zt = H < 0), (Kt = -H + ie < te))
            : ((Zn = he < 0), (Qn = -he + je < ae)),
          r.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: X()(''.concat(o, '-nav'), a),
              style: l,
              onKeyDown: function () {
                yt();
              },
            },
            r.createElement(Da, { position: 'left', extra: g, prefixCls: o }),
            r.createElement(
              xn,
              { onResize: Ke },
              r.createElement(
                'div',
                {
                  className: X()(
                    At,
                    ((n = {}),
                    v(n, ''.concat(At, '-ping-left'), Zt),
                    v(n, ''.concat(At, '-ping-right'), Kt),
                    v(n, ''.concat(At, '-ping-top'), Zn),
                    v(n, ''.concat(At, '-ping-bottom'), Qn),
                    n),
                  ),
                  ref: M,
                },
                r.createElement(
                  xn,
                  { onResize: Ke },
                  r.createElement(
                    'div',
                    {
                      ref: D,
                      className: ''.concat(o, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(H, 'px, ')
                          .concat(he, 'px)'),
                        transition: lt ? 'none' : void 0,
                      },
                    },
                    Ce,
                    r.createElement(Oa, {
                      ref: F,
                      prefixCls: o,
                      locale: y,
                      editable: b,
                      style: P(
                        P({}, Ce.length === 0 ? void 0 : ee),
                        {},
                        { visibility: Yn ? 'hidden' : null },
                      ),
                    }),
                    r.createElement('div', {
                      className: X()(
                        ''.concat(o, '-ink-bar'),
                        v({}, ''.concat(o, '-ink-bar-animated'), f.inkBar),
                      ),
                      style: kr,
                    }),
                  ),
                ),
              ),
            ),
            r.createElement(
              qs,
              (0, d.Z)({}, e, {
                removeAriaLabel: y == null ? void 0 : y.removeAriaLabel,
                ref: _,
                prefixCls: o,
                tabs: gn,
                className: !Yn && at,
                tabMoving: !!lt,
              }),
            ),
            r.createElement(Da, { position: 'right', extra: g, prefixCls: o }),
          )
        );
      }
      var La = r.forwardRef(rc);
      function ic(e) {
        var t = e.id,
          n = e.activeKey,
          i = e.animated,
          o = e.tabPosition,
          u = e.rtl,
          a = e.destroyInactiveTabPane,
          l = r.useContext(Nr),
          s = l.prefixCls,
          f = l.tabs,
          m = i.tabPane,
          h = f.findIndex(function (g) {
            return g.key === n;
          });
        return r.createElement(
          'div',
          { className: X()(''.concat(s, '-content-holder')) },
          r.createElement(
            'div',
            {
              className: X()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(o),
                v({}, ''.concat(s, '-content-animated'), m),
              ),
              style:
                h && m
                  ? v(
                      {},
                      u ? 'marginRight' : 'marginLeft',
                      '-'.concat(h, '00%'),
                    )
                  : null,
            },
            f.map(function (g) {
              return r.cloneElement(g.node, {
                key: g.key,
                prefixCls: s,
                tabKey: g.key,
                id: t,
                animated: m,
                active: g.key === n,
                destroyInactiveTabPane: a,
              });
            }),
          ),
        );
      }
      function ka(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          i = e.className,
          o = e.style,
          u = e.id,
          a = e.active,
          l = e.animated,
          s = e.destroyInactiveTabPane,
          f = e.tabKey,
          m = e.children,
          h = r.useState(n),
          g = R(h, 2),
          b = g[0],
          y = g[1];
        r.useEffect(
          function () {
            a ? y(!0) : s && y(!1);
          },
          [a, s],
        );
        var w = {};
        return (
          a ||
            (l
              ? ((w.visibility = 'hidden'),
                (w.height = 0),
                (w.overflowY = 'hidden'))
              : (w.display = 'none')),
          r.createElement(
            'div',
            {
              id: u && ''.concat(u, '-panel-').concat(f),
              role: 'tabpanel',
              tabIndex: a ? 0 : -1,
              'aria-labelledby': u && ''.concat(u, '-tab-').concat(f),
              'aria-hidden': !a,
              style: P(P({}, w), o),
              className: X()(
                ''.concat(t, '-tabpane'),
                a && ''.concat(t, '-tabpane-active'),
                i,
              ),
            },
            (a || b || n) && m,
          )
        );
      }
      var ac = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        Ka = 0;
      function oc(e) {
        return pe(e)
          .map(function (t) {
            if (r.isValidElement(t)) {
              var n = t.key !== void 0 ? String(t.key) : void 0;
              return P(P({ key: n }, t.props), {}, { node: t });
            }
            return null;
          })
          .filter(function (t) {
            return t;
          });
      }
      function uc(e, t) {
        var n,
          i = e.id,
          o = e.prefixCls,
          u = o === void 0 ? 'rc-tabs' : o,
          a = e.className,
          l = e.children,
          s = e.direction,
          f = e.activeKey,
          m = e.defaultActiveKey,
          h = e.editable,
          g = e.animated,
          b = g === void 0 ? { inkBar: !0, tabPane: !1 } : g,
          y = e.tabPosition,
          w = y === void 0 ? 'top' : y,
          O = e.tabBarGutter,
          L = e.tabBarStyle,
          N = e.tabBarExtraContent,
          A = e.locale,
          M = e.moreIcon,
          D = e.moreTransitionName,
          _ = e.destroyInactiveTabPane,
          F = e.renderTabBar,
          V = e.onChange,
          I = e.onTabClick,
          j = e.onTabScroll,
          W = z(e, ac),
          k = oc(l),
          U = s === 'rtl',
          $;
        b === !1
          ? ($ = { inkBar: !1, tabPane: !1 })
          : b === !0
          ? ($ = { inkBar: !0, tabPane: !0 })
          : ($ = P({ inkBar: !0, tabPane: !1 }, G(b) === 'object' ? b : {}));
        var H = (0, r.useState)(!1),
          ne = R(H, 2),
          Q = ne[0],
          we = ne[1];
        (0, r.useEffect)(function () {
          we(ce());
        }, []);
        var he = ue(
            function () {
              var Pe;
              return (Pe = k[0]) === null || Pe === void 0 ? void 0 : Pe.key;
            },
            { value: f, defaultValue: m },
          ),
          Y = R(he, 2),
          re = Y[0],
          ge = Y[1],
          te = (0, r.useState)(function () {
            return k.findIndex(function (Pe) {
              return Pe.key === re;
            });
          }),
          ve = R(te, 2),
          se = ve[0],
          B = ve[1];
        (0, r.useEffect)(
          function () {
            var Pe = k.findIndex(function (oe) {
              return oe.key === re;
            });
            if (Pe === -1) {
              var ye;
              (Pe = Math.max(0, Math.min(se, k.length - 1))),
                ge((ye = k[Pe]) === null || ye === void 0 ? void 0 : ye.key);
            }
            B(Pe);
          },
          [
            k
              .map(function (Pe) {
                return Pe.key;
              })
              .join('_'),
            re,
            se,
          ],
        );
        var ae = ue(null, { value: i }),
          q = R(ae, 2),
          Me = q[0],
          le = q[1],
          ie = w;
        Q && !['left', 'right'].includes(w) && (ie = 'top'),
          (0, r.useEffect)(function () {
            i || (le('rc-tabs-'.concat(Ka)), (Ka += 1));
          }, []);
        function fe(Pe, ye) {
          I == null || I(Pe, ye);
          var oe = Pe !== re;
          ge(Pe), oe && (V == null || V(Pe));
        }
        var Be = {
            id: Me,
            activeKey: re,
            animated: $,
            tabPosition: ie,
            rtl: U,
            mobile: Q,
          },
          Fe,
          je = P(
            P({}, Be),
            {},
            {
              editable: h,
              locale: A,
              moreIcon: M,
              moreTransitionName: D,
              tabBarGutter: O,
              onTabClick: fe,
              onTabScroll: j,
              extra: N,
              style: L,
              panes: l,
            },
          );
        return (
          F ? (Fe = F(je, La)) : (Fe = r.createElement(La, je)),
          r.createElement(
            Nr.Provider,
            { value: { tabs: k, prefixCls: u } },
            r.createElement(
              'div',
              (0, d.Z)(
                {
                  ref: t,
                  id: i,
                  className: X()(
                    u,
                    ''.concat(u, '-').concat(ie),
                    ((n = {}),
                    v(n, ''.concat(u, '-mobile'), Q),
                    v(n, ''.concat(u, '-editable'), h),
                    v(n, ''.concat(u, '-rtl'), U),
                    n),
                    a,
                  ),
                },
                W,
              ),
              Fe,
              r.createElement(
                ic,
                (0, d.Z)({ destroyInactiveTabPane: _ }, Be, { animated: $ }),
              ),
            ),
          )
        );
      }
      var Fa = r.forwardRef(uc);
      Fa.TabPane = ka;
      var sc = Fa,
        cc = sc,
        _r = c(73602),
        ot = c(16924),
        lc = c(11695),
        Ic = c(86845);
      function Nt(e, t) {
        return pc(e) || vc(e, t) || dc(e, t) || fc();
      }
      function fc() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function dc(e, t) {
        if (!!e) {
          if (typeof e == 'string') return Ha(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(e);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Ha(e, t);
        }
      }
      function Ha(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function vc(e, t) {
        var n =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (n != null) {
          var i = [],
            o = !0,
            u = !1,
            a,
            l;
          try {
            for (
              n = n.call(e);
              !(o = (a = n.next()).done) &&
              (i.push(a.value), !(t && i.length === t));
              o = !0
            );
          } catch (s) {
            (u = !0), (l = s);
          } finally {
            try {
              !o && n.return != null && n.return();
            } finally {
              if (u) throw l;
            }
          }
          return i;
        }
      }
      function pc(e) {
        if (Array.isArray(e)) return e;
      }
      function Dr(e, t) {
        var n,
          i =
            (n = e.match(/\.(\w+)$/)) === null || n === void 0 ? void 0 : n[1];
        return i || (i = t.tsx ? 'tsx' : 'jsx'), i;
      }
      var mc = function (t) {
          var n,
            i,
            o,
            u = (0, r.useRef)(),
            a = (0, r.useContext)(ot.context),
            l = a.locale,
            s = (0, ot.useLocaleProps)(l, t),
            f = (0, ot.useDemoUrl)(s.identifier),
            m = s.demoUrl || f,
            h =
              (_r.m === null || _r.m === void 0
                ? void 0
                : _r.m.location.hash) === '#'.concat(s.identifier),
            g = Object.keys(s.sources).length === 1,
            b = (0, ot.useCodeSandbox)(
              (
                (n = s.hideActions) === null || n === void 0
                  ? void 0
                  : n.includes('CSB')
              )
                ? null
                : s,
            ),
            y = (0, ot.useRiddle)(
              (
                (i = s.hideActions) === null || i === void 0
                  ? void 0
                  : i.includes('RIDDLE')
              )
                ? null
                : s,
            ),
            w = (0, ot.useMotions)(s.motions || [], u.current),
            O = Nt(w, 2),
            L = O[0],
            N = O[1],
            A = (0, ot.useCopy)(),
            M = Nt(A, 2),
            D = M[0],
            _ = M[1],
            F = (0, r.useState)(function () {
              return s.sources._ ? '_' : Object.keys(s.sources)[0];
            }),
            V = Nt(F, 2),
            I = V[0],
            j = V[1],
            W = (0, r.useState)(Dr(I, s.sources[I])),
            k = Nt(W, 2),
            U = k[0],
            $ = k[1],
            H = (0, r.useState)(Boolean(s.defaultShowCode)),
            ne = Nt(H, 2),
            Q = ne[0],
            we = ne[1],
            he = (0, r.useState)(Math.random()),
            Y = Nt(he, 2),
            re = Y[0],
            ge = Y[1],
            te = s.sources[I][U] || s.sources[I].content,
            ve = (0, ot.useTSPlaygroundUrl)(l, te),
            se = (0, r.useRef)(),
            B = (0, ot.usePrefersColor)(),
            ae = Nt(B, 1),
            q = ae[0],
            Me = s.actionBarRender,
            le =
              Me === void 0
                ? function (fe) {
                    return fe;
                  }
                : Me;
          (0, r.useEffect)(
            function () {
              ge(Math.random());
            },
            [q],
          );
          function ie(fe) {
            j(fe), $(Dr(fe, s.sources[fe]));
          }
          return r.createElement(
            'div',
            {
              style: s.style,
              className: [
                s.className,
                '__dumi-default-previewer',
                h ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: s.identifier,
              'data-debug': s.debug || void 0,
              'data-iframe': s.iframe || void 0,
            },
            s.iframe &&
              r.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            r.createElement(
              'div',
              {
                ref: u,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: s.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    s.compact || (s.iframe && s.compact !== !1) ? '0' : void 0,
                  background: s.background,
                },
              },
              s.iframe
                ? r.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(s.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: re,
                    src: m,
                    ref: se,
                  })
                : s.children,
            ),
            r.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': s.title,
              },
              s.title &&
                r.createElement(
                  ot.AnchorLink,
                  { to: '#'.concat(s.identifier) },
                  s.title,
                ),
              s.description &&
                r.createElement('div', {
                  dangerouslySetInnerHTML: { __html: s.description },
                }),
            ),
            r.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              le(
                r.createElement(
                  r.Fragment,
                  null,
                  b &&
                    r.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: b,
                    }),
                  y &&
                    r.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: y,
                    }),
                  s.motions &&
                    r.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: N,
                      onClick: function () {
                        return L();
                      },
                    }),
                  s.iframe &&
                    r.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function () {
                        return ge(Math.random());
                      },
                    }),
                  !((o = s.hideActions) === null || o === void 0
                    ? void 0
                    : o.includes('EXTERNAL')) &&
                    r.createElement(
                      ot.Link,
                      { target: '_blank', to: m },
                      r.createElement('button', {
                        title: 'Open demo in new tab',
                        className: '__dumi-default-icon',
                        role: 'open-demo',
                        type: 'button',
                      }),
                    ),
                  r.createElement('span', null),
                  r.createElement('button', {
                    title: 'Copy source code',
                    className: '__dumi-default-icon',
                    role: 'copy',
                    'data-status': _,
                    onClick: function () {
                      return D(te);
                    },
                  }),
                  U === 'tsx' &&
                    Q &&
                    r.createElement(
                      ot.Link,
                      { target: '_blank', to: ve },
                      r.createElement('button', {
                        title: 'Get JSX via TypeScript Playground',
                        className: '__dumi-default-icon',
                        role: 'change-tsx',
                        type: 'button',
                      }),
                    ),
                  r.createElement('button', {
                    title: 'Toggle source code panel',
                    className: '__dumi-default-icon'.concat(
                      Q ? ' __dumi-default-btn-expand' : '',
                    ),
                    role: 'source',
                    type: 'button',
                    onClick: function () {
                      return we(!Q);
                    },
                  }),
                ),
              ),
            ),
            Q &&
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !g &&
                  r.createElement(
                    cc,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xB7\xB7\xB7',
                      defaultActiveKey: I,
                      onChange: ie,
                    },
                    Object.keys(s.sources).map(function (fe) {
                      return r.createElement(ka, {
                        tab:
                          fe === '_'
                            ? 'index.'.concat(Dr(fe, s.sources[fe]))
                            : fe,
                        key: fe,
                      });
                    }),
                  ),
                r.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  r.createElement(lc.Z, { code: te, lang: U, showCopy: !1 }),
                ),
              ),
          );
        },
        hc = mc;
    },
    18552: function (p, S, c) {
      var r = c(10852),
        d = c(55639),
        v = r(d, 'DataView');
      p.exports = v;
    },
    1989: function (p, S, c) {
      var r = c(51789),
        d = c(80401),
        v = c(57667),
        E = c(21327),
        x = c(81866);
      function C(T) {
        var K = -1,
          R = T == null ? 0 : T.length;
        for (this.clear(); ++K < R; ) {
          var G = T[K];
          this.set(G[0], G[1]);
        }
      }
      (C.prototype.clear = r),
        (C.prototype.delete = d),
        (C.prototype.get = v),
        (C.prototype.has = E),
        (C.prototype.set = x),
        (p.exports = C);
    },
    38407: function (p, S, c) {
      var r = c(27040),
        d = c(14125),
        v = c(82117),
        E = c(67518),
        x = c(54705);
      function C(T) {
        var K = -1,
          R = T == null ? 0 : T.length;
        for (this.clear(); ++K < R; ) {
          var G = T[K];
          this.set(G[0], G[1]);
        }
      }
      (C.prototype.clear = r),
        (C.prototype.delete = d),
        (C.prototype.get = v),
        (C.prototype.has = E),
        (C.prototype.set = x),
        (p.exports = C);
    },
    57071: function (p, S, c) {
      var r = c(10852),
        d = c(55639),
        v = r(d, 'Map');
      p.exports = v;
    },
    83369: function (p, S, c) {
      var r = c(24785),
        d = c(11285),
        v = c(96e3),
        E = c(49916),
        x = c(95265);
      function C(T) {
        var K = -1,
          R = T == null ? 0 : T.length;
        for (this.clear(); ++K < R; ) {
          var G = T[K];
          this.set(G[0], G[1]);
        }
      }
      (C.prototype.clear = r),
        (C.prototype.delete = d),
        (C.prototype.get = v),
        (C.prototype.has = E),
        (C.prototype.set = x),
        (p.exports = C);
    },
    53818: function (p, S, c) {
      var r = c(10852),
        d = c(55639),
        v = r(d, 'Promise');
      p.exports = v;
    },
    58525: function (p, S, c) {
      var r = c(10852),
        d = c(55639),
        v = r(d, 'Set');
      p.exports = v;
    },
    88668: function (p, S, c) {
      var r = c(83369),
        d = c(90619),
        v = c(72385);
      function E(x) {
        var C = -1,
          T = x == null ? 0 : x.length;
        for (this.__data__ = new r(); ++C < T; ) this.add(x[C]);
      }
      (E.prototype.add = E.prototype.push = d),
        (E.prototype.has = v),
        (p.exports = E);
    },
    46384: function (p, S, c) {
      var r = c(38407),
        d = c(37465),
        v = c(63779),
        E = c(67599),
        x = c(44758),
        C = c(34309);
      function T(K) {
        var R = (this.__data__ = new r(K));
        this.size = R.size;
      }
      (T.prototype.clear = d),
        (T.prototype.delete = v),
        (T.prototype.get = E),
        (T.prototype.has = x),
        (T.prototype.set = C),
        (p.exports = T);
    },
    62705: function (p, S, c) {
      var r = c(55639),
        d = r.Symbol;
      p.exports = d;
    },
    11149: function (p, S, c) {
      var r = c(55639),
        d = r.Uint8Array;
      p.exports = d;
    },
    70577: function (p, S, c) {
      var r = c(10852),
        d = c(55639),
        v = r(d, 'WeakMap');
      p.exports = v;
    },
    34963: function (p) {
      function S(c, r) {
        for (
          var d = -1, v = c == null ? 0 : c.length, E = 0, x = [];
          ++d < v;

        ) {
          var C = c[d];
          r(C, d, c) && (x[E++] = C);
        }
        return x;
      }
      p.exports = S;
    },
    14636: function (p, S, c) {
      var r = c(22545),
        d = c(35694),
        v = c(1469),
        E = c(44144),
        x = c(65776),
        C = c(36719),
        T = Object.prototype,
        K = T.hasOwnProperty;
      function R(G, be) {
        var z = v(G),
          Oe = !z && d(G),
          P = !z && !Oe && E(G),
          $e = !z && !Oe && !P && C(G),
          X = z || Oe || P || $e,
          Te = X ? r(G.length, String) : [],
          pe = Te.length;
        for (var ce in G)
          (be || K.call(G, ce)) &&
            !(
              X &&
              (ce == 'length' ||
                (P && (ce == 'offset' || ce == 'parent')) ||
                ($e &&
                  (ce == 'buffer' ||
                    ce == 'byteLength' ||
                    ce == 'byteOffset')) ||
                x(ce, pe))
            ) &&
            Te.push(ce);
        return Te;
      }
      p.exports = R;
    },
    62488: function (p) {
      function S(c, r) {
        for (var d = -1, v = r.length, E = c.length; ++d < v; ) c[E + d] = r[d];
        return c;
      }
      p.exports = S;
    },
    82908: function (p) {
      function S(c, r) {
        for (var d = -1, v = c == null ? 0 : c.length; ++d < v; )
          if (r(c[d], d, c)) return !0;
        return !1;
      }
      p.exports = S;
    },
    18470: function (p, S, c) {
      var r = c(77813);
      function d(v, E) {
        for (var x = v.length; x--; ) if (r(v[x][0], E)) return x;
        return -1;
      }
      p.exports = d;
    },
    68866: function (p, S, c) {
      var r = c(62488),
        d = c(1469);
      function v(E, x, C) {
        var T = x(E);
        return d(E) ? T : r(T, C(E));
      }
      p.exports = v;
    },
    44239: function (p, S, c) {
      var r = c(62705),
        d = c(89607),
        v = c(2333),
        E = '[object Null]',
        x = '[object Undefined]',
        C = r ? r.toStringTag : void 0;
      function T(K) {
        return K == null
          ? K === void 0
            ? x
            : E
          : C && C in Object(K)
          ? d(K)
          : v(K);
      }
      p.exports = T;
    },
    9454: function (p, S, c) {
      var r = c(44239),
        d = c(37005),
        v = '[object Arguments]';
      function E(x) {
        return d(x) && r(x) == v;
      }
      p.exports = E;
    },
    90939: function (p, S, c) {
      var r = c(2492),
        d = c(37005);
      function v(E, x, C, T, K) {
        return E === x
          ? !0
          : E == null || x == null || (!d(E) && !d(x))
          ? E !== E && x !== x
          : r(E, x, C, T, v, K);
      }
      p.exports = v;
    },
    2492: function (p, S, c) {
      var r = c(46384),
        d = c(67114),
        v = c(18351),
        E = c(16096),
        x = c(64160),
        C = c(1469),
        T = c(44144),
        K = c(36719),
        R = 1,
        G = '[object Arguments]',
        be = '[object Array]',
        z = '[object Object]',
        Oe = Object.prototype,
        P = Oe.hasOwnProperty;
      function $e(X, Te, pe, ce, Ie, ue) {
        var He = C(X),
          Ee = C(Te),
          me = He ? be : x(X),
          Ne = Ee ? be : x(Te);
        (me = me == G ? z : me), (Ne = Ne == G ? z : Ne);
        var Ge = me == z,
          nt = Ne == z,
          de = me == Ne;
        if (de && T(X)) {
          if (!T(Te)) return !1;
          (He = !0), (Ge = !1);
        }
        if (de && !Ge)
          return (
            ue || (ue = new r()),
            He || K(X) ? d(X, Te, pe, ce, Ie, ue) : v(X, Te, me, pe, ce, Ie, ue)
          );
        if (!(pe & R)) {
          var rt = Ge && P.call(X, '__wrapped__'),
            Je = nt && P.call(Te, '__wrapped__');
          if (rt || Je) {
            var _e = rt ? X.value() : X,
              Ct = Je ? Te.value() : Te;
            return ue || (ue = new r()), Ie(_e, Ct, pe, ce, ue);
          }
        }
        return de ? (ue || (ue = new r()), E(X, Te, pe, ce, Ie, ue)) : !1;
      }
      p.exports = $e;
    },
    28458: function (p, S, c) {
      var r = c(23560),
        d = c(15346),
        v = c(13218),
        E = c(80346),
        x = /[\\^$.*+?()[\]{}|]/g,
        C = /^\[object .+?Constructor\]$/,
        T = Function.prototype,
        K = Object.prototype,
        R = T.toString,
        G = K.hasOwnProperty,
        be = RegExp(
          '^' +
            R.call(G)
              .replace(x, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        );
      function z(Oe) {
        if (!v(Oe) || d(Oe)) return !1;
        var P = r(Oe) ? be : C;
        return P.test(E(Oe));
      }
      p.exports = z;
    },
    38749: function (p, S, c) {
      var r = c(44239),
        d = c(41780),
        v = c(37005),
        E = '[object Arguments]',
        x = '[object Array]',
        C = '[object Boolean]',
        T = '[object Date]',
        K = '[object Error]',
        R = '[object Function]',
        G = '[object Map]',
        be = '[object Number]',
        z = '[object Object]',
        Oe = '[object RegExp]',
        P = '[object Set]',
        $e = '[object String]',
        X = '[object WeakMap]',
        Te = '[object ArrayBuffer]',
        pe = '[object DataView]',
        ce = '[object Float32Array]',
        Ie = '[object Float64Array]',
        ue = '[object Int8Array]',
        He = '[object Int16Array]',
        Ee = '[object Int32Array]',
        me = '[object Uint8Array]',
        Ne = '[object Uint8ClampedArray]',
        Ge = '[object Uint16Array]',
        nt = '[object Uint32Array]',
        de = {};
      (de[ce] =
        de[Ie] =
        de[ue] =
        de[He] =
        de[Ee] =
        de[me] =
        de[Ne] =
        de[Ge] =
        de[nt] =
          !0),
        (de[E] =
          de[x] =
          de[Te] =
          de[C] =
          de[pe] =
          de[T] =
          de[K] =
          de[R] =
          de[G] =
          de[be] =
          de[z] =
          de[Oe] =
          de[P] =
          de[$e] =
          de[X] =
            !1);
      function rt(Je) {
        return v(Je) && d(Je.length) && !!de[r(Je)];
      }
      p.exports = rt;
    },
    280: function (p, S, c) {
      var r = c(25726),
        d = c(86916),
        v = Object.prototype,
        E = v.hasOwnProperty;
      function x(C) {
        if (!r(C)) return d(C);
        var T = [];
        for (var K in Object(C))
          E.call(C, K) && K != 'constructor' && T.push(K);
        return T;
      }
      p.exports = x;
    },
    22545: function (p) {
      function S(c, r) {
        for (var d = -1, v = Array(c); ++d < c; ) v[d] = r(d);
        return v;
      }
      p.exports = S;
    },
    7518: function (p) {
      function S(c) {
        return function (r) {
          return c(r);
        };
      }
      p.exports = S;
    },
    74757: function (p) {
      function S(c, r) {
        return c.has(r);
      }
      p.exports = S;
    },
    14429: function (p, S, c) {
      var r = c(55639),
        d = r['__core-js_shared__'];
      p.exports = d;
    },
    67114: function (p, S, c) {
      var r = c(88668),
        d = c(82908),
        v = c(74757),
        E = 1,
        x = 2;
      function C(T, K, R, G, be, z) {
        var Oe = R & E,
          P = T.length,
          $e = K.length;
        if (P != $e && !(Oe && $e > P)) return !1;
        var X = z.get(T),
          Te = z.get(K);
        if (X && Te) return X == K && Te == T;
        var pe = -1,
          ce = !0,
          Ie = R & x ? new r() : void 0;
        for (z.set(T, K), z.set(K, T); ++pe < P; ) {
          var ue = T[pe],
            He = K[pe];
          if (G) var Ee = Oe ? G(He, ue, pe, K, T, z) : G(ue, He, pe, T, K, z);
          if (Ee !== void 0) {
            if (Ee) continue;
            ce = !1;
            break;
          }
          if (Ie) {
            if (
              !d(K, function (me, Ne) {
                if (!v(Ie, Ne) && (ue === me || be(ue, me, R, G, z)))
                  return Ie.push(Ne);
              })
            ) {
              ce = !1;
              break;
            }
          } else if (!(ue === He || be(ue, He, R, G, z))) {
            ce = !1;
            break;
          }
        }
        return z.delete(T), z.delete(K), ce;
      }
      p.exports = C;
    },
    18351: function (p, S, c) {
      var r = c(62705),
        d = c(11149),
        v = c(77813),
        E = c(67114),
        x = c(68776),
        C = c(21814),
        T = 1,
        K = 2,
        R = '[object Boolean]',
        G = '[object Date]',
        be = '[object Error]',
        z = '[object Map]',
        Oe = '[object Number]',
        P = '[object RegExp]',
        $e = '[object Set]',
        X = '[object String]',
        Te = '[object Symbol]',
        pe = '[object ArrayBuffer]',
        ce = '[object DataView]',
        Ie = r ? r.prototype : void 0,
        ue = Ie ? Ie.valueOf : void 0;
      function He(Ee, me, Ne, Ge, nt, de, rt) {
        switch (Ne) {
          case ce:
            if (
              Ee.byteLength != me.byteLength ||
              Ee.byteOffset != me.byteOffset
            )
              return !1;
            (Ee = Ee.buffer), (me = me.buffer);
          case pe:
            return !(
              Ee.byteLength != me.byteLength || !de(new d(Ee), new d(me))
            );
          case R:
          case G:
          case Oe:
            return v(+Ee, +me);
          case be:
            return Ee.name == me.name && Ee.message == me.message;
          case P:
          case X:
            return Ee == me + '';
          case z:
            var Je = x;
          case $e:
            var _e = Ge & T;
            if ((Je || (Je = C), Ee.size != me.size && !_e)) return !1;
            var Ct = rt.get(Ee);
            if (Ct) return Ct == me;
            (Ge |= K), rt.set(Ee, me);
            var tr = E(Je(Ee), Je(me), Ge, nt, de, rt);
            return rt.delete(Ee), tr;
          case Te:
            if (ue) return ue.call(Ee) == ue.call(me);
        }
        return !1;
      }
      p.exports = He;
    },
    16096: function (p, S, c) {
      var r = c(58234),
        d = 1,
        v = Object.prototype,
        E = v.hasOwnProperty;
      function x(C, T, K, R, G, be) {
        var z = K & d,
          Oe = r(C),
          P = Oe.length,
          $e = r(T),
          X = $e.length;
        if (P != X && !z) return !1;
        for (var Te = P; Te--; ) {
          var pe = Oe[Te];
          if (!(z ? pe in T : E.call(T, pe))) return !1;
        }
        var ce = be.get(C),
          Ie = be.get(T);
        if (ce && Ie) return ce == T && Ie == C;
        var ue = !0;
        be.set(C, T), be.set(T, C);
        for (var He = z; ++Te < P; ) {
          pe = Oe[Te];
          var Ee = C[pe],
            me = T[pe];
          if (R) var Ne = z ? R(me, Ee, pe, T, C, be) : R(Ee, me, pe, C, T, be);
          if (!(Ne === void 0 ? Ee === me || G(Ee, me, K, R, be) : Ne)) {
            ue = !1;
            break;
          }
          He || (He = pe == 'constructor');
        }
        if (ue && !He) {
          var Ge = C.constructor,
            nt = T.constructor;
          Ge != nt &&
            'constructor' in C &&
            'constructor' in T &&
            !(
              typeof Ge == 'function' &&
              Ge instanceof Ge &&
              typeof nt == 'function' &&
              nt instanceof nt
            ) &&
            (ue = !1);
        }
        return be.delete(C), be.delete(T), ue;
      }
      p.exports = x;
    },
    31957: function (p, S, c) {
      var r = typeof c.g == 'object' && c.g && c.g.Object === Object && c.g;
      p.exports = r;
    },
    58234: function (p, S, c) {
      var r = c(68866),
        d = c(99551),
        v = c(3674);
      function E(x) {
        return r(x, v, d);
      }
      p.exports = E;
    },
    45050: function (p, S, c) {
      var r = c(37019);
      function d(v, E) {
        var x = v.__data__;
        return r(E) ? x[typeof E == 'string' ? 'string' : 'hash'] : x.map;
      }
      p.exports = d;
    },
    10852: function (p, S, c) {
      var r = c(28458),
        d = c(47801);
      function v(E, x) {
        var C = d(E, x);
        return r(C) ? C : void 0;
      }
      p.exports = v;
    },
    89607: function (p, S, c) {
      var r = c(62705),
        d = Object.prototype,
        v = d.hasOwnProperty,
        E = d.toString,
        x = r ? r.toStringTag : void 0;
      function C(T) {
        var K = v.call(T, x),
          R = T[x];
        try {
          T[x] = void 0;
          var G = !0;
        } catch (z) {}
        var be = E.call(T);
        return G && (K ? (T[x] = R) : delete T[x]), be;
      }
      p.exports = C;
    },
    99551: function (p, S, c) {
      var r = c(34963),
        d = c(70479),
        v = Object.prototype,
        E = v.propertyIsEnumerable,
        x = Object.getOwnPropertySymbols,
        C = x
          ? function (T) {
              return T == null
                ? []
                : ((T = Object(T)),
                  r(x(T), function (K) {
                    return E.call(T, K);
                  }));
            }
          : d;
      p.exports = C;
    },
    64160: function (p, S, c) {
      var r = c(18552),
        d = c(57071),
        v = c(53818),
        E = c(58525),
        x = c(70577),
        C = c(44239),
        T = c(80346),
        K = '[object Map]',
        R = '[object Object]',
        G = '[object Promise]',
        be = '[object Set]',
        z = '[object WeakMap]',
        Oe = '[object DataView]',
        P = T(r),
        $e = T(d),
        X = T(v),
        Te = T(E),
        pe = T(x),
        ce = C;
      ((r && ce(new r(new ArrayBuffer(1))) != Oe) ||
        (d && ce(new d()) != K) ||
        (v && ce(v.resolve()) != G) ||
        (E && ce(new E()) != be) ||
        (x && ce(new x()) != z)) &&
        (ce = function (Ie) {
          var ue = C(Ie),
            He = ue == R ? Ie.constructor : void 0,
            Ee = He ? T(He) : '';
          if (Ee)
            switch (Ee) {
              case P:
                return Oe;
              case $e:
                return K;
              case X:
                return G;
              case Te:
                return be;
              case pe:
                return z;
            }
          return ue;
        }),
        (p.exports = ce);
    },
    47801: function (p) {
      function S(c, r) {
        return c == null ? void 0 : c[r];
      }
      p.exports = S;
    },
    51789: function (p, S, c) {
      var r = c(94536);
      function d() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      p.exports = d;
    },
    80401: function (p) {
      function S(c) {
        var r = this.has(c) && delete this.__data__[c];
        return (this.size -= r ? 1 : 0), r;
      }
      p.exports = S;
    },
    57667: function (p, S, c) {
      var r = c(94536),
        d = '__lodash_hash_undefined__',
        v = Object.prototype,
        E = v.hasOwnProperty;
      function x(C) {
        var T = this.__data__;
        if (r) {
          var K = T[C];
          return K === d ? void 0 : K;
        }
        return E.call(T, C) ? T[C] : void 0;
      }
      p.exports = x;
    },
    21327: function (p, S, c) {
      var r = c(94536),
        d = Object.prototype,
        v = d.hasOwnProperty;
      function E(x) {
        var C = this.__data__;
        return r ? C[x] !== void 0 : v.call(C, x);
      }
      p.exports = E;
    },
    81866: function (p, S, c) {
      var r = c(94536),
        d = '__lodash_hash_undefined__';
      function v(E, x) {
        var C = this.__data__;
        return (
          (this.size += this.has(E) ? 0 : 1),
          (C[E] = r && x === void 0 ? d : x),
          this
        );
      }
      p.exports = v;
    },
    65776: function (p) {
      var S = 9007199254740991,
        c = /^(?:0|[1-9]\d*)$/;
      function r(d, v) {
        var E = typeof d;
        return (
          (v = v == null ? S : v),
          !!v &&
            (E == 'number' || (E != 'symbol' && c.test(d))) &&
            d > -1 &&
            d % 1 == 0 &&
            d < v
        );
      }
      p.exports = r;
    },
    37019: function (p) {
      function S(c) {
        var r = typeof c;
        return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
          ? c !== '__proto__'
          : c === null;
      }
      p.exports = S;
    },
    15346: function (p, S, c) {
      var r = c(14429),
        d = (function () {
          var E = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
          return E ? 'Symbol(src)_1.' + E : '';
        })();
      function v(E) {
        return !!d && d in E;
      }
      p.exports = v;
    },
    25726: function (p) {
      var S = Object.prototype;
      function c(r) {
        var d = r && r.constructor,
          v = (typeof d == 'function' && d.prototype) || S;
        return r === v;
      }
      p.exports = c;
    },
    27040: function (p) {
      function S() {
        (this.__data__ = []), (this.size = 0);
      }
      p.exports = S;
    },
    14125: function (p, S, c) {
      var r = c(18470),
        d = Array.prototype,
        v = d.splice;
      function E(x) {
        var C = this.__data__,
          T = r(C, x);
        if (T < 0) return !1;
        var K = C.length - 1;
        return T == K ? C.pop() : v.call(C, T, 1), --this.size, !0;
      }
      p.exports = E;
    },
    82117: function (p, S, c) {
      var r = c(18470);
      function d(v) {
        var E = this.__data__,
          x = r(E, v);
        return x < 0 ? void 0 : E[x][1];
      }
      p.exports = d;
    },
    67518: function (p, S, c) {
      var r = c(18470);
      function d(v) {
        return r(this.__data__, v) > -1;
      }
      p.exports = d;
    },
    54705: function (p, S, c) {
      var r = c(18470);
      function d(v, E) {
        var x = this.__data__,
          C = r(x, v);
        return C < 0 ? (++this.size, x.push([v, E])) : (x[C][1] = E), this;
      }
      p.exports = d;
    },
    24785: function (p, S, c) {
      var r = c(1989),
        d = c(38407),
        v = c(57071);
      function E() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (v || d)(),
            string: new r(),
          });
      }
      p.exports = E;
    },
    11285: function (p, S, c) {
      var r = c(45050);
      function d(v) {
        var E = r(this, v).delete(v);
        return (this.size -= E ? 1 : 0), E;
      }
      p.exports = d;
    },
    96e3: function (p, S, c) {
      var r = c(45050);
      function d(v) {
        return r(this, v).get(v);
      }
      p.exports = d;
    },
    49916: function (p, S, c) {
      var r = c(45050);
      function d(v) {
        return r(this, v).has(v);
      }
      p.exports = d;
    },
    95265: function (p, S, c) {
      var r = c(45050);
      function d(v, E) {
        var x = r(this, v),
          C = x.size;
        return x.set(v, E), (this.size += x.size == C ? 0 : 1), this;
      }
      p.exports = d;
    },
    68776: function (p) {
      function S(c) {
        var r = -1,
          d = Array(c.size);
        return (
          c.forEach(function (v, E) {
            d[++r] = [E, v];
          }),
          d
        );
      }
      p.exports = S;
    },
    94536: function (p, S, c) {
      var r = c(10852),
        d = r(Object, 'create');
      p.exports = d;
    },
    86916: function (p, S, c) {
      var r = c(5569),
        d = r(Object.keys, Object);
      p.exports = d;
    },
    31167: function (p, S, c) {
      p = c.nmd(p);
      var r = c(31957),
        d = S && !S.nodeType && S,
        v = d && !0 && p && !p.nodeType && p,
        E = v && v.exports === d,
        x = E && r.process,
        C = (function () {
          try {
            var T = v && v.require && v.require('util').types;
            return T || (x && x.binding && x.binding('util'));
          } catch (K) {}
        })();
      p.exports = C;
    },
    2333: function (p) {
      var S = Object.prototype,
        c = S.toString;
      function r(d) {
        return c.call(d);
      }
      p.exports = r;
    },
    5569: function (p) {
      function S(c, r) {
        return function (d) {
          return c(r(d));
        };
      }
      p.exports = S;
    },
    55639: function (p, S, c) {
      var r = c(31957),
        d = typeof self == 'object' && self && self.Object === Object && self,
        v = r || d || Function('return this')();
      p.exports = v;
    },
    90619: function (p) {
      var S = '__lodash_hash_undefined__';
      function c(r) {
        return this.__data__.set(r, S), this;
      }
      p.exports = c;
    },
    72385: function (p) {
      function S(c) {
        return this.__data__.has(c);
      }
      p.exports = S;
    },
    21814: function (p) {
      function S(c) {
        var r = -1,
          d = Array(c.size);
        return (
          c.forEach(function (v) {
            d[++r] = v;
          }),
          d
        );
      }
      p.exports = S;
    },
    37465: function (p, S, c) {
      var r = c(38407);
      function d() {
        (this.__data__ = new r()), (this.size = 0);
      }
      p.exports = d;
    },
    63779: function (p) {
      function S(c) {
        var r = this.__data__,
          d = r.delete(c);
        return (this.size = r.size), d;
      }
      p.exports = S;
    },
    67599: function (p) {
      function S(c) {
        return this.__data__.get(c);
      }
      p.exports = S;
    },
    44758: function (p) {
      function S(c) {
        return this.__data__.has(c);
      }
      p.exports = S;
    },
    34309: function (p, S, c) {
      var r = c(38407),
        d = c(57071),
        v = c(83369),
        E = 200;
      function x(C, T) {
        var K = this.__data__;
        if (K instanceof r) {
          var R = K.__data__;
          if (!d || R.length < E - 1)
            return R.push([C, T]), (this.size = ++K.size), this;
          K = this.__data__ = new v(R);
        }
        return K.set(C, T), (this.size = K.size), this;
      }
      p.exports = x;
    },
    80346: function (p) {
      var S = Function.prototype,
        c = S.toString;
      function r(d) {
        if (d != null) {
          try {
            return c.call(d);
          } catch (v) {}
          try {
            return d + '';
          } catch (v) {}
        }
        return '';
      }
      p.exports = r;
    },
    77813: function (p) {
      function S(c, r) {
        return c === r || (c !== c && r !== r);
      }
      p.exports = S;
    },
    35694: function (p, S, c) {
      var r = c(9454),
        d = c(37005),
        v = Object.prototype,
        E = v.hasOwnProperty,
        x = v.propertyIsEnumerable,
        C = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (T) {
              return d(T) && E.call(T, 'callee') && !x.call(T, 'callee');
            };
      p.exports = C;
    },
    1469: function (p) {
      var S = Array.isArray;
      p.exports = S;
    },
    98612: function (p, S, c) {
      var r = c(23560),
        d = c(41780);
      function v(E) {
        return E != null && d(E.length) && !r(E);
      }
      p.exports = v;
    },
    44144: function (p, S, c) {
      p = c.nmd(p);
      var r = c(55639),
        d = c(95062),
        v = S && !S.nodeType && S,
        E = v && !0 && p && !p.nodeType && p,
        x = E && E.exports === v,
        C = x ? r.Buffer : void 0,
        T = C ? C.isBuffer : void 0,
        K = T || d;
      p.exports = K;
    },
    18446: function (p, S, c) {
      var r = c(90939);
      function d(v, E) {
        return r(v, E);
      }
      p.exports = d;
    },
    23560: function (p, S, c) {
      var r = c(44239),
        d = c(13218),
        v = '[object AsyncFunction]',
        E = '[object Function]',
        x = '[object GeneratorFunction]',
        C = '[object Proxy]';
      function T(K) {
        if (!d(K)) return !1;
        var R = r(K);
        return R == E || R == x || R == v || R == C;
      }
      p.exports = T;
    },
    41780: function (p) {
      var S = 9007199254740991;
      function c(r) {
        return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= S;
      }
      p.exports = c;
    },
    13218: function (p) {
      function S(c) {
        var r = typeof c;
        return c != null && (r == 'object' || r == 'function');
      }
      p.exports = S;
    },
    37005: function (p) {
      function S(c) {
        return c != null && typeof c == 'object';
      }
      p.exports = S;
    },
    36719: function (p, S, c) {
      var r = c(38749),
        d = c(7518),
        v = c(31167),
        E = v && v.isTypedArray,
        x = E ? d(E) : r;
      p.exports = x;
    },
    3674: function (p, S, c) {
      var r = c(14636),
        d = c(280),
        v = c(98612);
      function E(x) {
        return v(x) ? r(x) : d(x);
      }
      p.exports = E;
    },
    70479: function (p) {
      function S() {
        return [];
      }
      p.exports = S;
    },
    95062: function (p) {
      function S() {
        return !1;
      }
      p.exports = S;
    },
    96774: function (p) {
      p.exports = function (c, r, d, v) {
        var E = d ? d.call(v, c, r) : void 0;
        if (E !== void 0) return !!E;
        if (c === r) return !0;
        if (typeof c != 'object' || !c || typeof r != 'object' || !r) return !1;
        var x = Object.keys(c),
          C = Object.keys(r);
        if (x.length !== C.length) return !1;
        for (
          var T = Object.prototype.hasOwnProperty.bind(r), K = 0;
          K < x.length;
          K++
        ) {
          var R = x[K];
          if (!T(R)) return !1;
          var G = c[R],
            be = r[R];
          if (
            ((E = d ? d.call(v, G, be, R) : void 0),
            E === !1 || (E === void 0 && G !== be))
          )
            return !1;
        }
        return !0;
      };
    },
  },
]);
