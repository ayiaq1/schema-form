import type {
  InputProps,
  SelectProps,
  DatePickerProps,
  CheckboxProps,
  InputNumberProps,
  RadioGroupProps,
  RateProps,
  SwitchProps,
  TimePickerProps,
  TimeRangePickerProps,
  UploadProps,
  AvatarProps,
  ImageProps,
  TagProps,
  ProgressProps,
  TreeSelectProps,
  CascaderProps,
} from 'antd';
import type {
  SearchProps,
  TextAreaProps,
  PasswordProps,
  GroupProps as InputGroupProps,
} from 'antd/lib/input';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import type { RangePickerProps } from 'antd/lib/date-picker';
import type { SliderRangeProps, SliderSingleProps } from 'antd/lib/slider';
import type { CSSProperties } from 'react';
import type { IFormItem, ISchemaChildrenProps } from './components/SchemaForm/typings';
/** 'read' | 'edit' */
export declare type ModeType = 'read' | 'edit';
/** 自定义 */
export declare type ICustom = 'custom';
export declare type IText = 'text';
export declare type ICheckbox = 'checkbox';
export declare type ICheckboxGroup = 'checkbox-group';
export declare type IInput = 'input';
export declare type IInputGroup = 'input-group';
export declare type ISearch = 'search';
export declare type ITextArea = 'textarea';
export declare type IPassword = 'password';
export declare type ISelect = 'select';
export declare type ICascader = 'cascader';
export declare type ITreeSelect = 'tree-select';
export declare type IListWrap = 'list-wrap';
export declare type IDatePicker = 'datepicker';
export declare type IRangePicker = 'rangepicker';
export declare type ITimePicker = 'timePicker';
export declare type ITimeRangePicker = 'timeRangePicker';
export declare type IInputNumber = 'input-number';
export declare type IRadioGroup = 'radio-group';
export declare type IRate = 'rate';
export declare type ISlider = 'slider';
export declare type ISwitch = 'switch';
export declare type IUpload = 'upload';
export declare type IAvatar = 'avatar';
export declare type IImage = 'image';
export declare type ITag = 'tag';
export declare type IProgress = 'progress';
export declare type IFormItemGroup = 'group';
/** 所有组件的类型 */
export declare type EnumElementType =
  | IText
  | IInput
  | IInputGroup
  | ISearch
  | ITextArea
  | IPassword
  | IListWrap
  | ISelect
  | IInputNumber
  | IDatePicker
  | IRangePicker
  | ITimePicker
  | ITimeRangePicker
  | ICheckbox
  | ICheckboxGroup
  | IRadioGroup
  | IRate
  | ISlider
  | ISwitch
  | IUpload
  | IAvatar
  | IImage
  | ITag
  | IProgress
  | IFormItemGroup
  | ICascader
  | ITreeSelect;
/**  全类型，包含 custom */
export declare type EnumType = EnumElementType | ICustom;
/** 最基础的参数类型 */
export interface IProps {
  /** props 传入的值 */
  value?: string | string[];
  /** 模式类型 'read' | 'edit' */
  mode?: 'edit' | ModeType;
  /** 超长省略 true */
  ellipsis?: true | boolean;
  style?: CSSProperties;
  className?: string;
  /** 继承的类去定义 */
  type?: EnumType;
  /** 根据type自动推导 */
  fieldProps?: unknown;
  /** type=custom时，使用的自定义渲染 */
  render?: unknown;
  /** form传入的 */
  onChange?: (val?: any) => void;
}
/** custom 类型 */
export declare type ICustomProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICustom;
  /** 自行渲染的组件 */
  render: (props: ISchemaChildrenProps) => React.ReactNode;
};
/** text 类型 */
export declare type ITextProps = Omit<IProps, 'type' | 'emptyText' | 'fieldProps'> & {
  type?: IText;
  value?: string;
};
/** list-wrap 类型 */
export declare type IListWrapProps = Omit<ITextProps, 'type' | 'value'> & {
  type?: IListWrap;
  value?: string[];
};
/** field 类型 */
export declare type IFieldProps = Omit<IProps, 'type'>;
export declare type IInputProps = Omit<IProps, 'type' | 'value' | 'fieldProps'> & {
  type?: IInput;
  value?: string | string[];
  onChange?: (e: any) => void;
  fieldProps?: InputProps & {
    /** 是否忽略空格 默认 true */
    isTrim?: true | boolean;
  };
};
/** input-group */
export declare type IInputGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IInputGroup;
  fieldProps?: InputGroupProps & {
    /** Input.Group的children渲染内容 */
    children: (props: ISchemaChildrenProps) => React.ReactNode;
  };
};
export declare type ITextAreaProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITextArea;
  fieldProps?: TextAreaProps;
};
export declare type ISearchProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISearch;
  fieldProps?: SearchProps;
};
export declare type IPasswordProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IPassword;
  fieldProps?: PasswordProps;
};
export declare type IInputNumberProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IInputNumber;
  fieldProps?: InputNumberProps;
};
/** select 类型 */
export declare type ISelectProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISelect;
  fieldProps?: SelectProps<any>;
};
/** datePicker 类型 */
export declare type IDatePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IDatePicker;
  fieldProps?: DatePickerProps;
};
/** rangePicker 类型 */
export declare type IRangePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IRangePicker;
  fieldProps?: RangePickerProps;
};
/** timePicker 类型 */
export declare type ITimePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITimePicker;
  fieldProps?: TimePickerProps;
};
/** timeRangePicker 类型 */
export declare type ITimeRangePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITimeRangePicker;
  fieldProps?: TimeRangePickerProps;
};
/** checkbox 类型 */
export declare type ICheckboxProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICheckbox;
  fieldProps?: CheckboxProps;
};
/** checkbox 类型 */
export declare type ICheckboxGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICheckboxGroup;
  fieldProps?: CheckboxGroupProps;
};
/** RadioGroup */
export declare type IRadioGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IRadioGroup;
  fieldProps?: RadioGroupProps;
};
/** Rate */
export declare type IRateProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IRate;
  fieldProps?: RateProps;
};
/** Slider */
export declare type ISliderProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISlider;
  fieldProps?: SliderSingleProps | SliderRangeProps;
};
/** Switch */
export declare type ISwitchProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISwitch;
  fieldProps?: SwitchProps;
};
/** Upload */
export declare type IUploadProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IUpload;
  fieldProps?: UploadProps & {
    /** 上传组件显示的内容：<Button icon={<UploadOutlined />}>Click to Upload</Button> */
    children: (props: ISchemaChildrenProps) => React.ReactNode;
  };
};
/** Avatar */
export declare type IAvatarProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IAvatar;
  fieldProps?: AvatarProps;
};
/** Image */
export declare type IImageProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IImage;
  fieldProps?: ImageProps;
};
/** ITag */
export declare type ITagProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITag;
  fieldProps?: TagProps;
  /** 如果有children，使用children渲染，否则使用默认值 value
     * <Tag className="site-tag-plus" onClick={this.showInput}>
     *   <PlusOutlined /> 自定义tag内容
       </Tag>
    */
  children?: (props: ISchemaChildrenProps) => React.ReactNode;
};
/** IProgress */
export declare type IProgressProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IProgress;
  fieldProps?: ProgressProps;
};
/** ITreeSelect */
export declare type ITreeSelectProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITreeSelect;
  fieldProps?: TreeSelectProps<any>;
};
/** ICascader */
export declare type ICascaderProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICascader;
  fieldProps?: CascaderProps<any>;
};
/** IFormItemGroup 自定义item分组 */
export declare type IFormItemGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IFormItemGroup;
  options: IFormItem[];
};
