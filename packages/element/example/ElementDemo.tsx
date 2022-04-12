/*
 * @Author: yihuang
 * @Date: 2021-10-09 11:58:48
 * @Description: 原子组件 - demo
 * @LastModifiedBy: yihuang
 */
import React, { useState, useMemo } from 'react';
import { Form, Radio, Button, Space, Card } from 'antd';
import type { ModeType } from '../src/typings';
import { useRequest } from 'ahooks';
import { getDetails } from './service';
import { Element } from '../src';

const { Item } = Form;
const str =
  '超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案';

const Index = () => {
  const [value, setValue] = useState<ModeType>('read');
  const type = useMemo(() => (value === 'edit' ? 'input' : 'text'), [value]);
  const [form] = Form.useForm();
  const [antForm] = Form.useForm();

  useRequest(getDetails, {
    onSuccess: (backData: any) => {
      antForm.setFieldsValue(backData);
    },
  });
  const onSubmit = () => {
    console.log('form.values', form.getFieldsValue());
  };
  const onReset = () => {
    form.resetFields();
    console.log('form.values', form.getFieldsValue());
  };
  return (
    <Card title="element form">
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="read">只读</Radio>
        <Radio value="edit">编辑</Radio>
      </Radio.Group>
      <Form
        form={form}
        initialValues={{
          text: '静态文案',
          textEllipsis: str,
          textList: [str, str, str],
        }}
        onValuesChange={(e) => {
          console.log('element form onValuesChange=>', e);
        }}
      >
        <Item label="text" name="text">
          <Element type={type as any} />
        </Item>
        <Item
          label="text-edit"
          name="textEllipsis"
          style={{
            width: '300px',
          }}
        >
          <Element type={type as any} ellipsis={true} />
        </Item>
        <Item
          label="text-list"
          name="textList"
          style={{
            width: '400px',
          }}
        >
          <Element type="list-wrap" mode={value} ellipsis={true} />
        </Item>

        <Item
          style={{
            width: '400px',
          }}
        >
          <Space>
            <Button type="primary" onClick={onSubmit}>
              提交
            </Button>
            <Button onClick={onReset}>重置</Button>
          </Space>
        </Item>
      </Form>
    </Card>
  );
};

export default Index;
