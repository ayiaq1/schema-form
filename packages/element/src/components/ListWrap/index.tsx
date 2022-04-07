/*
 * @Author: yihuang
 * @Date: 2021-12-02 14:11:36
 * @Description: 列表包裹器 编辑：input，只读：text
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import type { IListWrapProps } from '../../typings';
import Field from '../Field';

const ListWrap = (props: IListWrapProps) => {
  const { value, className, style } = props;
  return (
    <>
      {value instanceof Array && value.length ? (
        <ul className={className} style={style as any}>
          {(value as string[])?.map((text, index) => {
            return (
              <li key={index}>
                <Field {...props} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};
ListWrap.displayName = 'ListWrap';
export default memo(ListWrap);
