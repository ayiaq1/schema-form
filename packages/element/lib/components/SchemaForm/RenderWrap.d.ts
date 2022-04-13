import React from 'react';
import type { ISchemaChildrenProps } from './typings';
interface IProps extends ISchemaChildrenProps {
  values?: any;
  render?: (props: ISchemaChildrenProps) => React.ReactNode;
}
declare const RenderWrap: ({
  disabled,
  render,
  values,
  initialValues,
  onChange,
  fieldProps,
}: IProps) => JSX.Element;
export default RenderWrap;
