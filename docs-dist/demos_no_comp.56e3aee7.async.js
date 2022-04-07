(self.webpackChunk_test_element_form =
  self.webpackChunk_test_element_form || []).push([
  [50],
  {
    97832: function (X, V, e) {
      'use strict';
      e.r(V);
      var s = e(57337),
        a = e(67294),
        t = e(62648),
        P = e(13050),
        l = e(87167),
        A = e(5609),
        B = e(52523),
        W = e(64959),
        w = e(67497),
        D = e(15908),
        y = e(11446),
        C = e(59421),
        i = t.Z.Item,
        T =
          '\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848',
        F = () => {
          var O = (0, a.useState)('read'),
            Z = (0, s.Z)(O, 2),
            G = Z[0],
            H = Z[1],
            $ = (0, a.useMemo)(() => (G === 'edit' ? 'input' : 'text'), [G]),
            L = t.Z.useForm(),
            N = (0, s.Z)(L, 1),
            x = N[0],
            J = t.Z.useForm(),
            n = (0, s.Z)(J, 1),
            p = n[0];
          (0, D.Z)(y.s_, {
            onSuccess: (b) => {
              p.setFieldsValue(b);
            },
          });
          var S = () => {
              console.log('form.values', x.getFieldsValue());
            },
            h = () => {
              x.resetFields(), console.log('form.values', x.getFieldsValue());
            };
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              P.Z,
              { title: 'antd form' },
              a.createElement(
                t.Z,
                {
                  form: p,
                  onValuesChange: (b) => {
                    console.log('antd form onValuesChange=>', b);
                  },
                },
                a.createElement(
                  i,
                  { label: 'inp', name: 'inp' },
                  a.createElement(l.Z, null),
                ),
                a.createElement(
                  i,
                  { style: { width: '400px' } },
                  a.createElement(
                    A.Z,
                    null,
                    a.createElement(
                      B.Z,
                      {
                        type: 'primary',
                        onClick: () => {
                          console.log('antd submit', p.getFieldsValue());
                        },
                      },
                      '\u63D0\u4EA4',
                    ),
                    a.createElement(
                      B.Z,
                      {
                        onClick: () => {
                          console.log('antd reset', p.getFieldsValue());
                        },
                      },
                      '\u91CD\u7F6E',
                    ),
                  ),
                ),
              ),
            ),
            a.createElement(W.Z, null),
            a.createElement(
              P.Z,
              { title: 'element form' },
              a.createElement(
                w.ZP.Group,
                { value: G, onChange: (b) => H(b.target.value) },
                a.createElement(w.ZP, { value: 'read' }, '\u53EA\u8BFB'),
                a.createElement(w.ZP, { value: 'edit' }, '\u7F16\u8F91'),
              ),
              a.createElement(
                t.Z,
                {
                  form: x,
                  initialValues: {
                    text: '\u9759\u6001\u6587\u6848',
                    textEllipsis: T,
                    textList: [T, T, T],
                  },
                  onValuesChange: (b) => {
                    console.log('element form onValuesChange=>', b);
                  },
                },
                a.createElement(
                  i,
                  { label: 'text', name: 'text' },
                  a.createElement(C.Z, { type: $ }),
                ),
                a.createElement(
                  i,
                  {
                    label: 'text-edit',
                    name: 'textEllipsis',
                    style: { width: '300px' },
                  },
                  a.createElement(C.Z, { type: $, ellipsis: !0 }),
                ),
                a.createElement(
                  i,
                  {
                    label: 'text-list',
                    name: 'textList',
                    style: { width: '400px' },
                  },
                  a.createElement(C.Z, {
                    type: 'list-wrap',
                    mode: G,
                    ellipsis: !0,
                  }),
                ),
                a.createElement(
                  i,
                  { style: { width: '400px' } },
                  a.createElement(
                    A.Z,
                    null,
                    a.createElement(
                      B.Z,
                      { type: 'primary', onClick: S },
                      '\u63D0\u4EA4',
                    ),
                    a.createElement(B.Z, { onClick: h }, '\u91CD\u7F6E'),
                  ),
                ),
              ),
            ),
          );
        };
      V.default = F;
    },
    26337: function (X, V, e) {
      'use strict';
      e.r(V);
      var s = e(8870),
        a = e(57337),
        t = e(67294),
        P = e(62648),
        l = e(83719),
        A = e(61596),
        B = e(5609),
        W = e(52523),
        w = e(14404),
        D = e(15908),
        y = e(39517),
        C = e(11446),
        i = () => {
          var T = P.Z.useForm(),
            F = (0, a.Z)(T, 1),
            O = F[0],
            Z = (0, t.useCallback)((j) => {
              var r = j.sel;
              return {
                disabled: r === 'disabled',
                style: { display: r === 'hide' ? 'none' : 'inline-flex' },
              };
            }, []),
            G = (0, t.useState)(),
            H = (0, a.Z)(G, 2),
            $ = H[0],
            L = H[1],
            N = (0, D.Z)(C.s_, {
              onSuccess: () => {
                L(Z(x));
              },
            }),
            x = N.data,
            J = (0, D.Z)(C.SI, {
              onSuccess: () => {
                L(Z(x)), O.setFieldsValue(x);
              },
            }),
            n = J.data,
            p = n === void 0 ? [] : n,
            S = J.loading,
            h = (0, D.Z)(C.R5),
            b = h.data,
            f = b === void 0 ? [] : b,
            o = (j) => {
              console.log('schema custom demo onValuesChange', j);
              var r = O.getFieldsValue();
              L(Z((0, s.Z)((0, s.Z)({}, x), r)));
            },
            d = (j) => {
              console.log('schema custom demo onFinish values', j);
            },
            g = () => {
              O.resetFields(), L(Z(x));
            };
          return t.createElement(w.Z, {
            type: 'custom',
            initialValues: y.ae,
            disabled: $ == null ? void 0 : $.disabled,
            labelAlign: 'right',
            form: O,
            onFinish: d,
            onValuesChange: o,
            options: [
              {
                label: '\u8054\u52A8\u8F93\u5165\u6846',
                name: 'sel',
                type: 'select',
                rules: [{ message: '\u5FC5\u586B\u53C2\u6570', required: !0 }],
                fieldProps: {
                  disabled: !1,
                  options: [
                    { label: '\u663E\u793A\u8F93\u5165', value: 'show' },
                    { label: '\u9690\u85CF\u8F93\u5165', value: 'hide' },
                    { label: '\u7981\u7528\u8868\u5355', value: 'disabled' },
                  ],
                },
              },
              {
                label: '\u6D4B\u8BD5\u8F93\u5165',
                name: 'inp',
                type: 'input',
                fieldProps: (0, s.Z)(
                  { isTrim: !1, placeholder: '\u9ED8\u8BA4\u8F93\u5165' },
                  $,
                ),
              },
              {
                label: '\u641C\u7D22\u6846',
                name: 'search',
                type: 'search',
                rules: [{ message: '\u5FC5\u586B\u53C2\u6570', required: !0 }],
                fieldProps: {
                  placeholder: '\u9ED8\u8BA4\u6587\u6848',
                  onSearch: (j) => {
                    console.log('searc', j);
                  },
                },
              },
              {
                label: '\u6D4B\u8BD5\u591A\u9009',
                name: 'multipleSelect',
                type: 'select',
                rules: [{ message: '\u5FC5\u586B\u53C2\u6570', required: !0 }],
                fieldProps: {
                  mode: 'multiple',
                  showSearch: !0,
                  allowClear: !0,
                  options: f,
                  fieldNames: { label: 'roleName', value: 'roleCode' },
                },
              },
              {
                label: '\u5206\u7EC4',
                type: 'group',
                className: 'group-wrap',
                style: {
                  padding: '12px',
                  marginBottom: '16px',
                  backgroundColor: '#eee',
                },
                options: [
                  {
                    type: 'input',
                    label: '\u5206\u7EC4\u7684input',
                    name: 'groupinputdefault',
                    rules: [
                      { message: '\u5FC5\u586B\u53C2\u6570', required: !0 },
                    ],
                  },
                  {
                    type: 'textarea',
                    label: '\u5206\u7EC4\u7684textarea',
                    name: 'grouptextareadefault',
                    rules: [
                      { message: '\u5FC5\u586B\u53C2\u6570', required: !0 },
                    ],
                  },
                ],
              },
              {
                label: '\u4E0B\u62C9\u6811',
                name: 'treeSelect',
                type: 'tree-select',
                rules: [{ message: '\u5FC5\u586B\u53C2\u6570', required: !0 }],
                fieldProps: {
                  treeData: p,
                  treeCheckStrictly: !0,
                  treeCheckable: !0,
                  treeDefaultExpandAll: !0,
                  fieldNames: {
                    label: 'funcName',
                    value: 'funcCode',
                    children: 'childElementList',
                  },
                },
              },
              {
                label: '\u81EA\u5B9A\u4E49\u6811',
                name: 'customTree',
                type: 'custom',
                rules: [{ message: '\u5FC5\u586B\u53C2\u6570', required: !0 }],
                render: (j) => {
                  var r = j.value,
                    m = j.disabled,
                    c = j.onChange;
                  return t.createElement(
                    l.Z,
                    { spinning: S },
                    p != null && p.length
                      ? t.createElement(A.Z, {
                          disabled: m,
                          height: 300,
                          defaultExpandAll: !0,
                          checkable: !0,
                          checkedKeys: r,
                          treeData: p,
                          onCheck: c,
                          fieldNames: {
                            title: 'funcName',
                            key: 'funcCode',
                            children: 'childElementList',
                          },
                        })
                      : null,
                  );
                },
              },
              {
                col: 24,
                className: 'margin-bottom-none',
                style: { marginBottom: 0 },
                wrapperCol: { offset: 1 },
                type: 'custom',
                render: (j) => {
                  var r = j.disabled;
                  return t.createElement(
                    B.Z,
                    null,
                    t.createElement(
                      W.Z,
                      { disabled: r, type: 'primary', htmlType: 'submit' },
                      '\u63D0\u4EA4',
                    ),
                    t.createElement(
                      W.Z,
                      { disabled: r, onClick: g },
                      '\u91CD\u7F6E',
                    ),
                  );
                },
              },
            ],
          });
        };
      V.default = i;
    },
    45523: function (X, V, e) {
      'use strict';
      e.r(V),
        e.d(V, {
          default: function () {
            return H;
          },
        });
      var s = e(8870),
        a = e(57337),
        t = e(67294),
        P = e(25392),
        l = e(18475),
        A = e(44207),
        B = e(62648),
        W = e(52523),
        w = e(5609),
        D = e(45859),
        y = e.n(D),
        C = ($, L) => {
          for (var N = [], x = $; x < L; x++) N.push(x);
          return N;
        },
        i = ($, L) =>
          L === 'start'
            ? {
                disabledHours: () => C(0, 60).splice(4, 20),
                disabledMinutes: () => C(30, 60),
                disabledSeconds: () => [55, 56],
              }
            : {
                disabledHours: () => C(0, 60).splice(20, 4),
                disabledMinutes: () => C(0, 31),
                disabledSeconds: () => [55, 56],
              },
        T = ($) => $ && $ < moment().endOf('day'),
        F = e(14404),
        O = e(59421),
        Z = e(39517),
        G = () => {
          var $ = B.Z.useForm(),
            L = (0, a.Z)($, 1),
            N = L[0],
            x = (0, t.useCallback)((o) => {
              var d = o.sel;
              return {
                disabled: d === 'disabled',
                style: { display: d === 'hide' ? 'none' : 'inline-flex' },
              };
            }, []),
            J = (0, t.useState)(x(Z.ae)),
            n = (0, a.Z)(J, 2),
            p = n[0],
            S = n[1],
            h = (o) => {
              console.log('schema demo onValuesChange values', o);
              var d = N.getFieldsValue();
              S(x((0, s.Z)((0, s.Z)({}, Z.ae), d)));
            },
            b = (o) => {
              console.log('schema demo onFinish values', o),
                N.validateFields().then((d) => {
                  console.log('schema demo onFinish then formData', d);
                });
            },
            f = () => {
              N.resetFields(), S(x(Z.ae));
            };
          return t.createElement(F.Z, {
            disabled: p.disabled,
            type: 'row',
            initialValues: Z.ae,
            labelAlign: 'right',
            form: N,
            span: 8,
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
            onFinish: b,
            onValuesChange: h,
            options: [
              {
                label: '\u8054\u52A8\u8F93\u5165\u6846',
                name: 'sel',
                type: 'select',
                fieldProps: {
                  disabled: !1,
                  options: [
                    { label: '\u663E\u793A\u8F93\u5165', value: 'show' },
                    { label: '\u9690\u85CF\u8F93\u5165', value: 'hide' },
                    { label: '\u7981\u7528\u8868\u5355', value: 'disabled' },
                  ],
                },
              },
              {
                label: '\u6D4B\u8BD5\u8F93\u5165',
                name: 'inp',
                type: 'input',
                rules: [{ message: '\u5FC5\u586B\u53C2\u6570', required: !0 }],
                fieldProps: (0, s.Z)(
                  { isTrim: !1, placeholder: '\u9ED8\u8BA4\u8F93\u5165' },
                  p,
                ),
              },
              { label: '\u666E\u901A\u6587\u672C', name: 'txt', type: 'text' },
              {
                label: 'input-group',
                name: 'inputGroup',
                type: 'input-group',
                fieldProps: {
                  compact: !0,
                  children: (o) => {
                    var d = o.disabled,
                      g = o.onChange;
                    return t.createElement(
                      t.Fragment,
                      null,
                      t.createElement(O.Z, {
                        type: 'input',
                        fieldProps: {
                          disabled: d,
                          style: { width: '65%' },
                          onChange: g,
                        },
                      }),
                      t.createElement(
                        W.Z,
                        { disabled: d, type: 'primary' },
                        'Submit',
                      ),
                    );
                  },
                },
              },
              {
                label: '\u6587\u672C\u57DF',
                name: 'txtarea',
                type: 'textarea',
                fieldProps: { showCount: !0, maxLength: 500 },
              },
              {
                label: '\u641C\u7D22\u6846',
                name: 'search',
                type: 'search',
                fieldProps: {
                  placeholder: '\u9ED8\u8BA4\u6587\u6848',
                  onSearch: (o) => {
                    console.log('searc', o);
                  },
                },
              },
              { label: '\u5BC6\u7801\u6846', name: 'pwd', type: 'password' },
              {
                label: '\u6570\u5B57\u8F93\u5165\u6846',
                name: 'inputNumber',
                type: 'input-number',
                fieldProps: {
                  prefix: '\uFFE5',
                  addonBefore: t.createElement(P.Z, null),
                },
              },
              {
                label: '\u65E5\u671F',
                name: 'date',
                type: 'datepicker',
                fieldProps: { placeholder: 'xxx date', showTime: !0 },
              },
              {
                label: '\u65E5\u671F\u533A\u95F4',
                name: 'dateRange',
                type: 'rangepicker',
                col: 12,
                labelCol: { span: 3 },
                wrapperCol: { span: 21 },
                fieldProps: {
                  placeholder: ['\u5F00\u59CB', '\u7ED3\u675F'],
                  showTime: {
                    hideDisabledOptions: !0,
                    defaultValue: [
                      y()('00:00:00', 'HH:mm:ss'),
                      y()('11:59:59', 'HH:mm:ss'),
                    ],
                  },
                  disabledTime: i,
                },
              },
              {
                label: '\u65F6\u95F4',
                name: 'time',
                type: 'timePicker',
                fieldProps: { placeholder: 'timePicker date' },
              },
              {
                label: '\u65F6\u95F4\u533A\u95F4',
                name: 'timeRange',
                type: 'timeRangePicker',
                fieldProps: { placeholder: ['timeRange1', 'timeRange2'] },
              },
              {
                label: '\u7EA7\u8054',
                name: 'cascader',
                type: 'cascader',
                fieldProps: { options: Z.qN },
              },
              {
                label: '\u6811\u9009\u62E9',
                name: 'treeSelect',
                type: 'tree-select',
                fieldProps: { treeData: Z.t$ },
              },
              { label: '\u590D\u9009\u6846', name: 'check', type: 'checkbox' },
              {
                label: '\u590D\u9009\u6846\u7EC4',
                name: 'boxgroup',
                type: 'checkbox-group',
                fieldProps: {
                  options: [
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                  ],
                },
              },
              {
                label: '\u5355\u9009\u7EC4',
                name: 'radioGroup',
                type: 'radio-group',
                fieldProps: {
                  options: [
                    { label: 'A', value: 'a' },
                    { label: 'B', value: 'b' },
                  ],
                },
              },
              {
                label: '\u8BC4\u5206',
                name: 'rate',
                type: 'rate',
                fieldProps: { allowHalf: !0 },
              },
              {
                label: '\u5355\u4E2A\u6ED1\u52A8\u6761',
                name: 'slider',
                type: 'slider',
                fieldProps: { max: 100, min: 1 },
              },
              {
                label: '\u53CC\u6ED1\u52A8\u6761',
                name: 'sliderRange',
                type: 'slider',
                fieldProps: { range: { draggableTrack: !0 } },
              },
              {
                label: '\u5F00\u5173',
                name: 'switch',
                type: 'switch',
                fieldProps: { loading: !0 },
              },
              {
                label: '\u4E0A\u4F20\u6587\u4EF6',
                name: 'upload',
                type: 'upload',
                fieldProps: {
                  children: (o) => {
                    var d = o.disabled;
                    return t.createElement(
                      W.Z,
                      { disabled: d, icon: t.createElement(l.Z, null) },
                      '\u70B9\u51FB\u4E0A\u4F20',
                    );
                  },
                },
              },
              {
                label: '\u5934\u50CF',
                name: 'av',
                type: 'avatar',
                fieldProps: { icon: t.createElement(P.Z, null) },
              },
              {
                label: '\u56FE\u7247',
                name: 'image',
                type: 'image',
                fieldProps: { width: 100 },
              },
              {
                label: '\u9ED8\u8BA4\u6807\u7B7E',
                name: 'tag',
                type: 'tag',
                fieldProps: {
                  icon: t.createElement(A.Z, { spin: !0 }),
                  color: 'cyan',
                },
              },
              {
                label: '\u81EA\u5B9A\u4E49\u6807\u7B7E',
                name: 'tagCustom',
                type: 'tag',
                fieldProps: {
                  color: 'red',
                  closable: !0,
                  children: () =>
                    t.createElement(
                      t.Fragment,
                      null,
                      t.createElement(P.Z, null),
                      ' New Tag',
                    ),
                },
              },
              {
                label: '\u8FDB\u5EA6\u6761',
                name: 'progress',
                type: 'progress',
                fieldProps: {
                  type: 'line',
                  strokeColor: { '0%': '#108ee9', '100%': 'yellow' },
                },
              },
              {
                label: '\u5206\u7EC4',
                type: 'group',
                className: 'group-wrap',
                col: 12,
                style: {
                  padding: '12px',
                  marginBottom: '16px',
                  backgroundColor: '#eee',
                },
                options: [
                  {
                    type: 'input',
                    label: '\u5206\u7EC4\u7684input',
                    name: 'groupinputdefault',
                    rules: [{ required: !0, message: '\u5FC5\u586B' }],
                    fieldProps: { maxLength: 500 },
                  },
                  {
                    type: 'textarea',
                    label: '\u5206\u7EC4\u7684textarea',
                    name: 'grouptextareadefault',
                  },
                ],
              },
              {
                col: 24,
                className: 'margin-bottom-none',
                style: { marginBottom: 0 },
                wrapperCol: { offset: 1 },
                type: 'custom',
                render: () =>
                  t.createElement(
                    w.Z,
                    null,
                    t.createElement(
                      W.Z,
                      { type: 'primary', htmlType: 'submit' },
                      '\u63D0\u4EA4',
                    ),
                    t.createElement(W.Z, { onClick: f }, '\u91CD\u7F6E'),
                  ),
              },
            ],
          });
        },
        H = G;
    },
    39517: function (X, V, e) {
      'use strict';
      e.d(V, {
        qN: function () {
          return y;
        },
        t$: function () {
          return C;
        },
        ae: function () {
          return D;
        },
      });
      var s = e(45859),
        a = e.n(s),
        t = e(94043),
        P = e(15181),
        l = e(8267);
      function A() {
        var i =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : '2017-09-18T03:30:07.795';
        MockDate.set(i);
      }
      function B() {
        MockDate.reset();
      }
      var W = null,
        w = function () {
          var T =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7;
          return [a()().startOf('day').subtract(T, 'days'), a()().endOf('day')];
        },
        D = {
          sel: 'hide',
          inp: '\u6D4B\u8BD5input',
          txt: '\u666E\u901A\u6587\u672C\uFF0C\u53EF\u81EA\u52A8\u7F29\u7565\u3002\u666E\u901A\u6587\u672C\uFF0C\u53EF\u81EA\u52A8\u7F29\u7565\u3002\u666E\u901A\u6587\u672C\uFF0C\u53EF\u81EA\u52A8\u7F29\u7565\u3002',
          pwd: '123456',
          radioGroup: 'a',
          inputNumber: 123,
          txtarea: '\u9ED8\u8BA4\u6587\u672C\u57DF\u6587\u6848',
          date: a()(new Date()),
          dateRange: w(7),
          time: a()(new Date()),
          timeRange: [a()(new Date()), a()(new Date())],
          check: !0,
          boxgroup: ['B'],
          rate: 2.5,
          slider: 12,
          sliderRange: [23, 55],
          multipleSelect: ['669e6220bb8e4f95b3976410582f5ea6'],
          customTree: [
            'menu_frontAccess',
            'btn_frontAccess_userManagement_query',
          ],
          cascader: ['zhejiang', 'hangzhou', 'xihu'],
          treeSelect: '0-0-1',
          upload: [
            {
              uid: '1',
              name: 'xxx.png',
              status: 'done',
              url: 'https://www.baidu.com/img/flexible/logo/pc/index@2.png',
            },
          ],
          image: 'https://www.baidu.com/img/flexible/logo/pc/index@2.png',
          tag: 'default Tag',
          progress: 48,
          groupinputdefault: 'groupinputdefault',
          grouptextareadefault: 'grouptextareadefaultgrouptextareadefault',
        },
        y = [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{ value: 'xihu', label: 'West Lake' }],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
              },
            ],
          },
        ],
        C = [
          {
            title: 'Node1',
            value: '0-0',
            children: [
              { title: 'Child Node1', value: '0-0-1' },
              { title: 'Child Node2', value: '0-0-2' },
            ],
          },
          { title: 'Node2', value: '0-1' },
        ];
    },
    11446: function (X, V, e) {
      'use strict';
      e.d(V, {
        s_: function () {
          return B;
        },
        R5: function () {
          return w;
        },
        SI: function () {
          return W;
        },
      });
      var s = e(3182),
        a = e(94043),
        t = e.n(a);
      function P() {
        return l.apply(this, arguments);
      }
      function l() {
        return (
          (l = (0, s.Z)(
            t().mark(function D() {
              var y,
                C,
                i,
                T,
                F = arguments;
              return t().wrap(function (Z) {
                for (;;)
                  switch ((Z.prev = Z.next)) {
                    case 0:
                      return (
                        (y = F.length > 0 && F[0] !== void 0 ? F[0] : ''),
                        (C = F.length > 1 && F[1] !== void 0 ? F[1] : {}),
                        (i = F.length > 2 ? F[2] : void 0),
                        (Z.next = 5),
                        fetch(y, {
                          method: i,
                          mode: 'cors',
                          credentials: 'include',
                          headers: { 'Content-Type': 'application/json' },
                        })
                      );
                    case 5:
                      return (T = Z.sent), Z.abrupt('return', T.json());
                    case 7:
                    case 'end':
                      return Z.stop();
                  }
              }, D);
            }),
          )),
          l.apply(this, arguments)
        );
      }
      var A = (function () {
          var D = (0, s.Z)(
            t().mark(function y(C, i) {
              var T;
              return t().wrap(function (O) {
                for (;;)
                  switch ((O.prev = O.next)) {
                    case 0:
                      return (O.next = 2), P(C, i, 'GET');
                    case 2:
                      return (T = O.sent), O.abrupt('return', T.respData);
                    case 4:
                    case 'end':
                      return O.stop();
                  }
              }, y);
            }),
          );
          return function (C, i) {
            return D.apply(this, arguments);
          };
        })(),
        B = (function () {
          var D = (0, s.Z)(
            t().mark(function y() {
              return t().wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return i.abrupt('return', A('/api/getInfo'));
                    case 1:
                    case 'end':
                      return i.stop();
                  }
              }, y);
            }),
          );
          return function () {
            return D.apply(this, arguments);
          };
        })(),
        W = (function () {
          var D = (0, s.Z)(
            t().mark(function y() {
              return t().wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return i.abrupt('return', A('/api/tree'));
                    case 1:
                    case 'end':
                      return i.stop();
                  }
              }, y);
            }),
          );
          return function () {
            return D.apply(this, arguments);
          };
        })(),
        w = (function () {
          var D = (0, s.Z)(
            t().mark(function y() {
              return t().wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return i.abrupt('return', A('/api/select'));
                    case 1:
                    case 'end':
                      return i.stop();
                  }
              }, y);
            }),
          );
          return function () {
            return D.apply(this, arguments);
          };
        })();
    },
    59421: function (X, V, e) {
      'use strict';
      e.d(V, {
        Z: function () {
          return j;
        },
      });
      var s = e(8870),
        a = e(91896),
        t = e(57337),
        P = e(93224),
        l = e(67294),
        A = e(87167),
        B = e(93456),
        W = e(67070),
        w = e(80051),
        D = e(3251),
        y = e(15920),
        C = e(67497),
        i = e(48073),
        T = e(53807),
        F = e(12487),
        O = e(18970),
        Z = e(4562),
        G = e(86990),
        H = e(69272),
        $ = e(60159),
        L = e(80753),
        N = e(8394),
        x = e(97647),
        J = (r) => {
          var m = r.value,
            c = r.ellipsis,
            M = c === void 0 ? !0 : c,
            z = r.style;
          return l.createElement(
            x.Z.Text,
            { ellipsis: M ? { tooltip: M } : !1, style: z },
            m,
          );
        },
        n = (0, l.memo)(J),
        p = e(66124),
        S = (r) => {
          var m = r.onChange,
            c = r.value,
            M = r.fieldProps,
            z = M === void 0 ? {} : M,
            I = (0, l.useState)(c),
            U = (0, t.Z)(I, 2),
            Q = U[0],
            K = U[1],
            R = z.isTrim,
            u = R === void 0 ? !0 : R,
            ae = (0, P.Z)(z, ['isTrim']),
            q = (k) => {
              var v = (0, p.L)(k);
              K(v), m == null || m(v);
            },
            E = () => {
              var k = Q;
              if (u && (k !== null || k !== void 0))
                if (k instanceof Array)
                  k = k.map((Y) => {
                    var _ = Y == null ? void 0 : Y.trim();
                    return _ === '' ? null : _;
                  });
                else {
                  var v,
                    ee = (v = k) === null || v === void 0 ? void 0 : v.trim();
                  k = ee === '' ? null : ee;
                }
              K(k), m == null || m(k);
            };
          return (
            (0, l.useEffect)(() => {
              c && c !== Q && q(c);
            }, [c]),
            l.createElement(
              A.Z,
              (0, a.Z)({ allowClear: !0, maxLength: 200 }, ae, {
                value: Q,
                onChange: q,
                onBlur: E,
              }),
            )
          );
        };
      S.displayName = 'InputWrap';
      var h = S,
        b = (r) => {
          var m,
            c = r.mode,
            M = c === void 0 ? 'edit' : c,
            z = r.onChange,
            I = r.fieldProps,
            U =
              (m = I == null ? void 0 : I.value) !== null && m !== void 0
                ? m
                : r == null
                ? void 0
                : r.value;
          return l.createElement(
            l.Fragment,
            null,
            M === 'read'
              ? l.createElement(n, (0, a.Z)({}, I, { value: U, type: 'text' }))
              : l.createElement(h, {
                  fieldProps: I,
                  value: U,
                  onChange: z,
                  type: 'input',
                }),
          );
        };
      b.displayName = 'Field';
      var f = (0, l.memo)(b),
        o = (r) => {
          var m = r.value,
            c = r.className,
            M = r.style;
          return l.createElement(
            l.Fragment,
            null,
            m instanceof Array && m.length
              ? l.createElement(
                  'ul',
                  { className: c, style: M },
                  m == null
                    ? void 0
                    : m.map((z, I) =>
                        l.createElement(
                          'li',
                          { key: I },
                          l.createElement(f, r),
                        ),
                      ),
                )
              : null,
          );
        };
      o.displayName = 'ListWrap';
      var d = (0, l.memo)(o);
      function g(r) {
        var m,
          c,
          M = r.type,
          z = r.fieldProps,
          I = r.onChange,
          U = (0, P.Z)(r, ['type', 'fieldProps', 'onChange']),
          Q = (m = z) !== null && m !== void 0 ? m : {},
          K = Q.children,
          R = Q.value,
          u = (0, P.Z)(Q, ['children', 'value']),
          ae = (0, l.useState)(R != null ? R : U.value),
          q = (0, t.Z)(ae, 2),
          E = q[0],
          k = q[1],
          v = (ee) => {
            var Y,
              _ = (0, p.L)(ee);
            k(_),
              u == null ||
                (Y = u.onChange) === null ||
                Y === void 0 ||
                Y.call(u, _),
              I == null || I(_);
          };
        switch (
          ((0, l.useEffect)(() => {
            k(R);
          }, [R]),
          (0, l.useEffect)(() => {
            k(U.value);
          }, [U.value]),
          M)
        ) {
          case 'text':
            return l.createElement(n, (0, a.Z)({}, U, u, { value: E }));
          case 'list-wrap':
            return l.createElement(d, (0, a.Z)({}, U, u, { value: E }));
          case 'input':
            return l.createElement(
              f,
              (0, a.Z)({}, U, {
                fieldProps: u,
                onChange: v,
                value: E,
                mode: 'edit',
              }),
            );
          case 'input-group':
            return l.createElement(
              A.Z.Group,
              u,
              K == null
                ? void 0
                : K(
                    (0, s.Z)(
                      (0, s.Z)({}, u),
                      {},
                      { onChange: v, value: E, disabled: u.disabled },
                    ),
                  ),
            );
          case 'textarea':
            return l.createElement(
              A.Z.TextArea,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'search':
            return l.createElement(
              A.Z.Search,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'password':
            return l.createElement(
              A.Z.Password,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'input-number':
            return l.createElement(
              B.Z,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'select':
            return l.createElement(
              W.Z,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'datepicker':
            return l.createElement(
              w.Z,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'rangepicker':
            return l.createElement(
              w.Z.RangePicker,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'timePicker':
            return l.createElement(
              D.Z,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'timeRangePicker':
            return l.createElement(
              D.Z.RangePicker,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'checkbox':
            return l.createElement(
              y.Z,
              (0, a.Z)({}, u, { onChange: v, checked: E }),
            );
          case 'checkbox-group':
            return l.createElement(
              y.Z.Group,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'radio-group':
            return l.createElement(
              C.ZP.Group,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'rate':
            return l.createElement(
              i.Z,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'slider':
            return l.createElement(
              T.Z,
              (0, a.Z)({}, u, { onChange: v, value: E }),
            );
          case 'switch':
            return l.createElement(
              F.Z,
              (0, a.Z)({}, u, { onChange: v, checked: E }),
            );
          case 'upload':
            return l.createElement(
              O.Z,
              (0, a.Z)({}, u, { onChange: v }),
              K == null
                ? void 0
                : K(
                    (0, s.Z)(
                      (0, s.Z)({}, u),
                      {},
                      { onChange: v, value: E, disabled: u.disabled },
                    ),
                  ),
            );
          case 'avatar':
            return l.createElement(
              Z.C,
              (0, a.Z)({}, u, { onChange: v, src: E }),
            );
          case 'image':
            return l.createElement(
              G.Z,
              (0, a.Z)({}, u, { onChange: v, src: E }),
            );
          case 'tag':
            return l.createElement(
              H.Z,
              (0, a.Z)({}, u, {
                closable:
                  (c = !u.disabled) !== null && c !== void 0 ? c : u.closable,
                onClose: v,
                onChange: v,
              }),
              K
                ? K(
                    (0, s.Z)(
                      (0, s.Z)({}, u),
                      {},
                      { onChange: v, value: E, disabled: u.disabled },
                    ),
                  )
                : E,
            );
          case 'progress':
            return l.createElement($.Z, (0, a.Z)({}, u, { percent: E }));
          case 'tree-select':
            return l.createElement(
              L.Z,
              (0, a.Z)({}, u, { value: E, onChange: v }),
            );
          case 'cascader':
            return l.createElement(
              N.Z,
              (0, a.Z)({}, u, { value: E, onChange: v }),
            );
          default:
            throw new Error(
              '\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684type\u7C7B\u578B',
            );
        }
      }
      g.displayName = 'Element';
      var j = g;
    },
    14404: function (X, V, e) {
      'use strict';
      e.d(V, {
        Z: function () {
          return J;
        },
      });
      var s = e(91896),
        a = e(93224),
        t = e(67294),
        P = e(62648),
        l = e(17412),
        A = e(84690),
        B = e(8870),
        W = e(59421),
        w = e(57337),
        D = e(66124),
        y = (n) => {
          var p = n.disabled,
            S = n.render,
            h = n.values,
            b = n.initialValues,
            f = n.onChange,
            o = n.fieldProps,
            d = (0, t.useState)(),
            g = (0, w.Z)(d, 2),
            j = g[0],
            r = g[1],
            m = (c) => {
              var M,
                z = (0, D.L)(c);
              r(z),
                o == null ||
                  (M = o.onChange) === null ||
                  M === void 0 ||
                  M.call(o, z),
                f == null || f(z);
            };
          return (
            (0, t.useEffect)(() => {
              r(h);
            }, [h]),
            (0, t.useEffect)(() => {
              r(o.value);
            }, [o.value]),
            t.createElement(
              t.Fragment,
              null,
              S == null
                ? void 0
                : S({ value: j, onChange: m, disabled: p, initialValues: b }),
            )
          );
        },
        C = y,
        i = P.Z.Item,
        T = (n) => {
          var p = n.formDisabled,
            S = n.initialValues,
            h = n.values,
            b = n.render,
            f = n.type,
            o = n.width,
            d = o === void 0 ? '100%' : o,
            g = n.fieldProps,
            j = g === void 0 ? {} : g,
            r = (0, a.Z)(n, [
              'formDisabled',
              'initialValues',
              'values',
              'render',
              'type',
              'width',
              'fieldProps',
            ]),
            m = j,
            c = m.disabled,
            M = (0, a.Z)(m, ['disabled']);
          return t.createElement(
            i,
            r,
            f === 'custom'
              ? t.createElement(
                  C,
                  (0, s.Z)({}, r, {
                    fieldProps: M,
                    values: h,
                    render: b,
                    disabled: c != null ? c : p,
                    initialValues: S,
                  }),
                )
              : t.createElement(
                  W.Z,
                  (0, s.Z)(
                    {
                      style: ['checkbox', 'switch', 'tag'].includes(f)
                        ? void 0
                        : { width: d },
                    },
                    r,
                    {
                      fieldProps: (0, B.Z)(
                        (0, B.Z)({}, M),
                        {},
                        { value: h, disabled: c != null ? c : p },
                      ),
                      type: f,
                    },
                  ),
                ),
          );
        },
        F = (0, t.memo)(T),
        O = (n) => {
          var p = n.className,
            S = n.style,
            h = n.options,
            b = n.formDisabled,
            f = n.initialValues;
          return t.createElement(
            'div',
            { className: p, style: S },
            h != null && h.length
              ? h.map((o, d) => {
                  var g, j;
                  return t.createElement(
                    F,
                    (0, s.Z)(
                      {
                        key:
                          (g =
                            o == null || (j = o.name) === null || j === void 0
                              ? void 0
                              : j.toString()) !== null && g !== void 0
                            ? g
                            : d.toString(),
                      },
                      o,
                      {
                        values:
                          (o == null ? void 0 : o.name) &&
                          (f == null ? void 0 : f[o == null ? void 0 : o.name]),
                        formDisabled: b,
                        initialValues: f,
                      },
                    ),
                  );
                })
              : null,
          );
        },
        Z = (0, t.memo)(O),
        G = e(74872),
        H = (n) => {
          var p = n.type,
            S = p === void 0 ? 'row' : p,
            h = n.options,
            b = h === void 0 ? [] : h,
            f = n.disabled,
            o = n.form,
            d = (0, a.Z)(n, ['type', 'options', 'disabled', 'form']),
            g = d,
            j = g.gutter,
            r = j === void 0 ? 16 : j,
            m = g.span,
            c = m === void 0 ? 6 : m;
          return t.createElement(
            l.Z,
            { gutter: r },
            b.map((M, z) => {
              var I,
                U,
                Q,
                K = M.col,
                R = (0, a.Z)(M, ['col']),
                u = (0, G.Z)(R, [
                  'fieldProps',
                  'labelCol',
                  'wrapperCol',
                  'render',
                ]);
              return t.createElement(
                A.Z,
                (0, s.Z)({}, u, {
                  span: K != null ? K : c,
                  key:
                    (I =
                      R == null || (U = R.name) === null || U === void 0
                        ? void 0
                        : U.toString()) !== null && I !== void 0
                      ? I
                      : z.toString(),
                }),
                R.type === 'group'
                  ? t.createElement(
                      Z,
                      (0, s.Z)({}, R, {
                        formDisabled: f,
                        initialValues: d.initialValues,
                      }),
                    )
                  : t.createElement(
                      F,
                      (0, s.Z)({}, R, {
                        values:
                          (R == null ? void 0 : R.name) &&
                          (d == null ||
                          (Q = d.initialValues) === null ||
                          Q === void 0
                            ? void 0
                            : Q[R == null ? void 0 : R.name]),
                        formDisabled: f,
                        initialValues: d.initialValues,
                      }),
                    ),
              );
            }),
          );
        },
        $ = (0, t.memo)(H),
        L = (n) => {
          var p = n.type,
            S = p === void 0 ? 'custom' : p,
            h = n.options,
            b = h === void 0 ? [] : h,
            f = n.disabled,
            o = n.form,
            d = (0, a.Z)(n, ['type', 'options', 'disabled', 'form']);
          return t.createElement(
            t.Fragment,
            null,
            b.map((g, j) => {
              var r, m, c;
              return t.createElement(
                t.Fragment,
                {
                  key:
                    (r =
                      g == null || (m = g.name) === null || m === void 0
                        ? void 0
                        : m.toString()) !== null && r !== void 0
                      ? r
                      : j.toString(),
                },
                g.type === 'group'
                  ? t.createElement(
                      Z,
                      (0, s.Z)({}, g, {
                        formDisabled: f,
                        initialValues: d.initialValues,
                      }),
                    )
                  : t.createElement(
                      F,
                      (0, s.Z)({}, g, {
                        values:
                          (g == null ? void 0 : g.name) &&
                          (d == null ||
                          (c = d.initialValues) === null ||
                          c === void 0
                            ? void 0
                            : c[g == null ? void 0 : g.name]),
                        formDisabled: f,
                        initialValues: d.initialValues,
                      }),
                    ),
              );
            }),
          );
        },
        N = (0, t.memo)(L),
        x = (n) => {
          var p = n.type,
            S = p === void 0 ? 'row' : p,
            h = (0, a.Z)(n, ['type']),
            b = h.options,
            f = b === void 0 ? [] : b,
            o = h.form,
            d = (0, a.Z)(h, ['options', 'form']);
          return t.createElement(
            t.Fragment,
            null,
            f != null && f.length
              ? t.createElement(
                  P.Z,
                  (0, s.Z)({}, d, { form: o }),
                  S === 'row'
                    ? t.createElement($, (0, s.Z)({ type: S }, h))
                    : t.createElement(N, (0, s.Z)({ type: S }, h)),
                )
              : null,
          );
        };
      x.displayName = 'SchemaForm';
      var J = (0, t.memo)(x);
    },
    66124: function (X, V, e) {
      'use strict';
      e.d(V, {
        L: function () {
          return s;
        },
      });
      var s = (a) => {
        var t;
        return a != null && a.target ? (t = a.target.value) : (t = a), t;
      };
    },
    7240: function (X, V, e) {
      var s = {
        './af': 94133,
        './af.js': 94133,
        './ar': 54370,
        './ar-dz': 52462,
        './ar-dz.js': 52462,
        './ar-kw': 26287,
        './ar-kw.js': 26287,
        './ar-ly': 75799,
        './ar-ly.js': 75799,
        './ar-ma': 49568,
        './ar-ma.js': 49568,
        './ar-sa': 24753,
        './ar-sa.js': 24753,
        './ar-tn': 5558,
        './ar-tn.js': 5558,
        './ar.js': 54370,
        './az': 15540,
        './az.js': 15540,
        './be': 36459,
        './be.js': 36459,
        './bg': 77450,
        './bg.js': 77450,
        './bm': 16465,
        './bm.js': 16465,
        './bn': 84433,
        './bn-bd': 27077,
        './bn-bd.js': 27077,
        './bn.js': 84433,
        './bo': 55753,
        './bo.js': 55753,
        './br': 88961,
        './br.js': 88961,
        './bs': 49513,
        './bs.js': 49513,
        './ca': 2445,
        './ca.js': 2445,
        './cs': 27278,
        './cs.js': 27278,
        './cv': 70533,
        './cv.js': 70533,
        './cy': 69085,
        './cy.js': 69085,
        './da': 82062,
        './da.js': 82062,
        './de': 75991,
        './de-at': 33084,
        './de-at.js': 33084,
        './de-ch': 4187,
        './de-ch.js': 4187,
        './de.js': 75991,
        './dv': 50139,
        './dv.js': 50139,
        './el': 72138,
        './el.js': 72138,
        './en-au': 19789,
        './en-au.js': 19789,
        './en-ca': 49770,
        './en-ca.js': 49770,
        './en-gb': 93415,
        './en-gb.js': 93415,
        './en-ie': 2011,
        './en-ie.js': 2011,
        './en-il': 33807,
        './en-il.js': 33807,
        './en-in': 45505,
        './en-in.js': 45505,
        './en-nz': 95465,
        './en-nz.js': 95465,
        './en-sg': 90003,
        './en-sg.js': 90003,
        './eo': 23029,
        './eo.js': 23029,
        './es': 32122,
        './es-do': 6660,
        './es-do.js': 6660,
        './es-mx': 32615,
        './es-mx.js': 32615,
        './es-us': 1866,
        './es-us.js': 1866,
        './es.js': 32122,
        './et': 81570,
        './et.js': 81570,
        './eu': 5464,
        './eu.js': 5464,
        './fa': 83001,
        './fa.js': 83001,
        './fi': 59018,
        './fi.js': 59018,
        './fil': 18711,
        './fil.js': 18711,
        './fo': 83855,
        './fo.js': 83855,
        './fr': 25437,
        './fr-ca': 39433,
        './fr-ca.js': 39433,
        './fr-ch': 99467,
        './fr-ch.js': 99467,
        './fr.js': 25437,
        './fy': 2248,
        './fy.js': 2248,
        './ga': 94185,
        './ga.js': 94185,
        './gd': 86989,
        './gd.js': 86989,
        './gl': 69869,
        './gl.js': 69869,
        './gom-deva': 16831,
        './gom-deva.js': 16831,
        './gom-latn': 4857,
        './gom-latn.js': 4857,
        './gu': 71020,
        './gu.js': 71020,
        './he': 66592,
        './he.js': 66592,
        './hi': 74743,
        './hi.js': 74743,
        './hr': 20046,
        './hr.js': 20046,
        './hu': 2712,
        './hu.js': 2712,
        './hy-am': 33126,
        './hy-am.js': 33126,
        './id': 25587,
        './id.js': 25587,
        './is': 12310,
        './is.js': 12310,
        './it': 47216,
        './it-ch': 15061,
        './it-ch.js': 15061,
        './it.js': 47216,
        './ja': 89934,
        './ja.js': 89934,
        './jv': 25019,
        './jv.js': 25019,
        './ka': 81703,
        './ka.js': 81703,
        './kk': 32312,
        './kk.js': 32312,
        './km': 43194,
        './km.js': 43194,
        './kn': 32478,
        './kn.js': 32478,
        './ko': 47721,
        './ko.js': 47721,
        './ku': 80104,
        './ku.js': 80104,
        './ky': 86252,
        './ky.js': 86252,
        './lb': 71898,
        './lb.js': 71898,
        './lo': 33798,
        './lo.js': 33798,
        './lt': 86785,
        './lt.js': 86785,
        './lv': 65891,
        './lv.js': 65891,
        './me': 29742,
        './me.js': 29742,
        './mi': 17945,
        './mi.js': 17945,
        './mk': 23302,
        './mk.js': 23302,
        './ml': 96477,
        './ml.js': 96477,
        './mn': 67376,
        './mn.js': 67376,
        './mr': 57985,
        './mr.js': 57985,
        './ms': 66192,
        './ms-my': 45791,
        './ms-my.js': 45791,
        './ms.js': 66192,
        './mt': 15275,
        './mt.js': 15275,
        './my': 47764,
        './my.js': 47764,
        './nb': 81410,
        './nb.js': 81410,
        './ne': 63290,
        './ne.js': 63290,
        './nl': 3266,
        './nl-be': 25266,
        './nl-be.js': 25266,
        './nl.js': 3266,
        './nn': 33842,
        './nn.js': 33842,
        './oc-lnc': 21853,
        './oc-lnc.js': 21853,
        './pa-in': 45520,
        './pa-in.js': 45520,
        './pl': 55845,
        './pl.js': 55845,
        './pt': 7714,
        './pt-br': 47953,
        './pt-br.js': 47953,
        './pt.js': 7714,
        './ro': 5e4,
        './ro.js': 5e4,
        './ru': 47928,
        './ru.js': 47928,
        './sd': 52886,
        './sd.js': 52886,
        './se': 79314,
        './se.js': 79314,
        './si': 71160,
        './si.js': 71160,
        './sk': 72351,
        './sk.js': 72351,
        './sl': 18956,
        './sl.js': 18956,
        './sq': 48641,
        './sq.js': 48641,
        './sr': 72289,
        './sr-cyrl': 48013,
        './sr-cyrl.js': 48013,
        './sr.js': 72289,
        './ss': 87289,
        './ss.js': 87289,
        './sv': 90108,
        './sv.js': 90108,
        './sw': 52609,
        './sw.js': 52609,
        './ta': 74167,
        './ta.js': 74167,
        './te': 93362,
        './te.js': 93362,
        './tet': 10860,
        './tet.js': 10860,
        './tg': 50598,
        './tg.js': 50598,
        './th': 13282,
        './th.js': 13282,
        './tk': 61525,
        './tk.js': 61525,
        './tl-ph': 52683,
        './tl-ph.js': 52683,
        './tlh': 5629,
        './tlh.js': 5629,
        './tr': 85410,
        './tr.js': 85410,
        './tzl': 26531,
        './tzl.js': 26531,
        './tzm': 42831,
        './tzm-latn': 59708,
        './tzm-latn.js': 59708,
        './tzm.js': 42831,
        './ug-cn': 83373,
        './ug-cn.js': 83373,
        './uk': 34890,
        './uk.js': 34890,
        './ur': 26711,
        './ur.js': 26711,
        './uz': 12649,
        './uz-latn': 24986,
        './uz-latn.js': 24986,
        './uz.js': 12649,
        './vi': 85101,
        './vi.js': 85101,
        './x-pseudo': 81025,
        './x-pseudo.js': 81025,
        './yo': 63295,
        './yo.js': 63295,
        './zh-cn': 77727,
        './zh-cn.js': 77727,
        './zh-hk': 39826,
        './zh-hk.js': 39826,
        './zh-mo': 13285,
        './zh-mo.js': 13285,
        './zh-tw': 56941,
        './zh-tw.js': 56941,
      };
      function a(P) {
        var l = t(P);
        return e(l);
      }
      function t(P) {
        if (!e.o(s, P)) {
          var l = new Error("Cannot find module '" + P + "'");
          throw ((l.code = 'MODULE_NOT_FOUND'), l);
        }
        return s[P];
      }
      (a.keys = function () {
        return Object.keys(s);
      }),
        (a.resolve = t),
        (X.exports = a),
        (a.id = 7240);
    },
  },
]);
