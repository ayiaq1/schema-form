import React, { useState } from 'react';
import { Form, Card, Button } from 'antd';
import { TimeConvertWrap } from '../src/index';
import moment from 'moment';

const { Item } = Form;
const TimeConvertDemo = () => {
  const [values, setValues] = useState({});
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    form.validateFields().then((formData) => {
      setValues(formData);
      console.log('TimeConvertDemo demo onFinish then formData', formData);
    });
  };
  const onResetFun = () => {
    form.resetFields();
    setValues(form.getFieldsValue());
  };
  return (
    <Card title="日期转换组件">
      <Form
        form={form}
        initialValues={{
          datePicker: '2022-01-14 02:06:04',
          timePicker: '02:06:04',
          timeRangePicker: ['02:06:04', '13:29:13'],
          rangePicker: ['2022-01-14 02:06:04', '2022-06-27 13:29:13'],
          rangePickerShowTime: ['2022-01-14 02:06:04', '2022-06-27 13:29:13'],
        }}
        onFinish={onFinish}
      >
        <Item name="timeRangePicker">
          <TimeConvertWrap type="timeRangePicker" />
        </Item>
        <Item name="rangePickerShowTime">
          <TimeConvertWrap
            type="rangePicker"
            fieldProps={{ showTime: true, convertResult: 'unix' }}
          />
        </Item>

        <Item name="rangePicker">
          <TimeConvertWrap
            type="rangePicker"
            fieldProps={{ convertResult: 'YYYY-MM-DD HH:mm:ss', showTime: true }}
          />
        </Item>

        <Item name="datePicker">
          <TimeConvertWrap type="datePicker" />
        </Item>
        <Item name="timePicker">
          <TimeConvertWrap type="timePicker" />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button onClick={onResetFun}>重置</Button>
        </Item>
      </Form>
      <div>{JSON.stringify(values, null, 2)}</div>
    </Card>
  );
};
export default TimeConvertDemo;
