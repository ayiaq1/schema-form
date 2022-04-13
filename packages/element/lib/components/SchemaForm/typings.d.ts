/// <reference types="react" />
import type { FormInstance, FormItemProps } from 'antd/lib/form';
import type {
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
  /** 透传组件参数 */
  fieldProps?: unknown;
  /** col 的占位,如果item有。以item为结果 */
  col?: number;
  /** 默认：宽度100%。auto: 使用默认组件宽度 */
  width?: '100%' | 'auto';
}
declare type IUnionType =
  | ({
      type: IText;
    } & ITextProps)
  | ({
      type: IListWrap;
    } & IListWrapProps)
  | ({
      type: IInput;
    } & IInputProps)
  | ({
      type: IInputGroup;
    } & IInputGroupProps)
  | ({
      type: ITextArea;
    } & ITextAreaProps)
  | ({
      type: ISearch;
    } & ISearchProps)
  | ({
      type: IPassword;
    } & IPasswordProps)
  | ({
      type: IInputNumber;
    } & IInputNumberProps)
  | ({
      type: ISelect;
    } & ISelectProps)
  | ({
      type: IDatePicker;
    } & IDatePickerProps)
  | ({
      type: IRangePicker;
    } & IRangePickerProps)
  | ({
      type: ITimePicker;
    } & ITimePickerProps)
  | ({
      type: ITimeRangePicker;
    } & ITimeRangePickerProps)
  | ({
      type: ICheckbox;
    } & ICheckboxProps)
  | ({
      type: ICheckboxGroup;
    } & ICheckboxGroupProps)
  | ({
      type: IRadioGroup;
    } & IRadioGroupProps)
  | ({
      type: IRate;
    } & IRateProps)
  | ({
      type: ISlider;
    } & ISliderProps)
  | ({
      type: ISwitch;
    } & ISwitchProps)
  | ({
      type: IUpload;
    } & IUploadProps)
  | ({
      type: IAvatar;
    } & IAvatarProps)
  | ({
      type: IImage;
    } & IImageProps)
  | ({
      type: ITag;
    } & ITagProps)
  | ({
      type: IProgress;
    } & IProgressProps)
  | ({
      type: ICascader;
    } & ICascaderProps)
  | ({
      type: ITreeSelect;
    } & ITreeSelectProps)
  | ({
      type: IFormItemGroup;
    } & IFormItemGroupProps)
  | ({
      type: ICustom;
    } & ICustomProps);
/** 渲染列表的单条数据类型 */
export declare type IFormItem = IBaseItem & IUnionType & FormItemProps;
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
export declare type IUnionLayoutType = IRowLayoutType | ICustomLayoutType;
/** 表单的配置参数 */
export interface ISchemaBaseProps {
  /** 是否禁用，如果item有，以item的为结果 */
  disabled?: boolean;
  type: 'row' | 'custom';
  /** 布局类型 row: 使用默认的 Row 布局，custom: 直接渲染。 */
  /** 渲染列表 */
  options: IFormItem[];
  /** Form.useForm() */
  form?: FormInstance;
  initialValues?: Record<string, any>;
}
export declare type ISchemaProps = ISchemaBaseProps & IUnionLayoutType;
/** 透传给子组件children的参数: disabled|initialValues */
export declare type ISchemaChildrenProps = Pick<ISchemaBaseProps, 'disabled' | 'initialValues'> & {
  /** form的填充值 */
  value?: any;
  /** 自定义节点变更时，回调使用 */
  onChange?: (val?: any) => void;
  fieldProps?: any;
};
/** 需要继承的form参数 */
export declare type IFormInheritProps = {
  formDisabled?: boolean;
  initialValues?: any;
  values?: any;
};
/** item节点包裹器的参数 */
export declare type IItemWrapProps = IFormItem & IFormInheritProps;
export {};
