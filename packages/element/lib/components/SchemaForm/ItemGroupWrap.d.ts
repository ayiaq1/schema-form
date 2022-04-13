import React from 'react';
import type { CSSProperties } from 'react';
import type { IFormInheritProps, IFormItem } from './typings';
interface IProps extends IFormInheritProps {
  options: IFormItem[];
  className?: string;
  style?: CSSProperties;
}
declare const _default: React.MemoExoticComponent<
  ({ className, style, options, formDisabled, initialValues }: IProps) => JSX.Element
>;
export default _default;
