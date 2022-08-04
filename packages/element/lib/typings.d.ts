import React from 'react';
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
  DividerProps,
} from 'antd';
import type {
  SearchProps,
  TextAreaProps,
  PasswordProps,
  GroupProps as InputGroupProps,
} from 'antd/lib/input';
import type { TextProps as TypographyTextProps } from 'antd/lib/typography/Text';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import type { RangePickerProps } from 'antd/lib/date-picker';
import type { SliderRangeProps, SliderSingleProps } from 'antd/lib/slider';
import type { Moment } from 'moment';
import type { IDesFieldProps } from './components/DescriptionWrap/typings';
import type { IFormItem, ISchemaChildrenProps } from './components/SchemaForm/typings';
export type {
  ISchemaProps,
  ISchemaBaseProps,
  IFormItem,
  ISchemaChildrenProps,
} from './components/SchemaForm/typings';
export type { IDescOption, IUrlMap, IDescProps } from './components/DescriptionWrap/typings';
/** 获取type的值 ValueOf<typeof T> */
export declare type ValueOf<T> = T[keyof T];
export declare type DataValuesType = Moment | [Moment, Moment];
/** Unix 时间戳（自 Unix 纪元以来的秒数） */
export declare const Unix = 'unix';
/** Unix 毫秒时间戳（自 Unix 纪元以来的毫秒数） */
export declare const UnixValueOf = 'unixValueOf';
/** 返回 Moment 格式 */
export declare const MOMENT = 'moment';
export declare const HMS = 'HH:mm:ss';
export declare const HM = 'HH:mm';
export declare const EnumDataType: {
  /** HH:mm:ss */
  readonly HMS: 'HH:mm:ss';
  /** YYYY:HH:mm:ss */
  readonly YMD: 'YYYY-MM-DD';
  /** YYYY-MM-DD HH:mm:ss */
  readonly YMD_HMS: 'YYYY-MM-DD HH:mm:ss';
  /** YYYY-MM-DD 00:00:00 */
  readonly YMD_START_TIME: 'YYYY-MM-DD 00:00:00';
  /** YYYY-MM-DD 23:59:59 */
  readonly YMD_END_TIME: 'YYYY-MM-DD 23:59:59';
};
/** 日期类型 */
export declare type DataType = ValueOf<typeof EnumDataType>;
/** 日期可以转换的类型 */
export declare type FormatTimeType = DataType | typeof MOMENT | typeof Unix | typeof UnixValueOf;
/** 支持转换的类型 */
export declare type IConverTimeType =
  | DataType
  | typeof Unix
  | typeof UnixValueOf
  | ((val: any) => any);
