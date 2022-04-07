/*
 * @Author: yihuang
 * @Date: 2022-03-23 11:01:25
 * @Description: Element 组件
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Element from '../src/components/Element';
import { waitForComponentToPaint } from '../tests/utils';

describe('Element', () => {
  /* Snapshot is a way to test the UI of your component. */
  it('Save Text Snapshot', async () => {
    const wrapper = renderer.create(<Element type="text" value="text" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save ListWrap Input Snapshot', async () => {
    const wrapper = renderer.create(
      <Element type="list-wrap" mode="edit" value={['text', 'text1']} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save ListWrap Text Snapshot', async () => {
    const wrapper = renderer.create(
      <Element type="list-wrap" mode="read" value={['text', 'text1']} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Save Input Snapshot', async () => {
    const wrapper = renderer.create(<Element type="input" value="input" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('default value', async () => {
    const value = 'default';
    const wrapper = mount(<Element type="input" value={value} />);
    expect(wrapper.find('input').prop('value')).toBe(value);
  });

  it('onChange event', async () => {
    const onChange = jest.fn();
    const value = 'default';
    const wrapper = mount(<Element type="input" value="xxx" onChange={onChange} />);
    wrapper.setProps({ value });
    await waitForComponentToPaint(wrapper);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(value);
  });

  it('trim value', async () => {
    const onChange = jest.fn();
    const value = ' def a*&&^%&*(##$%ult ';
    const wrapper = mount(<Element type="input" onChange={onChange} />);
    wrapper.setProps({ value });
    wrapper.find('input').simulate('blur');
    await waitForComponentToPaint(wrapper);
    // 触发2次 一次 set value 一次blur去空格
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith('def a*&&^%&*(##$%ult');
  });
});
