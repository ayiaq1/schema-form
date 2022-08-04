/*
 * @Author: yihuang
 * @Date: 2022-02-16 10:42:13
 * @Description: 组件的适配层，用于判断使用什么类型的组件。
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import type {
  IAvatarProps,
  IBaseFieldProps,
  ICascaderProps,
  ICheckboxGroupProps,
  ICheckboxProps,
  ICustomProps,
  IDatePickerProps,
  IDescriptionsProps,
  IDividerProps,
  IImageProps,
  IInputGroupProps,
  IInputNumberProps,
  IInputProps,
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
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Rate,
  Slider,
  Switch,
  Upload,
  Image,
  Tag,
  Progress,
  Cascader,
  TreeSelect,
  Avatar,
  Divider,
} from 'antd';
import { converChangeEvent } from './SchemaForm/utils';
import TimeConvertWrap from './TimeConvertWrap';
import InputWrap from './InputWrap';
import Text from './Text';
import DescriptionWrap from './DescriptionWrap';

/** Element 独立使用的时候，重载type推导类型。 */
/** divider */
function Element(props: IDividerProps): JSX.Element;
/** descriptions */
function Element(props: IDescriptionsProps): JSX.Element;
/** text */
function Element(props: ITextProps): JSX.Element;
/** input */
function Element(props: IInputProps): JSX.Element;
/** inputGroup */
function Element(props: IInputGroupProps): JSX.Element;
/** textarea */
function Element(props: ITextAreaProps): JSX.Element;
/** search */
function Element(props: ISearchProps): JSX.Element;
/** password */
function Element(props: IPasswordProps): JSX.Element;
/** InputNumber */
function Element(props: IInputNumberProps): JSX.Element;
/** Select */
function Element(props: ISelectProps): JSX.Element;
/** datePicker */
function Element(props: IDatePickerProps): JSX.Element;
/** rangePicker */
function Element(props: IRangePickerProps): JSX.Element;
/** timePicker */
function Element(props: ITimePickerProps): JSX.Element;
/** TimeRangePicker */
function Element(props: ITimeRangePickerProps): JSX.Element;
/** Checkbox */
function Element(props: ICheckboxProps): JSX.Element;
/** CheckboxGroup */
function Element(props: ICheckboxGroupProps): JSX.Element;
/** RadioGroup */
function Element(props: IRadioGroupProps): JSX.Element;
/** Rate */
function Element(props: IRateProps): JSX.Element;
/** slider */
function Element(props: ISliderProps): JSX.Element;
/** switch */
function Element(props: ISwitchProps): JSX.Element;
/** upload */
function Element(props: IUploadProps): JSX.Element;
/** Avatar */
function Element(props: IAvatarProps): JSX.Element;
/** Image */
function Element(props: IImageProps): JSX.Element;
/** Tag */
function Element(props: ITagProps): JSX.Element;
/** Progress */
function Element(props: IProgressProps): JSX.Element;
/** TreeSelect */
function Element(props: ITreeSelectProps): JSX.Element;
/** Cascader */
function Element(props: ICascaderProps): JSX.Element;
/** Custom */
function Element(props: ICustomProps): JSX.Element;

