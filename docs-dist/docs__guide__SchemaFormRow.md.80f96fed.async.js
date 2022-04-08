(self.webpackChunk_test_schema_form =
  self.webpackChunk_test_schema_form || []).push([
  [53],
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
    65788: function (s, r, t) {
      'use strict';
      t.r(r);
      var e = t(67294),
        n = t(16924),
        o = t(44663),
        d = t(25016),
        E = e.memo((a) => {
          var l = a.demos,
            m = l['element-schemademorow'].component;
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
                  { id: 'row' },
                  e.createElement(
                    n.AnchorLink,
                    { to: '#row', 'aria-hidden': 'true', tabIndex: -1 },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Row',
                ),
                e.createElement(
                  'h2',
                  { id: 'row-\u5E03\u5C40' },
                  e.createElement(
                    n.AnchorLink,
                    {
                      to: '#row-\u5E03\u5C40',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Row \u5E03\u5C40',
                ),
              ),
              e.createElement(
                d.default,
                l['element-schemademorow'].previewerProps,
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
      r.default = (a) => {
        var l = e.useContext(n.context),
          m = l.demos;
        return (
          e.useEffect(() => {
            var i;
            a != null &&
              (i = a.location) !== null &&
              i !== void 0 &&
              i.hash &&
              n.AnchorLink.scrollToAnchor(
                decodeURIComponent(a.location.hash.slice(1)),
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
          a = d.export,
          l = (0, n.useApiData)(E),
          m = (0, e.useContext)(n.context),
          i = m.locale,
          u = /^zh|cn$/i.test(i) ? o['zh-CN'] : o['en-US'];
        return e.createElement(
          e.Fragment,
          null,
          l &&
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
                l[a].map(function (c) {
                  return e.createElement(
                    'tr',
                    { key: c.identifier },
                    e.createElement('td', null, c.identifier),
                    e.createElement('td', null, c.description || '--'),
                    e.createElement(
                      'td',
                      null,
                      e.createElement('code', null, c.type),
                    ),
                    e.createElement(
                      'td',
                      null,
                      e.createElement(
                        'code',
                        null,
                        c.default || (c.required && u.required) || '--',
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
