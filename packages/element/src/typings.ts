/*
 * @Author: yihuang
 * @Date: 2021-10-09 11:00:31
 * @Description: 推导定义
 * @LastModifiedBy: yihuang
 */
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
export type ValueOf<T> = T[keyof T];
export type DataValuesType = Moment | [Moment, Moment];
/** Unix 时间戳（自 Unix 纪元以来的秒数） */
export const Unix = 'unix';
/** Unix 毫秒时间戳（自 Unix 纪元以来的毫秒数） */
export const UnixValueOf = 'unixValueOf';
/** 返回 Moment 格式 */
export const MOMENT = 'moment';
export const HMS = 'HH:mm:ss';
export const HM = 'HH:mm';
export const EnumDataType = {
  /** HH:mm:ss */
  HMS,
  /** YYYY:HH:mm:ss */
  YMD: 'YYYY-MM-DD',
  /** YYYY-MM-DD HH:mm:ss */
  YMD_HMS: 'YYYY-MM-DD HH:mm:ss',
  /** YYYY-MM-DD 00:00:00 */
  YMD_START_TIME: 'YYYY-MM-DD 00:00:00',
  /** YYYY-MM-DD 23:59:59 */
  YMD_END_TIME: 'YYYY-MM-DD 23:59:59',
} as const;
/** 日期类型 */
export type DataType = ValueOf<typeof EnumDataType>;
/** 日期可以转换的类型 */
export type FormatTimeType = DataType | typeof MOMENT | typeof Unix | typeof UnixValueOf;
/** 支持转换的类型 */
export type IConverTimeType = DataType | typeof Unix | typeof UnixValueOf | ((val: any) => any);
/** 日期的 基础参数 */
export interface IBasePickerProps {
  showTime?: boolean;
  /**
   * onChange的时候是否要转换结果，支持：日期、Unix 时间戳、Unix 毫秒时间戳、自定义方法: convertResult: (data) => moment(data).format('DD HH:mm:ss')
   */
  convertResult?: IConverTimeType;
}
/** 给 外部判断type用 */
export const Date_Picker = 'datePicker';
export const Range_Picker = 'rangePicker';
export const Time_Picker = 'timePicker';
export const Time_Range_Picker = 'timeRangePicker';

/** 模式  只读，编辑 */
export type ModeType = 'read' | 'edit';
/** 自定义 */
export type ICustom = 'custom';
export type IDivider = 'divider';
export type IDescriptions = 'descriptions';
export type IText = 'text';
export type ICheckbox = 'checkbox';
export type ICheckboxGroup = 'checkboxGroup';
export type IInput = 'input';
export type IInputGroup = 'inputGroup';
export type ISearch = 'search';
export type ITextArea = 'textarea';
export type IPassword = 'password';
export type ISelect = 'select';
export type ICascader = 'cascader';
export type ITreeSelect = 'treeSelect';
export type IDatePicker = typeof Date_Picker;
export type IRangePicker = typeof Range_Picker;
export type ITimePicker = typeof Time_Picker;
export type ITimeRangePicker = typeof Time_Range_Picker;
export type IInputNumber = 'inputNumber';
export type IRadioGroup = 'radioGroup';
export type IRate = 'rate';
export type ISlider = 'slider';
export type ISwitch = 'switch';
export type IUpload = 'upload';
export type IAvatar = 'avatar';
export type IImage = 'image';
export type ITag = 'tag';
export type IProgress = 'progress';
export type IFormItemGroup = 'group';
export type IDateField = 'dateField';
/** 所有组件的类型 */
export type EnumElementType =
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
export type EnumType = EnumElementType | ICustom;

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

/* input 类型 */
export type IInputProps = Omit<IProps, 'render' | 'type' | 'value' | 'fieldProps'> & {
  // 需要加上type，overread的时候兼容
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
export type IInputGroupProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IInputGroup;
  fieldProps?: InputGroupProps &
    IBaseFieldProps & {
      /** Input.Group的children渲染内容 */
      children?: (props: ISchemaChildrenProps) => React.ReactNode;
    };
};
/* TextArea */
export type ITextAreaProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITextArea;
  fieldProps?: TextAreaProps & IBaseFieldProps;
};

/* search */
export type ISearchProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISearch;
  fieldProps?: SearchProps &
    IBaseFieldProps & {
      /** 是否忽略空格 默认 true */
      isTrim?: true | boolean;
    };
};

/* password */
export type IPasswordProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IPassword;
  fieldProps?: PasswordProps &
    IBaseFieldProps & {
      /** 是否忽略空格 默认 true */
      isTrim?: true | boolean;
    };
};

/* inputNumber */
export type IInputNumberProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IInputNumber;
  fieldProps?: InputNumberProps & IBaseFieldProps;
};

/** select 类型 */
export type ISelectProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISelect;
  fieldProps?: SelectProps<any> & IBaseFieldProps;
};

/** datePicker 类型 */
export type IDatePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: IDatePicker;
  value?: number | string | Moment;
  fieldProps?: DatePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** rangePicker 类型 */
export type IRangePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: IRangePicker;
  value?: [number, number] | [string, string] | [Moment, Moment];
  fieldProps?: RangePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** timePicker 类型 */
