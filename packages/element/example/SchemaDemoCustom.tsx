/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:47:14
 * @Description: 自定义表单结构
 * @LastModifiedBy: yihuang
 */
import React, { useState, useCallback } from 'react';
import { Button, Space, Form, Tree, Spin } from 'antd';
import { SchemaForm } from '../src';
import { useRequest } from 'ahooks';
import { initValues } from './config';
import { getDetails, getTreeData, getSelectData } from './service';

interface IValuesProps {
  inp: string;
  txt: string;
  sel: string;
  upload: any[];
}

const SchemaDemoCustom = () => {
  const [form] = Form.useForm();

  const getStatusFunc = useCallback(({ sel }: IValuesProps) => {
    return {
      disabled: sel === 'disabled',
      style: {
        display: sel === 'hide' ? 'none' : 'inline-flex',
      },
    };
  }, []);
  const [inputState, setInputState] = useState<any>();
  const { data } = useRequest(getDetails, {
    onSuccess: () => {
      setInputState(getStatusFunc(data));
    },
  });
  const { data: treeData = [], loading: treeLoading } = useRequest(getTreeData, {
    onSuccess: () => {
      setInputState(getStatusFunc(data));
      form.setFieldsValue(data);
    },
  });
  const { data: roleList = [] } = useRequest(getSelectData);

  // form values change
  const onValuesChange = (values: IValuesProps) => {
    console.log('schema custom demo onValuesChange', values);
    const formData = form.getFieldsValue();
    setInputState(getStatusFunc({ ...data, ...formData }));
  };
  const onFinish = (values: IValuesProps) => {
    console.log('schema custom demo onFinish values', values);
  };
  const onReset = () => {
    form.resetFields();
    setInputState(getStatusFunc(data));
  };

  return (
    <SchemaForm
      type="custom"
      initialValues={initValues}
      disabled={inputState?.disabled}
      labelAlign="right"
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      options={[
        {
          label: '联动输入框',
          name: 'sel',
          type: 'select',
          rules: [
            {
              message: '必填参数',
              required: true,
            },
          ],
          fieldProps: {
            disabled: false,
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
            ],
          },
        },
        {
          label: '测试输入',
          name: 'inp',
          type: 'input',
          fieldProps: {
            // 允许空格
            isTrim: false,
            placeholder: '默认输入',
            ...inputState,
          },
        },
        {
          label: '搜索框',
          name: 'search',
          type: 'search',
          rules: [
            {
              message: '必填参数',
              required: true,
            },
          ],
          fieldProps: {
            placeholder: '默认文案',
            onSearch: (val) => {
              console.log('searc', val);
            },
          },
        },
        {
          label: '测试多选',
          name: 'multipleSelect',
          type: 'select',
          rules: [
            {
              message: '必填参数',
              required: true,
            },
          ],
          fieldProps: {
            mode: 'multiple',
            showSearch: true,
            allowClear: true,
            options: roleList,
            fieldNames: {
              label: 'roleName',
              value: 'roleCode',
            },
          },
        },
        {
          label: '分组',
          type: 'group',
          className: 'group-wrap',
          style: { padding: '12px', marginBottom: '16px', backgroundColor: '#eee' },
          options: [
            {
              type: 'input',
              label: '分组的input',
              name: 'groupinputdefault',
              rules: [
                {
                  message: '必填参数',
                  required: true,
                },
              ],
            },
            {
              type: 'textarea',
              label: '分组的textarea',
              name: 'grouptextareadefault',
              rules: [
                {
                  message: '必填参数',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: '下拉树',
          name: 'treeSelect',
          type: 'tree-select',
          rules: [
            {
              message: '必填参数',
              required: true,
            },
          ],
          fieldProps: {
            treeData,
            treeCheckStrictly: true,
            treeCheckable: true,
            treeDefaultExpandAll: true,
            fieldNames: {
              label: 'funcName',
              value: 'funcCode',
              children: 'childElementList',
            },
          },
        },
        {
          label: '自定义树',
          name: 'customTree',
          type: 'custom',
          rules: [
            {
              message: '必填参数',
              required: true,
            },
          ],
          render: ({ value, disabled, onChange }) => {
            return (
              <Spin spinning={treeLoading}>
                {treeData?.length ? (
                  <Tree
                    disabled={disabled}
                    height={300}
                    defaultExpandAll
                    checkable
                    checkedKeys={value}
                    treeData={treeData}
                    onCheck={onChange}
                    fieldNames={{
                      title: 'funcName',
                      key: 'funcCode',
                      children: 'childElementList',
                    }}
                  />
                ) : null}
              </Spin>
            );
          },
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
          render: ({ disabled }) => (
            <Space>
              <Button disabled={disabled} type="primary" htmlType="submit">
                提交
              </Button>
              <Button disabled={disabled} onClick={onReset}>
                重置
              </Button>
            </Space>
          ),
        },
      ]}
    />
  );
};
export default SchemaDemoCustom;
