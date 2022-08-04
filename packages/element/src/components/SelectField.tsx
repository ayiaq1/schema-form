/*
 * @Author: yihuang
 * @Date: 2022-07-19 15:37:05
 * @Description: 下拉选择的只读文案
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import { ISelectFieldProps } from '../typings';
import { deepEach } from '../javascript';
import { DefaultOptionType } from 'antd/lib/select';
import Text from './Text';

const SelectField = ({ value: selectValue, fieldProps }: ISelectFieldProps) => {
  const [pathNames, setPathNames] = useState('');
  const { separator = '/', fieldNames } = fieldProps ?? {};
  const options = fieldNames?.options ? fieldProps?.[fieldNames?.options] : fieldProps?.options;
  useEffect(() => {
    if (options?.length && selectValue) {
      const arr: any[] = [];
      const { label = 'label', value = 'value' } = fieldNames ?? {};
      deepEach(
        options,
        (item: DefaultOptionType) => {
          if (selectValue instanceof Array) {
            const row: DefaultOptionType = selectValue.find((val) => val === item[value]);
            if (row) {
              arr.push(item.label);
            }
          } else if (selectValue === item[value]) {
            arr.push(item[label]);
          }
        },
        fieldNames?.options ?? 'children',
      );
      setPathNames(arr.join(separator));
    } else {
      setPathNames('');
    }
  }, [options, selectValue, separator, fieldNames]);
  return (
    <Text
      fieldProps={{
        style: fieldProps?.style,
        className: fieldProps?.className,
      }}
      value={pathNames}
    />
  );
};
SelectField.displayName = 'TreeSelectField';
export default SelectField;
