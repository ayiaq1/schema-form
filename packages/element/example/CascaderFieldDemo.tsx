import React from 'react';
import { CascaderField } from '../src';
import { CascaderDataFieldNames, initValues } from './config';

const CascaderFieldDemo = () => {
  return (
    <CascaderField
      value={initValues.cascader}
      fieldProps={{
        options: CascaderDataFieldNames,
        fieldNames: {
          label: 'title',
          value: 'value',
          children: 'options',
        },
      }}
    />
  );
};
export default CascaderFieldDemo;
