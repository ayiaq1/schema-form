/*
 * @Author: yihuang
 * @Date: 2022-03-23 16:29:31
 * @Description: schema 组件
 * @LastModifiedBy: yihuang
 */
import React, { useState } from 'react';
import { mount } from 'enzyme';
import type { IFormItem } from '../src/components/SchemaForm/typings';
import renderer from 'react-test-renderer';
import SchemaForm from '../src/components/SchemaForm';
import mountTest from '../tests/mountTest';
import { Form, Button, Space } from 'antd';
import { waitForComponentToPaint } from '../tests/utils';

const TextItem: IFormItem = {
  label: 'text',
  name: 'text',
  type: 'text',
};

const InputItem: IFormItem = {
  label: 'input',
  name: 'input',
  type: 'input',
};
// const IDateItem: IFormItem = {
//   label: 'rangePicker',
//   name: 'rangePicker',
//   type: 'rangePicker',
// };
// Element 组件
describe('SchemaForm Element', () => {
  mountTest(SchemaForm);

  it('Save type is row snapshot', async () => {
    const wrapper = renderer.create(<SchemaForm type="row" options={[TextItem, InputItem]} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Save type is custom snapshot', async () => {
    const wrapper = renderer.create(<SchemaForm type="custom" options={[TextItem, InputItem]} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('initialValues set props', async () => {
    const initialValues = {
      text: 'text',
      input: 'input',
    };
    const Demo = () => {
      const [form] = Form.useForm();
      return (
        <SchemaForm
          disabled
          form={form}
          type="custom"
          initialValues={initialValues}
          options={[TextItem, InputItem]}
        />
      );
    };
    const wrapper = mount(<Demo />);
    await waitForComponentToPaint(wrapper);
    const formItems = wrapper.find('.ant-form-item');
    expect(formItems.length).toBe(2);
    expect(formItems.at(0).find('label').text()).toBe(initialValues.text);
    expect(formItems.at(1).find('input').prop('value')).toBe(initialValues.input);
    expect(formItems.at(1).find('input').first().prop('value')).toBeTruthy();
  });

  it('initialValues reset', async () => {
    const onValuesChange = jest.fn();
    const onResetFunc = jest.fn();
    const onFinishFunc = jest.fn();
    const initialValues = {
      text: 'text',
      input: 'input',
    };
    const ChangeValues = {
      text: 'text1',
      input: 'input2',
    };
    const Demo = () => {
      const [form] = Form.useForm();
      const onResetClick = () => {
        form.resetFields();
        onResetFunc.mockReturnValue(form.getFieldsValue());
      };
      const onSubmitClick = () => {
        onFinishFunc.mockReturnValue(form.getFieldsValue());
      };
      const onChangeClick = () => {
        form.setFieldsValue({ ...ChangeValues });
      };
      const ResetItem: IFormItem = {
        type: 'custom',
        render: () => (
          <Space>
            <Button className="reset-btn" onClick={onResetClick}>
              重置
            </Button>
            <Button className="change-btn" onClick={onChangeClick}>
              修改数据
            </Button>
            <Button className="submit-btn" onClick={onSubmitClick}>
              提交查看数据
            </Button>
          </Space>
        ),
      };
      return (
        <SchemaForm
          form={form}
          type="custom"
          initialValues={initialValues}
          options={[TextItem, InputItem, ResetItem]}
          onValuesChange={onValuesChange}
        />
      );
    };
    const wrapper = mount(<Demo />);
    // 修改内容
    wrapper.find('.change-btn').first().simulate('click');
    await waitForComponentToPaint(wrapper);
    wrapper.find('.submit-btn').first().simulate('click');
    expect(onFinishFunc()).toEqual(ChangeValues);
    // 重置数据
    wrapper.find('.reset-btn').first().simulate('click');
    // 重置之后，数据应该为初始值
    expect(onResetFunc()).toEqual(initialValues);
  });
});
// 自定义节点
describe('SchemaForm Custom', () => {
  const onValuesChange = jest.fn();
  const Demo = () => {
    const [form] = Form.useForm();
    const [formDisabled, setFormDisabled] = useState(true);
    return (
      <SchemaForm
        disabled={formDisabled}
        form={form}
        type="custom"
        initialValues={{
          diy: 'diy-value',
        }}
        onValuesChange={onValuesChange}
        options={[
          {
            label: '自定义组件',
            name: 'diy',
            type: 'custom',
            render: ({ disabled, value, onChange }) => {
              return (
                <Space>
                  <Button className="change-btn" disabled={disabled} onClick={onChange}>
                    {value}
                  </Button>
                  <Button className="cancel-btn" onClick={() => setFormDisabled(false)}>
                    取消禁用
                  </Button>
                </Space>
              );
            },
          },
        ]}
      />
    );
  };
  it('Save custom snapshot', async () => {
    const wrapperRender = renderer.create(<Demo />);
    expect(wrapperRender.toJSON()).toMatchSnapshot();
  });
});