/** 具体实现 */
function Element({ type, render, fieldProps, onChange, ...resetProps }: IProps) {
  const { children, value, ...resetFieldProps } = (fieldProps as any) ?? {};
  const [val, setVal] = useState(value ?? resetProps.value);
  /** 转换 form 表单的 change */
  const onChangeFunc = (params: any) => {
    const values = converChangeEvent(params);
    setVal(values);
    resetFieldProps?.onChange?.(values);
    onChange?.(values);
  };
  /** 去前后空格，主要给 Search\Password 等组件 onBlur\onPressEnter 时使用 */
  const onTrimFunc = (params: any) => {
    let currentVal = params;
    // 如果明确参数, 不去掉前后空格，则直接返回
    if (resetFieldProps.isTrim === false) {
      onChangeFunc?.(currentVal);
      return;
    }
    if (typeof currentVal === 'string') {
      const v = currentVal?.trim();
      currentVal = v === '' ? null : v;
      // onBlur时不触发
      resetFieldProps?.onSearch?.(currentVal);
    } else if (currentVal?.target) {
      const v = currentVal.target?.value?.trim();
      currentVal = v === '' ? null : v;
    }
    onChangeFunc?.(currentVal);
  };
  useEffect(() => {
    setVal(value);
  }, [value]);
  // 表单重置的时候值为 resetProps.value
  useEffect(() => {
    setVal(resetProps.value);
  }, [resetProps.value]);

  // 表单 使用 valuePropName 时用的字段为resetProps?.id
  useEffect(() => {
    const baseFieldProps = resetFieldProps as IBaseFieldProps;
    if (baseFieldProps?.valuePropName) {
      setVal(resetProps[baseFieldProps?.valuePropName]);
    }
  }, [resetProps, resetFieldProps]);

  switch (type) {
    case 'text':
      return <Text {...resetProps} fieldProps={resetFieldProps} value={val} />;
    case 'input':
      return (
        <InputWrap
          {...resetProps}
          fieldProps={resetFieldProps}
          value={val}
          onChange={onChangeFunc}
        />
      );
    case 'descriptions':
      return <DescriptionWrap fieldProps={resetFieldProps} />;
    // 日期类型做一层数据转换
    case 'datePicker':
    case 'rangePicker':
    case 'timePicker':
    case 'timeRangePicker':
      return (
        <TimeConvertWrap
          {...resetProps}
          type={type}
          fieldProps={resetFieldProps}
          onChange={onChangeFunc}
          value={val}
        />
      );
    // ======== 以下为 antd 组件 ==========
    case 'divider':
      return <Divider {...resetFieldProps} />;
    case 'inputGroup':
      return (
        <Input.Group {...resetFieldProps}>
          {/* 禁用状态:使用最终的结果传给外面 */}
          {children?.({
            ...resetFieldProps,
            onChange: onChangeFunc,
            value: val,
            disabled: resetFieldProps.disabled,
            readOnly: resetFieldProps.readOnly,
          })}
        </Input.Group>
      );
    case 'textarea':
      return <Input.TextArea {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'search':
      return (
        <Input.Search
          {...resetFieldProps}
          onChange={onChangeFunc}
          onSearch={onTrimFunc}
          onBlur={onTrimFunc}
          value={val}
        />
      );
    case 'password':
      return (
        <Input.Password
          {...resetFieldProps}
          onChange={onChangeFunc}
          onPressEnter={onTrimFunc}
          onBlur={onTrimFunc}
          value={val}
        />
      );
    case 'inputNumber':
      return <InputNumber {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'select':
      return <Select {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'checkbox':
      return <Checkbox {...resetFieldProps} onChange={onChangeFunc} checked={val} />;
    case 'checkboxGroup':
      return <Checkbox.Group {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'radioGroup':
      return <Radio.Group {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'rate':
      return <Rate {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'slider':
      return <Slider {...resetFieldProps} onChange={onChangeFunc} value={val} />;
    case 'switch':
      return <Switch {...resetFieldProps} onChange={onChangeFunc} checked={val} />;
    case 'upload':
      return (
        <Upload fileList={val} {...resetFieldProps} onChange={onChangeFunc}>
          {children?.({
            ...resetFieldProps,
            onChange: onChangeFunc,
            value: val,
            disabled: resetFieldProps.disabled,
            readOnly: resetFieldProps.readOnly,
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
                readOnly: resetFieldProps.readOnly,
              })
            : val}
        </Tag>
      );
    case 'progress':
      return <Progress {...resetFieldProps} percent={val} />;
    case 'treeSelect':
      return <TreeSelect {...resetFieldProps} value={val} onChange={onChangeFunc} />;
    case 'cascader':
      return <Cascader {...resetFieldProps} value={val} onChange={onChangeFunc} />;
    case 'custom':
      return render?.({
        ...resetFieldProps,
        onChange: onChangeFunc,
        value: val,
        disabled: resetFieldProps.disabled,
        readOnly: resetFieldProps.readOnly,
      });
    default:
      throw new Error(`没有找到对应的type类型: ${type}`);
  }
}
Element.displayName = 'Element';
export default Element;
