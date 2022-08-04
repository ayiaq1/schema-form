# Field

## 整体结构图 Field 作为只读组件的适配层而存在，也可以单独引入使用

````mermaid
graph TB
    Field(Field适配层,支持的类型) --> type[type]
    type --> |text textarea input search inputNumber inputGroup| Text[Text]
    type --> |select| SelectField[SelectField]
    type --> |treeSelect| TreeSelectField[TreeSelectField]
    type --> |cascader| CascaderField[CascaderField]
    type --> |datePicker| TimeConvertWrap[自动转换日期]
    type --> |rangePicker| TimeConvertWrap[自动转换日期]
    type --> |timePicker| TimeConvertWrap[自动转换日期]
    type --> |timeRangePicker| TimeConvertWrap[自动转换日期]
    type --> |custom| render[自定义渲染方法]
    type --> |other| Ant的类型推导,详见:```API:Element.type```
````

# Demo

```

import { Field } from '@dawdler/schema-form';

<Field type="text" value="filed text value" />

```

<code src="../../packages/element/example/FieldDemo.tsx" />

### API:Field.type Field 组件的 type 枚举

| 支持的 type     | 描述（Ant 的类型推导几乎都是组件的小驼峰拼写：TimePicker.RangePicker -> timeRangePicker） |
| --------------- | ----------------------------------------------------------------------------------------- |
| text            | 只读文本。设置宽度之后支持超长隐藏                                                        |
| input           | 包裹 Ant 的 Input，增加了默认参数。详见: `API:Input`                                      |
| datePicker      | TimeConvertWrap 包裹：DatePicker（单个日期）                                              |
| rangePicker     | TimeConvertWrap 包裹：DatePicker.RangePicker（日期区间）                                  |
| timePicker      | TimeConvertWrap 包裹：TimePicker（单个时间）                                              |
| timeRangePicker | TimeConvertWrap 包裹：TimePicker.RangePicker（时间区间）                                  |
| inputGroup      | Input.Group                                                                               |
| textarea        | Input.TextArea                                                                            |
| search          | Input.Search                                                                              |
| password        | Input.Password                                                                            |
| inputNumber     | InputNumber                                                                               |
| select          | Select                                                                                    |
| checkbox        | Checkbox                                                                                  |
| checkboxGroup   | Checkbox.Group                                                                            |
| radioGroup      | Radio.Group                                                                               |
| rate            | Rate                                                                                      |
| slider          | Slider                                                                                    |
| switch          | Switch                                                                                    |
| upload          | Upload                                                                                    |
| avatar          | Avatar                                                                                    |
| image           | Image                                                                                     |
| tag             | Tag                                                                                       |
| progress        | Progress                                                                                  |
| treeSelect      | TreeSelect                                                                                |
| cascader        | Cascader                                                                                  |
| 不匹配类型抛错  | `throw new Error`没有找到对应的 type 类型                                                 |
