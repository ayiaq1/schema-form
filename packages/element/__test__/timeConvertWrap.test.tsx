/*
 * @Author: yihuang
 * @Date: 2022-06-22 15:27:41
 * @Description: 日期转换组件
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */

import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TimeConvertWrap from '../src/components/TimeConvertWrap';
import moment from 'moment';

describe('TimeConvertWrap', () => {
  const Time_YMD = '2022-01-14';
  const Time_YMD_1 = '2022-06-27';
  const Time_HMS = '02:06:04';
  const Time_HMS_1 = '13:29:13';
  const Time_Start = '00:00:00';
  const Time_End = '23:59:59';

  const time = {
    /** 2022-01-14 02:06:04 */
    value: `${Time_YMD} ${Time_HMS}`,
    /** 2022-01-14 00:00:00 */
    Time_Start: `${Time_YMD} ${Time_Start}`,
    /** 02:06:04 */
    HMS: Time_HMS,
    /** 1642097164 时间戳 */
    unix: 1642097164,
    /** 1642089600 */
    start_unix: 1642089600,
    /** 1642097164000 毫秒时间戳 */
    unixValueOf: 1642097164000,
  };
  const time1 = {
    /** 2022-06-27 13:29:13 */
    value: `${Time_YMD_1} ${Time_HMS_1}`,
    /** 2022-06-27 23:59:59 */
    Time_End: `${Time_YMD_1} ${Time_End}`,
    /** 13:29:13 */
    HMS: Time_HMS_1,
    /** 1656307753 时间戳 */
    unix: 1656307753,
    /** 1656345599 */
    end_unix: 1656345599,
    /** 1656307753000 毫秒时间戳 */
    unixValueOf: 1656307753000,
  };

  /* Snapshot is a way to test the UI of your component. */
  it('Save Snapshot datePicker', async () => {
    const wrapper = renderer.create(<TimeConvertWrap type="datePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save Snapshot rangePicker', async () => {
    const wrapper = renderer.create(<TimeConvertWrap type="rangePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Save Snapshot timePicker', async () => {
    const wrapper = renderer.create(<TimeConvertWrap type="timePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Save Snapshot timeRangePicker', async () => {
    const wrapper = renderer.create(<TimeConvertWrap type="timeRangePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // ======== datePicker ==========
  it('datePicker default value is YMS_HMS', async () => {
    const onChange = jest.fn();
    mount(<TimeConvertWrap type="datePicker" value={time.value} onChange={onChange} />);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.value);
  });

  it('datePicker value is moment', async () => {
    const onChange = jest.fn();
    mount(<TimeConvertWrap type="datePicker" value={moment(time.value)} onChange={onChange} />);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.value);
  });

  it('datePicker value is unix', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="datePicker"
        value={time.value}
        fieldProps={{ convertResult: 'unix' }}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.unix);
  });

  it('datePicker value is unixValueOf', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="datePicker"
        value={time.value}
        fieldProps={{ convertResult: 'unixValueOf' }}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.unixValueOf);
  });

  it('datePicker convertResult is function', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="datePicker"
        value={time.value}
        fieldProps={{ convertResult: (val: any) => moment(val).valueOf() }}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.unixValueOf);
  });

  // ======== rangePicker ==========
  it('rangePicker default value is YMS_HMS', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap type="rangePicker" value={[time.value, time1.value]} onChange={onChange} />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.Time_Start, time1.Time_End]);
  });
  it('rangePicker convertResult is YMS_HMS', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="rangePicker"
        value={[time.value, time1.value]}
        onChange={onChange}
        fieldProps={{ convertResult: 'YYYY-MM-DD HH:mm:ss' }}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.value, time1.value]);
  });

  it('rangePicker value is moment', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="rangePicker"
        value={[moment(time.value), moment(time1.value)]}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.Time_Start, time1.Time_End]);
  });

  it('rangePicker value is unix', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="rangePicker"
        fieldProps={{
          convertResult: 'unix',
        }}
        value={[time.value, time1.value]}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    // rangePicker value is unix
    expect(onChange).toHaveBeenLastCalledWith([time.unix, time1.unix]);
  });

  it('rangePicker value is unixValueOf', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="rangePicker"
        value={[time.value, time1.value]}
        fieldProps={{ convertResult: 'unixValueOf' }}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.unixValueOf, time1.unixValueOf]);
  });

  it('rangePicker convertResult is function', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="rangePicker"
        value={[time.Time_Start, time1.Time_End]}
        fieldProps={{
          convertResult: (val: any) => moment(val).unix(),
        }}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.start_unix, time1.end_unix]);
  });

  // ======== timePicker ==========
  it('timePicker default value is YMS_HMS', async () => {
    const onChange = jest.fn();
    mount(<TimeConvertWrap type="timePicker" value={time.HMS} onChange={onChange} />);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.HMS);
  });

  it('timePicker value is moment', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="timePicker"
        value={moment(time.HMS, 'HH:mm:ss')}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.HMS);
  });

  it('timePicker convertResult is function', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="timePicker"
        value={time.HMS}
        fieldProps={{
          convertResult: (val: any) => moment(val, 'HH:mm:ss').format('HH:mm:ss'),
        }}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(time.HMS);
  });

  // ======== timeRangePicker ==========
  it('timeRangePicker default value is YMS_HMS', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap type="timeRangePicker" value={[time.HMS, time1.HMS]} onChange={onChange} />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.HMS, time1.HMS]);
  });

  it('timeRangePicker value is moment', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="timeRangePicker"
        value={[moment(time.HMS, 'HH:mm:ss'), moment(time1.HMS, 'HH:mm:ss')]}
        onChange={onChange}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.HMS, time1.HMS]);
  });

  it('timeRangePicker convertResult is function', async () => {
    const onChange = jest.fn();
    mount(
      <TimeConvertWrap
        type="timeRangePicker"
        value={[time.HMS, time1.HMS]}
        fieldProps={{
          convertResult: (val: any) => moment(val, 'HH:mm:ss').format('HH:mm:ss'),
        }}
        onChange={onChange}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith([time.HMS, time1.HMS]);
  });

  // end
});
