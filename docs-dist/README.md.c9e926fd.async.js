(self.webpackChunk_test_schema_form =
  self.webpackChunk_test_schema_form || []).push([
  [15],
  {
    99076: function (u, m, n) {
      'use strict';
      n.r(m);
      var e = n(67294),
        a = n(16924),
        l = n(11695),
        s = e.memo((t) => {
          var c = t.demos;
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h1',
                { id: 'schema-form' },
                e.createElement(
                  a.AnchorLink,
                  { to: '#schema-form', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'schema-form',
              ),
              e.createElement(l.Z, {
                code: '\u7ED9\u5F00\u53D1\u8005\u7528\u7684schema form\uFF08\u57FA\u4E8Eantd-react\uFF09',
                lang: 'unknown',
              }),
              e.createElement(
                'p',
                null,
                e.createElement(
                  a.Link,
                  { to: 'https://ayiaq1.github.io/schema-form/' },
                  '\u5728\u7EBF demo',
                ),
              ),
            ),
          );
        });
      m.default = (t) => {
        var c = e.useContext(a.context),
          r = c.demos;
        return (
          e.useEffect(() => {
            var o;
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              a.AnchorLink.scrollToAnchor(
                decodeURIComponent(t.location.hash.slice(1)),
              );
          }, []),
          e.createElement(s, { demos: r })
        );
      };
    },
  },
]);