export type ITimePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: ITimePicker;
  value?: number | string | Moment;
  fieldProps?: TimePickerProps & IBaseFieldProps & IBasePickerProps;
};
/** timeRangePicker 类型 */
export type ITimeRangePickerProps = Omit<IProps, 'render' | 'fieldProps' | 'type' | 'value'> & {
  type: ITimeRangePicker;
  value?: [number, number] | [string, string] | [Moment, Moment];
  fieldProps?: TimeRangePickerProps & IBaseFieldProps & IBasePickerProps;
};

/** checkbox 类型 */
export type ICheckboxProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICheckbox;
  fieldProps?: CheckboxProps & IBaseFieldProps;
};

/** checkbox 类型 */
export type ICheckboxGroupProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICheckboxGroup;
  fieldProps?: CheckboxGroupProps & IBaseFieldProps;
};
/** RadioGroup */
export type IRadioGroupProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IRadioGroup;
  fieldProps?: RadioGroupProps & IBaseFieldProps;
};
/** Rate */
export type IRateProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IRate;
  fieldProps?: RateProps & IBaseFieldProps;
};
/** Slider */
export type ISliderProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISlider;
  fieldProps?: (SliderSingleProps | SliderRangeProps) & IBaseFieldProps;
};
/** Switch */
export type ISwitchProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ISwitch;
  fieldProps?: SwitchProps & IBaseFieldProps;
};
/** Upload */
export type IUploadProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IUpload;
  fieldProps?: UploadProps &
    IBaseFieldProps & {
      /** 上传组件显示的内容：<Button icon={<UploadOutlined />}>Click to Upload</Button> */
      children: (props: ISchemaChildrenProps) => React.ReactNode;
    };
};
/** Avatar */
export type IAvatarProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IAvatar;
  fieldProps?: AvatarProps & IBaseFieldProps;
};
/** Image */
export type IImageProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IImage;
  fieldProps?: ImageProps & IBaseFieldProps;
};
/** ITag */
export type ITagProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITag;
  fieldProps?: TagProps & IBaseFieldProps;
};
/** IProgress */
export type IProgressProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: IProgress;
  fieldProps?: ProgressProps & IBaseFieldProps;
};
/** ITreeSelect */
export type ITreeSelectProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ITreeSelect;
  fieldProps?: TreeSelectProps<any> & IBaseFieldProps;
};
/** ICascader */
export type ICascaderProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICascader;
  fieldProps?: CascaderProps<any> & IBaseFieldProps;
};

// =========== 非antd 组件的转换类型 ===========

/** 扩展文本类型的 fieldProps */
export type IExtendFieldProps = {
  /** 时间区间 转换为文本的分隔符 */
  separator?: string;
};

/** IFormItemGroup 自定义item分组 */
export type IFormItemGroupProps = Omit<IProps, 'fieldProps' | 'type'> & {
  type: IFormItemGroup;
  options: IFormItem[];
};

/** 描述 */
export type IDescriptionsProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type?: IDescriptions;
  fieldProps?: IDesFieldProps;
};
/** 分割线 */
export type IDividerProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type?: IDivider;
  fieldProps?: IBaseFieldProps & DividerProps;
};
/** custom 类型 */
export type ICustomProps = Omit<IProps, 'render' | 'fieldProps' | 'type'> & {
  type: ICustom;
  /** 自行渲染的组件 */
  render: (props: ISchemaChildrenProps) => React.ReactNode;
};
/** text 类型 */
export type ITextProps = Omit<IProps, 'render' | 'value' | 'type' | 'fieldProps'> & {
  // 需要加上type，overread的时候兼容
  type?: IText;
  value?: string;
  fieldProps?: IBaseFieldProps & TypographyTextProps;
};

/** IDateField */
export type IDateFieldProps = Omit<IProps, 'render' | 'value' | 'type' | 'fieldProps'> &
  (IDatePickerProps | ITimePickerProps | IRangePickerProps | ITimeRangePickerProps) & {
    fieldProps?: IBasePickerProps & IExtendFieldProps;
  };

/* ITimeConvertProps 日期转换 */
export type ITimeConvertProps = Omit<IProps, 'render' | 'type' | 'value' | 'fieldProps'> & {
  type: ITimeRangePicker | ITimePicker | IRangePicker | IDatePicker;
  value?: string | string[] | DataValuesType | number | [number, number];
  onChange?: (e: any) => void;
  fieldProps?: (DatePickerProps | RangePickerProps | TimePickerProps | TimeRangePickerProps) &
    IBaseFieldProps &
    IBasePickerProps;
};

/** 下拉-文本类型 增加分隔符 */
export type ISelectFieldProps = Omit<ISelectProps, 'type' | 'fieldProps'> & {
  type?: ISelect;
  fieldProps?: SelectProps<any> & IBaseFieldProps & IExtendFieldProps;
};
/** 下拉树-文本类型 增加分隔符 */
export type ITreeSelectFieldProps = Omit<ITreeSelectProps, 'type' | 'fieldProps'> & {
  type?: ITreeSelect;
  fieldProps?: TreeSelectProps<any> & IBaseFieldProps & IExtendFieldProps;
};
/** 级联-文本类型 增加分隔符 */
export type ICascaderFieldProps = Omit<ICascaderProps, 'type' | 'fieldProps'> & {
  type?: ICascader;
  fieldProps?: CascaderProps<any> & IBaseFieldProps & IExtendFieldProps;
};
