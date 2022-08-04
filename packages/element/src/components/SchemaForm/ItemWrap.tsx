/*
 * @Author: yihuang
 * @Date: 2022-02-21 16:49:01
 * @Description: item节点包裹器
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Form } from 'antd';
import { IItemWrapProps } from './typings';
import { Element, Field } from '../../index';
import RenderWrap from './RenderWrap';

const { Item } = Form;

const ItemWrap = ({
  formDisabled,
  formReadonly,
  initialValues,
  values,
  render,
  type,
  width = '100%',
  fieldProps = {},
  ...reset
}: IItemWrapProps) => {
  const { disabled, readOnly, ...resetFieldProps } = fieldProps as any;
  return (
    <Item {...reset}>
      {type === 'custom' ? (
        // 自定义的使用外部组件
        <RenderWrap
          {...reset}
          fieldProps={resetFieldProps}
          values={values}
          render={render}
          disabled={disabled ?? formDisabled}
          readOnly={readOnly ?? formReadonly}
          initialValues={initialValues}
        />
      ) : readOnly ?? formReadonly ? (
        <Field
          {...reset}
          fieldProps={
            {
              ...resetFieldProps,
              value: values,
            } as any
          }
          type={type as any}
        />
      ) : (
        // 透传
        <Element
          style={['checkbox', 'switch', 'tag'].includes(type) ? undefined : { width }}
          {...reset}
          fieldProps={
            {
              ...resetFieldProps,
              value: values,
              disabled: disabled ?? formDisabled,
            } as any
          }
          type={type as any}
        />
      )}
    </Item>
  );
};
export default memo(ItemWrap);
