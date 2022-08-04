/*
 * @Author: yihuang
 * @Date: 2022-07-19 15:37:05
 * @Description: 下拉树 的只读文案
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import { ICascaderFieldProps } from '../typings';
import { deepEach } from '../javascript';
import { DefaultOptionType } from 'antd/lib/select';
import Text from './Text';

const CascaderField = ({ value: selectValue, fieldProps }: ICascaderFieldProps) => {
  const [pathNames, setPathNames] = useState('');
  const { separator = '/', fieldNames } = fieldProps ?? {};
  const options = fieldNames?.children ? fieldProps?.[fieldNames?.children] : fieldProps?.options;
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
              arr.push(item[label]);
            }
          } else if (selectValue === item[value]) {
            arr.push(item[label]);
          }
        },
        fieldNames?.children ?? 'children',
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
CascaderField.displayName = 'CascaderField';
export default CascaderField;
