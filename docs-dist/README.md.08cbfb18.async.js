(self.webpackChunk_test_element_form =
  self.webpackChunk_test_element_form || []).push([
  [15],
  {
    99076: function (d, m, n) {
      'use strict';
      n.r(m);
      var e = n(67294),
        o = n(16924),
        c = n(11695),
        r = e.memo((t) => {
          var l = t.demos;
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h1',
                { id: 'element-form' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#element-form', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'element-form',
              ),
              e.createElement(c.Z, {
                code: '\u7ED9\u5F00\u53D1\u8005\u7528\u7684schema form\uFF08\u57FA\u4E8Eantd-react\uFF09',
                lang: 'unknown',
              }),
            ),
          );
        });
      m.default = (t) => {
        var l = e.useContext(o.context),
          s = l.demos;
        return (
          e.useEffect(() => {
            var a;
            t != null &&
              (a = t.location) !== null &&
              a !== void 0 &&
              a.hash &&
              o.AnchorLink.scrollToAnchor(
                decodeURIComponent(t.location.hash.slice(1)),
              );
          }, []),
          e.createElement(r, { demos: s })
        );
      };
    },
  },
]);
