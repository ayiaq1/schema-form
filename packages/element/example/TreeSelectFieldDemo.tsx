import React from 'react';
import { TreeSelectField } from '../src';
import { TreeData, initValues } from './config';

const TreeSelectFieldDemo = () => {
  return (
    <TreeSelectField
      value={initValues.multipleTreeSelect}
      fieldProps={{
        separator: ' - ',
        treeData: TreeData,
      }}
    />
  );
};
export default TreeSelectFieldDemo;
