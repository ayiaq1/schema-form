(self.webpackChunk_test_schema_form=self.webpackChunk_test_schema_form||[]).push([[15],{8036:function(){},55658:function(w,C,a){"use strict";a.r(C),a.d(C,{default:function(){return S}});var e=a(67294),n=a(16924),i=a(11695),B=a(93096),g=a.n(B),L=a(8036);function p(t,l){return I(t)||b(t,l)||D(t,l)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,l){if(!!t){if(typeof t=="string")return f(t,l);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return f(t,l)}}function f(t,l){(l==null||l>t.length)&&(l=t.length);for(var u=0,r=new Array(l);u<l;u++)r[u]=t[u];return r}function b(t,l){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var r=[],m=!0,o=!1,F,s;try{for(u=u.call(t);!(m=(F=u.next()).done)&&(r.push(F.value),!(l&&r.length===l));m=!0);}catch(h){o=!0,s=h}finally{try{!m&&u.return!=null&&u.return()}finally{if(o)throw s}}return r}}function I(t){if(Array.isArray(t))return t}var k=function(l){var u=l.children,r=(0,e.useRef)(),m=(0,e.useState)(!1),o=p(m,2),F=o[0],s=o[1],h=(0,e.useState)(!1),A=p(h,2),x=A[0],P=A[1];return(0,e.useEffect)(function(){var E=r.current,d=g()(function(){s(E.scrollLeft>0),P(E.scrollLeft<E.scrollWidth-E.offsetWidth)},100);return d(),E.addEventListener("scroll",d),window.addEventListener("resize",d),function(){E.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]),e.createElement("div",{className:"__dumi-default-table"},e.createElement("div",{className:"__dumi-default-table-content",ref:r,"data-left-folded":F||void 0,"data-right-folded":x||void 0},e.createElement("table",null,u)))},c=k,v=e.memo(t=>{var l=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h1",{id:"schema-form"},e.createElement(n.AnchorLink,{to:"#schema-form","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"schema-form"),e.createElement("h2",{id:"\u7ED9\u5F00\u53D1\u8005\u7528\u7684\u8868\u5355\u5DE5\u5177\u57FA\u4E8E-ant-design-react"},e.createElement(n.AnchorLink,{to:"#\u7ED9\u5F00\u53D1\u8005\u7528\u7684\u8868\u5355\u5DE5\u5177\u57FA\u4E8E-ant-design-react","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7ED9\u5F00\u53D1\u8005\u7528\u7684\u8868\u5355\u5DE5\u5177\uFF08\u57FA\u4E8E Ant Design React\uFF09"),e.createElement("p",null,e.createElement("strong",null,"\u57FA\u4E8E Ant Design React \u800C\u5F00\u53D1\u7684\u9002\u914D\u7EC4\u4EF6\uFF0C\u5C3D\u91CF\u4F7F\u7528\u6570\u636E\u6765\u66FF\u4EE3\u5143\u7D20\u6807\u7B7E\u3002")),e.createElement("p",null,e.createElement(n.Link,{to:"https://ayiaq1.github.io/schema-form/"},"\u5F00\u53D1\u8005\u6587\u6863+\u5728\u7EBFDemo")),e.createElement("h6",{id:"schemaform-\u7EC4\u4EF6"},e.createElement(n.AnchorLink,{to:"#schemaform-\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"SchemaForm \u7EC4\u4EF6"),e.createElement(i.Z,{code:`<SchemaForm
  type="custom"
  initialValues={initValues}
  disabled={disabled}
  form={form}
  onFinish={onFinish}
  onValuesChange={onValuesChange}
  options={[
  {
    label:"Form.Item\u7684label",
    name:"Form.Item\u7684name",
    type:"input",
  ]}
/>`,lang:"unknown"}),e.createElement("h6",{id:"\u4E5F\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u7684\u5143\u7D20\u7EC4\u4EF6"},e.createElement(n.AnchorLink,{to:"#\u4E5F\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u7684\u5143\u7D20\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u4E5F\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u7684\u5143\u7D20\u7EC4\u4EF6"),e.createElement(i.Z,{code:'<Element type="text" value="test text" />',lang:"unknown"}),e.createElement("h2",{id:"\u6574\u4F53\u7ED3\u6784\u56FE"},e.createElement(n.AnchorLink,{to:"#\u6574\u4F53\u7ED3\u6784\u56FE","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6574\u4F53\u7ED3\u6784\u56FE"),e.createElement(i.Z,{code:`graph TB

    SchemaForm(SchemaForm) --> Element[Element\u9002\u914D\u5C42,\u6839\u636Etype\u5339\u914D\u7EC4\u4EF6\u7C7B\u578B]
    SchemaForm --> CustomRender[Custom Render \u81EA\u5B9A\u4E49\u6E32\u67D3\u7EC4\u4EF6]`,lang:"mermaid"}),e.createElement("h2",{id:"element-\u4F5C\u4E3A\u5143\u7D20\u7EC4\u4EF6\u7684\u9002\u914D\u5C42\u800C\u5B58\u5728\u4E5F\u53EF\u4EE5\u5355\u72EC\u5F15\u5165\u4F7F\u7528"},e.createElement(n.AnchorLink,{to:"#element-\u4F5C\u4E3A\u5143\u7D20\u7EC4\u4EF6\u7684\u9002\u914D\u5C42\u800C\u5B58\u5728\u4E5F\u53EF\u4EE5\u5355\u72EC\u5F15\u5165\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"Element \u4F5C\u4E3A\u5143\u7D20\u7EC4\u4EF6\u7684\u9002\u914D\u5C42\u800C\u5B58\u5728\uFF0C\u4E5F\u53EF\u4EE5\u5355\u72EC\u5F15\u5165\u4F7F\u7528"),e.createElement(i.Z,{code:"graph TB\n    Element(Element\u9002\u914D\u5C42,\u652F\u6301\u7684\u7C7B\u578B) --> type[type]\n    type --> |text| Text[Text]\n    type --> |input| InputWrap[InputWrap:\u589E\u52A0\u4E86Input\u7684\u8FC7\u6EE4\u7A7A\u683C\u529F\u80FD]\n    type --> |list-wrap| ListWrap[ListWrap]\n    type --> |other| Ant\u7684\u7C7B\u578B\u63A8\u5BFC,\u8BE6\u89C1:```API:Element.type```",lang:"mermaid"}),e.createElement("h2",{id:"apischemaform-\u5305\u88F9-form-\u7684\u7EC4\u4EF6"},e.createElement(n.AnchorLink,{to:"#apischemaform-\u5305\u88F9-form-\u7684\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"API:SchemaForm \u5305\u88F9 Form \u7684\u7EC4\u4EF6"),e.createElement(c,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u53C2\u6570"),e.createElement("th",null,"\u63CF\u8FF0"),e.createElement("th",null,"\u7C7B\u578B"),e.createElement("th",{align:"left"},"\u9ED8\u8BA4\u503C"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"type"),e.createElement("td",null,"\u8BBE\u7F6E\u5E03\u5C40\u6837\u5F0F\u3002row\uFF1A\u4F7F\u7528 Row \u5305\u88F9\u3002custom: \u76F4\u63A5\u6E32\u67D3\u3002"),e.createElement("td",null,"row"),e.createElement("td",{align:"left"},"custom")),e.createElement("tr",null,e.createElement("td",null,"disabled"),e.createElement("td",null,"\u662F\u5426\u7981\u7528\uFF0C\u5982\u679C item \u6709\uFF0C\u4EE5 item \u7684\u4E3A\u7ED3\u679C"),e.createElement("td",null,"boolean"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"options"),e.createElement("td",null,"\u6E32\u67D3\u5217\u8868"),e.createElement("td",null,"IFormItem[]"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"form"),e.createElement("td",null,"\u5916\u90E8\u4F20\u5165\u7684\uFF1A",e.createElement("code",null,"Form.useForm()")),e.createElement("td",null,"FormInstance"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"initialValues"),e.createElement("td",null,"form.initialValues \u900F\u4F20"),e.createElement("td",null,"Record<string, any>"),e.createElement("td",{align:"left"},"-")))),e.createElement("h3",{id:"api-schemaformtyperow-\u7C7B\u578B\u4E3A-row-\u65F6\u7684\u53C2\u6570"},e.createElement(n.AnchorLink,{to:"#api-schemaformtyperow-\u7C7B\u578B\u4E3A-row-\u65F6\u7684\u53C2\u6570","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"API: SchemaForm.type=row \u7C7B\u578B\u4E3A row \u65F6\u7684\u53C2\u6570"),e.createElement(c,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u53C2\u6570"),e.createElement("th",null,"\u63CF\u8FF0"),e.createElement("th",null,"\u7C7B\u578B"),e.createElement("th",{align:"left"},"\u9ED8\u8BA4\u503C"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"gutter"),e.createElement("td",null,"Row \u7684 gutter"),e.createElement("td",null,"number"),e.createElement("td",{align:"left"},"16")),e.createElement("tr",null,e.createElement("td",null,"span"),e.createElement("td",null,"Row \u7684 span"),e.createElement("td",null,"number"),e.createElement("td",{align:"left"},"6")))),e.createElement("h3",{id:"api-schemaformoptions-\u6E32\u67D3\u5217\u8868\u5305\u88F9-formitem-\u7684\u6570\u7EC4"},e.createElement(n.AnchorLink,{to:"#api-schemaformoptions-\u6E32\u67D3\u5217\u8868\u5305\u88F9-formitem-\u7684\u6570\u7EC4","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"API: SchemaForm.options \u6E32\u67D3\u5217\u8868\uFF0C\u5305\u88F9 Form.Item \u7684\u6570\u7EC4"),e.createElement(c,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u53C2\u6570"),e.createElement("th",null,"\u63CF\u8FF0"),e.createElement("th",null,"\u7C7B\u578B"),e.createElement("th",{align:"left"},"\u9ED8\u8BA4\u503C"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"disabled"),e.createElement("td",null,"\u5F53\u524D\u8FD9\u4E00\u6761 item \u5185\u5BB9\u662F\u5426\u7981\u7528"),e.createElement("td",null,"boolean"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"render"),e.createElement("td",null,"\u53EA\u6709 custom \u7C7B\u578B \u624D\u6709\u7684\u6E32\u67D3 children \u65B9\u6CD5"),e.createElement("td",null,"(props: ISchemaChildrenProps) => React.ReactNode"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"fieldProps"),e.createElement("td",null,"\u900F\u4F20\u7EC4\u4EF6\u53C2\u6570\u3002"),e.createElement("td",null,"\u4EE5 type \u81EA\u52A8\u63A8\u52A8\u7EC4\u4EF6\u7C7B\u578B"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"col"),e.createElement("td",null,e.createElement("code",null,"type:row"),"\u7C7B\u578B\u65F6\uFF0Ccol \u7684\u5360\u4F4D,\u5982\u679C item \u6709\u3002\u4EE5 item \u4E3A\u7ED3\u679C"),e.createElement("td",null,"number"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"width"),e.createElement("td",null,"\u94FA\u6EE1 item \u5BBD\u5EA6\u3002\u9ED8\u8BA4\uFF1A\u5BBD\u5EA6 100%\u3002auto: \u4F7F\u7528\u9ED8\u8BA4\u7EC4\u4EF6\u5BBD\u5EA6"),e.createElement("td",null,"string"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"type"),e.createElement("td",null,"\u8054\u5408\u7C7B\u578B\uFF0C\u8BE6\u89C1\uFF1A",e.createElement("code",null,"API:SchemaForm.options.type")),e.createElement("td",null,"IUnionType"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"other"),e.createElement("td",null,"Ant \u7684 FormItemProps \u53C2\u6570"),e.createElement("td",null,"FormItemProps"),e.createElement("td",{align:"left"},"-")))),e.createElement("h3",{id:"apielementtype-element-\u7EC4\u4EF6\u7684-type-\u679A\u4E3E"},e.createElement(n.AnchorLink,{to:"#apielementtype-element-\u7EC4\u4EF6\u7684-type-\u679A\u4E3E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"API:Element.type Element \u7EC4\u4EF6\u7684 type \u679A\u4E3E"),e.createElement(c,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u652F\u6301\u7684 type"),e.createElement("th",null,"\u63CF\u8FF0\uFF08Ant \u7684\u7C7B\u578B\u63A8\u5BFC\u51E0\u4E4E\u90FD\u662F\u7EC4\u4EF6\u7684\u5C0F\u9A7C\u5CF0\u62FC\u5199\uFF1ATimePicker.RangePicker -> timeRangePicker\uFF09"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"text"),e.createElement("td",null,"\u53EA\u8BFB\u6587\u672C\u3002\u8BBE\u7F6E\u5BBD\u5EA6\u4E4B\u540E\u652F\u6301\u8D85\u957F\u9690\u85CF")),e.createElement("tr",null,e.createElement("td",null,"input"),e.createElement("td",null,"\u5305\u88F9 Ant \u7684 Input\uFF0C\u589E\u52A0\u4E86\u9ED8\u8BA4\u53C2\u6570\u3002\u8BE6\u89C1: ",e.createElement("code",null,"API:Input"))),e.createElement("tr",null,e.createElement("td",null,"list-wrap"),e.createElement("td",null,"\u5217\u8868\u7EC4\u4EF6\uFF0C\u901A\u8FC7 mode \u53EF\u4EE5\u4FEE\u6539\u4E3A\u53EA\u8BFB\u3001\u7F16\u8F91\u72B6\u6001")),e.createElement("tr",null,e.createElement("td",null,"input-group"),e.createElement("td",null,"Input.Group")),e.createElement("tr",null,e.createElement("td",null,"textarea"),e.createElement("td",null,"Input.TextArea")),e.createElement("tr",null,e.createElement("td",null,"search"),e.createElement("td",null,"Input.Search")),e.createElement("tr",null,e.createElement("td",null,"password"),e.createElement("td",null,"Input.Password")),e.createElement("tr",null,e.createElement("td",null,"input-number"),e.createElement("td",null,"InputNumber")),e.createElement("tr",null,e.createElement("td",null,"select"),e.createElement("td",null,"Select")),e.createElement("tr",null,e.createElement("td",null,"datepicker"),e.createElement("td",null,"DatePicker\uFF08\u5355\u4E2A\u65E5\u671F\uFF09")),e.createElement("tr",null,e.createElement("td",null,"rangepicker"),e.createElement("td",null,"DatePicker.RangePicker\uFF08\u65E5\u671F\u533A\u95F4\uFF09")),e.createElement("tr",null,e.createElement("td",null,"timePicker"),e.createElement("td",null,"TimePicker\uFF08\u5355\u4E2A\u65F6\u95F4\uFF09")),e.createElement("tr",null,e.createElement("td",null,"timeRangePicker"),e.createElement("td",null,"TimePicker.RangePicker\uFF08\u65F6\u95F4\u533A\u95F4\uFF09")),e.createElement("tr",null,e.createElement("td",null,"checkbox"),e.createElement("td",null,"Checkbox")),e.createElement("tr",null,e.createElement("td",null,"checkbox-group"),e.createElement("td",null,"Checkbox.Group")),e.createElement("tr",null,e.createElement("td",null,"radio-group"),e.createElement("td",null,"Radio.Group")),e.createElement("tr",null,e.createElement("td",null,"rate"),e.createElement("td",null,"Rate")),e.createElement("tr",null,e.createElement("td",null,"slider"),e.createElement("td",null,"Slider")),e.createElement("tr",null,e.createElement("td",null,"switch"),e.createElement("td",null,"Switch")),e.createElement("tr",null,e.createElement("td",null,"upload"),e.createElement("td",null,"Upload")),e.createElement("tr",null,e.createElement("td",null,"avatar"),e.createElement("td",null,"Avatar")),e.createElement("tr",null,e.createElement("td",null,"image"),e.createElement("td",null,"Image")),e.createElement("tr",null,e.createElement("td",null,"tag"),e.createElement("td",null,"Tag")),e.createElement("tr",null,e.createElement("td",null,"progress"),e.createElement("td",null,"Progress")),e.createElement("tr",null,e.createElement("td",null,"tree-select"),e.createElement("td",null,"TreeSelect")),e.createElement("tr",null,e.createElement("td",null,"cascader"),e.createElement("td",null,"Cascader")),e.createElement("tr",null,e.createElement("td",null,"\u9519\u8BEF\u7C7B\u578B\u4F1A\u629B\u51FA\u9519\u8BEF"),e.createElement("td",null,"\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684 type \u7C7B\u578B")))),e.createElement("h3",{id:"apischemaformoptionstype-schemaform-\u7EC4\u4EF6\u7684-itemtype-\u679A\u4E3E"},e.createElement(n.AnchorLink,{to:"#apischemaformoptionstype-schemaform-\u7EC4\u4EF6\u7684-itemtype-\u679A\u4E3E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"API:SchemaForm.options.type SchemaForm \u7EC4\u4EF6\u7684 Item.type \u679A\u4E3E"),e.createElement(c,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u652F\u6301\u7684 type"),e.createElement("th",null,"\u63CF\u8FF0"),e.createElement("th",null,"\u7C7B\u578B"),e.createElement("th",{align:"left"},"\u9ED8\u8BA4\u503C"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Element.type"),e.createElement("td",null,"\u652F\u6301\u6240\u6709\u7684 Element.type \u7C7B\u578B"),e.createElement("td",null,"EnumElementType"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"group"),e.createElement("td",null,"\u5C06 Item \u4F5C\u4E3A\u4E00\u4E2A\u7EC4\u5305\u88F9"),e.createElement("td",null,"string"),e.createElement("td",{align:"left"},"-")),e.createElement("tr",null,e.createElement("td",null,"custom"),e.createElement("td",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u7EC4\u4EF6"),e.createElement("td",null,e.createElement("code",null,"(props: ISchemaChildrenProps) => React.ReactNode")),e.createElement("td",{align:"left"},"-")))),e.createElement("h3",{id:"\u9010\u6B65\u5B8C\u5584\u7684\u5355\u9875\u6D4B\u8BD5"},e.createElement(n.AnchorLink,{to:"#\u9010\u6B65\u5B8C\u5584\u7684\u5355\u9875\u6D4B\u8BD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u9010\u6B65\u5B8C\u5584\u7684\u5355\u9875\u6D4B\u8BD5"),e.createElement("p",null,e.createElement("img",{src:"https://raw.githubusercontent.com/ayiaq1/schema-form/main/images/jest-coverage.png",alt:"jest-coverage"}))))}),S=t=>{var l=e.useContext(n.context),u=l.demos;return e.useEffect(()=>{var r;t!=null&&(r=t.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(v,{demos:u})}}}]);
