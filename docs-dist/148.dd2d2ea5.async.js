(self.webpackChunk_test_element_form =
  self.webpackChunk_test_element_form || []).push([
  [148],
  {
    99675: function () {},
    11695: function (me, J, M) {
      'use strict';
      M.d(J, {
        Z: function () {
          return he;
        },
      });
      var C = M(67294);
      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */ var H = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            t = {},
            r = {
              util: {
                encode: function n(a) {
                  return a instanceof f
                    ? new f(a.type, n(a.content), a.alias)
                    : Array.isArray(a)
                    ? a.map(n)
                    : a
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (n) {
                  return Object.prototype.toString.call(n).slice(8, -1);
                },
                objId: function (n) {
                  return (
                    n.__id || Object.defineProperty(n, '__id', { value: ++i }),
                    n.__id
                  );
                },
                clone: function n(a, s) {
                  s = s || {};
                  var u, o;
                  switch (r.util.type(a)) {
                    case 'Object':
                      if (((o = r.util.objId(a)), s[o])) return s[o];
                      (u = {}), (s[o] = u);
                      for (var h in a)
                        a.hasOwnProperty(h) && (u[h] = n(a[h], s));
                      return u;
                    case 'Array':
                      return (
                        (o = r.util.objId(a)),
                        s[o]
                          ? s[o]
                          : ((u = []),
                            (s[o] = u),
                            a.forEach(function (y, m) {
                              u[m] = n(y, s);
                            }),
                            u)
                      );
                    default:
                      return a;
                  }
                },
                getLanguage: function (n) {
                  for (; n; ) {
                    var a = e.exec(n.className);
                    if (a) return a[1].toLowerCase();
                    n = n.parentElement;
                  }
                  return 'none';
                },
                setLanguage: function (n, a) {
                  (n.className = n.className.replace(RegExp(e, 'gi'), '')),
                    n.classList.add('language-' + a);
                },
                isActive: function (n, a, s) {
                  for (var u = 'no-' + a; n; ) {
                    var o = n.classList;
                    if (o.contains(a)) return !0;
                    if (o.contains(u)) return !1;
                    n = n.parentElement;
                  }
                  return !!s;
                },
              },
              languages: {
                plain: t,
                plaintext: t,
                text: t,
                txt: t,
                extend: function (n, a) {
                  var s = r.util.clone(r.languages[n]);
                  for (var u in a) s[u] = a[u];
                  return s;
                },
                insertBefore: function (n, a, s, u) {
                  u = u || r.languages;
                  var o = u[n],
                    h = {};
                  for (var y in o)
                    if (o.hasOwnProperty(y)) {
                      if (y == a)
                        for (var m in s) s.hasOwnProperty(m) && (h[m] = s[m]);
                      s.hasOwnProperty(y) || (h[y] = o[y]);
                    }
                  var S = u[n];
                  return (
                    (u[n] = h),
                    r.languages.DFS(r.languages, function (E, O) {
                      O === S && E != n && (this[E] = h);
                    }),
                    h
                  );
                },
                DFS: function n(a, s, u, o) {
                  o = o || {};
                  var h = r.util.objId;
                  for (var y in a)
                    if (a.hasOwnProperty(y)) {
                      s.call(a, y, a[y], u || y);
                      var m = a[y],
                        S = r.util.type(m);
                      S === 'Object' && !o[h(m)]
                        ? ((o[h(m)] = !0), n(m, s, null, o))
                        : S === 'Array' &&
                          !o[h(m)] &&
                          ((o[h(m)] = !0), n(m, s, y, o));
                    }
                },
              },
              plugins: {},
              highlight: function (n, a, s) {
                var u = { code: n, grammar: a, language: s };
                return (
                  r.hooks.run('before-tokenize', u),
                  (u.tokens = r.tokenize(u.code, u.grammar)),
                  r.hooks.run('after-tokenize', u),
                  f.stringify(r.util.encode(u.tokens), u.language)
                );
              },
              tokenize: function (n, a) {
                var s = a.rest;
                if (s) {
                  for (var u in s) a[u] = s[u];
                  delete a.rest;
                }
                var o = new v();
                return p(o, o.head, n), c(n, o, a, o.head, 0), b(o);
              },
              hooks: {
                all: {},
                add: function (n, a) {
                  var s = r.hooks.all;
                  (s[n] = s[n] || []), s[n].push(a);
                },
                run: function (n, a) {
                  var s = r.hooks.all[n];
                  if (!(!s || !s.length))
                    for (var u = 0, o; (o = s[u++]); ) o(a);
                },
              },
              Token: f,
            };
          function f(n, a, s, u) {
            (this.type = n),
              (this.content = a),
              (this.alias = s),
              (this.length = (u || '').length | 0);
          }
          f.stringify = function n(a, s) {
            if (typeof a == 'string') return a;
            if (Array.isArray(a)) {
              var u = '';
              return (
                a.forEach(function (S) {
                  u += n(S, s);
                }),
                u
              );
            }
            var o = {
                type: a.type,
                content: n(a.content, s),
                tag: 'span',
                classes: ['token', a.type],
                attributes: {},
                language: s,
              },
              h = a.alias;
            h &&
              (Array.isArray(h)
                ? Array.prototype.push.apply(o.classes, h)
                : o.classes.push(h)),
              r.hooks.run('wrap', o);
            var y = '';
            for (var m in o.attributes)
              y +=
                ' ' +
                m +
                '="' +
                (o.attributes[m] || '').replace(/"/g, '&quot;') +
                '"';
            return (
              '<' +
              o.tag +
              ' class="' +
              o.classes.join(' ') +
              '"' +
              y +
              '>' +
              o.content +
              '</' +
              o.tag +
              '>'
            );
          };
          function g(n, a, s, u) {
            n.lastIndex = a;
            var o = n.exec(s);
            if (o && u && o[1]) {
              var h = o[1].length;
              (o.index += h), (o[0] = o[0].slice(h));
            }
            return o;
          }
          function c(n, a, s, u, o, h) {
            for (var y in s)
              if (!(!s.hasOwnProperty(y) || !s[y])) {
                var m = s[y];
                m = Array.isArray(m) ? m : [m];
                for (var S = 0; S < m.length; ++S) {
                  if (h && h.cause == y + ',' + S) return;
                  var E = m[S],
                    O = E.inside,
                    R = !!E.lookbehind,
                    A = !!E.greedy,
                    I = E.alias;
                  if (A && !E.pattern.global) {
                    var k = E.pattern.toString().match(/[imsuy]*$/)[0];
                    E.pattern = RegExp(E.pattern.source, k + 'g');
                  }
                  for (
                    var B = E.pattern || E, w = u.next, _ = o;
                    w !== a.tail && !(h && _ >= h.reach);
                    _ += w.value.length, w = w.next
                  ) {
                    var F = w.value;
                    if (a.length > n.length) return;
                    if (!(F instanceof f)) {
                      var $ = 1,
                        T;
                      if (A) {
                        if (((T = g(B, _, n, R)), !T || T.index >= n.length))
                          break;
                        var U = T.index,
                          L = T.index + T[0].length,
                          x = _;
                        for (x += w.value.length; U >= x; )
                          (w = w.next), (x += w.value.length);
                        if (
                          ((x -= w.value.length), (_ = x), w.value instanceof f)
                        )
                          continue;
                        for (
                          var N = w;
                          N !== a.tail && (x < L || typeof N.value == 'string');
                          N = N.next
                        )
                          $++, (x += N.value.length);
                        $--, (F = n.slice(_, x)), (T.index -= _);
                      } else if (((T = g(B, 0, F, R)), !T)) continue;
                      var U = T.index,
                        z = T[0],
                        q = F.slice(0, U),
                        Q = F.slice(U + z.length),
                        Y = _ + F.length;
                      h && Y > h.reach && (h.reach = Y);
                      var j = w.prev;
                      q && ((j = p(a, j, q)), (_ += q.length)), d(a, j, $);
                      var ye = new f(y, O ? r.tokenize(z, O) : z, I, z);
                      if (((w = p(a, j, ye)), Q && p(a, w, Q), $ > 1)) {
                        var W = { cause: y + ',' + S, reach: Y };
                        c(n, a, s, w.prev, _, W),
                          h && W.reach > h.reach && (h.reach = W.reach);
                      }
                    }
                  }
                }
              }
          }
          function v() {
            var n = { value: null, prev: null, next: null },
              a = { value: null, prev: n, next: null };
            (n.next = a), (this.head = n), (this.tail = a), (this.length = 0);
          }
          function p(n, a, s) {
            var u = a.next,
              o = { value: s, prev: a, next: u };
            return (a.next = o), (u.prev = o), n.length++, o;
          }
          function d(n, a, s) {
            for (var u = a.next, o = 0; o < s && u !== n.tail; o++) u = u.next;
            (a.next = u), (u.prev = a), (n.length -= o);
          }
          function b(n) {
            for (var a = [], s = n.head.next; s !== n.tail; )
              a.push(s.value), (s = s.next);
            return a;
          }
          return r;
        })(),
        l = H;
      (H.default = H),
        (l.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (l.languages.markup.tag.inside['attr-value'].inside.entity =
          l.languages.markup.entity),
        (l.languages.markup.doctype.inside['internal-subset'].inside =
          l.languages.markup),
        l.hooks.add('wrap', function (e) {
          e.type === 'entity' &&
            (e.attributes.title = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(l.languages.markup.tag, 'addInlined', {
          value: function (i, t) {
            var r = {};
            (r['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: l.languages[t],
            }),
              (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var f = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: r,
              },
            };
            f['language-' + t] = { pattern: /[\s\S]+/, inside: l.languages[t] };
            var g = {};
            (g[i] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return i;
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: f,
            }),
              l.languages.insertBefore('markup', 'cdata', g);
          },
        }),
        Object.defineProperty(l.languages.markup.tag, 'addAttribute', {
          value: function (e, i) {
            l.languages.markup.tag.inside['special-attr'].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  '(?:' +
                  e +
                  ')' +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i',
              ),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [i, 'language-' + i],
                      inside: l.languages[i],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: 'attr-equals' },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (l.languages.html = l.languages.markup),
        (l.languages.mathml = l.languages.markup),
        (l.languages.svg = l.languages.markup),
        (l.languages.xml = l.languages.extend('markup', {})),
        (l.languages.ssml = l.languages.xml),
        (l.languages.atom = l.languages.xml),
        (l.languages.rss = l.languages.xml),
        (function (e) {
          var i =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            t = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            r = {
              bash: t,
              environment: { pattern: RegExp('\\$' + i), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + i),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + i),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: t },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: r.entity },
              },
            ],
            environment: { pattern: RegExp('\\$?' + i), alias: 'constant' },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (t.inside = e.languages.bash);
          for (
            var f = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              g = r.variable[1].inside,
              c = 0;
            c < f.length;
            c++
          )
            g[f[c]] = e.languages.bash[f[c]];
          e.languages.shell = e.languages.bash;
        })(l),
        (l.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (l.languages.c = l.languages.extend('clike', {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        l.languages.insertBefore('c', 'string', {
          char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0,
          },
        }),
        l.languages.insertBefore('c', 'string', {
          macro: {
            pattern:
              /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                l.languages.c.string,
              ],
              char: l.languages.c.char,
              comment: l.languages.c.comment,
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: 'function',
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: 'keyword',
              },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: l.languages.c },
            },
          },
        }),
        l.languages.insertBefore('c', 'function', {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete l.languages.c.boolean,
        (function (e) {
          var i =
              /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
              /<keyword>/g,
              function () {
                return i.source;
              },
            );
          (e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return i.source;
                    },
                  ),
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: i,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              module: {
                pattern: RegExp(
                  /(\b(?:import|module)\s+)/.source +
                    '(?:' +
                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                    '|' +
                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                      /<mod-name>/g,
                      function () {
                        return t;
                      },
                    ) +
                    ')',
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  string: /^[<"][\s\S]+/,
                  operator: /:/,
                  punctuation: /\./,
                },
              },
              'raw-string': {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: 'string',
                greedy: !0,
              },
            }),
            e.languages.insertBefore('cpp', 'keyword', {
              'generic-function': {
                pattern:
                  /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                  function: /^\w+/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: e.languages.cpp,
                  },
                },
              },
            }),
            e.languages.insertBefore('cpp', 'operator', {
              'double-colon': { pattern: /::/, alias: 'punctuation' },
            }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern:
                  /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'double-colon',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause'],
            );
        })(l),
        (function (e) {
          var i =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  i.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i',
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + i.source + '$'), alias: 'url' },
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  i.source +
                  ')*(?=\\s*\\{)',
              ),
              lookbehind: !0,
            },
            string: { pattern: i, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var t = e.languages.markup;
          t &&
            (t.tag.addInlined('style', 'css'),
            t.tag.addAttribute('style', 'css'));
        })(l),
        (function (e) {
          var i = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            t;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              'pseudo-element':
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              'pseudo-class': /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp(`\\[(?:[^[\\]"']|` + i.source + ')*\\]'),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  'case-sensitivity': {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  'attr-name': {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  'attr-value': [
                    i,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              'n-th': [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              'selector-function-argument'
            ].inside = t),
            e.languages.insertBefore('css', 'property', {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            f = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color' },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: f,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: f,
          });
        })(l),
        (l.languages.javascript = l.languages.extend('clike', {
          'class-name': [
            l.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                (/NaN|Infinity/.source +
                  '|' +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  '|' +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  '|' +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  '|' +
                  /\d+(?:_\d+)*n/.source +
                  '|' +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ')' +
                /(?![\w$])/.source,
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (l.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        l.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: l.languages.regex,
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        l.languages.insertBefore('javascript', 'string', {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\$\{|\}$/,
                    alias: 'punctuation',
                  },
                  rest: l.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'string-property': {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
          },
        }),
        l.languages.insertBefore('javascript', 'operator', {
          'literal-property': {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property',
          },
        }),
        l.languages.markup &&
          (l.languages.markup.tag.addInlined('script', 'javascript'),
          l.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript',
          )),
        (l.languages.js = l.languages.javascript),
        (function (e) {
          var i = e.util.clone(e.languages.javascript),
            t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            f = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function g(p, d) {
            return (
              (p = p
                .replace(/<S>/g, function () {
                  return t;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return f;
                })),
              RegExp(p, d)
            );
          }
          (f = g(f).source),
            (e.languages.jsx = e.languages.extend('markup', i)),
            (e.languages.jsx.tag.pattern = g(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source,
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside['class-name'] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = i.comment),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: g(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: g(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?=\{)/,
                      alias: 'punctuation',
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag,
            );
          var c = function (p) {
              return p
                ? typeof p == 'string'
                  ? p
                  : typeof p.content == 'string'
                  ? p.content
                  : p.content.map(c).join('')
                : '';
            },
            v = function (p) {
              for (var d = [], b = 0; b < p.length; b++) {
                var n = p[b],
                  a = !1;
                if (
                  (typeof n != 'string' &&
                    (n.type === 'tag' &&
                    n.content[0] &&
                    n.content[0].type === 'tag'
                      ? n.content[0].content[0].content === '</'
                        ? d.length > 0 &&
                          d[d.length - 1].tagName ===
                            c(n.content[0].content[1]) &&
                          d.pop()
                        : n.content[n.content.length - 1].content === '/>' ||
                          d.push({
                            tagName: c(n.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : d.length > 0 &&
                        n.type === 'punctuation' &&
                        n.content === '{'
                      ? d[d.length - 1].openedBraces++
                      : d.length > 0 &&
                        d[d.length - 1].openedBraces > 0 &&
                        n.type === 'punctuation' &&
                        n.content === '}'
                      ? d[d.length - 1].openedBraces--
                      : (a = !0)),
                  (a || typeof n == 'string') &&
                    d.length > 0 &&
                    d[d.length - 1].openedBraces === 0)
                ) {
                  var s = c(n);
                  b < p.length - 1 &&
                    (typeof p[b + 1] == 'string' ||
                      p[b + 1].type === 'plain-text') &&
                    ((s += c(p[b + 1])), p.splice(b + 1, 1)),
                    b > 0 &&
                      (typeof p[b - 1] == 'string' ||
                        p[b - 1].type === 'plain-text') &&
                      ((s = c(p[b - 1]) + s), p.splice(b - 1, 1), b--),
                    (p[b] = new e.Token('plain-text', s, null, s));
                }
                n.content && typeof n.content != 'string' && v(n.content);
              }
            };
          e.hooks.add('after-tokenize', function (p) {
            (p.language !== 'jsx' && p.language !== 'tsx') || v(p.tokens);
          });
        })(l),
        (function (e) {
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + e.languages.javascript.function.source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            });
          function i(v, p) {
            return RegExp(
              v.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              p,
            );
          }
          e.languages.insertBefore('javascript', 'keyword', {
            imports: {
              pattern: i(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source,
              ),
              lookbehind: !0,
              inside: e.languages.javascript,
            },
            exports: {
              pattern: i(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source,
              ),
              lookbehind: !0,
              inside: e.languages.javascript,
            },
          }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: i(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var t = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              r = 0;
            r < t.length;
            r++
          ) {
            var f = t[r],
              g = e.languages.javascript[f];
            e.util.type(g) === 'RegExp' &&
              (g = e.languages.javascript[f] = { pattern: g });
            var c = g.inside || {};
            (g.inside = c), (c['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(l),
        (function (e) {
          var i = e.languages.javascript['template-string'],
            t = i.pattern.source,
            r = i.inside.interpolation,
            f = r.inside['interpolation-punctuation'],
            g = r.pattern.source;
          function c(s, u) {
            if (!!e.languages[s])
              return {
                pattern: RegExp('((?:' + u + ')\\s*)' + t),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                  'embedded-code': { pattern: /[\s\S]+/, alias: s },
                },
              };
          }
          e.languages.javascript['template-string'] = [
            c(
              'css',
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source,
            ),
            c('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            c('svg', /\bsvg/.source),
            c('markdown', /\b(?:markdown|md)/.source),
            c('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            c('sql', /\bsql/.source),
            i,
          ].filter(Boolean);
          function v(s, u) {
            return '___' + u.toUpperCase() + '_' + s + '___';
          }
          function p(s, u, o) {
            var h = { code: s, grammar: u, language: o };
            return (
              e.hooks.run('before-tokenize', h),
              (h.tokens = e.tokenize(h.code, h.grammar)),
              e.hooks.run('after-tokenize', h),
              h.tokens
            );
          }
          function d(s) {
            var u = {};
            u['interpolation-punctuation'] = f;
            var o = e.tokenize(s, u);
            if (o.length === 3) {
              var h = [1, 1];
              h.push.apply(h, p(o[1], e.languages.javascript, 'javascript')),
                o.splice.apply(o, h);
            }
            return new e.Token('interpolation', o, r.alias, s);
          }
          function b(s, u, o) {
            var h = e.tokenize(s, {
                interpolation: { pattern: RegExp(g), lookbehind: !0 },
              }),
              y = 0,
              m = {},
              S = h
                .map(function (A) {
                  if (typeof A == 'string') return A;
                  for (
                    var I = A.content, k;
                    s.indexOf((k = v(y++, o))) !== -1;

                  );
                  return (m[k] = I), k;
                })
                .join(''),
              E = p(S, u, o),
              O = Object.keys(m);
            y = 0;
            function R(A) {
              for (var I = 0; I < A.length; I++) {
                if (y >= O.length) return;
                var k = A[I];
                if (typeof k == 'string' || typeof k.content == 'string') {
                  var B = O[y],
                    w = typeof k == 'string' ? k : k.content,
                    _ = w.indexOf(B);
                  if (_ !== -1) {
                    ++y;
                    var F = w.substring(0, _),
                      $ = d(m[B]),
                      T = w.substring(_ + B.length),
                      L = [];
                    if ((F && L.push(F), L.push($), T)) {
                      var x = [T];
                      R(x), L.push.apply(L, x);
                    }
                    typeof k == 'string'
                      ? (A.splice.apply(A, [I, 1].concat(L)),
                        (I += L.length - 1))
                      : (k.content = L);
                  }
                } else {
                  var N = k.content;
                  Array.isArray(N) ? R(N) : R([N]);
                }
              }
            }
            return R(E), new e.Token(o, E, 'language-' + o, s);
          }
          var n = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          e.hooks.add('after-tokenize', function (s) {
            if (!(s.language in n)) return;
            function u(o) {
              for (var h = 0, y = o.length; h < y; h++) {
                var m = o[h];
                if (typeof m != 'string') {
                  var S = m.content;
                  if (!Array.isArray(S)) {
                    typeof S != 'string' && u([S]);
                    continue;
                  }
                  if (m.type === 'template-string') {
                    var E = S[1];
                    if (
                      S.length === 3 &&
                      typeof E != 'string' &&
                      E.type === 'embedded-code'
                    ) {
                      var O = a(E),
                        R = E.alias,
                        A = Array.isArray(R) ? R[0] : R,
                        I = e.languages[A];
                      if (!I) continue;
                      S[1] = b(O, I, A);
                    }
                  } else u(S);
                }
              }
            }
            u(s.tokens);
          });
          function a(s) {
            return typeof s == 'string'
              ? s
              : Array.isArray(s)
              ? s.map(a).join('')
              : a(s.content);
          }
        })(l),
        (function (e) {
          var i = /#(?!\{).+/,
            t = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: i,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: t },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': {
                pattern: /###[\s\S]+?###/,
                alias: 'comment',
              },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: i, interpolation: t },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: 'language-javascript',
                    inside: e.languages.javascript,
                  },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: t },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(l),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var i = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(i).forEach(function (t) {
            var r = i[t],
              f = [];
            /^\w+$/.test(t) || f.push(/\w+/.exec(t)[0]),
              t === 'diff' && f.push('bold'),
              (e.languages.diff[t] = {
                pattern: RegExp(
                  '^(?:[' +
                    r +
                    `].*(?:\r
?|
|(?![\\s\\S])))+`,
                  'm',
                ),
                alias: f,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(t)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: i });
        })(l),
        (l.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/ },
          },
          coord: /^@@.*@@$/m,
          'commit-sha1': /^commit \w{40}$/m,
        }),
        (l.languages.go = l.languages.extend('clike', {
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        l.languages.insertBefore('go', 'string', {
          char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
        }),
        delete l.languages.go['class-name'],
        (l.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: l.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-mutation': {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-query': {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        l.hooks.add('after-tokenize', function (i) {
          if (i.language !== 'graphql') return;
          var t = i.tokens.filter(function (o) {
              return (
                typeof o != 'string' &&
                o.type !== 'comment' &&
                o.type !== 'scalar'
              );
            }),
            r = 0;
          function f(o) {
            return t[r + o];
          }
          function g(o, h) {
            h = h || 0;
            for (var y = 0; y < o.length; y++) {
              var m = f(y + h);
              if (!m || m.type !== o[y]) return !1;
            }
            return !0;
          }
          function c(o, h) {
            for (var y = 1, m = r; m < t.length; m++) {
              var S = t[m],
                E = S.content;
              if (S.type === 'punctuation' && typeof E == 'string') {
                if (o.test(E)) y++;
                else if (h.test(E) && (y--, y === 0)) return m;
              }
            }
            return -1;
          }
          function v(o, h) {
            var y = o.alias;
            y ? Array.isArray(y) || (o.alias = y = [y]) : (o.alias = y = []),
              y.push(h);
          }
          for (; r < t.length; ) {
            var p = t[r++];
            if (p.type === 'keyword' && p.content === 'mutation') {
              var d = [];
              if (
                g(['definition-mutation', 'punctuation']) &&
                f(1).content === '('
              ) {
                r += 2;
                var b = c(/^\($/, /^\)$/);
                if (b === -1) continue;
                for (; r < b; r++) {
                  var n = f(0);
                  n.type === 'variable' &&
                    (v(n, 'variable-input'), d.push(n.content));
                }
                r = b + 1;
              }
              if (
                g(['punctuation', 'property-query']) &&
                f(0).content === '{' &&
                (r++, v(f(0), 'property-mutation'), d.length > 0)
              ) {
                var a = c(/^\{$/, /^\}$/);
                if (a === -1) continue;
                for (var s = r; s < a; s++) {
                  var u = t[s];
                  u.type === 'variable' &&
                    d.indexOf(u.content) >= 0 &&
                    v(u, 'variable-input');
                }
              }
            }
          }
        }),
        (function (e) {
          function i(t, r) {
            return '___' + t.toUpperCase() + r + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (t, r, f, g) {
                if (t.language === r) {
                  var c = (t.tokenStack = []);
                  (t.code = t.code.replace(f, function (v) {
                    if (typeof g == 'function' && !g(v)) return v;
                    for (
                      var p = c.length, d;
                      t.code.indexOf((d = i(r, p))) !== -1;

                    )
                      ++p;
                    return (c[p] = v), d;
                  })),
                    (t.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (t, r) {
                if (t.language !== r || !t.tokenStack) return;
                t.grammar = e.languages[r];
                var f = 0,
                  g = Object.keys(t.tokenStack);
                function c(v) {
                  for (var p = 0; p < v.length && !(f >= g.length); p++) {
                    var d = v[p];
                    if (
                      typeof d == 'string' ||
                      (d.content && typeof d.content == 'string')
                    ) {
                      var b = g[f],
                        n = t.tokenStack[b],
                        a = typeof d == 'string' ? d : d.content,
                        s = i(r, b),
                        u = a.indexOf(s);
                      if (u > -1) {
                        ++f;
                        var o = a.substring(0, u),
                          h = new e.Token(
                            r,
                            e.tokenize(n, t.grammar),
                            'language-' + r,
                            n,
                          ),
                          y = a.substring(u + s.length),
                          m = [];
                        o && m.push.apply(m, c([o])),
                          m.push(h),
                          y && m.push.apply(m, c([y])),
                          typeof d == 'string'
                            ? v.splice.apply(v, [p, 1].concat(m))
                            : (d.content = m);
                      }
                    } else d.content && c(d.content);
                  }
                  return v;
                }
                c(t.tokens);
              },
            },
          });
        })(l),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:false|true)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (i) {
              var t = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
              e.languages['markup-templating'].buildPlaceholders(
                i,
                'handlebars',
                t,
              );
            }),
            e.hooks.add('after-tokenize', function (i) {
              e.languages['markup-templating'].tokenizePlaceholders(
                i,
                'handlebars',
              );
            }),
            (e.languages.hbs = e.languages.handlebars);
        })(l),
        (l.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (l.languages.webmanifest = l.languages.json),
        (l.languages.less = l.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        l.languages.insertBefore('less', 'property', {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (l.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'builtin-target': {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: 'builtin',
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: 'symbol',
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function (e) {
          var i = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function t(b) {
            return (
              (b = b.replace(/<inner>/g, function () {
                return i;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + b + ')')
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            f = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              },
            ),
            g =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'front-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + f + g + '(?:' + f + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + f + g + ')(?:' + f + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + f + ')' + g + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + f + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(r),
                        alias: 'important',
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: t(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: t(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              'code-snippet': {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword'],
              },
              url: {
                pattern: t(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (b) {
              ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(
                function (n) {
                  b !== n &&
                    (e.languages.markdown[b].inside.content.inside[n] =
                      e.languages.markdown[n]);
                },
              );
            }),
            e.hooks.add('after-tokenize', function (b) {
              if (b.language !== 'markdown' && b.language !== 'md') return;
              function n(a) {
                if (!(!a || typeof a == 'string'))
                  for (var s = 0, u = a.length; s < u; s++) {
                    var o = a[s];
                    if (o.type !== 'code') {
                      n(o.content);
                      continue;
                    }
                    var h = o.content[1],
                      y = o.content[3];
                    if (
                      h &&
                      y &&
                      h.type === 'code-language' &&
                      y.type === 'code-block' &&
                      typeof h.content == 'string'
                    ) {
                      var m = h.content
                        .replace(/\b#/g, 'sharp')
                        .replace(/\b\+\+/g, 'pp');
                      m = (/[a-z][\w-]*/i.exec(m) || [''])[0].toLowerCase();
                      var S = 'language-' + m;
                      y.alias
                        ? typeof y.alias == 'string'
                          ? (y.alias = [y.alias, S])
                          : y.alias.push(S)
                        : (y.alias = [S]);
                    }
                  }
              }
              n(b.tokens);
            }),
            e.hooks.add('wrap', function (b) {
              if (b.type === 'code-block') {
                for (var n = '', a = 0, s = b.classes.length; a < s; a++) {
                  var u = b.classes[a],
                    o = /language-(.+)/.exec(u);
                  if (o) {
                    n = o[1];
                    break;
                  }
                }
                var h = e.languages[n];
                if (h) b.content = e.highlight(d(b.content), h, n);
                else if (n && n !== 'none' && e.plugins.autoloader) {
                  var y =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(Math.random() * 1e16);
                  (b.attributes.id = y),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var m = document.getElementById(y);
                      m &&
                        (m.innerHTML = e.highlight(
                          m.textContent,
                          e.languages[n],
                          n,
                        ));
                    });
                }
              }
            });
          var c = RegExp(e.languages.markup.tag.pattern.source, 'gi'),
            v = { amp: '&', lt: '<', gt: '>', quot: '"' },
            p = String.fromCodePoint || String.fromCharCode;
          function d(b) {
            var n = b.replace(c, '');
            return (
              (n = n.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (a, s) {
                if (((s = s.toLowerCase()), s[0] === '#')) {
                  var u;
                  return (
                    s[1] === 'x'
                      ? (u = parseInt(s.slice(2), 16))
                      : (u = Number(s.slice(1))),
                    p(u)
                  );
                } else {
                  var o = v[s];
                  return o || a;
                }
              })),
              n
            );
          }
          e.languages.md = e.languages.markdown;
        })(l),
        (l.languages.objectivec = l.languages.extend('c', {
          string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete l.languages.objectivec['class-name'],
        (l.languages.objc = l.languages.objectivec),
        (l.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: {
            pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
            greedy: !0,
          },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: 'property' },
          label: { pattern: /\B~\w+/, alias: 'property' },
          'type-variable': { pattern: /\B'\w+/, alias: 'function' },
          variant: { pattern: /`\w+/, alias: 'symbol' },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          'operator-like-punctuation': {
            pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
            alias: 'punctuation',
          },
          operator:
            /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (l.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          'string-interpolation': {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  'format-spec': {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  'conversion-option': {
                    pattern: /![sra](?=[:}]$)/,
                    alias: 'punctuation',
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (l.languages.python[
          'string-interpolation'
        ].inside.interpolation.inside.rest = l.languages.python),
        (l.languages.py = l.languages.python),
        (l.languages.reason = l.languages.extend('clike', {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          'class-name': /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        l.languages.insertBefore('reason', 'class-name', {
          char: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0,
          },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete l.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
              greedy: !0,
            },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: { atrule: /(?:@[\w-]+|[+=])/ },
              },
            }),
            delete e.languages.sass.atrule;
          var i = /\$[-\w]+|#\{\$[-\w]+\}/,
            t = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
              { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: { punctuation: /:/, variable: i, operator: t },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: i,
                operator: t,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern:
                  /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            });
        })(l),
        (l.languages.scss = l.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        l.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        l.languages.insertBefore('scss', 'important', {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        l.languages.insertBefore('scss', 'function', {
          'module-modifier': {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: 'keyword',
          },
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: 'keyword',
          },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (l.languages.scss.atrule.inside.rest = l.languages.scss),
        (l.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var i = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            t = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern:
                  /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: i,
                    number: t,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: i,
              boolean: /\b(?:false|true)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: t,
              punctuation: /[{}()\[\];:,]/,
            };
          (r.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^\{|\}$/, alias: 'punctuation' },
              rest: r,
            },
          }),
            (r.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^[ \t]*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              'property-declaration': {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(l),
        (function (e) {
          (e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/,
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript['literal-property'];
          var i = e.languages.extend('typescript', {});
          delete i['class-name'],
            (e.languages.typescript['class-name'].inside = i),
            e.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: 'operator' },
                  function: /^[\s\S]+/,
                },
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: i,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(l),
        (function (e) {
          var i = e.util.clone(e.languages.typescript);
          (e.languages.tsx = e.languages.extend('jsx', i)),
            delete e.languages.tsx.parameter,
            delete e.languages.tsx['literal-property'];
          var t = e.languages.tsx.tag;
          (t.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + t.pattern.source + ')',
            t.pattern.flags,
          )),
            (t.lookbehind = !0);
        })(l),
        (l.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function (e) {
          var i = /[*&][^\s[\]{},]+/,
            t =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              '(?:' +
              t.source +
              '(?:[ 	]+' +
              i.source +
              ')?|' +
              i.source +
              '(?:[ 	]+' +
              t.source +
              ')?)',
            f =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                },
              ),
            g = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function c(v, p) {
            p = (p || '').replace(/m/g, '') + 'm';
            var d =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return v;
                });
            return RegExp(d, p);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  },
                ),
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + f + '|' + g + ')';
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: c(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: c(/false|true/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: c(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: c(g), lookbehind: !0, greedy: !0 },
            number: {
              pattern: c(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i',
              ),
              lookbehind: !0,
            },
            tag: t,
            important: i,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(l);
      var ee = l,
        te = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            {
              types: ['tag', 'operator', 'number'],
              style: { color: '#e09142' },
            },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: { color: '#eeebff' },
            },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            {
              types: ['deleted'],
              style: { textDecorationLine: 'line-through' },
            },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        ne = te,
        ae = { Prism: ee, theme: ne };
      function G(e, i, t) {
        return (
          i in e
            ? Object.defineProperty(e, i, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[i] = t),
          e
        );
      }
      function D() {
        return (
          (D =
            Object.assign ||
            function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var t = arguments[i];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          D.apply(this, arguments)
        );
      }
      var re = /\r\n|\r|\n/,
        Z = function (e) {
          e.length === 0
            ? e.push({
                types: ['plain'],
                content: `
`,
                empty: !0,
              })
            : e.length === 1 &&
              e[0].content === '' &&
              ((e[0].content = `
`),
              (e[0].empty = !0));
        },
        K = function (e, i) {
          var t = e.length;
          return t > 0 && e[t - 1] === i ? e : e.concat(i);
        },
        ie = function (e) {
          for (
            var i = [[]],
              t = [e],
              r = [0],
              f = [e.length],
              g = 0,
              c = 0,
              v = [],
              p = [v];
            c > -1;

          ) {
            for (; (g = r[c]++) < f[c]; ) {
              var d = void 0,
                b = i[c],
                n = t[c],
                a = n[g];
              if (
                (typeof a == 'string'
                  ? ((b = c > 0 ? b : ['plain']), (d = a))
                  : ((b = K(b, a.type)),
                    a.alias && (b = K(b, a.alias)),
                    (d = a.content)),
                typeof d != 'string')
              ) {
                c++, i.push(b), t.push(d), r.push(0), f.push(d.length);
                continue;
              }
              var s = d.split(re),
                u = s.length;
              v.push({ types: b, content: s[0] });
              for (var o = 1; o < u; o++)
                Z(v), p.push((v = [])), v.push({ types: b, content: s[o] });
            }
            c--, i.pop(), t.pop(), r.pop(), f.pop();
          }
          return Z(v), p;
        },
        se = function (e, i) {
          var t = e.plain,
            r = Object.create(null),
            f = e.styles.reduce(function (g, c) {
              var v = c.languages,
                p = c.style;
              return (
                (v && !v.includes(i)) ||
                  c.types.forEach(function (d) {
                    var b = D({}, g[d], p);
                    g[d] = b;
                  }),
                g
              );
            }, r);
          return (
            (f.root = t), (f.plain = D({}, t, { backgroundColor: null })), f
          );
        };
      function X(e, i) {
        var t = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            i.indexOf(r) === -1 &&
            (t[r] = e[r]);
        return t;
      }
      var oe = (function (e) {
          function i() {
            for (var t = this, r = [], f = arguments.length; f--; )
              r[f] = arguments[f];
            e.apply(this, r),
              G(this, 'getThemeDict', function (g) {
                if (
                  t.themeDict !== void 0 &&
                  g.theme === t.prevTheme &&
                  g.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = g.theme), (t.prevLanguage = g.language);
                var c = g.theme ? se(g.theme, g.language) : void 0;
                return (t.themeDict = c);
              }),
              G(this, 'getLineProps', function (g) {
                var c = g.key,
                  v = g.className,
                  p = g.style,
                  d = X(g, ['key', 'className', 'style', 'line']),
                  b = d,
                  n = D({}, b, {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  a = t.getThemeDict(t.props);
                return (
                  a !== void 0 && (n.style = a.plain),
                  p !== void 0 &&
                    (n.style = n.style !== void 0 ? D({}, n.style, p) : p),
                  c !== void 0 && (n.key = c),
                  v && (n.className += ' ' + v),
                  n
                );
              }),
              G(this, 'getStyleForToken', function (g) {
                var c = g.types,
                  v = g.empty,
                  p = c.length,
                  d = t.getThemeDict(t.props);
                if (d !== void 0) {
                  {
                    if (p === 1 && c[0] === 'plain')
                      return v ? { display: 'inline-block' } : void 0;
                    if (p === 1 && !v) return d[c[0]];
                  }
                  var b = v ? { display: 'inline-block' } : {},
                    n = c.map(function (a) {
                      return d[a];
                    });
                  return Object.assign.apply(Object, [b].concat(n));
                }
              }),
              G(this, 'getTokenProps', function (g) {
                var c = g.key,
                  v = g.className,
                  p = g.style,
                  d = g.token,
                  b = X(g, ['key', 'className', 'style', 'token']),
                  n = b,
                  a = D({}, n, {
                    className: 'token ' + d.types.join(' '),
                    children: d.content,
                    style: t.getStyleForToken(d),
                    key: void 0,
                  });
                return (
                  p !== void 0 &&
                    (a.style = a.style !== void 0 ? D({}, a.style, p) : p),
                  c !== void 0 && (a.key = c),
                  v && (a.className += ' ' + v),
                  a
                );
              }),
              G(this, 'tokenize', function (g, c, v, p) {
                var d = { code: c, grammar: v, language: p, tokens: [] };
                g.hooks.run('before-tokenize', d);
                var b = (d.tokens = g.tokenize(d.code, d.grammar, d.language));
                return g.hooks.run('after-tokenize', d), b;
              });
          }
          return (
            e && (i.__proto__ = e),
            (i.prototype = Object.create(e && e.prototype)),
            (i.prototype.constructor = i),
            (i.prototype.render = function () {
              var r = this.props,
                f = r.Prism,
                g = r.language,
                c = r.code,
                v = r.children,
                p = this.getThemeDict(this.props),
                d = f.languages[g],
                b = d !== void 0 ? this.tokenize(f, c, d, g) : [c],
                n = ie(b);
              return v({
                tokens: n,
                className: 'prism-code language-' + g,
                style: p !== void 0 ? p.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            i
          );
        })(C.Component),
        le = oe,
        ue = M(16924),
        ve = M(99675);
      function P() {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var t = arguments[i];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          P.apply(this, arguments)
        );
      }
      function ce(e, i) {
        return fe(e) || ge(e, i) || de(e, i) || pe();
      }
      function pe() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function de(e, i) {
        if (!!e) {
          if (typeof e == 'string') return V(e, i);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (t === 'Object' && e.constructor && (t = e.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(e);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return V(e, i);
        }
      }
      function V(e, i) {
        (i == null || i > e.length) && (i = e.length);
        for (var t = 0, r = new Array(i); t < i; t++) r[t] = e[t];
        return r;
      }
      function ge(e, i) {
        var t =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (t != null) {
          var r = [],
            f = !0,
            g = !1,
            c,
            v;
          try {
            for (
              t = t.call(e);
              !(f = (c = t.next()).done) &&
              (r.push(c.value), !(i && r.length === i));
              f = !0
            );
          } catch (p) {
            (g = !0), (v = p);
          } finally {
            try {
              !f && t.return != null && t.return();
            } finally {
              if (g) throw v;
            }
          }
          return r;
        }
      }
      function fe(e) {
        if (Array.isArray(e)) return e;
      }
      var be = { acss: 'css', axml: 'xml' },
        he = function (e) {
          var i = e.code,
            t = e.lang,
            r = e.showCopy,
            f = r === void 0 ? !0 : r,
            g = (0, ue.useCopy)(),
            c = ce(g, 2),
            v = c[0],
            p = c[1];
          return C.createElement(
            'div',
            { className: '__dumi-default-code-block' },
            C.createElement(
              le,
              P({}, ae, { code: i, language: be[t] || t, theme: void 0 }),
              function (d) {
                var b = d.className,
                  n = d.style,
                  a = d.tokens,
                  s = d.getLineProps,
                  u = d.getTokenProps;
                return C.createElement(
                  'pre',
                  { className: b, style: n },
                  f &&
                    C.createElement('button', {
                      className:
                        '__dumi-default-icon __dumi-default-code-block-copy-btn',
                      'data-status': p,
                      onClick: function () {
                        return v(i);
                      },
                    }),
                  a.map(function (o, h) {
                    return C.createElement(
                      'div',
                      s({ line: o, key: h }),
                      o.map(function (y, m) {
                        return C.createElement('span', u({ token: y, key: m }));
                      }),
                    );
                  }),
                );
              },
            ),
          );
        };
    },
  },
]);
