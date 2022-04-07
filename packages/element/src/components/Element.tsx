/*
 * @Author: yihuang
 * @Date: 2022-02-16 10:42:13
 * @Description: 组件的适配层，用于判断使用什么类型的组件。
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

/** Element 独立使用的时候，重载type推导类型。 */
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
/** 具体实现 */
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
  // 表单重置的时候值为 resetProps.value
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
    // ======== 以下为 antd 组件 ==========
    case 'input-group':
      return (
        <Input.Group {...resetFieldProps}>
          {/* 禁用状态:使用最终的结果传给外面 */}
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
      throw new Error('没有找到对应的type类型');
  }
}
Element.displayName = 'Element';
export default Element;
