import React from 'react';
import { Form, Card } from 'antd';
import { Field } from '../src/index';
import { EnumDataType } from '../src/typings';
import { initValues, SelectData, TreeData, CascaderDataFieldNames } from './config';
import moment from 'moment';

const { Item } = Form;
const Time_YMD = '2022-01-14 02:06:04';
const Time_YMD_1 = '2022-06-27 13:29:13';
const HMS_1 = '02:06:04';
const HMS_2 = '13:29:13';
const unixValueOf = 1642097164000;

const FieldDemo = () => {
  const [form] = Form.useForm();
  return (
    <Card title="只读文本">
      <Form form={form} initialValues={initValues}>
        <Item label="datePicker unixValueOf value">
          <Field type="datePicker" value={unixValueOf} />
        </Item>

        {/*         
        <Item label="直接渲染的文本" name="txt">
          <Field
            type="text"
            fieldProps={{
              style: {
                width: 100,
              },
            }}
          />
        </Item>
        <Item label="custom 自定义">
          <Field
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
        <Item label="select下拉转文本" name="select">
          <Field
            type="select"
            fieldProps={{
              options: SelectData,
            }}
          />
        </Item>
        <Item label="select下拉多选转文本" name="multipleSelect">
          <Field
            type="select"
            fieldProps={{
              mode: 'multiple',
              separator: ' - ',
              options: SelectData,
            }}
          />
        </Item>
        <Item label="treeSelect 下拉树多选转文本" name="multipleTreeSelect">
          <Field
            type="treeSelect"
            fieldProps={{
              separator: ' / ',
              treeData: TreeData,
            }}
          />
        </Item>
        <Item label="cascader转文本" name="cascader">
          <Field
            type="cascader"
            fieldProps={{
              separator: ' / ',
              options: CascaderDataFieldNames,
              fieldNames: {
                label: 'title',
                value: 'value',
                children: 'options',
              },
            }}
          />
        </Item>
        <Item label="datePicker default value">
          <Field type="datePicker" value={Time_YMD} />
        </Item>
        <Item label="datePicker value to unixValueOf">
          <Field
            type="datePicker"
            value={Time_YMD}
            fieldProps={{
              convertResult: 'unixValueOf',
            }}
          />
        </Item>
        <Item label="datePicker moment value">
          <Field type="datePicker" value={moment(Time_YMD)} />
        </Item>
        <Item label="datePicker unixValueOf value">
          <Field type="datePicker" value={unixValueOf} />
        </Item>
        <Item label="datePicker value to unix">
          <Field
            type="datePicker"
            value={Time_YMD}
            fieldProps={{
              convertResult: 'unix',
            }}
          />
        </Item>

        <Item label="timePicker default value">
          <Field type="timePicker" value={HMS_1} />
        </Item>
        <Item label="timePicker moment value">
          <Field type="timePicker" value={moment(HMS_1, EnumDataType.HMS)} />
        </Item>

        <Item label="timeRangePicker default value">
          <Field type="timeRangePicker" value={[HMS_1, HMS_2]} />
        </Item>
        <Item label="timeRangePicker moment value">
          <Field
            type="timeRangePicker"
            value={[moment(HMS_1, EnumDataType.HMS), moment(HMS_2, EnumDataType.HMS)]}
          />
        </Item>

        <Item label="rangePicker default value">
          <Field
            type="rangePicker"
            value={[Time_YMD, Time_YMD_1]}
            fieldProps={{
              separator: ' -- 自定义分隔 -- ',
            }}
          />
        </Item>
        <Item label="rangePicker moment value">
          <Field type="rangePicker" value={[moment(Time_YMD), moment(Time_YMD_1)]} />
        </Item>
        <Item label="rangePicker value to unixValueOf">
          <Field
            type="rangePicker"
            value={[moment(Time_YMD), moment(Time_YMD_1)]}
            fieldProps={{
              convertResult: 'unixValueOf',
            }}
          />
        </Item>
        <Item label="tag">
          <Field type="tag" value="tag-xxx" />
        </Item>
        <Item label="分割线" name="divider">
          <Field
            type="divider"
            fieldProps={{
              dashed: true,
            }}
          />
        </Item>
        <Item label="描述" name="descriptions">
          <Field
            type="descriptions"
            fieldProps={{
              options: [
                {
                  label: '描述1',
                  code: 'code',
                  value: 'value_1',
                },
                {
                  label: '描述2',
                  code: 'code2',
                  value: 'value_2',
                },
              ],
            }}
          />
        </Item> */}
      </Form>
    </Card>
  );
};
export default FieldDemo;
