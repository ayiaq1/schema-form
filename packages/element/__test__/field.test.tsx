/*
 * @Author: yihuang
 * @Date: 2022-03-23 15:30:45
 * @Description: Field 组件
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import mountTest from '../tests/mountTest';
import renderer from 'react-test-renderer';
import Field from '../src/components/Field';

/* Snapshot is a tool to test the code. */
describe('Field', () => {
  mountTest(Field);

  it('Save Field Text Snapshot', async () => {
    const wrapper = renderer.create(<Field mode="edit" value="Text" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Save Field Input Snapshot', async () => {
    const wrapper = renderer.create(<Field mode="edit" value="Input" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
