/*
 * @Author: yihuang
 * @Date: 2021-12-01 14:29:27
 * @Description: 默认屏蔽空格的Input组件
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import type { IInputProps } from '../typings';
import { Input } from 'antd';
import { converChangeEvent } from './SchemaForm/utils';

/** 默认屏蔽空格的Input组件 */
const InputWrap = ({ onChange, value, fieldProps = {} }: IInputProps) => {
  /** input的值 */
  const [inputVal, setInputVal] = useState(value);
  /** 默认屏蔽空格 */
  const { isTrim = true, ...fieldResetProps } = fieldProps;
  /** 转换值 */
  const onChangeFun = (params: any) => {
    const str = converChangeEvent(params);
    setInputVal(str);
    onChange?.(str);
  };
  /** 失焦去空格 */
  const onBlurFun = () => {
    let str: any = inputVal;
    if (isTrim && (str !== null || str !== undefined)) {
      if (str instanceof Array) {
        str = str.map((item) => {
          const v = item?.trim();
          return v === '' ? null : v;
        });
      } else {
        const v = str?.trim();
        str = v === '' ? null : v;
      }
    }
    setInputVal(str);
    onChange?.(str);
  };
  useEffect(() => {
    if (value && value !== inputVal) {
      onChangeFun(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Input
      allowClear
      maxLength={200}
      {...fieldResetProps}
      value={inputVal}
      onChange={onChangeFun}
      onBlur={onBlurFun}
    />
  );
};
InputWrap.displayName = 'InputWrap';
export default InputWrap;
