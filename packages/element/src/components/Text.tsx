/*
 * @Author: yihuang
 * @Date: 2021-12-01 14:07:25
 * @Description: 只读文本，超长省略
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Typography } from 'antd';
import type { ITextProps } from '../typings';

const Text = ({ value, ellipsis = true, style }: ITextProps) => (
  <Typography.Text
    ellipsis={
      ellipsis
        ? {
            tooltip: ellipsis,
          }
        : false
    }
    style={style}
  >
    {value}
  </Typography.Text>
);
export default memo(Text);
