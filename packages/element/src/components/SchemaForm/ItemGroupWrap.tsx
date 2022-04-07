/*
 * @Author: yihuang
 * @Date: 2022-02-21 16:55:00
 * @Description: 节点组的包裹器
 * @LastModifiedBy: yihuang
 */
import React, { CSSProperties, memo } from 'react';
import ItemWrap from './ItemWrap';
import type { IFormInheritProps, IFormItem } from './typings';

interface IProps extends IFormInheritProps {
  options: IFormItem[];
  className?: string;
  style?: CSSProperties;
}

const ItemGroupWrap = ({ className, style, options, formDisabled, initialValues }: IProps) => {
  return (
    <div className={className} style={style}>
      {options?.length
        ? options.map((item, index) => (
            <ItemWrap
              key={item?.name?.toString() ?? index.toString()}
              {...item}
              values={item?.name && initialValues?.[item?.name as any]}
              formDisabled={formDisabled}
              initialValues={initialValues}
            />
          ))
        : null}
    </div>
  );
};
export default memo(ItemGroupWrap);
