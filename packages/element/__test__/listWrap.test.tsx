/*
 * @Author: yihuang
 * @Date: 2022-03-23 11:13:41
 * @Description: listWrap 组件
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import { mount } from 'enzyme';
import mountTest from '../tests/mountTest';
import renderer from 'react-test-renderer';
import ListWrap from '../src/components/ListWrap';
import { waitForComponentToPaint } from '../tests/utils';

/* Snapshot is a tool to test the code. */
describe('ListWrap', () => {
  mountTest(ListWrap);

  it('Save ListWrap Input Snapshot', async () => {
    const wrapper = renderer.create(<ListWrap mode="edit" value={['text', 'text1']} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save ListWrap Text Snapshot', async () => {
    const wrapper = renderer.create(<ListWrap mode="read" value={['text', 'text1']} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('default value', async () => {
    const value = ['default', 'default1', 'default2'];
    const wrapper = mount(<ListWrap mode="edit" value={value} />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('onChange event', async () => {
    const onChange = jest.fn();
    const value = ['default', 'default1', 'default2'];
    const wrappers = mount(<ListWrap mode="edit" value={value} onChange={onChange} />);
    wrappers.find('li').forEach(async (wrapper, index) => {
      const input = wrapper.find('input');
      const i = index + 1;
      const ChangeValue = `${value}__${i}`;
      input.simulate('change', { target: { value: ChangeValue } });
      await waitForComponentToPaint(wrapper);
      expect(onChange).toHaveBeenCalledTimes(value.length + i);
      expect(onChange).toHaveBeenLastCalledWith(ChangeValue);
    });
  });
});
