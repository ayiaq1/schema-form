/*
 * @Author: yihuang
 * @Date: 2022-02-07 17:54:41
 * @Description:  默认表单结构: Row布局
 * @LastModifiedBy: yihuang
 */
import React, { useState, useCallback } from 'react';
import { UserOutlined, UploadOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Space, Form } from 'antd';
import { disabledRangeTime } from './utils';
import { SchemaForm, Element } from '../src';
import { CascaderData, initValues, SelectData, TreeData } from './config';
import moment from 'moment';

interface IValuesProps {
  inp: string;
  txt: string;
  sel: string;
  upload: any[];
}

const SchemaDemo = () => {
  const [form] = Form.useForm();
  const getStatusFunc = useCallback(({ sel }: IValuesProps) => {
    return {
      disabled: sel === 'disabled',
      readOnly: sel === 'readOnly',
      style: {
        display: sel === 'hide' ? 'none' : 'inline-flex',
      },
    };
  }, []);
  const [inputState, setInputState] = useState(getStatusFunc(initValues));
  // form values change
  const onValuesChange = (values: IValuesProps) => {
    const formData = form.getFieldsValue();
    setInputState(getStatusFunc({ ...initValues, ...formData }));
  };
  const onFinish = (values: IValuesProps) => {
    form.validateFields().then((formData) => {
      console.log('schema demo onFinish then formData', formData);
    });
  };
  const onReset = () => {
    form.resetFields();
    setInputState(getStatusFunc(initValues));
  };

  return (
    <SchemaForm
      disabled={inputState.disabled}
      readOnly={inputState?.readOnly}
      type="row"
      initialValues={initValues}
      labelAlign="right"
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      options={[
        {
          label: '联动输入框',
          name: 'sel',
          type: 'select',
          fieldProps: {
            disabled: false,
            readOnly: false,
            options: [
              {
                label: '显示输入',
                value: 'show',
              },
              {
                label: '隐藏输入',
                value: 'hide',
              },
              {
                label: '禁用表单',
                value: 'disabled',
              },
              {
                label: '只读表单',
                value: 'readOnly',
              },
            ],
          },
        },
        {
          label: '测试输入',
          name: 'inp',
          type: 'input',
          rules: [
            {
              message: '必填参数',
              required: true,
            },
          ],
          fieldProps: {
            // 允许空格
            isTrim: false,
            placeholder: '默认输入',
            ...inputState,
          },
        },
        {
          label: '普通文本',
          name: 'txt',
          type: 'text',
        },
        {
          label: 'inputGroup',
          name: 'inputGroup',
          type: 'inputGroup',
          fieldProps: {
            compact: true,
            children: ({ disabled, value, onChange }) => (
              <>
                <Element
                  type="input"
                  value={value}
                  fieldProps={{
                    disabled,
                    style: {
                      width: '65%',
                    },
                    onChange,
                  }}
                />
                <Button disabled={disabled} type="primary">
                  Submit
                </Button>
              </>
            ),
          },
        },
        {
          label: '文本域',
          name: 'txtarea',
          type: 'textarea',
          fieldProps: {
            showCount: true,
            maxLength: 500,
          },
        },
        {
          label: '搜索框',
          name: 'search',
          type: 'search',
          fieldProps: {
            placeholder: '默认文案',
            onSearch: (val) => {
              console.log('searc', val);
            },
          },
        },
        {
          label: '密码框',
          name: 'pwd',
          type: 'password',
        },
        {
          label: '数字输入框',
          name: 'inputNumber',
          type: 'inputNumber',
          fieldProps: {
            prefix: '￥',
            addonBefore: <UserOutlined />,
          },
        },
        {
          label: '日期',
          name: 'date',
          type: 'datePicker',
          fieldProps: {
            placeholder: 'xxx date',
            showTime: true,
          },
        },
        {
          label: '日期区间',
          name: 'dateRange',
          type: 'rangePicker',
          col: 12,
          labelCol: {
            span: 3,
          },
          wrapperCol: {
            span: 21,
          },
          fieldProps: {
            placeholder: ['开始', '结束'],
            showTime: {
              hideDisabledOptions: true,
              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            },
            disabledTime: disabledRangeTime,
          },
        },
        {
          label: '时间',
          name: 'time',
          type: 'timePicker',
          fieldProps: {
            placeholder: 'timePicker date',
          },
        },
        {
          label: '时间区间',
          name: 'timeRange',
          type: 'timeRangePicker',
          fieldProps: {
            placeholder: ['timeRange1', 'timeRange2'],
          },
        },
        {
          label: '下拉框',
          name: 'select',
          type: 'select',
          fieldProps: {
            options: SelectData as any,
          },
        },
        {
          label: '级联',
          name: 'cascader',
          type: 'cascader',
          fieldProps: {
            options: CascaderData,
          },
        },
        {
          label: '树选择',
          name: 'treeSelect',
          type: 'treeSelect',
          fieldProps: {
            treeData: TreeData,
          },
        },
        {
          label: '树多选',
          name: 'multipleTreeSelect',
          type: 'treeSelect',
          fieldProps: {
            multiple: true,
            treeData: TreeData,
          },
        },
        {
          label: '复选框',
          name: 'check',
          type: 'checkbox',
        },
        {
          label: '复选框组',
          name: 'boxgroup',
          type: 'checkboxGroup',
          fieldProps: {
            options: [
              {
                label: 'A',
                value: 'A',
              },
              {
                label: 'B',
                value: 'B',
              },
            ],
          },
        },
        {
          label: '单选组',
          name: 'radioGroup',
          type: 'radioGroup',
          fieldProps: {
            // 切换为按钮类型
            // optionType: 'button',
            options: [
              {
                label: 'A',
                value: 'a',
              },
              {
                label: 'B',
                value: 'b',
              },
            ],
          },
        },
        {
          label: '评分',
          name: 'rate',
          type: 'rate',
          fieldProps: {
            allowHalf: true,
          },
        },
        {
          label: '单个滑动条',
          name: 'slider',
          type: 'slider',
          fieldProps: {
            max: 100,
            min: 1,
          },
        },
        {
          label: '双滑动条',
          name: 'sliderRange',
          type: 'slider',
          fieldProps: {
            range: {
              draggableTrack: true,
            },
          },
        },
        {
          label: '开关',
          name: 'switch',
          type: 'switch',
          fieldProps: {
            loading: true,
          },
        },
        {
          label: '上传文件',
          name: 'upload',
          type: 'upload',
          fieldProps: {
            // children在Upload组件中为必填参数
            children: ({ disabled }) => (
              <Button disabled={disabled} icon={<UploadOutlined />}>
                点击上传
              </Button>
            ),
          },
        },
        {
          label: '头像',
          name: 'av',
          type: 'avatar',
          fieldProps: {
            icon: <UserOutlined />,
          },
        },
        {
          label: '图片',
          name: 'image',
          type: 'image',
          fieldProps: {
            width: 100,
          },
        },
        {
          label: '默认标签',
          name: 'tag',
          type: 'tag',
          fieldProps: {
            icon: <SyncOutlined spin />,
            color: 'cyan',
          },
        },
        {
          label: '自定义标签',
          name: 'tagCustom',
          type: 'tag',
          fieldProps: {
            color: 'red',
            // 受 disabled 控制
            closable: true,
            // 如果使用children渲染，将不使用默认值
            children: () => (
              <>
                <UserOutlined /> New Tag
              </>
            ),
          },
        },
        {
          label: '进度条',
          name: 'progress',
          type: 'progress',
          fieldProps: {
            type: 'line',
            strokeColor: {
              '0%': '#108ee9',
              '100%': 'yellow',
            },
          },
        },
        {
          type: 'divider',
          col: 24,
          wrapperCol: {
            span: 24,
          },
          fieldProps: {
            dashed: false,
          },
        },
        {
          type: 'descriptions',
          col: 24,
          wrapperCol: {
            span: 24,
          },
          fieldProps: {
            options: [
              {
                label: '描述1',
                code: 'code',
                value: 'value_1',
              },
            ],
          },
        },
        {
          label: '分组',
          type: 'group',
          className: 'group-wrap',
          col: 24,
          style: { padding: '12px', marginBottom: '16px', backgroundColor: '#eee' },
          options: [
            {
              type: 'input',
              label: '分组的input',
              name: 'groupinputdefault',
              rules: [{ required: true, message: '必填' }],
              fieldProps: {
                maxLength: 500,
              },
            },
            {
              type: 'textarea',
              label: '分组的textarea',
              name: 'grouptextareadefault',
            },
          ],
        },
        {
          // 独占一行 Col span=24
          col: 24,
          className: 'margin-bottom-none',
          style: { marginBottom: 0 },
          wrapperCol: {
            offset: 1,
          },
          // 自定义内容
          type: 'custom',
          render: () => (
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button onClick={onReset}>重置</Button>
            </Space>
          ),
        },
      ]}
    />
  );
};
export default SchemaDemo;
