/*
 * @Author: yihuang
 * @Date: 2022-07-14 16:57:35
 * @Description: 日期 转换为 静态文本
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */
import React, { useMemo } from 'react';
import {
  IDateFieldProps,
  Date_Picker,
  Range_Picker,
  Time_Picker,
  Time_Range_Picker,
  EnumDataType,
} from '../typings';
import { formatMomentFunc } from '../utils';
import { isMoment } from 'moment';

const DateField = ({ value, type, fieldProps }: IDateFieldProps) => {
  const { convertResult, separator = '-' } = fieldProps ?? {};

  const time = useMemo(() => {
    if (convertResult && typeof convertResult === 'function') {
      return convertResult(value);
    }
    if (!value) {
      return '';
    }
    const arr: any[] = [];
    switch (type) {
      case Date_Picker:
        return formatMomentFunc(value, convertResult ?? EnumDataType.YMD_HMS);
      case Time_Picker:
        return isMoment(value)
          ? value.format(convertResult ?? EnumDataType.HMS)
          : formatMomentFunc(value, convertResult ?? EnumDataType.HMS);
      case Range_Picker:
        (value as any[]).map((time) => {
          arr.push(formatMomentFunc(time, convertResult ?? EnumDataType.YMD_HMS));
        });
        return arr.join(separator);
      case Time_Range_Picker:
        (value as any[]).map((time) => {
          if (isMoment(time)) {
            arr.push(time.format(convertResult ?? EnumDataType.HMS));
          } else {
            arr.push(formatMomentFunc(time, convertResult ?? EnumDataType.HMS));
          }
        });
        return arr.join(separator);
      default:
        throw new Error(`没有找到对应的type类型: ${type}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <>{time}</>;
};
DateField.displayName = 'DateField';
export default DateField;
