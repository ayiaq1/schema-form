import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { ISchemaProps } from './typings';
import RowLayout from './RowLayout';
import CustomLayout from './CustomLayout';

const SchemaForm = ({ type = 'row', ...resetProps }: ISchemaProps) => {
  const { options = [], form, ...formReset } = resetProps;
  const [initialValues, setInitialValues] = useState(resetProps.initialValues);
  useEffect(() => {
    if (resetProps?.initialValues) {
      setInitialValues(resetProps?.initialValues);
    }
  }, [resetProps?.initialValues]);
  return (
    <>
      {options?.length ? (
        <Form initialValues={initialValues} scrollToFirstError={true} {...formReset} form={form}>
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
export default SchemaForm;
