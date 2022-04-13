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
/** Element 独立使用的时候，重载type推导类型。 */
/** text */
declare function Element(props: ITextProps): any;
/** list-wrap */
declare function Element(props: IListWrapProps): any;
/** input */
declare function Element(props: IInputProps): any;
/** input-group */
declare function Element(props: IInputGroupProps): any;
/** textarea */
declare function Element(props: ITextAreaProps): any;
/** search */
declare function Element(props: ISearchProps): any;
/** password */
declare function Element(props: IPasswordProps): any;
/** InputNumber */
declare function Element(props: IInputNumberProps): any;
/** Select */
declare function Element(props: ISelectProps): any;
/** datepicker */
declare function Element(props: IDatePickerProps): any;
/** rangepicker */
declare function Element(props: IRangePickerProps): any;
/** timePicker */
declare function Element(props: ITimePickerProps): any;
/** TimeRangePicker */
declare function Element(props: ITimeRangePickerProps): any;
/** Checkbox */
declare function Element(props: ICheckboxProps): any;
/** CheckboxGroup */
declare function Element(props: ICheckboxGroupProps): any;
/** RadioGroup */
declare function Element(props: IRadioGroupProps): any;
/** Rate */
declare function Element(props: IRateProps): any;
/** slider */
declare function Element(props: ISliderProps): any;
/** switch */
declare function Element(props: ISwitchProps): any;
/** upload */
declare function Element(props: IUploadProps): any;
/** Avatar */
declare function Element(props: IAvatarProps): any;
/** Image */
declare function Element(props: IImageProps): any;
/** Tag */
declare function Element(props: ITagProps): any;
/** Progress */
declare function Element(props: IProgressProps): any;
/** TreeSelect */
declare function Element(props: ITreeSelectProps): any;
/** Cascader */
declare function Element(props: ICascaderProps): any;
declare namespace Element {
  var displayName: string;
}
export default Element;