/** 日期的 基础参数 */
export interface IBasePickerProps {
  showTime?: boolean;
  /**
   * onChange的时候是否要转换结果，支持：日期、Unix 时间戳、Unix 毫秒时间戳、自定义方法: convertResult: (data) => moment(data).format('DD HH:mm:ss')
   */
  convertResult?: IConverTimeType;
}
/** 给 外部判断type用 */
export declare const Date_Picker = 'datePicker';
export declare const Range_Picker = 'rangePicker';
export declare const Time_Picker = 'timePicker';
export declare const Time_Range_Picker = 'timeRangePicker';
/** 模式  只读，编辑 */
export declare type ModeType = 'read' | 'edit';
/** 自定义 */
export declare type ICustom = 'custom';
export declare type IDivider = 'divider';
export declare type IDescriptions = 'descriptions';
export declare type IText = 'text';
export declare type ICheckbox = 'checkbox';
export declare type ICheckboxGroup = 'checkboxGroup';
export declare type IInput = 'input';
export declare type IInputGroup = 'inputGroup';
export declare type ISearch = 'search';
export declare type ITextArea = 'textarea';
export declare type IPassword = 'password';
export declare type ISelect = 'select';
export declare type ICascader = 'cascader';
export declare type ITreeSelect = 'treeSelect';
export declare type IDatePicker = typeof Date_Picker;
export declare type IRangePicker = typeof Range_Picker;
export declare type ITimePicker = typeof Time_Picker;
export declare type ITimeRangePicker = typeof Time_Range_Picker;
export declare type IInputNumber = 'inputNumber';
export declare type IRadioGroup = 'radioGroup';
export declare type IRate = 'rate';
export declare type ISlider = 'slider';
export declare type ISwitch = 'switch';
export declare type IUpload = 'upload';
export declare type IAvatar = 'avatar';
export declare type IImage = 'image';
export declare type ITag = 'tag';
export declare type IProgress = 'progress';
export declare type IFormItemGroup = 'group';
export declare type IDateField = 'dateField';
/** 所有组件的类型 */
export declare type EnumElementType =
  | IDescriptions
  | IDivider
  | IText
  | IDateField
  | IInput
  | IInputGroup
  | ISearch
  | ITextArea
  | IPassword
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
/** 组件FieldProps的通用参数 */
export interface IBaseFieldProps {
  /** form.item 需要的别名 */
  valuePropName?: string;
  /** 增加只读属性 */
  readOnly?: boolean;
  onChange?: (val?: any) => void;
}
/** 最基础的参数类型 */
export interface IProps {
  /** props 传入的值 */
  value?: any;
  /** 字段转换的时候需要用ID找value */
  id?: string;
  /** 继承的类去定义 */
  type?: EnumType;
  fieldProps?: IBaseFieldProps;
  render?: (values: ISchemaChildrenProps) => React.ReactNode;
  /** form传入的 */
  onChange?: (val?: any) => void;
}
export declare type IInputProps = Omit<IProps, 'render' | 'type' | 'value' | 'fieldProps'> & {
  type?: IInput;
  value?: string | string[];
  onChange?: (e: any) => void;
  fieldProps?: InputProps &
    IBaseFieldProps & {
      /** 是否忽略空格 默认 true */
      isTrim?: true | boolean;
    };
};
/** inputGroup */
export declare type IInputGroupProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IInputGroup;
  fieldProps?: InputGroupProps &
    IBaseFieldProps & {
      /** Input.Group的children渲染内容 */
      children?: (props: ISchemaChildrenProps) => React.ReactNode;
    };
};
export declare type ITextAreaProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITextArea;
  fieldProps?: TextAreaProps & IBaseFieldProps;
};
export declare type ISearchProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISearch;
  fieldProps?: SearchProps &
    IBaseFieldProps & {
      /** 是否忽略空格 默认 true */
      isTrim?: true | boolean;
    };
};
export declare type IPasswordProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IPassword;
  fieldProps?: PasswordProps &
    IBaseFieldProps & {
      /** 是否忽略空格 默认 true */
      isTrim?: true | boolean;
    };
};
export declare type IInputNumberProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IInputNumber;
  fieldProps?: InputNumberProps & IBaseFieldProps;
};
/** select 类型 */
export declare type ISelectProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISelect;
  fieldProps?: SelectProps<any> & IBaseFieldProps;
};
/** datePicker 类型 */
export declare type IDatePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: IDatePicker;
  value?: number | string | Moment;
  fieldProps?: DatePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** rangePicker 类型 */
export declare type IRangePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: IRangePicker;
  value?: [number, number] | [string, string] | [Moment, Moment];
  fieldProps?: RangePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** timePicker 类型 */
export declare type ITimePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: ITimePicker;
  value?: number | string | Moment;
  fieldProps?: TimePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** timeRangePicker 类型 */
export declare type ITimeRangePickerProps = Omit<
  IProps,
  'render' | 'fieldProps' | 'type' | 'value'
