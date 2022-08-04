/*
 * @Author: yihuang
 * @Date: 2022-06-21 16:24:28
 * @Description: 日期类型的包裹器 - 将antd所有日期类型做一层数据转换
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */
import React, { useEffect, useState, memo } from 'react';
import {
  ITimeConvertProps,
  Date_Picker,
  Range_Picker,
  Time_Picker,
  Time_Range_Picker,
  EnumDataType,
  FormatTimeType,
  Unix,
  UnixValueOf,
} from '../typings';
import {
  DatePicker,
  DatePickerProps,
  TimePicker,
  TimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import type { Moment } from 'moment';
import type { RangePickerProps } from 'antd/lib/date-picker';
import { formatMomentFunc } from '../utils';
import moment, { isMoment } from 'moment';
import usePrevious from '../hooks/usePrevious';

const TimeConvertWrap = (props: ITimeConvertProps) => {
  const { type, value, onChange, fieldProps } = props;
  const { convertResult, showTime } = fieldProps ?? {};
  const [val, setVal] = useState<any>();
  // prop.preValue 上一次的值
  const preValue = usePrevious(value);

  // 转换值为 moment 类型
  const setValueToMomentFunc = (data: any) => {
    const format = [Date_Picker, Range_Picker].includes(type)
      ? EnumDataType.YMD_HMS
      : EnumDataType.HMS;
    if (data instanceof Array) {
      return data.map((item, index) => {
        if (isMoment(item)) {
          return item;
        } else if (Number.isInteger(item)) {
          return moment.unix(item);
        } else if ([Time_Range_Picker, Time_Picker].includes(type)) {
          return moment(item, format);
        } else if (Range_Picker === type) {
          const isStr = typeof convertResult === 'string';
          if (isStr && [Unix, UnixValueOf].includes(convertResult)) {
            return moment(item);
          }
          const f = isStr
            ? convertResult
            : index === 0
            ? EnumDataType.YMD_START_TIME
            : EnumDataType.YMD_END_TIME;
          return moment(moment(item).format(f));
        } else {
          return item;
        }
      });
    } else if (isMoment(data)) {
      return data;
    } else if ([Time_Range_Picker, Time_Picker].includes(type)) {
      return moment(data, format);
    } else {
      return moment(data);
    }
  };
  // 获取数据为moment的格式化值
  const getMomentValueFunc = (data: any, defaultFormat?: FormatTimeType) => {
    const format =
      convertResult ??
      defaultFormat ??
      ([Date_Picker, Range_Picker].includes(type) ? EnumDataType.YMD_HMS : EnumDataType.HMS);
    if (data instanceof Array) {
      return data.map((item, index) => {
        if (convertResult && typeof convertResult === 'function') {
          const obj = convertResult(item);
          if (obj) {
            return obj;
          } else {
            console.error('convertResult 同步方法需要有返回值！');
            return null;
          }
        } else if (
          typeof convertResult === 'string' &&
          [Unix, UnixValueOf].includes(convertResult)
        ) {
          return formatMomentFunc(item, convertResult, convertResult);
        } else if (type === Time_Range_Picker) {
          // 时间区间 默认返回： [HH:mm:ss,HH:mm:ss]
          return formatMomentFunc(item, format as FormatTimeType, convertResult);
        } else {
          // 是否 包含 时分秒
          // const hasDefault: boolean = isMoment(item) ? true : item?.split(' ')?.length > 0;
          return formatMomentFunc(
            item,
            showTime || convertResult
              ? (format as FormatTimeType)
              : // 没有时分秒时 默认返回： [YYYY-MM-DD 00:00:00,YYYY-MM-DD 23:59:59]
              index === 0
              ? EnumDataType.YMD_START_TIME
              : EnumDataType.YMD_END_TIME,
            convertResult,
          );
        }
      });
    } else if (convertResult && typeof convertResult === 'function') {
      const obj = convertResult(data);
      if (obj) {
        return obj;
      } else {
        console.error('convertResult 同步方法需要有返回值！');
        return null;
      }
    } else {
      return formatMomentFunc(data, format as FormatTimeType, convertResult);
    }
  };
  /** 格式化数据为字符串 */
  const formatToStrFun = (data: any) => {
    const format = [Date_Picker, Range_Picker].includes(type)
      ? EnumDataType.YMD_HMS
      : EnumDataType.HMS;
    const arr = [];
    if (data instanceof Array) {
      data.forEach((item) => {
        if (isMoment(item)) {
          arr.push(item.valueOf());
        } else if (Number.isInteger(item)) {
          arr.push(item);
        } else {
          arr.push(moment(item, format).valueOf());
        }
      });
    } else if (Number.isInteger(data)) {
      arr.push(data);
    } else {
      arr.push(moment(data, format).valueOf());
    }
    return arr;
  };
  const onChangeFunc = (data: any) => {
    if (!data) {
      onChange?.(null);
      setVal(null);
      return;
    }
    const formatResult = getMomentValueFunc(data);
    onChange?.(formatResult);
    setVal(data);
  };
  useEffect(() => {
    if (value) {
      // 父级的value变化时才判断
      if (!val) {
        const momentValue = setValueToMomentFunc(value);
        onChangeFunc(momentValue);
      } else {
        const converPreValue = formatToStrFun(preValue).toString();
        const converValue = formatToStrFun(value).toString();
        // prop.value 前后值不相等，才赋值
        if (converPreValue !== converValue) {
          const momentValue = setValueToMomentFunc(value);
          onChangeFunc(momentValue);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  switch (type) {
    case Date_Picker:
      return (
        <DatePicker
          {...(fieldProps as DatePickerProps)}
          onChange={onChangeFunc}
          value={val as Moment}
        />
      );
    case Range_Picker:
      return (
        <DatePicker.RangePicker
          {...(fieldProps as RangePickerProps)}
          onChange={onChangeFunc}
          value={val as [Moment, Moment]}
        />
      );
    case Time_Picker:
      return (
        <TimePicker
          {...(fieldProps as TimePickerProps)}
          onChange={onChangeFunc}
          value={val as Moment}
        />
      );
    case Time_Range_Picker:
      return (
        <TimePicker.RangePicker
          {...(fieldProps as TimeRangePickerProps)}
          onChange={onChangeFunc}
          value={val as [Moment, Moment]}
        />
      );
    default:
      console.error('错误的类型 type：', type);
      return null;
  }
};
TimeConvertWrap.displayName = 'TimeConvertWrap';
export default memo(TimeConvertWrap);
