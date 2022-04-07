/*
 * @Author: yihuang
 * @Date: 2021-10-09 11:00:31
 * @Description: 推导定义
 * @LastModifiedBy: yihuang
 */
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

/** 模式  只读，编辑 */
export type ModeType = 'read' | 'edit';
/** 自定义 */
export type ICustom = 'custom';
export type IText = 'text';
export type ICheckbox = 'checkbox';
export type ICheckboxGroup = 'checkbox-group';
export type IInput = 'input';
export type IInputGroup = 'input-group';
export type ISearch = 'search';
export type ITextArea = 'textarea';
export type IPassword = 'password';
export type ISelect = 'select';
export type ICascader = 'cascader';
export type ITreeSelect = 'tree-select';
export type IListWrap = 'list-wrap';
export type IDatePicker = 'datepicker';
export type IRangePicker = 'rangepicker';
export type ITimePicker = 'timePicker';
export type ITimeRangePicker = 'timeRangePicker';
export type IInputNumber = 'input-number';
export type IRadioGroup = 'radio-group';
export type IRate = 'rate';
export type ISlider = 'slider';
export type ISwitch = 'switch';
export type IUpload = 'upload';
export type IAvatar = 'avatar';
export type IImage = 'image';
export type ITag = 'tag';
export type IProgress = 'progress';
export type IFormItemGroup = 'group';
/** 所有组件的类型 */
export type EnumElementType =
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
export type EnumType = EnumElementType | ICustom;
/** 最基础的参数类型 */
export interface IProps {
  /** props 传入的值 */
  value?: string | string[];
  /** 模式类型 */
  mode?: 'edit' | ModeType;
  /** 超长省略 true */
  ellipsis?: true | boolean;
  style?: CSSProperties;
  className?: string;
  /** 继承的类去定义 */
  type?: EnumType;
  fieldProps?: unknown;
  render?: unknown;
  /** form传入的 */
  onChange?: (val?: any) => void;
}
/** custom 类型 */
export type ICustomProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICustom;
  /** 自行渲染的组件 */
  render: (props: ISchemaChildrenProps) => React.ReactNode;
};
/** text 类型 */
export type ITextProps = Omit<IProps, 'type' | 'emptyText' | 'fieldProps'> & {
  type?: IText;
  value?: string;
};
/** list-wrap 类型 */
export type IListWrapProps = Omit<ITextProps, 'type' | 'value'> & {
  type?: IListWrap;
  value?: string[];
};
/** field 类型 */
export type IFieldProps = Omit<IProps, 'type'>;

/* input 类型 */
export type IInputProps = Omit<IProps, 'type' | 'value' | 'fieldProps'> & {
  type?: IInput;
  value?: string | string[];
  onChange?: (e: any) => void;
  fieldProps?: InputProps & {
    /** 是否忽略空格 默认 true */
    isTrim?: true | boolean;
  };
};
/** input-group */
export type IInputGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IInputGroup;
  fieldProps?: InputGroupProps & {
    /** Input.Group的children渲染内容 */
    children: (props: ISchemaChildrenProps) => React.ReactNode;
  };
};
/* TextArea */
export type ITextAreaProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITextArea;
  fieldProps?: TextAreaProps;
};

/* search */
export type ISearchProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISearch;
  fieldProps?: SearchProps;
};

/* password */
export type IPasswordProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IPassword;
  fieldProps?: PasswordProps;
};

/* input-number */
export type IInputNumberProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IInputNumber;
  fieldProps?: InputNumberProps;
};

/** select 类型 */
export type ISelectProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISelect;
  fieldProps?: SelectProps<any>;
};
/** datePicker 类型 */
export type IDatePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IDatePicker;
  fieldProps?: DatePickerProps;
};
/** rangePicker 类型 */
export type IRangePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IRangePicker;
  fieldProps?: RangePickerProps;
};
/** timePicker 类型 */
export type ITimePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITimePicker;
  fieldProps?: TimePickerProps;
};
/** timeRangePicker 类型 */
export type ITimeRangePickerProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITimeRangePicker;
  fieldProps?: TimeRangePickerProps;
};

/** checkbox 类型 */
export type ICheckboxProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICheckbox;
  fieldProps?: CheckboxProps;
};

/** checkbox 类型 */
export type ICheckboxGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICheckboxGroup;
  fieldProps?: CheckboxGroupProps;
};
/** RadioGroup */
export type IRadioGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IRadioGroup;
  fieldProps?: RadioGroupProps;
};
/** Rate */
export type IRateProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IRate;
  fieldProps?: RateProps;
};
/** Slider */
export type ISliderProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISlider;
  fieldProps?: SliderSingleProps | SliderRangeProps;
};
/** Switch */
export type ISwitchProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ISwitch;
  fieldProps?: SwitchProps;
};
/** Upload */
export type IUploadProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IUpload;
  fieldProps?: UploadProps & {
    /** 上传组件显示的内容：<Button icon={<UploadOutlined />}>Click to Upload</Button> */
    children: (props: ISchemaChildrenProps) => React.ReactNode;
  };
};
/** Avatar */
export type IAvatarProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IAvatar;
  fieldProps?: AvatarProps;
};
/** Image */
export type IImageProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IImage;
  fieldProps?: ImageProps;
};
/** ITag */
export type ITagProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
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
export type IProgressProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IProgress;
  fieldProps?: ProgressProps;
};
/** ITreeSelect */
export type ITreeSelectProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ITreeSelect;
  fieldProps?: TreeSelectProps<any>;
};
/** ICascader */
export type ICascaderProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: ICascader;
  fieldProps?: CascaderProps<any>;
};
/** IFormItemGroup 自定义item分组 */
export type IFormItemGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IFormItemGroup;
  options: IFormItem[];
};
