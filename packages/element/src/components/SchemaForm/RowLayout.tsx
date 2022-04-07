/*
 * @Author: yihuang
 * @Date: 2022-02-17 16:18:25
 * @Description: 默认使用 row 布局
 * @LastModifiedBy: yihuang
 */
import React, { memo } from 'react';
import { Col, Row } from 'antd';
import { FormProps } from 'antd/lib/form';
import { ISchemaProps } from './typings';
import ItemGroupWrap from './ItemGroupWrap';
import ItemWrap from './ItemWrap';
import omit from 'omit.js';

const RowLayout = ({
  type = 'row',
  options = [],
  disabled: formDisabled,
  form,
  ...formReset
}: FormProps & ISchemaProps) => {
  const { gutter = 16, span = 6 } = formReset as any;
  return (
    <Row gutter={gutter}>
      {options.map(({ col, ...reset }, index) => {
        const colProps = omit(reset, ['fieldProps', 'labelCol', 'wrapperCol', 'render']);
        return (
          <Col {...colProps} span={col ?? span} key={reset?.name?.toString() ?? index.toString()}>
            {reset.type === 'group' ? (
              <ItemGroupWrap
                {...reset}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            ) : (
              <ItemWrap
                {...reset}
                values={reset?.name && formReset?.initialValues?.[reset?.name as any]}
                formDisabled={formDisabled}
                initialValues={formReset.initialValues}
              />
            )}
          </Col>
        );
      })}
    </Row>
  );
};
export default memo(RowLayout);
