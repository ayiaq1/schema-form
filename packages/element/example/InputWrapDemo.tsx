import React from 'react';
import { Form, Card } from 'antd';
import { InputWrap } from '../src/index';

const { Item } = Form;
const InputWrapDemo = () => {
  const onValuesChange = (values) => {
    console.log('onValuesChange', values);
  };
  return (
    <Card title="InputWrap组件">
      <Form
        initialValues={{
          inputWrap: '输入自动去掉前后空格，Enter触发提交',
        }}
        onValuesChange={onValuesChange}
      >
        <Item name="inputWrap">
          <InputWrap />
        </Item>
      </Form>
    </Card>
  );
};
export default InputWrapDemo;
