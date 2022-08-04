/// <reference types="react" />
import type {
  IAvatarProps,
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
/** divider */
declare function Element(props: IDividerProps): JSX.Element;
/** descriptions */
declare function Element(props: IDescriptionsProps): JSX.Element;
/** text */
declare function Element(props: ITextProps): JSX.Element;
/** input */
declare function Element(props: IInputProps): JSX.Element;
/** inputGroup */
declare function Element(props: IInputGroupProps): JSX.Element;
/** textarea */
declare function Element(props: ITextAreaProps): JSX.Element;
/** search */
declare function Element(props: ISearchProps): JSX.Element;
/** password */
declare function Element(props: IPasswordProps): JSX.Element;
/** InputNumber */
declare function Element(props: IInputNumberProps): JSX.Element;
/** Select */
declare function Element(props: ISelectProps): JSX.Element;
/** datePicker */
declare function Element(props: IDatePickerProps): JSX.Element;
/** rangePicker */
declare function Element(props: IRangePickerProps): JSX.Element;
/** timePicker */
declare function Element(props: ITimePickerProps): JSX.Element;
/** TimeRangePicker */
declare function Element(props: ITimeRangePickerProps): JSX.Element;
/** Checkbox */
declare function Element(props: ICheckboxProps): JSX.Element;
/** CheckboxGroup */
declare function Element(props: ICheckboxGroupProps): JSX.Element;
/** RadioGroup */
declare function Element(props: IRadioGroupProps): JSX.Element;
/** Rate */
declare function Element(props: IRateProps): JSX.Element;
/** slider */
declare function Element(props: ISliderProps): JSX.Element;
/** switch */
declare function Element(props: ISwitchProps): JSX.Element;
/** upload */
declare function Element(props: IUploadProps): JSX.Element;
/** Avatar */
declare function Element(props: IAvatarProps): JSX.Element;
/** Image */
declare function Element(props: IImageProps): JSX.Element;
/** Tag */
declare function Element(props: ITagProps): JSX.Element;
/** Progress */
declare function Element(props: IProgressProps): JSX.Element;
/** TreeSelect */
declare function Element(props: ITreeSelectProps): JSX.Element;
/** Cascader */
declare function Element(props: ICascaderProps): JSX.Element;
/** Custom */
declare function Element(props: ICustomProps): JSX.Element;
declare namespace Element {
  var displayName: string;
}
export default Element;
