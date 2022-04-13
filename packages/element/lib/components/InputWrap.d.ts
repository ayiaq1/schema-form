/// <reference types="react" />
import type { IInputProps } from '../typings';
/** 默认屏蔽空格的Input组件 */
declare const InputWrap: {
  ({ onChange, value, fieldProps }: IInputProps): JSX.Element;
  displayName: string;
};
export default InputWrap;
