/*
 * @Author: yihuang
 * @Date: 2021-11-30 18:27:39
 * @Description: 字段类型 包含 只读、编辑
 * @LastModifiedBy: yihuang
 */

import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Checkbox,
  Divider,
  Image,
  Input,
  Progress,
  Radio,
  Rate,
  Slider,
  Switch,
  Tag,
  Upload,
} from 'antd';
import type {
  ICustomProps,
  IDatePickerProps,
  IInputGroupProps,
  IInputNumberProps,
  IInputProps,
  IPasswordProps,
  IProps,
  IRangePickerProps,
  ISearchProps,
  ISelectFieldProps,
  ITagProps,
  ITextAreaProps,
  ITextProps,
  ITimePickerProps,
  ITimeRangePickerProps,
  ITreeSelectFieldProps,
  ICascaderFieldProps,
  IDividerProps,
  IDescriptionsProps,
} from '../typings';
import DateField from './DateField';
import Text from './Text';
import SelectField from './SelectField';
import TreeSelectField from './TreeSelectField';
import CascaderField from './CascaderField';
import DescriptionWrap from './DescriptionWrap';

/** descriptions */
function Field(props: IDescriptionsProps): JSX.Element;
/** divider */
function Field(props: IDividerProps): JSX.Element;
/** text */
function Field(props: ITextProps): JSX.Element;
/** input */
function Field(props: IInputProps): JSX.Element;
/** inputGroup */
function Field(props: IInputGroupProps): JSX.Element;
/** textarea */
function Field(props: ITextAreaProps): JSX.Element;
/** search */
function Field(props: ISearchProps): JSX.Element;
/** password */
function Field(props: IPasswordProps): JSX.Element;
/** InputNumber */
function Field(props: IInputNumberProps): JSX.Element;
/** datePicker */
function Field(props: IDatePickerProps): JSX.Element;
/** rangePicker */
function Field(props: IRangePickerProps): JSX.Element;
/** timePicker */
function Field(props: ITimePickerProps): JSX.Element;
/** TimeRangePicker */
function Field(props: ITimeRangePickerProps): JSX.Element;
/** Tag */
function Field(props: ITagProps): JSX.Element;
/** Custom */
function Field(props: ICustomProps): JSX.Element;
/** Select */
function Field(props: ISelectFieldProps): JSX.Element;
/** TreeSelect */
function Field(props: ITreeSelectFieldProps): JSX.Element;
/** Cascader */
function Field(props: ICascaderFieldProps): JSX.Element;
function Field({ type, render, fieldProps, ...resetProps }: IProps) {
  const { children, value, ...resetFieldProps } = (fieldProps as any) ?? {};
  const [val, setVal] = useState(value ?? resetProps.value);

  useEffect(() => {
    setVal(value);
  }, [value]);
  // 表单重置的时候值为 resetProps.value
  useEffect(() => {
    setVal(resetProps.value);
  }, [resetProps.value]);

  switch (type) {
    case 'descriptions':
      return <DescriptionWrap fieldProps={resetFieldProps} />;
    // 日期类型做一层数据转换
    case 'datePicker':
    case 'rangePicker':
    case 'timePicker':
    case 'timeRangePicker':
      return <DateField fieldProps={fieldProps as any} value={val} type={type} />;
    case 'tag':
      return (
        <Tag color="default" {...fieldProps} closable={false}>
          {children
            ? children({
                value: val,
              })
            : val}
        </Tag>
      );
    case 'avatar':
      return <Avatar {...resetFieldProps} src={val} />;
    case 'image':
      return <Image {...resetFieldProps} preview={false} src={val} />;
    case 'checkbox':
      return <Checkbox {...resetFieldProps} disabled={true} checked={val} />;
    case 'checkboxGroup':
      return <Checkbox.Group {...resetFieldProps} disabled={true} value={val} />;
    case 'radioGroup':
      return <Radio.Group {...resetFieldProps} disabled={true} value={val} />;
    case 'rate':
      return <Rate {...resetFieldProps} disabled={true} value={val} />;
    case 'slider':
      return <Slider {...resetFieldProps} disabled={true} value={val} />;
    case 'switch':
      return <Switch {...resetFieldProps} disabled={true} checked={val} />;
    case 'progress':
      return <Progress {...resetFieldProps} percent={val} />;
    case 'upload':
      return (
        <Upload
          {...resetFieldProps}
          fileList={val}
          disabled={true}
          showUploadList={{
            showPreviewIcon: false,
            showRemoveIcon: false,
            showDownloadIcon: false,
          }}
        >
          {children?.({
            ...resetFieldProps,
            value: val,
            disabled: true,
          })}
        </Upload>
      );
    case 'text':
    case 'textarea':
    case 'input':
    case 'search':
    case 'inputNumber':
    case 'inputGroup':
      return <Text fieldProps={fieldProps as any} value={val} />;
    case 'password':
      return (
        <Input.Password
          {...resetFieldProps}
          visibilityToggle={false}
          bordered={false}
          disabled={true}
          value={val}
        />
      );
    case 'select':
      return <SelectField fieldProps={fieldProps} value={val} />;
    case 'treeSelect':
      return <TreeSelectField fieldProps={fieldProps} value={val} />;
    case 'cascader':
      return <CascaderField fieldProps={fieldProps} value={val} />;
    case 'divider':
      return <Divider {...resetFieldProps} />;
    case 'custom':
      return render?.({
        value: val,
      });
    default:
      // 为以后做兼容 未识别的类型 也转换
      return <>{val?.toString()}</>;
  }
}
Field.displayName = 'Field';
export default Field;
