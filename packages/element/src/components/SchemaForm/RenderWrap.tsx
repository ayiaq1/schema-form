/*
 * @Author: yihuang
 * @Date: 2022-03-01 11:39:38
 * @Description: 自定义渲染
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState } from 'react';
import { ISchemaChildrenProps } from './typings';
import { converChangeEvent } from './utils';

interface IProps extends ISchemaChildrenProps {
  values?: any;
  render?: (props: ISchemaChildrenProps) => React.ReactNode;
}

const RenderWrap = ({ disabled, render, values, initialValues, onChange, fieldProps }: IProps) => {
  const [val, setVal] = useState();
  const onChangeFunc = (params: any) => {
    const str = converChangeEvent(params);
    setVal(str);
    fieldProps?.onChange?.(str);
    onChange?.(str);
  };
  useEffect(() => {
    setVal(values);
  }, [values]);

  useEffect(() => {
    setVal(fieldProps.value);
  }, [fieldProps.value]);

  return (
    <>
      {render?.({
        value: val,
        onChange: onChangeFunc,
        disabled,
        initialValues,
      })}
    </>
  );
};
export default RenderWrap;
