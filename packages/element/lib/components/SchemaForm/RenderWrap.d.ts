import React from 'react';
import { ISchemaChildrenProps } from './typings';
interface IProps extends ISchemaChildrenProps {
  values?: any;
  render?: (props: ISchemaChildrenProps) => React.ReactNode;
}
declare const RenderWrap: ({
  disabled,
  readOnly,
  render,
  values,
  value,
  initialValues,
  onChange,
  fieldProps,
}: IProps) => JSX.Element;
export default RenderWrap;
