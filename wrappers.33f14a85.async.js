(self.webpackChunk_dawdler_schema_form_doc=self.webpackChunk_dawdler_schema_form_doc||[]).push([[275],{73602:function(x,a,e){"use strict";e.d(a,{m:function(){return s.m}});var s=e(67624),H=e(93142)},27940:function(x,a,e){"use strict";e.r(a),e.d(a,{default:function(){return N}});var s=e(91896),H=e(67294),S=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"schema-form","meta":{"order":null}},{"title":"Guide","path":"/guide","meta":{},"children":[{"path":"/guide/element","title":"Element","meta":{}},{"path":"/guide/schema-form-custom","title":"Custom","meta":{}},{"path":"/guide/schema-form-row","title":"Row","meta":{}}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"schema-form","mode":"doc","repository":{"url":"https://github.com/ayiaq1/schema-form","branch":"master"},"theme":{}}'),l=e(3182),w=e(94043),r=e.n(w),p=e(33761),D=`/*
 * @Author: yihuang
 * @Date: 2021-10-09 11:58:48
 * @Description: \u539F\u5B50\u7EC4\u4EF6 - demo
 * @LastModifiedBy: yihuang
 */
import React, { useState, useMemo } from 'react';
import { Form, Radio, Button, Space, Card } from 'antd';
import type { ModeType } from '../src/typings';
import { useRequest } from 'ahooks';
import { getDetails } from './service';
import { Element } from '../src';

const { Item } = Form;
const str =
  '\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848\u8D85\u7EA7\u957F\u7684\u6587\u6848';

const Index = () => {
  const [value, setValue] = useState<ModeType>('read');
  const type = useMemo(() => (value === 'edit' ? 'input' : 'text'), [value]);
  const [form] = Form.useForm();
  const [antForm] = Form.useForm();

  useRequest(getDetails, {
    onSuccess: (backData: any) => {
      antForm.setFieldsValue(backData);
    },
  });
  const onSubmit = () => {
    console.log('form.values', form.getFieldsValue());
  };
  const onReset = () => {
    form.resetFields();
    console.log('form.values', form.getFieldsValue());
  };
  return (
    <Card title="element form">
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="read">\u53EA\u8BFB</Radio>
        <Radio value="edit">\u7F16\u8F91</Radio>
      </Radio.Group>
      <Form
        form={form}
        initialValues={{
          text: '\u9759\u6001\u6587\u6848',
          textEllipsis: str,
          textList: [str, str, str],
        }}
        onValuesChange={(e) => {
          console.log('element form onValuesChange=>', e);
        }}
      >
        <Item label="text" name="text">
          <Element type={type as any} />
        </Item>
        <Item
          label="text-edit"
          name="textEllipsis"
          style={{
            width: '300px',
          }}
        >
          <Element type={type as any} ellipsis={true} />
        </Item>
        <Item
          label="text-list"
          name="textList"
          style={{
            width: '400px',
          }}
        >
          <Element type="list-wrap" mode={value} ellipsis={true} />
        </Item>

        <Item
          style={{
            width: '400px',
          }}
        >
          <Space>
            <Button type="primary" onClick={onSubmit}>
              \u63D0\u4EA4
            </Button>
            <Button onClick={onReset}>\u91CD\u7F6E</Button>
          </Space>
        </Item>
      </Form>
    </Card>
  );
};

export default Index;`,P=`import { get } from './http';

export const getDetails = async () => {
  return get('/api/getInfo');
};

export const getTreeData = async () => {
  return get('/api/tree');
};
export const getSelectData = async () => {
  return get('/api/select');
};`,T=`// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
// Example POST method implementation:
async function http(url = '', data = {}, method?: string) {
  // Default options are marked with *
  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const get = async (url: any, data?: any) => {
  const response = await http(url, data, 'GET');
  return response.respData;
};`,d=`/*
 * @Author: yihuang
 * @Date: 2021-10-09 11:46:52
 * @Description: \u6587\u672C\u7C7B\u578B
 * @LastModifiedBy: yihuang
 */
import Element from './components/Element';
import SchemaForm from './components/SchemaForm';

export { Element, SchemaForm };

export default SchemaForm;`,m=`/*
 * @Author: yihuang
 * @Date: 2022-02-16 10:42:13
 * @Description: \u7EC4\u4EF6\u7684\u9002\u914D\u5C42\uFF0C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u4EC0\u4E48\u7C7B\u578B\u7684\u7EC4\u4EF6\u3002
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import type {
  IAvatarProps,
  ICascaderProps,
  ICheckboxGroupProps,
  ICheckboxProps,
  IDatePickerProps,
  IImageProps,
  IInputGroupProps,
  IInputNumberProps,
  IInputProps,
  IListWrapProps,
  IPasswordProps,
  IProgressProps,
  IProps,
  IRadioGroupProps,
  IRangePickerProps,
  IRateProps,
  ISearchProps,
  ISelectProps,
  ISliderProps,
  ISwitchProps,
  ITagProps,
  ITextAreaProps,
  ITextProps,
  ITimePickerProps,
  ITimeRangePickerProps,
  ITreeSelectProps,
  IUploadProps,
} from '../typings';
import {
  Select,
  DatePicker,
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Rate,
  Slider,
  Switch,
  TimePicker,
  Upload,
  Image,
  Tag,
  Progress,
  Cascader,
  TreeSelect,
  Avatar,
} from 'antd';
import Field from './Field';
import Text from './Text';
import ListWrap from './ListWrap';
import { converChangeEvent } from './SchemaForm/utils';

/** Element \u72EC\u7ACB\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u91CD\u8F7Dtype\u63A8\u5BFC\u7C7B\u578B\u3002 */
/** text */
function Element(props: ITextProps): any;
/** list-wrap */
function Element(props: IListWrapProps): any;
/** input */
function Element(props: IInputProps): any;
/** input-group */
function Element(props: IInputGroupProps): any;
/** textarea */
function Element(props: ITextAreaProps): any;
/** search */
function Element(props: ISearchProps): any;
/** password */
function Element(props: IPasswordProps): any;
/** InputNumber */
function Element(props: IInputNumberProps): any;
/** Select */
function Element(props: ISelectProps): any;
/** datepicker */
function Element(props: IDatePickerProps): any;
/** rangepicker */
function Element(props: IRangePickerProps): any;
/** timePicker */
function Element(props: ITimePickerProps): any;
/** TimeRangePicker */
function Element(props: ITimeRangePickerProps): any;
/** Checkbox */
function Element(props: ICheckboxProps): any;
/** CheckboxGroup */
function Element(props: ICheckboxGroupProps): any;
/** RadioGroup */
function Element(props: IRadioGroupProps): any;
/** Rate */
function Element(props: IRateProps): any;
/** slider */
function Element(props: ISliderProps): any;
/** switch */
function Element(props: ISwitchProps): any;
/** upload */
function Element(props: IUploadProps): any;
/** Avatar */
function Element(props: IAvatarProps): any;
/** Image */
function Element(props: IImageProps): any;
/** Tag */
function Element(props: ITagProps): any;
/** Progress */
function Element(props: IProgressProps): any;
/** TreeSelect */
function Element(props: ITreeSelectProps): any;
/** Cascader */
function Element(props: ICascaderProps): any;
/** \u5177\u4F53\u5B9E\u73B0 */
function Element({ type, fieldProps, onChange, ...resetProps }: IProps) {
  const { children, value, ...resetFieldProps } = (fieldProps as any) ?? {};
  const [val, setVal] = useState(value ?? resetProps.value);
  const onChangeFunc = (params: any) => {
    const values = converChangeEvent(params);
    setVal(values);
    resetFieldProps?.onChange?.(values);
    onChange?.(values);
  };
  useEffect(() => {
    setVal(value);
  }, [value]);
  // \u8868\u5355\u91CD\u7F6E\u7684\u65F6\u5019\u503C\u4E3A resetProps.value
  useEffect(() => {
    setVal(resetProps.value);
  }, [resetProps.value]);

  switch (type) {
    case 'text':
      return <Text {...resetProps} {...resetFieldProps} value={val} />;
    case 'list-wrap':
      return <ListWrap {...resetProps} {...resetFieldProps} value={val} />;
    case 'input':
      return (
        <Field
          {...resetProps}
          fieldProps={resetFieldProps}
          onChange={onChangeFunc}
          value={val}
          mode="edit"
        />
      );
    // ======== \u4EE5\u4E0B\u4E3A antd \u7EC4\u4EF6 ==========
    case 'input-group':
      return (
        <Input.Group {...resetFieldProps}>
          {/* \u7981\u7528\u72B6\u6001:\u4F7F\u7528\u6700\u7EC8\u7684\u7ED3\u679C\u4F20\u7ED9\u5916\u9762 */}
          {children?.({
            ...resetFieldProps,
            onChange: onChangeFunc,
            value: val,
            disabled: resetFieldProps.disabled,
          })}
        </Input.Group>
      );
    case 'textarea':
      return <Input.TextArea {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'search':
      return <Input.Search {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'password':
      return <Input.Password {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'input-number':
      return <InputNumber {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'select':
      return <Select {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'datepicker':
      return <DatePicker {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'rangepicker':
      return <DatePicker.RangePicker {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'timePicker':
      return <TimePicker {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'timeRangePicker':
      return <TimePicker.RangePicker {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'checkbox':
      return <Checkbox {...resetFieldProps} onChange={onChangeFunc} checked={val} />;
    case 'checkbox-group':
      return <Checkbox.Group {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'radio-group':
      return <Radio.Group {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'rate':
      return <Rate {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'slider':
      return <Slider {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'switch':
      return <Switch {...resetFieldProps} onChange={onChangeFunc} checked={val} />;
    case 'upload':
      return (
        <Upload {...resetFieldProps} onChange={onChangeFunc}>
          {children?.({
            ...resetFieldProps,
            onChange: onChangeFunc,
            value: val,
            disabled: resetFieldProps.disabled,
          })}
        </Upload>
      );
    case 'avatar':
      return <Avatar {...resetFieldProps} onChange={onChangeFunc} src={val} />;
    case 'image':
      return <Image {...resetFieldProps} onChange={onChangeFunc} src={val} />;
    case 'tag':
      return (
        <Tag
          {...resetFieldProps}
          closable={!resetFieldProps.disabled ?? resetFieldProps.closable}
          onClose={onChangeFunc}
          onChange={onChangeFunc}
        >
          {children
            ? children({
                ...resetFieldProps,
                onChange: onChangeFunc,
                value: val,
                disabled: resetFieldProps.disabled,
              })
            : val}
        </Tag>
      );
    case 'progress':
      return <Progress {...resetFieldProps} percent={val} />;
    case 'tree-select':
      return <TreeSelect {...resetFieldProps} value={val} onChange={onChangeFunc} />;
    case 'cascader':
      return <Cascader {...resetFieldProps} value={val} onChange={onChangeFunc} />;
    default:
      throw new Error('\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684type\u7C7B\u578B');
  }
}
Element.displayName = 'Element';
export default Element;`,u=`/*
 * @Author: yihuang
 * @Date: 2021-11-30 18:27:39
 * @Description: \u5B57\u6BB5\u7C7B\u578B \u5305\u542B \u53EA\u8BFB\u3001\u7F16\u8F91
 * @LastModifiedBy: yihuang
 */

import React, { memo } from 'react';
import type { IFieldProps } from '../typings';
import Text from './Text';
import InputWrap from './InputWrap';

/** \u5B57\u6BB5\u5305\u88F9\u5668 */
const Field = (props: IFieldProps) => {
  const { mode = 'edit', onChange, fieldProps } = props;
  const value = (fieldProps as any)?.value ?? props?.value;
  return (
    <>
      {mode === 'read' ? (
        <Text {...fieldProps} value={value} type="text" />
      ) : (
        <InputWrap fieldProps={fieldProps as any} value={value} onChange={onChange} type="input" />
      )}
    </>
  );
};
Field.displayName = 'Field';
export default memo(Field);`,c=`/*
 * @Author: yihuang
 * @Date: 2021-12-01 14:07:25
 * @Description: \u53EA\u8BFB\u6587\u672C\uFF0C\u8D85\u957F\u7701\u7565
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Typography } from 'antd';
import type { ITextProps } from '../typings';

const Text = ({ value, ellipsis = true, style }: ITextProps) => (
  <Typography.Text
    ellipsis={
      ellipsis
        ? {
            tooltip: ellipsis,
          }
        : false
    }
    style={style}
  >
    {value}
  </Typography.Text>
);
export default memo(Text);`,f=`/*
 * @Author: yihuang
 * @Date: 2021-12-01 14:29:27
 * @Description: \u9ED8\u8BA4\u5C4F\u853D\u7A7A\u683C\u7684Input\u7EC4\u4EF6
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import type { IInputProps } from '../typings';
import { Input } from 'antd';
import { converChangeEvent } from './SchemaForm/utils';

/** \u9ED8\u8BA4\u5C4F\u853D\u7A7A\u683C\u7684Input\u7EC4\u4EF6 */
const InputWrap = ({ onChange, value, fieldProps = {} }: IInputProps) => {
  /** input\u7684\u503C */
  const [inputVal, setInputVal] = useState(value);
  /** \u9ED8\u8BA4\u5C4F\u853D\u7A7A\u683C */
  const { isTrim = true, ...fieldResetProps } = fieldProps;
  /** \u8F6C\u6362\u503C */
  const onChangeFun = (params: any) => {
    const str = converChangeEvent(params);
    setInputVal(str);
    onChange?.(str);
  };
  /** \u5931\u7126\u53BB\u7A7A\u683C */
  const onBlurFun = () => {
    let str: any = inputVal;
    if (isTrim && (str !== null || str !== undefined)) {
      if (str instanceof Array) {
        str = str.map((item) => {
          const v = item?.trim();
          return v === '' ? null : v;
        });
      } else {
        const v = str?.trim();
        str = v === '' ? null : v;
      }
    }
    setInputVal(str);
    onChange?.(str);
  };
  useEffect(() => {
    if (value && value !== inputVal) {
      onChangeFun(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Input
      allowClear
      maxLength={200}
      {...fieldResetProps}
      value={inputVal}
      onChange={onChangeFun}
      onBlur={onBlurFun}
    />
  );
};
InputWrap.displayName = 'InputWrap';
export default InputWrap;`,y=`/*
 * @Author: yihuang
 * @Date: 2022-03-01 11:47:38
 * @Description: \u8F6C\u6362\u5DE5\u5177
 * @LastModifiedBy: yihuang
 */

/** \u8F6C\u6362\u6240\u6709UI\u7EC4\u4EF6\u7684onChange\u6570\u636E */
export const converChangeEvent = (params: any): any => {
  let str;
  if (params?.target) {
    str = params.target.value;
  } else {
    str = params;
  }
  return str;
};`,h=`/*
 * @Author: yihuang
 * @Date: 2021-12-02 14:11:36
 * @Description: \u5217\u8868\u5305\u88F9\u5668 \u7F16\u8F91\uFF1Ainput\uFF0C\u53EA\u8BFB\uFF1Atext
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import type { IListWrapProps } from '../../typings';
import Field from '../Field';

const ListWrap = (props: IListWrapProps) => {
  const { value, className, style } = props;
  return (
    <>
      {value instanceof Array && value.length ? (
        <ul className={className} style={style as any}>
          {(value as string[])?.map((text, index) => {
            return (
              <li key={index}>
                <Field {...props} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};
ListWrap.displayName = 'ListWrap';
export default memo(ListWrap);`,g=`import React, { memo } from 'react';
import { Form } from 'antd';
import type { FormProps } from 'antd/lib/form';
import type { ISchemaProps } from './typings';
import RowLayout from './RowLayout';
import CustomLayout from './CustomLayout';

const SchemaForm = ({ type = 'row', ...resetProps }: FormProps & ISchemaProps) => {
  const { options = [], form, ...formReset } = resetProps;
  return (
    <>
      {options?.length ? (
        <Form {...formReset} form={form}>
          {type === 'row' ? (
            <RowLayout type={type} {...resetProps} />
          ) : (
            <CustomLayout type={type} {...resetProps} />
          )}
        </Form>
      ) : null}
    </>
  );
};
SchemaForm.displayName = 'SchemaForm';
export default memo(SchemaForm);`,v=`/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:18:25
 * @Description: \u9ED8\u8BA4\u4F7F\u7528 row \u5E03\u5C40
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Col, Row } from 'antd';
import type { FormProps } from 'antd/lib/form';
import type { ISchemaProps } from './typings';
import ItemGroupWrap from './ItemGroupWrap';
import ItemWrap from './ItemWrap';
import omit from 'omit.js';

const RowLayout = ({
  type = 'row',
  options = [],
  disabled: formDisabled,
  form,
  ...formReset
}: FormProps & ISchemaProps) => {
  const { gutter = 16, span = 6 } = formReset as any;
  return (
    <Row gutter={gutter}>
      {options.map(({ col, ...reset }, index) => {
        const colProps = omit(reset, ['fieldProps', 'labelCol', 'wrapperCol', 'render']);
        return (
          <Col {...colProps} span={col ?? span} key={reset?.name?.toString() ?? index.toString()}>
            {reset.type === 'group' ? (
              <ItemGroupWrap
                {...reset}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            ) : (
              <ItemWrap
                {...reset}
                values={reset?.name && formReset?.initialValues?.[reset?.name as any]}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            )}
          </Col>
        );
      })}
    </Row>
  );
};
export default memo(RowLayout);`,E=`/*
 * @Author: yihuang
 * @Date: 2022-02-21 16:55:00
 * @Description: \u8282\u70B9\u7EC4\u7684\u5305\u88F9\u5668
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import type { CSSProperties } from 'react';
import ItemWrap from './ItemWrap';
import type { IFormInheritProps, IFormItem } from './typings';

interface IProps extends IFormInheritProps {
  options: IFormItem[];
  className?: string;
  style?: CSSProperties;
}

const ItemGroupWrap = ({ className, style, options, formDisabled, initialValues }: IProps) => {
  return (
    <div className={className} style={style}>
      {options?.length
        ? options.map((item, index) => (
            <ItemWrap
              key={item?.name?.toString() ?? index.toString()}
              {...item}
              values={item?.name && initialValues?.[item?.name as any]}
              formDisabled={formDisabled}
              initialValues={initialValues}
            />
          ))
        : null}
    </div>
  );
};
export default memo(ItemGroupWrap);`,F=`/*
 * @Author: yihuang
 * @Date: 2022-02-21 16:49:01
 * @Description: item\u8282\u70B9\u5305\u88F9\u5668
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Form } from 'antd';
import type { IItemWrapProps } from './typings';
import { Element } from '../../index';
import RenderWrap from './RenderWrap';

const { Item } = Form;

const ItemWrap = ({
  formDisabled,
  initialValues,
  values,
  render,
  type,
  width = '100%',
  fieldProps = {},
  ...reset
}: IItemWrapProps) => {
  const { disabled, ...resetFieldProps } = fieldProps as any;
  return (
    <Item {...reset}>
      {type === 'custom' ? (
        // \u81EA\u5B9A\u4E49\u7684\u4F7F\u7528\u5916\u90E8\u7EC4\u4EF6
        <RenderWrap
          {...reset}
          fieldProps={resetFieldProps}
          values={values}
          render={render}
          disabled={disabled ?? formDisabled}
          initialValues={initialValues}
        />
      ) : (
        // \u900F\u4F20
        <Element
          style={['checkbox', 'switch', 'tag'].includes(type) ? undefined : { width }}
          {...reset}
          fieldProps={
            {
              ...resetFieldProps,
              value: values,
              disabled: disabled ?? formDisabled,
            } as any
          }
          type={type as any}
        />
      )}
    </Item>
  );
};
export default memo(ItemWrap);`,b=`/*
 * @Author: yihuang
 * @Date: 2022-03-01 11:39:38
 * @Description: \u81EA\u5B9A\u4E49\u6E32\u67D3
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import type { ISchemaChildrenProps } from './typings';
import { converChangeEvent } from './utils';

interface IProps extends ISchemaChildrenProps {
  values?: any;
  render?: (props: ISchemaChildrenProps) => React.ReactNode;
}

const RenderWrap = ({ disabled, render, values, initialValues, onChange, fieldProps }: IProps) => {
  const [val, setVal] = useState();
  const onChangeFunc = (params: any) => {
    const str = converChangeEvent(params);
    setVal(str);
    fieldProps?.onChange?.(str);
    onChange?.(str);
  };
  useEffect(() => {
    setVal(values);
  }, [values]);

  useEffect(() => {
    setVal(fieldProps.value);
  }, [fieldProps.value]);

  return (
    <>
      {render?.({
        value: val,
        onChange: onChangeFunc,
        disabled,
        initialValues,
      })}
    </>
  );
};
export default RenderWrap;`,C=`/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:18:42
 * @Description: \u81EA\u5B9A\u4E49\u5E03\u5C40\uFF0C\u53EF\u4EE5\u4F7F\u7528group\u6DF7\u5408\u5E03\u5C40\u3002
 * @LastModifiedBy: yihuang
 */
import React, { Fragment, memo } from 'react';
import type { FormProps } from 'antd/lib/form';
import type { ISchemaProps, IFormItem } from './typings';
import ItemWrap from './ItemWrap';
import ItemGroupWrap from './ItemGroupWrap';

const CustomLayout = ({
  type = 'custom',
  options = [],
  disabled: formDisabled,
  form,
  ...formReset
}: FormProps & ISchemaProps) => {
  return (
    <>
      {options.map((item: IFormItem, index) => {
        return (
          <Fragment key={item?.name?.toString() ?? index.toString()}>
            {item.type === 'group' ? (
              <ItemGroupWrap
                {...item}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            ) : (
              <ItemWrap
                {...item}
                values={item?.name && formReset?.initialValues?.[item?.name as any]}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
};
export default memo(CustomLayout);`,R=`/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:47:14
 * @Description: \u81EA\u5B9A\u4E49\u8868\u5355\u7ED3\u6784
 * @LastModifiedBy: yihuang
 */
import React, { useState, useCallback } from 'react';
import { Button, Space, Form, Tree, Spin } from 'antd';
import { SchemaForm } from '../src';
import { useRequest } from 'ahooks';
import { initValues } from './config';
import { getDetails, getTreeData, getSelectData } from './service';

interface IValuesProps {
  inp: string;
  txt: string;
  sel: string;
  upload: any[];
}

const SchemaDemoCustom = () => {
  const [form] = Form.useForm();

  const getStatusFunc = useCallback(({ sel }: IValuesProps) => {
    return {
      disabled: sel === 'disabled',
      style: {
        display: sel === 'hide' ? 'none' : 'inline-flex',
      },
    };
  }, []);
  const [inputState, setInputState] = useState<any>();
  const { data } = useRequest(getDetails, {
    onSuccess: () => {
      setInputState(getStatusFunc(data));
    },
  });
  const { data: treeData = [], loading: treeLoading } = useRequest(getTreeData, {
    onSuccess: () => {
      setInputState(getStatusFunc(data));
      form.setFieldsValue(data);
    },
  });
  const { data: roleList = [] } = useRequest(getSelectData);

  // form values change
  const onValuesChange = (values: IValuesProps) => {
    console.log('schema custom demo onValuesChange', values);
    const formData = form.getFieldsValue();
    setInputState(getStatusFunc({ ...data, ...formData }));
  };
  const onFinish = (values: IValuesProps) => {
    console.log('schema custom demo onFinish values', values);
  };
  const onReset = () => {
    form.resetFields();
    setInputState(getStatusFunc(data));
  };

  return (
    <SchemaForm
      type="custom"
      initialValues={initValues}
      disabled={inputState?.disabled}
      labelAlign="right"
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      options={[
        {
          label: '\u8054\u52A8\u8F93\u5165\u6846',
          name: 'sel',
          type: 'select',
          rules: [
            {
              message: '\u5FC5\u586B\u53C2\u6570',
              required: true,
            },
          ],
          fieldProps: {
            disabled: false,
            options: [
              {
                label: '\u663E\u793A\u8F93\u5165',
                value: 'show',
              },
              {
                label: '\u9690\u85CF\u8F93\u5165',
                value: 'hide',
              },
              {
                label: '\u7981\u7528\u8868\u5355',
                value: 'disabled',
              },
            ],
          },
        },
        {
          label: '\u6D4B\u8BD5\u8F93\u5165',
          name: 'inp',
          type: 'input',
          fieldProps: {
            // \u5141\u8BB8\u7A7A\u683C
            isTrim: false,
            placeholder: '\u9ED8\u8BA4\u8F93\u5165',
            ...inputState,
          },
        },
        {
          label: '\u641C\u7D22\u6846',
          name: 'search',
          type: 'search',
          rules: [
            {
              message: '\u5FC5\u586B\u53C2\u6570',
              required: true,
            },
          ],
          fieldProps: {
            placeholder: '\u9ED8\u8BA4\u6587\u6848',
            onSearch: (val) => {
              console.log('searc', val);
            },
          },
        },
        {
          label: '\u6D4B\u8BD5\u591A\u9009',
          name: 'multipleSelect',
          type: 'select',
          rules: [
            {
              message: '\u5FC5\u586B\u53C2\u6570',
              required: true,
            },
          ],
          fieldProps: {
            mode: 'multiple',
            showSearch: true,
            allowClear: true,
            options: roleList,
            fieldNames: {
              label: 'roleName',
              value: 'roleCode',
            },
          },
        },
        {
          label: '\u5206\u7EC4',
          type: 'group',
          className: 'group-wrap',
          style: { padding: '12px', marginBottom: '16px', backgroundColor: '#eee' },
          options: [
            {
              type: 'input',
              label: '\u5206\u7EC4\u7684input',
              name: 'groupinputdefault',
              rules: [
                {
                  message: '\u5FC5\u586B\u53C2\u6570',
                  required: true,
                },
              ],
            },
            {
              type: 'textarea',
              label: '\u5206\u7EC4\u7684textarea',
              name: 'grouptextareadefault',
              rules: [
                {
                  message: '\u5FC5\u586B\u53C2\u6570',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: '\u4E0B\u62C9\u6811',
          name: 'treeSelect',
          type: 'tree-select',
          rules: [
            {
              message: '\u5FC5\u586B\u53C2\u6570',
              required: true,
            },
          ],
          fieldProps: {
            treeData,
            treeCheckStrictly: true,
            treeCheckable: true,
            treeDefaultExpandAll: true,
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
          rules: [
            {
              message: '\u5FC5\u586B\u53C2\u6570',
              required: true,
            },
          ],
          render: ({ value, disabled, onChange }) => {
            return (
              <Spin spinning={treeLoading}>
                {treeData?.length ? (
                  <Tree
                    disabled={disabled}
                    height={300}
                    defaultExpandAll
                    checkable
                    checkedKeys={value}
                    treeData={treeData}
                    onCheck={onChange}
                    fieldNames={{
                      title: 'funcName',
                      key: 'funcCode',
                      children: 'childElementList',
                    }}
                  />
                ) : null}
              </Spin>
            );
          },
        },
        {
          // \u72EC\u5360\u4E00\u884C Col span=24
          col: 24,
          className: 'margin-bottom-none',
          style: { marginBottom: 0 },
          wrapperCol: {
            offset: 1,
          },
          // \u81EA\u5B9A\u4E49\u5185\u5BB9
          type: 'custom',
          render: ({ disabled }) => (
            <Space>
              <Button disabled={disabled} type="primary" htmlType="submit">
                \u63D0\u4EA4
              </Button>
              <Button disabled={disabled} onClick={onReset}>
                \u91CD\u7F6E
              </Button>
            </Space>
          ),
        },
      ]}
    />
  );
};
export default SchemaDemoCustom;`,I=`import moment from 'moment';
import { subtractRangeDays } from '../tests/utils';

export const initValues = {
  sel: 'hide',
  inp: '\u6D4B\u8BD5input',
  txt: '\u666E\u901A\u6587\u672C\uFF0C\u53EF\u81EA\u52A8\u7F29\u7565\u3002\u666E\u901A\u6587\u672C\uFF0C\u53EF\u81EA\u52A8\u7F29\u7565\u3002\u666E\u901A\u6587\u672C\uFF0C\u53EF\u81EA\u52A8\u7F29\u7565\u3002',
  pwd: '123456',
  radioGroup: 'a',
  inputNumber: 123,
  txtarea: '\u9ED8\u8BA4\u6587\u672C\u57DF\u6587\u6848',
  date: moment(new Date()),
  dateRange: subtractRangeDays(7),
  time: moment(new Date()),
  timeRange: [moment(new Date()), moment(new Date())],
  check: true,
  boxgroup: ['B'],
  rate: 2.5,
  slider: 12,
  sliderRange: [23, 55],
  multipleSelect: ['669e6220bb8e4f95b3976410582f5ea6'],
  customTree: ['menu_frontAccess', 'btn_frontAccess_userManagement_query'],
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
};

export const CascaderOptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
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
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export const TreeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];`,M=`import MockDate from 'mockdate';
import moment from 'moment';
import { act } from 'react-dom/test-utils';

export function setMockDate(dateString = '2017-09-18T03:30:07.795') {
  MockDate.set(dateString);
}

export function resetMockDate() {
  MockDate.reset();
}

export const waitForComponentToPaint = async (wrapper: any, time = 50) => {
  await act(async () => {
    wrapper.update?.();
    await new Promise((resolve) => setTimeout(resolve, time));
    wrapper.update?.();
  });
};

/** \u8FD4\u56DE\u6700\u8FD1n\u5929\u7684 \u5F00\u59CB\u3001\u7ED3\u675F\u65F6\u95F4 */
export const subtractRangeDays = (time = 7) => [
  moment().startOf('day').subtract(time, 'days'),
  moment().endOf('day'),
];`,k=`/*
 * @Author: yihuang
 * @Date: 2022-02-07 17:54:41
 * @Description:  \u9ED8\u8BA4\u8868\u5355\u7ED3\u6784: Row\u5E03\u5C40
 * @LastModifiedBy: yihuang
 */
import React, { useState, useCallback } from 'react';
import { UserOutlined, UploadOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Space, Form } from 'antd';
import { disabledRangeTime } from './utils';
import { SchemaForm, Element } from '../src';
import { CascaderOptions, initValues, TreeData } from './config';
import moment from 'moment';

interface IValuesProps {
  inp: string;
  txt: string;
  sel: string;
  upload: any[];
}

const SchemaDemo = () => {
  const [form] = Form.useForm();
  const getStatusFunc = useCallback(({ sel }: IValuesProps) => {
    return {
      disabled: sel === 'disabled',
      style: {
        display: sel === 'hide' ? 'none' : 'inline-flex',
      },
    };
  }, []);
  const [inputState, setInputState] = useState(getStatusFunc(initValues));
  // form values change
  const onValuesChange = (values: IValuesProps) => {
    console.log('schema demo onValuesChange values', values);
    const formData = form.getFieldsValue();
    setInputState(getStatusFunc({ ...initValues, ...formData }));
  };
  const onFinish = (values: IValuesProps) => {
    console.log('schema demo onFinish values', values);
    form.validateFields().then((formData) => {
      console.log('schema demo onFinish then formData', formData);
    });
  };
  const onReset = () => {
    form.resetFields();
    setInputState(getStatusFunc(initValues));
  };

  return (
    <SchemaForm
      disabled={inputState.disabled}
      type="row"
      initialValues={initValues}
      labelAlign="right"
      form={form}
      span={8}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      options={[
        {
          label: '\u8054\u52A8\u8F93\u5165\u6846',
          name: 'sel',
          type: 'select',
          fieldProps: {
            disabled: false,
            options: [
              {
                label: '\u663E\u793A\u8F93\u5165',
                value: 'show',
              },
              {
                label: '\u9690\u85CF\u8F93\u5165',
                value: 'hide',
              },
              {
                label: '\u7981\u7528\u8868\u5355',
                value: 'disabled',
              },
            ],
          },
        },
        {
          label: '\u6D4B\u8BD5\u8F93\u5165',
          name: 'inp',
          type: 'input',
          rules: [
            {
              message: '\u5FC5\u586B\u53C2\u6570',
              required: true,
            },
          ],
          fieldProps: {
            // \u5141\u8BB8\u7A7A\u683C
            isTrim: false,
            placeholder: '\u9ED8\u8BA4\u8F93\u5165',
            ...inputState,
          },
        },
        {
          label: '\u666E\u901A\u6587\u672C',
          name: 'txt',
          type: 'text',
        },
        {
          label: 'input-group',
          name: 'inputGroup',
          type: 'input-group',
          fieldProps: {
            compact: true,
            children: ({ disabled, onChange }) => (
              <>
                <Element
                  type="input"
                  fieldProps={{
                    disabled,
                    style: {
                      width: '65%',
                    },
                    onChange,
                  }}
                />
                <Button disabled={disabled} type="primary">
                  Submit
                </Button>
              </>
            ),
          },
        },
        {
          label: '\u6587\u672C\u57DF',
          name: 'txtarea',
          type: 'textarea',
          fieldProps: {
            showCount: true,
            maxLength: 500,
          },
        },
        {
          label: '\u641C\u7D22\u6846',
          name: 'search',
          type: 'search',
          fieldProps: {
            placeholder: '\u9ED8\u8BA4\u6587\u6848',
            onSearch: (val) => {
              console.log('searc', val);
            },
          },
        },
        {
          label: '\u5BC6\u7801\u6846',
          name: 'pwd',
          type: 'password',
        },
        {
          label: '\u6570\u5B57\u8F93\u5165\u6846',
          name: 'inputNumber',
          type: 'input-number',
          fieldProps: {
            prefix: '\uFFE5',
            addonBefore: <UserOutlined />,
          },
        },
        {
          label: '\u65E5\u671F',
          name: 'date',
          type: 'datepicker',
          fieldProps: {
            placeholder: 'xxx date',
            showTime: true,
          },
        },
        {
          label: '\u65E5\u671F\u533A\u95F4',
          name: 'dateRange',
          type: 'rangepicker',
          col: 12,
          labelCol: {
            span: 3,
          },
          wrapperCol: {
            span: 21,
          },
          fieldProps: {
            placeholder: ['\u5F00\u59CB', '\u7ED3\u675F'],
            showTime: {
              hideDisabledOptions: true,
              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            },
            disabledTime: disabledRangeTime,
          },
        },
        {
          label: '\u65F6\u95F4',
          name: 'time',
          type: 'timePicker',
          fieldProps: {
            placeholder: 'timePicker date',
          },
        },
        {
          label: '\u65F6\u95F4\u533A\u95F4',
          name: 'timeRange',
          type: 'timeRangePicker',
          fieldProps: {
            placeholder: ['timeRange1', 'timeRange2'],
          },
        },
        {
          label: '\u7EA7\u8054',
          name: 'cascader',
          type: 'cascader',
          fieldProps: {
            options: CascaderOptions,
          },
        },
        {
          label: '\u6811\u9009\u62E9',
          name: 'treeSelect',
          type: 'tree-select',
          fieldProps: {
            treeData: TreeData,
          },
        },
        {
          label: '\u590D\u9009\u6846',
          name: 'check',
          type: 'checkbox',
        },
        {
          label: '\u590D\u9009\u6846\u7EC4',
          name: 'boxgroup',
          type: 'checkbox-group',
          fieldProps: {
            options: [
              {
                label: 'A',
                value: 'A',
              },
              {
                label: 'B',
                value: 'B',
              },
            ],
          },
        },
        {
          label: '\u5355\u9009\u7EC4',
          name: 'radioGroup',
          type: 'radio-group',
          fieldProps: {
            // \u5207\u6362\u4E3A\u6309\u94AE\u7C7B\u578B
            // optionType: 'button',
            options: [
              {
                label: 'A',
                value: 'a',
              },
              {
                label: 'B',
                value: 'b',
              },
            ],
          },
        },
        {
          label: '\u8BC4\u5206',
          name: 'rate',
          type: 'rate',
          fieldProps: {
            allowHalf: true,
          },
        },
        {
          label: '\u5355\u4E2A\u6ED1\u52A8\u6761',
          name: 'slider',
          type: 'slider',
          fieldProps: {
            max: 100,
            min: 1,
          },
        },
        {
          label: '\u53CC\u6ED1\u52A8\u6761',
          name: 'sliderRange',
          type: 'slider',
          fieldProps: {
            range: {
              draggableTrack: true,
            },
          },
        },
        {
          label: '\u5F00\u5173',
          name: 'switch',
          type: 'switch',
          fieldProps: {
            loading: true,
          },
        },
        {
          label: '\u4E0A\u4F20\u6587\u4EF6',
          name: 'upload',
          type: 'upload',
          fieldProps: {
            // children\u5728Upload\u7EC4\u4EF6\u4E2D\u4E3A\u5FC5\u586B\u53C2\u6570
            children: ({ disabled }) => (
              <Button disabled={disabled} icon={<UploadOutlined />}>
                \u70B9\u51FB\u4E0A\u4F20
              </Button>
            ),
          },
        },
        {
          label: '\u5934\u50CF',
          name: 'av',
          type: 'avatar',
          fieldProps: {
            icon: <UserOutlined />,
          },
        },
        {
          label: '\u56FE\u7247',
          name: 'image',
          type: 'image',
          fieldProps: {
            width: 100,
          },
        },
        {
          label: '\u9ED8\u8BA4\u6807\u7B7E',
          name: 'tag',
          type: 'tag',
          fieldProps: {
            icon: <SyncOutlined spin />,
            color: 'cyan',
          },
        },
        {
          label: '\u81EA\u5B9A\u4E49\u6807\u7B7E',
          name: 'tagCustom',
          type: 'tag',
          fieldProps: {
            color: 'red',
            // \u53D7 disabled \u63A7\u5236
            closable: true,
            // \u5982\u679C\u4F7F\u7528children\u6E32\u67D3\uFF0C\u5C06\u4E0D\u4F7F\u7528\u9ED8\u8BA4\u503C
            children: () => (
              <>
                <UserOutlined /> New Tag
              </>
            ),
          },
        },
        {
          label: '\u8FDB\u5EA6\u6761',
          name: 'progress',
          type: 'progress',
          fieldProps: {
            type: 'line',
            strokeColor: {
              '0%': '#108ee9',
              '100%': 'yellow',
            },
          },
        },
        {
          label: '\u5206\u7EC4',
          type: 'group',
          className: 'group-wrap',
          col: 12,
          style: { padding: '12px', marginBottom: '16px', backgroundColor: '#eee' },
          options: [
            {
              type: 'input',
              label: '\u5206\u7EC4\u7684input',
              name: 'groupinputdefault',
              rules: [{ required: true, message: '\u5FC5\u586B' }],
              fieldProps: {
                maxLength: 500,
              },
            },
            {
              type: 'textarea',
              label: '\u5206\u7EC4\u7684textarea',
              name: 'grouptextareadefault',
            },
          ],
        },
        {
          // \u72EC\u5360\u4E00\u884C Col span=24
          col: 24,
          className: 'margin-bottom-none',
          style: { marginBottom: 0 },
          wrapperCol: {
            offset: 1,
          },
          // \u81EA\u5B9A\u4E49\u5185\u5BB9
          type: 'custom',
          render: () => (
            <Space>
              <Button type="primary" htmlType="submit">
                \u63D0\u4EA4
              </Button>
              <Button onClick={onReset}>\u91CD\u7F6E</Button>
            </Space>
          ),
        },
      ]}
    />
  );
};
export default SchemaDemo;`,W=`import moment from 'moment';
import type { Moment } from 'moment';

export const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};
export const disabledRangeTime = (_: any, type: 'start' | 'end') => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
export const disabledDate = (current: Moment) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};`,V={"element-elementdemo":{component:(0,p.dynamic)({loader:function(){var t=(0,l.Z)(r().mark(function o(){return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(580),e.e(50)]).then(e.bind(e,97832));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}},o)}));function i(){return t.apply(this,arguments)}return i}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:D},"service.ts":{import:"./service",content:P},"http.ts":{import:"./http",content:T},"src/index.tsx":{import:"../src",content:d},"src/components/Element.tsx":{import:"./components/Element",content:m},"src/components/Field.tsx":{import:"./Field",content:u},"src/components/Text.tsx":{import:"./Text",content:c},"src/components/InputWrap.tsx":{import:"./InputWrap",content:f},"src/components/SchemaForm/utils.ts":{import:"./SchemaForm/utils",content:y},"src/components/ListWrap/index.tsx":{import:"./ListWrap",content:h},"src/components/SchemaForm/index.tsx":{import:"./components/SchemaForm",content:g},"src/components/SchemaForm/RowLayout.tsx":{import:"./RowLayout",content:v},"src/components/SchemaForm/ItemGroupWrap.tsx":{import:"./ItemGroupWrap",content:E},"src/components/SchemaForm/ItemWrap.tsx":{import:"./ItemWrap",content:F},"src/components/SchemaForm/RenderWrap.tsx":{import:"./RenderWrap",content:b},"src/components/SchemaForm/CustomLayout.tsx":{import:"./CustomLayout",content:C}},dependencies:{react:{version:"17.0.2"},antd:{version:"4.19.5",css:"antd/dist/antd.css"},ahooks:{version:"3.3.0"},"react-dom":{version:">=16.9.0"},"omit.js":{version:"2.0.2"}},defaultShowCode:!0,identifier:"element-elementdemo"}},"element-schemademocustom":{component:(0,p.dynamic)({loader:function(){var t=(0,l.Z)(r().mark(function o(){return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(580),e.e(50)]).then(e.bind(e,26337));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}},o)}));function i(){return t.apply(this,arguments)}return i}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:R},"src/index.tsx":{import:"../src",content:d},"src/components/Element.tsx":{import:"./components/Element",content:m},"src/components/Field.tsx":{import:"./Field",content:u},"src/components/Text.tsx":{import:"./Text",content:c},"src/components/InputWrap.tsx":{import:"./InputWrap",content:f},"src/components/SchemaForm/utils.ts":{import:"./SchemaForm/utils",content:y},"src/components/ListWrap/index.tsx":{import:"./ListWrap",content:h},"src/components/SchemaForm/index.tsx":{import:"./components/SchemaForm",content:g},"src/components/SchemaForm/RowLayout.tsx":{import:"./RowLayout",content:v},"src/components/SchemaForm/ItemGroupWrap.tsx":{import:"./ItemGroupWrap",content:E},"src/components/SchemaForm/ItemWrap.tsx":{import:"./ItemWrap",content:F},"src/components/SchemaForm/RenderWrap.tsx":{import:"./RenderWrap",content:b},"src/components/SchemaForm/CustomLayout.tsx":{import:"./CustomLayout",content:C},"config.ts":{import:"./config",content:I},"tests/utils.ts":{import:"../tests/utils",content:M},"service.ts":{import:"./service",content:P},"http.ts":{import:"./http",content:T}},dependencies:{react:{version:"17.0.2"},antd:{version:"4.19.5",css:"antd/dist/antd.css"},ahooks:{version:"3.3.0"},"react-dom":{version:"17.0.2"},"omit.js":{version:"2.0.2"},moment:{version:"2.29.2"},mockdate:{version:"3.0.5"}},defaultShowCode:!0,identifier:"element-schemademocustom"}},"element-schemademorow":{component:(0,p.dynamic)({loader:function(){var t=(0,l.Z)(r().mark(function o(){return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(580),e.e(50)]).then(e.bind(e,45523));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}},o)}));function i(){return t.apply(this,arguments)}return i}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k},"utils.ts":{import:"./utils",content:W},"src/index.tsx":{import:"../src",content:d},"src/components/Element.tsx":{import:"./components/Element",content:m},"src/components/Field.tsx":{import:"./Field",content:u},"src/components/Text.tsx":{import:"./Text",content:c},"src/components/InputWrap.tsx":{import:"./InputWrap",content:f},"src/components/SchemaForm/utils.ts":{import:"./SchemaForm/utils",content:y},"src/components/ListWrap/index.tsx":{import:"./ListWrap",content:h},"src/components/SchemaForm/index.tsx":{import:"./components/SchemaForm",content:g},"src/components/SchemaForm/RowLayout.tsx":{import:"./RowLayout",content:v},"src/components/SchemaForm/ItemGroupWrap.tsx":{import:"./ItemGroupWrap",content:E},"src/components/SchemaForm/ItemWrap.tsx":{import:"./ItemWrap",content:F},"src/components/SchemaForm/RenderWrap.tsx":{import:"./RenderWrap",content:b},"src/components/SchemaForm/CustomLayout.tsx":{import:"./CustomLayout",content:C},"config.ts":{import:"./config",content:I},"tests/utils.ts":{import:"../tests/utils",content:M}},dependencies:{react:{version:"17.0.2"},"@ant-design/icons":{version:"4.7.0"},antd:{version:"4.19.5",css:"antd/dist/antd.css"},moment:{version:"2.29.2"},"react-dom":{version:"17.0.2"},"omit.js":{version:"2.0.2"},mockdate:{version:"3.0.5"}},defaultShowCode:!0,identifier:"element-schemademorow"}}},B=JSON.parse(`{"element":{"default":[{"identifier":"value","description":"props \u4F20\u5165\u7684\u503C","type":"(string | string[]) & string"},{"identifier":"mode","description":"\u6A21\u5F0F\u7C7B\u578B 'read' | 'edit'","type":"ModeType"},{"identifier":"ellipsis","description":"\u8D85\u957F\u7701\u7565 true","type":"boolean"},{"identifier":"style","type":"CSSProperties"},{"identifier":"className","type":"string"},{"identifier":"render","description":"type=custom\u65F6\uFF0C\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3","type":"unknown"},{"identifier":"onChange","description":"form\u4F20\u5165\u7684","type":"(val?: any) => void"},{"identifier":"type","type":"\\"text\\""}]},"SchemaForm":{"default":[{"identifier":"prefixCls","type":"string"},{"identifier":"colon","type":"boolean"},{"identifier":"name","type":"string"},{"identifier":"layout","type":"FormLayout"},{"identifier":"labelAlign","type":"FormLabelAlign"},{"identifier":"labelWrap","type":"boolean"},{"identifier":"labelCol","type":"ColProps"},{"identifier":"wrapperCol","type":"ColProps"},{"identifier":"form","description":"Form.useForm()","type":"FormInstance<any>"},{"identifier":"size","type":"SizeType"},{"identifier":"scrollToFirstError","type":"boolean | Options<any>"},{"identifier":"requiredMark","type":"RequiredMark"},{"identifier":"hideRequiredMark","description":"@deprecated Will warning in future branch. Pls use \`requiredMark\` instead.","type":"boolean"},{"identifier":"acceptCharset","type":"string"},{"identifier":"action","type":"string"},{"identifier":"autoComplete","type":"string"},{"identifier":"encType","type":"string"},{"identifier":"method","type":"string"},{"identifier":"noValidate","type":"boolean"},{"identifier":"target","type":"string"},{"identifier":"defaultChecked","type":"boolean"},{"identifier":"defaultValue","type":"string | number | readonly string[]"},{"identifier":"suppressContentEditableWarning","type":"boolean"},{"identifier":"suppressHydrationWarning","type":"boolean"},{"identifier":"accessKey","type":"string"},{"identifier":"className","type":"string"},{"identifier":"contentEditable","type":"Booleanish | \\"inherit\\""},{"identifier":"contextMenu","type":"string"},{"identifier":"dir","type":"string"},{"identifier":"draggable","type":"Booleanish"},{"identifier":"hidden","type":"boolean"},{"identifier":"id","type":"string"},{"identifier":"lang","type":"string"},{"identifier":"placeholder","type":"string"},{"identifier":"slot","type":"string"},{"identifier":"spellCheck","type":"Booleanish"},{"identifier":"style","type":"CSSProperties"},{"identifier":"tabIndex","type":"number"},{"identifier":"title","type":"string"},{"identifier":"translate","type":"\\"yes\\" | \\"no\\""},{"identifier":"radioGroup","type":"string"},{"identifier":"role","type":"AriaRole"},{"identifier":"about","type":"string"},{"identifier":"datatype","type":"string"},{"identifier":"inlist","type":"any"},{"identifier":"prefix","type":"string"},{"identifier":"property","type":"string"},{"identifier":"resource","type":"string"},{"identifier":"typeof","type":"string"},{"identifier":"vocab","type":"string"},{"identifier":"autoCapitalize","type":"string"},{"identifier":"autoCorrect","type":"string"},{"identifier":"autoSave","type":"string"},{"identifier":"color","type":"string"},{"identifier":"itemProp","type":"string"},{"identifier":"itemScope","type":"boolean"},{"identifier":"itemType","type":"string"},{"identifier":"itemID","type":"string"},{"identifier":"itemRef","type":"string"},{"identifier":"results","type":"number"},{"identifier":"security","type":"string"},{"identifier":"unselectable","type":"\\"on\\" | \\"off\\""},{"identifier":"inputMode","description":"Hints at the type of data that might be entered by the user while editing the element or its contents\\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","type":"\\"text\\" | \\"search\\" | \\"none\\" | \\"tel\\" | \\"url\\" | \\"email\\" | \\"numeric\\" | \\"decimal\\""},{"identifier":"is","description":"Specify that a standard HTML element should behave like a defined custom built-in element\\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","type":"string"},{"identifier":"aria-activedescendant","description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","type":"string"},{"identifier":"aria-atomic","description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","type":"Booleanish"},{"identifier":"aria-autocomplete","description":"Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\\npresented if they are made.","type":"\\"inline\\" | \\"list\\" | \\"none\\" | \\"both\\""},{"identifier":"aria-busy","description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","type":"Booleanish"},{"identifier":"aria-checked","description":"Indicates the current \\"checked\\" state of checkboxes, radio buttons, and other widgets.\\n@see aria-pressed\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-colcount","description":"Defines the total number of columns in a table, grid, or treegrid.\\n@see aria-colindex.","type":"number"},{"identifier":"aria-colindex","description":"Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\\n@see aria-colcount\\n@see aria-colspan.","type":"number"},{"identifier":"aria-colspan","description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-colindex\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-controls","description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\\n@see aria-owns.","type":"string"},{"identifier":"aria-current","description":"Indicates the element that represents the current item within a container or set of related elements.","type":"boolean | \\"time\\" | \\"date\\" | \\"true\\" | \\"false\\" | \\"page\\" | \\"step\\" | \\"location\\""},{"identifier":"aria-describedby","description":"Identifies the element (or elements) that describes the object.\\n@see aria-labelledby","type":"string"},{"identifier":"aria-details","description":"Identifies the element that provides a detailed, extended description for the object.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-disabled","description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\\n@see aria-hidden\\n@see aria-readonly.","type":"Booleanish"},{"identifier":"aria-dropeffect","description":"Indicates what functions can be performed when a dragged object is released on the drop target.\\n@deprecated in ARIA 1.1","type":"\\"link\\" | \\"none\\" | \\"copy\\" | \\"execute\\" | \\"move\\" | \\"popup\\""},{"identifier":"aria-errormessage","description":"Identifies the element that provides an error message for the object.\\n@see aria-invalid\\n@see aria-describedby.","type":"string"},{"identifier":"aria-expanded","description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","type":"Booleanish"},{"identifier":"aria-flowto","description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\\nallows assistive technology to override the general default of reading in document source order.","type":"string"},{"identifier":"aria-grabbed","description":"Indicates an element's \\"grabbed\\" state in a drag-and-drop operation.\\n@deprecated in ARIA 1.1","type":"Booleanish"},{"identifier":"aria-haspopup","description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","type":"boolean | \\"true\\" | \\"false\\" | \\"dialog\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\""},{"identifier":"aria-hidden","description":"Indicates whether the element is exposed to an accessibility API.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-invalid","description":"Indicates the entered value does not conform to the format expected by the application.\\n@see aria-errormessage.","type":"boolean | \\"true\\" | \\"false\\" | \\"grammar\\" | \\"spelling\\""},{"identifier":"aria-keyshortcuts","description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","type":"string"},{"identifier":"aria-label","description":"Defines a string value that labels the current element.\\n@see aria-labelledby.","type":"string"},{"identifier":"aria-labelledby","description":"Identifies the element (or elements) that labels the current element.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-level","description":"Defines the hierarchical level of an element within a structure.","type":"number"},{"identifier":"aria-live","description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","type":"\\"off\\" | \\"assertive\\" | \\"polite\\""},{"identifier":"aria-modal","description":"Indicates whether an element is modal when displayed.","type":"Booleanish"},{"identifier":"aria-multiline","description":"Indicates whether a text box accepts multiple lines of input or only a single line.","type":"Booleanish"},{"identifier":"aria-multiselectable","description":"Indicates that the user may select more than one item from the current selectable descendants.","type":"Booleanish"},{"identifier":"aria-orientation","description":"Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.","type":"\\"horizontal\\" | \\"vertical\\""},{"identifier":"aria-owns","description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\\n@see aria-controls.","type":"string"},{"identifier":"aria-placeholder","description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\\nA hint could be a sample value or a brief description of the expected format.","type":"string"},{"identifier":"aria-posinset","description":"Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-setsize.","type":"number"},{"identifier":"aria-pressed","description":"Indicates the current \\"pressed\\" state of toggle buttons.\\n@see aria-checked\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-readonly","description":"Indicates that the element is not editable, but is otherwise operable.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-relevant","description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\\n@see aria-atomic.","type":"\\"text\\" | \\"additions\\" | \\"additions removals\\" | \\"additions text\\" | \\"all\\" | \\"removals\\" | \\"removals additions\\" | \\"removals text\\" | \\"text additions\\" | \\"text removals\\""},{"identifier":"aria-required","description":"Indicates that user input is required on the element before a form may be submitted.","type":"Booleanish"},{"identifier":"aria-roledescription","description":"Defines a human-readable, author-localized description for the role of an element.","type":"string"},{"identifier":"aria-rowcount","description":"Defines the total number of rows in a table, grid, or treegrid.\\n@see aria-rowindex.","type":"number"},{"identifier":"aria-rowindex","description":"Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\\n@see aria-rowcount\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-rowspan","description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-rowindex\\n@see aria-colspan.","type":"number"},{"identifier":"aria-selected","description":"Indicates the current \\"selected\\" state of various widgets.\\n@see aria-checked\\n@see aria-pressed.","type":"Booleanish"},{"identifier":"aria-setsize","description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-posinset.","type":"number"},{"identifier":"aria-sort","description":"Indicates if items in a table or grid are sorted in ascending or descending order.","type":"\\"none\\" | \\"ascending\\" | \\"descending\\" | \\"other\\""},{"identifier":"aria-valuemax","description":"Defines the maximum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuemin","description":"Defines the minimum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuenow","description":"Defines the current value for a range widget.\\n@see aria-valuetext.","type":"number"},{"identifier":"aria-valuetext","description":"Defines the human readable text alternative of aria-valuenow for a range widget.","type":"string"},{"identifier":"dangerouslySetInnerHTML","type":"{ __html: string; }"},{"identifier":"onCopy","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCopyCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCut","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCutCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPaste","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPasteCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEnd","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEndCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStart","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStartCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdate","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdateCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onFocus","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onFocusCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlur","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlurCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onChange","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onChangeCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onReset","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onResetCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onSubmitCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalid","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalidCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onLoad","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onError","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onErrorCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onKeyDown","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyDownCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPress","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPressCapture","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUp","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUpCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onAbort","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAbortCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThrough","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThroughCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptied","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptiedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncrypted","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncryptedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEnded","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEndedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedData","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedDataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadata","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStart","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStartCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPause","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPauseCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlaying","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgress","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgressCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeked","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeking","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalled","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalledCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspend","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspendCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdate","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdateCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaiting","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaitingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAuxClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onAuxClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenu","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenuCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDrag","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnd","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEndCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnter","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnterCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExit","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExitCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeave","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeaveCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOver","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOverCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStart","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStartCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDrop","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDropCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onMouseDown","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseDownCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseEnter","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseLeave","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMove","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMoveCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOut","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOutCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOver","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOverCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUp","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUpCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onSelect","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSelectCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancel","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancelCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEnd","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEndCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMove","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMoveCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStart","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStartCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onPointerDown","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerDownCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMove","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMoveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUp","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUpCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancel","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancelCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnter","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnterCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeave","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeaveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOver","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOverCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOut","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOutCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onScroll","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onScrollCapture","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onWheel","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onWheelCapture","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStart","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStartCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEnd","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEndCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIteration","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIterationCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEnd","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEndCapture","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"initialValues","type":"Store & Record<string, any>"},{"identifier":"component","type":"string | false | ComponentClass<any, any> | FC<any>"},{"identifier":"fields","type":"FieldData[]"},{"identifier":"validateMessages","type":"ValidateMessages"},{"identifier":"onValuesChange","type":"(changedValues: any, values: any) => void"},{"identifier":"onFieldsChange","type":"(changedFields: FieldData[], allFields: FieldData[]) => void"},{"identifier":"onFinish","type":"(values: any) => void"},{"identifier":"onFinishFailed","type":"(errorInfo: ValidateErrorEntity<any>) => void"},{"identifier":"validateTrigger","type":"string | false | string[]"},{"identifier":"preserve","type":"boolean"},{"identifier":"disabled","description":"\u662F\u5426\u7981\u7528\uFF0C\u5982\u679Citem\u6709\uFF0C\u4EE5item\u7684\u4E3A\u7ED3\u679C","type":"boolean"},{"identifier":"type","type":"\\"row\\" | \\"custom\\"","default":"row"},{"identifier":"options","description":"\u6E32\u67D3\u5217\u8868","type":"IFormItem[]","required":true},{"identifier":"gutter","description":"\u95F4\u8DDD \u9ED8\u8BA4:16","type":"number"},{"identifier":"span","description":"\u95F4\u8DDD \u9ED8\u8BA4:6","type":"number"}]}}`),A=e(18098),N=t=>H.createElement(A.Z,(0,s.Z)({},t,{config:S,demos:V,apis:B}))}}]);
