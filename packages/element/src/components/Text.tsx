/*
 * @Author: yihuang
 * @Date: 2021-12-01 14:07:25
 * @Description: 只读文本，超长省略
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Typography } from 'antd';
import type { ITextProps } from '../typings';

const Text = ({ value, fieldProps }: ITextProps) => {
  const { ellipsis = true, style, className } = fieldProps ?? {};
  return (
    <Typography.Text
      ellipsis={
        ellipsis
          ? {
              tooltip: ellipsis,
            }
          : false
      }
      style={style}
      className={className}
    >
      {value}
    </Typography.Text>
  );
};
export default memo(Text);
