/*
 * @Author: yihuang
 * @Date: 2022-03-23 15:30:45
 * @Description: Field 组件
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import moment from 'moment';
import mountTest from '../tests/mountTest';
import Field from '../src/components/Field';
import { EnumDataType } from '../src/typings';

const Time_YMD = '2022-01-14 02:06:04';
const Time_YMD_1 = '2022-06-27 13:29:13';
const HMS_1 = '02:06:04';
const HMS_2 = '13:29:13';
const unix = 1642097164;
// const unix_1 = 1656307753;
const unixValueOf = 1642097164000;
const unixValueOf_1 = 1656307753000;
const separator = '--';

/* Snapshot is a tool to test the code. */
describe('Field', () => {
  mountTest(Field);

  it('Save Field Text Snapshot', async () => {
    const wrapper = renderer.create(<Field type="text" value="text" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save Field Text datePicker', async () => {
    const wrapper = renderer.create(<Field type="datePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save Field Text timePicker', async () => {
    const wrapper = renderer.create(<Field type="timePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save Field Text rangePicker', async () => {
    const wrapper = renderer.create(<Field type="rangePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save Field Text timeRangePicker', async () => {
    const wrapper = renderer.create(<Field type="timeRangePicker" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // ======== datePicker ==========
  it('Field type is datePicker default value', async () => {
    const wrapper = mount(<Field type="datePicker" value={Time_YMD} />);
    expect(wrapper.text()).toEqual(Time_YMD);
  });
  it('Field type is datePicker value to unixValueOf', async () => {
    const wrapper = mount(
      <Field
        type="datePicker"
        value={Time_YMD}
        fieldProps={{
          convertResult: 'unixValueOf',
        }}
      />,
    );
    expect(wrapper.text()).toEqual(unixValueOf.toString());
  });
  it('Field type is datePicker value to unix', async () => {
    const wrapper = mount(
      <Field
        type="datePicker"
        value={Time_YMD}
        fieldProps={{
          convertResult: 'unix',
        }}
      />,
    );
    expect(wrapper.text()).toEqual(unix.toString());
  });
  it('Field type is datePicker moment value', async () => {
    const wrapper = mount(<Field type="datePicker" value={moment(Time_YMD)} />);
    expect(wrapper.text()).toEqual(Time_YMD);
  });
  it('Field type is datePicker convertResult value', async () => {
    const wrapper = mount(
      <Field
        type="datePicker"
        value={Time_YMD}
        fieldProps={{
          convertResult: 'unixValueOf',
        }}
      />,
    );
    expect(wrapper.text()).toEqual(unixValueOf.toString());
  });
  // timePicker
  it('Field type is timePicker default value', async () => {
    const wrapper = mount(<Field type="timePicker" value={HMS_1} />);
    expect(wrapper.text()).toEqual(HMS_1);
  });
  it('Field type is timePicker moment value', async () => {
    const wrapper = mount(<Field type="timePicker" value={moment(HMS_1, EnumDataType.HMS)} />);
    expect(wrapper.text()).toEqual(HMS_1);
  });

  // rangePicker
  it('Field type is rangePicker default value', async () => {
    const wrapper = mount(<Field type="rangePicker" value={[Time_YMD, Time_YMD_1]} />);
    expect(wrapper.text()).toEqual(`${Time_YMD}-${Time_YMD_1}`);
  });
  it('Field type is rangePicker value to unixValueOf', async () => {
    const wrapper = mount(
      <Field
        type="rangePicker"
        value={[Time_YMD, Time_YMD_1]}
        fieldProps={{
          separator,
          convertResult: 'unixValueOf',
        }}
      />,
    );
    expect(wrapper.text()).toEqual(`${unixValueOf}${separator}${unixValueOf_1}`);
  });
  it('Field type is rangePicker moment value', async () => {
    const wrapper = mount(
      <Field
        type="rangePicker"
        value={[moment(Time_YMD), moment(Time_YMD_1)]}
        fieldProps={{
          separator,
          convertResult: 'unixValueOf',
        }}
      />,
    );
    expect(wrapper.text()).toEqual(`${unixValueOf}${separator}${unixValueOf_1}`);
  });

  // timeRangePicker
  it('Field type is timeRangePicker default value', async () => {
    const wrapper = mount(<Field type="timeRangePicker" value={[HMS_1, HMS_2]} />);
    expect(wrapper.text()).toEqual(`${HMS_1}-${HMS_2}`);
  });

  it('Field type is timeRangePicker moment value', async () => {
    const wrapper = mount(
      <Field
        type="timeRangePicker"
        value={[moment(HMS_1, EnumDataType.HMS), moment(HMS_2, EnumDataType.HMS)]}
        fieldProps={{
          separator,
        }}
      />,
    );
    expect(wrapper.text()).toEqual(`${HMS_1}${separator}${HMS_2}`);
  });

  // end
});
