/// <reference types="react" />
import type {
  ICustomProps,
  IDatePickerProps,
  IInputGroupProps,
  IInputNumberProps,
  IInputProps,
  IPasswordProps,
  IRangePickerProps,
  ISearchProps,
  ISelectFieldProps,
  ITagProps,
  ITextAreaProps,
  ITextProps,
  ITimePickerProps,
  ITimeRangePickerProps,
  ITreeSelectFieldProps,
  ICascaderFieldProps,
  IDividerProps,
  IDescriptionsProps,
} from '../typings';
/** descriptions */
declare function Field(props: IDescriptionsProps): JSX.Element;
/** divider */
declare function Field(props: IDividerProps): JSX.Element;
/** text */
declare function Field(props: ITextProps): JSX.Element;
/** input */
declare function Field(props: IInputProps): JSX.Element;
/** inputGroup */
declare function Field(props: IInputGroupProps): JSX.Element;
/** textarea */
declare function Field(props: ITextAreaProps): JSX.Element;
/** search */
declare function Field(props: ISearchProps): JSX.Element;
/** password */
declare function Field(props: IPasswordProps): JSX.Element;
/** InputNumber */
declare function Field(props: IInputNumberProps): JSX.Element;
/** datePicker */
declare function Field(props: IDatePickerProps): JSX.Element;
/** rangePicker */
declare function Field(props: IRangePickerProps): JSX.Element;
/** timePicker */
declare function Field(props: ITimePickerProps): JSX.Element;
/** TimeRangePicker */
declare function Field(props: ITimeRangePickerProps): JSX.Element;
/** Tag */
declare function Field(props: ITagProps): JSX.Element;
/** Custom */
declare function Field(props: ICustomProps): JSX.Element;
/** Select */
declare function Field(props: ISelectFieldProps): JSX.Element;
/** TreeSelect */
declare function Field(props: ITreeSelectFieldProps): JSX.Element;
/** Cascader */
declare function Field(props: ICascaderFieldProps): JSX.Element;
declare namespace Field {
  var displayName: string;
}
export default Field;
