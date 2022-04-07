/*
 * @Author: yihuang
 * @Date: 2022-03-22 15:20:48
 * @Description: Text组件
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import mountTest from '../tests/mountTest';
import Text from '../src/components/Text';

describe('Text', () => {
  mountTest(Text);

  /* Snapshot is a way to test the UI of your component. */
  it('Save Snapshot', async () => {
    const wrapper = renderer.create(<Text />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('default value', async () => {
    const value = 'default';
    const wrapper = mount(<Text value={value} />);
    expect(wrapper.text()).toEqual(value);
  });

  it('update value', async () => {
    const value = 'default';
    const wrapper = mount(<Text value="123" />);
    wrapper.setProps({ value });
    expect(wrapper.text()).toEqual(value);
  });
});
