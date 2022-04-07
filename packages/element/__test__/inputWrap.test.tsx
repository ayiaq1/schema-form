/*
 * @Author: yihuang
 * @Date: 2022-03-22 15:20:48
 * @Description: InputWrap 组件
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import { mount } from 'enzyme';
import mountTest from '../tests/mountTest';
import renderer from 'react-test-renderer';
import InputWrap from '../src/components/InputWrap';
import { waitForComponentToPaint } from '../tests/utils';

/* Snapshot is a tool to test the code. */
describe('InputWrap', () => {
  mountTest(InputWrap);

  it('Save Snapshot', async () => {
    const wrapper = renderer.create(<InputWrap />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('default value', async () => {
    const value = 'default';
    const wrapper = mount(<InputWrap value={value} />);
    expect(wrapper.find('input').prop('value')).toBe(value);
  });

  it('onChange event', async () => {
    const onChange = jest.fn();
    const value = 'default';
    const wrapper = mount(<InputWrap value="xxx" onChange={onChange} />);
    wrapper.setProps({ value });
    await waitForComponentToPaint(wrapper);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(value);
  });
});
