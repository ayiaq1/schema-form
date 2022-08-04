import React from 'react';
import { FormProps } from 'antd/lib/form';
import { ISchemaProps } from './typings';
declare const _default: React.MemoExoticComponent<
  ({
    options,
    disabled: formDisabled,
    readOnly: formReadonly,
    form,
    ...formReset
  }: FormProps<any> & ISchemaProps) => JSX.Element
>;
export default _default;
