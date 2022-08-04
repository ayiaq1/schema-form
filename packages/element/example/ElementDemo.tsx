/*
 * @Author: yihuang
 * @Date: 2021-10-09 11:58:48
 * @Description: 原子组件 - demo
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import { Form, Button, Space, Card, Divider } from 'antd';
import { useRequest } from 'ahooks';
import { getDetails } from './service';
import Element from '../src/index';
import moment from 'moment';

const { Item } = Form;
// const str =
//   '超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案超级长的文案';

const ElementDemo = () => {
  const [modeForm] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [passwordForm] = Form.useForm();

  useRequest(getDetails, {
    onSuccess: (data) => {
      modeForm.setFieldsValue(data);
    },
  });

  const onSubmit = () => {
    modeForm.validateFields().then((values) => {
      console.log('form.onSubmit', values);
    });
  };
  const onReset = () => {
    modeForm.resetFields();
  };
  return (
    <>
      <Card title="form element">
        <Form
          form={modeForm}
          initialValues={{
            dateCustom: moment('2022-06-14 14:26:54'),
            // dateCustom: '2022-06-14 14:26:54',
            // rangeCustom: [moment('2022-01-14 02:06:04'), moment('2021-09-08 23:59:59')],
            rangeCustom: ['2021-10-11 00:00:00', '2021-09-11 23:59:59'],
            timeCustom: '14:26:54',
            timeRangeCustom: [moment('14:26:54', 'HH:mm:ss'), moment('14:26:54', 'HH:mm:ss')],
          }}
          onValuesChange={(values) => {
            console.log('element form onValuesChange=>', values);
          }}
        >
          <Item label="text文本类型" name="text">
            <Element
              type="text"
              fieldProps={{
                style: { width: 200 },
              }}
            />
          </Item>
          <Item
            label="text-edit"
            name="textEllipsis"
            style={{
              width: '300px',
            }}
          >
            <Element type="input" fieldProps={{ className: 'input-xxx' }} />
          </Item>

          <Item
            label="date-custom"
            name="dateCustom"
            rules={[
              {
                required: true,
                message: '必填',
              },
            ]}
          >
            <Element
              type="datePicker"
              fieldProps={{ convertResult: (val: any) => moment(val).valueOf() }}
            />
          </Item>
          <Item label="rangeCustom" name="rangeCustom">
            <Element type="rangePicker" fieldProps={{ convertResult: 'YYYY-MM-DD HH:mm:ss' }} />
          </Item>
          <Item label="valuePropName" name="rangeCustom" valuePropName="range">
            <Element type="rangePicker" fieldProps={{ valuePropName: 'range' }} />
          </Item>

          <Item label="timeCustom" name="timeCustom">
            <Element
              type="timePicker"
              fieldProps={{
                convertResult: (val: any) => {
                  const xx = moment(val, 'HH:mm:ss');
                  console.log('xx', xx);
                  return xx;
                },
              }}
            />
          </Item>

          <Item label="timeRangeCustom" name="timeRangeCustom">
            <Element type="timeRangePicker" />
          </Item>

          <Item label="custom" name="custom">
            <Element
              type="custom"
              render={() => (
                <p
                  style={{
                    color: 'red',
                  }}
                >
                  自定义内容
                </p>
              )}
            />
          </Item>

          <Item label="分割线" name="divider">
            <Element
              type="divider"
              fieldProps={{
                dashed: true,
              }}
            />
          </Item>
          <Item label="描述" name="descriptions">
            <Element
              type="descriptions"
              fieldProps={{
                options: [
                  {
                    label: '描述1',
                    code: 'code',
                    value: 'value_1',
                  },
                ],
              }}
            />
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
      <Divider />
      <Card title="search onEnter">
        <Form
          form={searchForm}
          onFinish={(values) => console.log('search findish values=>', values)}
        >
          <Item label="search" name="search">
            <Element type="search" />
          </Item>
        </Form>
      </Card>
      <Card title="password onEnter">
        <Form
          form={passwordForm}
          onFinish={(values) => console.log('password findish values=>', values)}
        >
          <Item label="password" name="password">
            <Element type="password" />
          </Item>
        </Form>
      </Card>
    </>
  );
};

export default ElementDemo;
