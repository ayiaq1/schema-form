(self.webpackChunk_test_element_form =
  self.webpackChunk_test_element_form || []).push([
  [746],
  {
    73602: function (s, r, t) {
      'use strict';
      t.d(r, {
        m: function () {
          return e.m;
        },
      });
      var e = t(67624),
        n = t(93142);
    },
    68989: function (s, r, t) {
      'use strict';
      t.r(r);
      var e = t(67294),
        n = t(16924),
        d = t(44663),
        o = t(25016),
        E = e.memo((l) => {
          var a = l.demos,
            i = a['element-elementdemo'].component;
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(
                'div',
                { className: 'markdown' },
                e.createElement(
                  'h1',
                  { id: 'element' },
                  e.createElement(
                    n.AnchorLink,
                    { to: '#element', 'aria-hidden': 'true', tabIndex: -1 },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Element',
                ),
              ),
              e.createElement(
                o.default,
                a['element-elementdemo'].previewerProps,
                e.createElement(i, null),
              ),
              e.createElement(
                'div',
                { className: 'markdown' },
                e.createElement(
                  'h2',
                  { id: 'api' },
                  e.createElement(
                    n.AnchorLink,
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'API',
                ),
                e.createElement(d.Z, {
                  src: '../../packages/element/src/index.tsx',
                  identifier: 'element',
                  export: 'default',
                }),
              ),
            ),
          );
        });
      r.default = (l) => {
        var a = e.useContext(n.context),
          i = a.demos;
        return (
          e.useEffect(() => {
            var c;
            l != null &&
              (c = l.location) !== null &&
              c !== void 0 &&
              c.hash &&
              n.AnchorLink.scrollToAnchor(
                decodeURIComponent(l.location.hash.slice(1)),
              );
          }, []),
          e.createElement(E, { demos: i })
        );
      };
    },
    44663: function (s, r, t) {
      'use strict';
      var e = t(67294),
        n = t(16924),
        d = {
          'zh-CN': {
            name: '\u5C5E\u6027\u540D',
            description: '\u63CF\u8FF0',
            type: '\u7C7B\u578B',
            default: '\u9ED8\u8BA4\u503C',
            required: '(\u5FC5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      r.Z = function (o) {
        var E = o.identifier,
          l = o.export,
          a = (0, n.useApiData)(E),
          i = (0, e.useContext)(n.context),
          c = i.locale,
          u = /^zh|cn$/i.test(c) ? d['zh-CN'] : d['en-US'];
        return e.createElement(
          e.Fragment,
          null,
          a &&
            e.createElement(
              'table',
              { style: { marginTop: 24 } },
              e.createElement(
                'thead',
                null,
                e.createElement(
                  'tr',
                  null,
                  e.createElement('th', null, u.name),
                  e.createElement('th', null, u.description),
                  e.createElement('th', null, u.type),
                  e.createElement('th', null, u.default),
                ),
              ),
              e.createElement(
                'tbody',
                null,
                a[l].map(function (m) {
                  return e.createElement(
                    'tr',
                    { key: m.identifier },
                    e.createElement('td', null, m.identifier),
                    e.createElement('td', null, m.description || '--'),
                    e.createElement(
                      'td',
                      null,
                      e.createElement('code', null, m.type),
                    ),
                    e.createElement(
                      'td',
                      null,
                      e.createElement(
                        'code',
                        null,
                        m.default || (m.required && u.required) || '--',
                      ),
                    ),
                  );
                }),
              ),
            ),
        );
      };
    },
  },
]);
