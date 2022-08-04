import React from 'react';
import { SelectField } from '../src';
import { SelectData, initValues } from './config';

const SelectFieldDemo = () => {
  return (
    <SelectField
      value={initValues.select}
      fieldProps={{
        options: SelectData,
      }}
    />
  );
};
export default SelectFieldDemo;