> & {
  type: ITimeRangePicker;
  value?: [number, number] | [string, string] | [Moment, Moment];
  fieldProps?: TimeRangePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** checkbox 类型 */
export declare type ICheckboxProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICheckbox;
  fieldProps?: CheckboxProps & IBaseFieldProps;
};
/** checkbox 类型 */
export declare type ICheckboxGroupProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICheckboxGroup;
  fieldProps?: CheckboxGroupProps & IBaseFieldProps;
};
/** RadioGroup */
export declare type IRadioGroupProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IRadioGroup;
  fieldProps?: RadioGroupProps & IBaseFieldProps;
};
/** Rate */
export declare type IRateProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IRate;
  fieldProps?: RateProps & IBaseFieldProps;
};
/** Slider */
export declare type ISliderProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISlider;
  fieldProps?: (SliderSingleProps | SliderRangeProps) & IBaseFieldProps;
};
/** Switch */
export declare type ISwitchProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISwitch;
  fieldProps?: SwitchProps & IBaseFieldProps;
};
/** Upload */
export declare type IUploadProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IUpload;
  fieldProps?: UploadProps &
    IBaseFieldProps & {
      /** 上传组件显示的内容：<Button icon={<UploadOutlined />}>Click to Upload</Button> */
      children: (props: ISchemaChildrenProps) => React.ReactNode;
    };
};
/** Avatar */
export declare type IAvatarProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IAvatar;
  fieldProps?: AvatarProps & IBaseFieldProps;
};
/** Image */
export declare type IImageProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IImage;
  fieldProps?: ImageProps & IBaseFieldProps;
};
/** ITag */
export declare type ITagProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITag;
  fieldProps?: TagProps & IBaseFieldProps;
};
/** IProgress */
export declare type IProgressProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IProgress;
  fieldProps?: ProgressProps & IBaseFieldProps;
};
/** ITreeSelect */
export declare type ITreeSelectProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITreeSelect;
  fieldProps?: TreeSelectProps<any> & IBaseFieldProps;
};
/** ICascader */
export declare type ICascaderProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICascader;
  fieldProps?: CascaderProps<any> & IBaseFieldProps;
};
/** 扩展文本类型的 fieldProps */
export declare type IExtendFieldProps = {
  /** 时间区间 转换为文本的分隔符 */
  separator?: string;
};
/** IFormItemGroup 自定义item分组 */
export declare type IFormItemGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IFormItemGroup;
  options: IFormItem[];
};
/** 描述 */
export declare type IDescriptionsProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type?: IDescriptions;
  fieldProps?: IDesFieldProps;
};
/** 分割线 */
export declare type IDividerProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type?: IDivider;
  fieldProps?: IBaseFieldProps & DividerProps;
};
/** custom 类型 */
export declare type ICustomProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICustom;
  /** 自行渲染的组件 */
  render: (props: ISchemaChildrenProps) => React.ReactNode;
};
/** text 类型 */
export declare type ITextProps = Omit<IProps, 'render' | 'value' | 'type' | 'fieldProps'> & {
  type?: IText;
  value?: string;
  fieldProps?: IBaseFieldProps & TypographyTextProps;
};
/** IDateField */
export declare type IDateFieldProps = Omit<IProps, 'render' | 'value' | 'type' | 'fieldProps'> &
  (IDatePickerProps | ITimePickerProps | IRangePickerProps | ITimeRangePickerProps) & {
    fieldProps?: IBasePickerProps & IExtendFieldProps;
  };
export declare type ITimeConvertProps = Omit<IProps, 'render' | 'type' | 'value' | 'fieldProps'> & {
  type: ITimeRangePicker | ITimePicker | IRangePicker | IDatePicker;
  value?: string | string[] | DataValuesType | number | [number, number];
  onChange?: (e: any) => void;
  fieldProps?: (DatePickerProps | RangePickerProps | TimePickerProps | TimeRangePickerProps) &
    IBaseFieldProps &
    IBasePickerProps;
};
/** 下拉-文本类型 增加分隔符 */
export declare type ISelectFieldProps = Omit<ISelectProps, 'type' | 'fieldProps'> & {
  type?: ISelect;
  fieldProps?: SelectProps<any> & IBaseFieldProps & IExtendFieldProps;
};
/** 下拉树-文本类型 增加分隔符 */
export declare type ITreeSelectFieldProps = Omit<ITreeSelectProps, 'type' | 'fieldProps'> & {
  type?: ITreeSelect;
  fieldProps?: TreeSelectProps<any> & IBaseFieldProps & IExtendFieldProps;
};
/** 级联-文本类型 增加分隔符 */
export declare type ICascaderFieldProps = Omit<ICascaderProps, 'type' | 'fieldProps'> & {
  type?: ICascader;
  fieldProps?: CascaderProps<any> & IBaseFieldProps & IExtendFieldProps;
};
