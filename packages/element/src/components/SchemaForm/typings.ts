import { FormInstance, FormItemProps } from 'antd/lib/form';
import { CSSProperties } from 'react';
import {
  IText,
  IInputProps,
  ICustom,
  IInput,
  ITextProps,
  ISelectProps,
  ISelect,
  IDatePicker,
  IDatePickerProps,
  IRangePicker,
  IRangePickerProps,
  ICheckbox,
  ICheckboxProps,
  ICheckboxGroup,
  ICheckboxGroupProps,
  ITextArea,
  ITextAreaProps,
  ISearchProps,
  ISearch,
  IPassword,
  IPasswordProps,
  IInputNumber,
  IInputNumberProps,
  IRadioGroup,
  IRadioGroupProps,
  ICustomProps,
  IRate,
  IRateProps,
  ISlider,
  ISliderProps,
  ISwitch,
  ISwitchProps,
  IListWrapProps,
  IListWrap,
  ITimePicker,
  ITimePickerProps,
  ITimeRangePicker,
  ITimeRangePickerProps,
  IUploadProps,
  IUpload,
  IInputGroup,
  IInputGroupProps,
  IAvatar,
  IAvatarProps,
  IImage,
  IImageProps,
  ITag,
  ITagProps,
  IProgress,
  IProgressProps,
  IFormItemGroup,
  IFormItemGroupProps,
  ICascader,
  ICascaderProps,
  ITreeSelect,
  ITreeSelectProps,
} from '../../typings';

export interface IBaseItem {
  /** 是否禁用 */
  disabled?: boolean;
  /** 只有custom类型 才有的渲染children方法 */
  render?: (props: ISchemaChildrenProps) => React.ReactNode;
  /** form.item 的包裹器。可以为item套一层外壳 */
  itemWraper?: () => React.ReactNode;
  /** 透传组件参数 */
  fieldProps?: unknown;
  /** col 的占位,如果item有。以item为结果 */
  col?: number;
  /** 默认：宽度100%。auto: 使用默认组件宽度 */
  width?: '100%' | 'auto';
}

type IUnionType =
  // 文本
  | ({
      type: IText;
    } & ITextProps)
  // 列表
  | ({
      type: IListWrap;
    } & IListWrapProps)
  // input
  | ({
      type: IInput;
    } & IInputProps)
  // input-group
  | ({
      type: IInputGroup;
    } & IInputGroupProps)
  // textarea
  | ({
      type: ITextArea;
    } & ITextAreaProps)
  // search
  | ({
      type: ISearch;
    } & ISearchProps)
  // password
  | ({
      type: IPassword;
    } & IPasswordProps)
  // intpu-number
  | ({
      type: IInputNumber;
    } & IInputNumberProps)
  // select
  | ({
      type: ISelect;
    } & ISelectProps)
  // datePicker
  | ({
      type: IDatePicker;
    } & IDatePickerProps)
  // rangePicker
  | ({
      type: IRangePicker;
    } & IRangePickerProps)
  // timePicker
  | ({
      type: ITimePicker;
    } & ITimePickerProps)
  // timeRangePicker
  | ({
      type: ITimeRangePicker;
    } & ITimeRangePickerProps)
  // checkbox
  | ({
      type: ICheckbox;
    } & ICheckboxProps)
  // checkbox-group
  | ({
      type: ICheckboxGroup;
    } & ICheckboxGroupProps)
  // radio-group
  | ({
      type: IRadioGroup;
    } & IRadioGroupProps)
  // rate
  | ({
      type: IRate;
    } & IRateProps)
  // slider
  | ({
      type: ISlider;
    } & ISliderProps)
  // switch
  | ({
      type: ISwitch;
    } & ISwitchProps)
  // upload
  | ({
      type: IUpload;
    } & IUploadProps)
  // Avatar
  | ({
      type: IAvatar;
    } & IAvatarProps)
  // Image
  | ({
      type: IImage;
    } & IImageProps)
  // Tag
  | ({
      type: ITag;
    } & ITagProps)
  // Progress
  | ({
      type: IProgress;
    } & IProgressProps)
  // ICascader
  | ({
      type: ICascader;
    } & ICascaderProps)
  // ITreeSelect
  | ({
      type: ITreeSelect;
    } & ITreeSelectProps)
  // 分组
  | ({
      type: IFormItemGroup;
    } & IFormItemGroupProps)
  // 自定义
  | ({
      type: ICustom;
    } & ICustomProps);
/** 渲染列表的单条数据类型 */
export type IFormItem = IBaseItem & IUnionType & FormItemProps;
/** 默认布局类型：Row */
export interface IRowLayoutType {
  type: 'row';
  /** 间距 默认:16 */
  gutter?: number;
  /** 间距 默认:6 */
  span?: number;
}
/** 自定义布局类型 */
export interface ICustomLayoutType {
  type: 'custom';
}
export type IUnionLayoutType = IRowLayoutType | ICustomLayoutType;
/** 表单的配置参数 */
export interface ISchemaBaseProps {
  /** 是否禁用，如果item有，以item的为结果 */
  disabled?: boolean;
  type: 'row' | 'custom';
  /** 布局类型 row: 使用默认的 Row 布局，custom: 可以增加group混合布局。 */
  /** 渲染列表 */
  options: IFormItem[];
  /** Form.useForm() */
  form?: FormInstance;
  initialValues?: Record<string, any>;
}
export type ISchemaProps = ISchemaBaseProps & IUnionLayoutType;
/** 透传给子组件children的参数: disabled|initialValues */
export type ISchemaChildrenProps = Pick<ISchemaBaseProps, 'disabled' | 'initialValues'> & {
  /** form的填充值 */
  value?: any;
  /** 自定义节点变更时，回调使用 */
  onChange?: (val?: any) => void;
  fieldProps?: any;
};
/** 需要继承的form参数 */
export type IFormInheritProps = {
  formDisabled?: boolean;
  initialValues?: any;
  values?: any;
};
/** item节点包裹器的参数 */
export type IItemWrapProps = IFormItem & IFormInheritProps;
