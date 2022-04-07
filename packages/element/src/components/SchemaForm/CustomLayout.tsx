/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:18:42
 * @Description: 自定义布局，可以使用group混合布局。
 * @LastModifiedBy: yihuang
 */
import React, { Fragment, memo } from 'react';
import { FormProps } from 'antd/lib/form';
import { ISchemaProps, IFormItem } from './typings';
import ItemWrap from './ItemWrap';
import ItemGroupWrap from './ItemGroupWrap';

const CustomLayout = ({
  type = 'custom',
  options = [],
  disabled: formDisabled,
  form,
  ...formReset
}: FormProps & ISchemaProps) => {
  return (
    <>
      {options.map((item: IFormItem, index) => {
        return (
          <Fragment key={item?.name?.toString() ?? index.toString()}>
            {item.type === 'group' ? (
              <ItemGroupWrap
                {...item}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            ) : (
              <ItemWrap
                {...item}
                values={item?.name && formReset?.initialValues?.[item?.name as any]}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
};
export default memo(CustomLayout);
