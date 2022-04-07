(self.webpackChunk_test_element_form =
  self.webpackChunk_test_element_form || []).push([
  [892],
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
    4179: function (s, r, t) {
      'use strict';
      t.r(r);
      var e = t(67294),
        n = t(16924),
        o = t(44663),
        d = t(25016),
        E = e.memo((l) => {
          var a = l.demos,
            m = a['element-schemademocustom'].component;
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
                  { id: 'custom' },
                  e.createElement(
                    n.AnchorLink,
                    { to: '#custom', 'aria-hidden': 'true', tabIndex: -1 },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Custom',
                ),
                e.createElement(
                  'h2',
                  { id: '\u81EA\u5B9A\u4E49\u5E03\u5C40-custom' },
                  e.createElement(
                    n.AnchorLink,
                    {
                      to: '#\u81EA\u5B9A\u4E49\u5E03\u5C40-custom',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u81EA\u5B9A\u4E49\u5E03\u5C40: custom',
                ),
              ),
              e.createElement(
                d.default,
                a['element-schemademocustom'].previewerProps,
                e.createElement(m, null),
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
                e.createElement(o.Z, {
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
          m = a.demos;
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
          e.createElement(E, { demos: m })
        );
      };
    },
    44663: function (s, r, t) {
      'use strict';
      var e = t(67294),
        n = t(16924),
        o = {
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
      r.Z = function (d) {
        var E = d.identifier,
          l = d.export,
          a = (0, n.useApiData)(E),
          m = (0, e.useContext)(n.context),
          c = m.locale,
          i = /^zh|cn$/i.test(c) ? o['zh-CN'] : o['en-US'];
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
                  e.createElement('th', null, i.name),
                  e.createElement('th', null, i.description),
                  e.createElement('th', null, i.type),
                  e.createElement('th', null, i.default),
                ),
              ),
              e.createElement(
                'tbody',
                null,
                a[l].map(function (u) {
                  return e.createElement(
                    'tr',
                    { key: u.identifier },
                    e.createElement('td', null, u.identifier),
                    e.createElement('td', null, u.description || '--'),
                    e.createElement(
                      'td',
                      null,
                      e.createElement('code', null, u.type),
                    ),
                    e.createElement(
                      'td',
                      null,
                      e.createElement(
                        'code',
                        null,
                        u.default || (u.required && i.required) || '--',
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
