import React, { memo } from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';
import { ISchemaProps } from './typings';
import RowLayout from './RowLayout';
import CustomLayout from './CustomLayout';

const SchemaForm = ({ type = 'row', ...resetProps }: FormProps & ISchemaProps) => {
  const { options = [], form, ...formReset } = resetProps;
  return (
    <>
      {options?.length ? (
        <Form {...formReset} form={form}>
          {type === 'row' ? (
            <RowLayout type={type} {...resetProps} />
          ) : (
            <CustomLayout type={type} {...resetProps} />
          )}
        </Form>
      ) : null}
    </>
  );
};
SchemaForm.displayName = 'SchemaForm';
export default memo(SchemaForm);
