/*
 * @Author: yihuang
 * @Date: 2021-11-30 18:27:39
 * @Description: 字段类型 包含 只读、编辑
 * @LastModifiedBy: yihuang
 */

import React, { memo } from 'react';
import type { IFieldProps } from '../typings';
import Text from './Text';
import InputWrap from './InputWrap';

/** 字段包裹器 */
const Field = (props: IFieldProps) => {
  const { mode = 'edit', onChange, fieldProps } = props;
  const value = (fieldProps as any)?.value ?? props?.value;
  return (
    <>
      {mode === 'read' ? (
        <Text {...fieldProps} value={value} type="text" />
      ) : (
        <InputWrap fieldProps={fieldProps as any} value={value} onChange={onChange} type="input" />
      )}
    </>
  );
};
Field.displayName = 'Field';
export default memo(Field);
