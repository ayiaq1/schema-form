/*
 * @Author: yihuang
 * @Date: 2022-07-25 16:37:20
 * @Description: 描述类型的组件，后期放入SchemaForm
 * @LastEditors: Please set LastEditors
 * @LastModifiedBy: yihuang
 */
import React from 'react';
import { Descriptions } from 'antd';
import { IDesFieldProps } from './typings';
// import { useRequest } from 'ahooks';

const { Item } = Descriptions;

interface IProps {
  fieldProps?: IDesFieldProps;
}
// TODO 远程请求，待统一处理
// type IRemoteProps = Omit<IDescProps, 'urlMap'> & {
//   urlMap: IUrlMap;
// };

// const RemoteDescription = forwardRef(({ urlMap, options, ...reset }: IRemoteProps) => {
//   const [data, setData] = useState<any>([]);
//   useRequest(() => queryInfo(urlMap), {
//     onSuccess: (data: any[]) => {
//       if (data?.length) {
//         const arr: any[] = [];
//         options.forEach((item) => {
//           const row = data.find((list) => list.code === item.code);
//           if (row) {
//             arr.push({
//               ...item,
//               value: row.value,
//             });
//           }
//         });
//         setData(arr);
//       }
//     },
//   });
//   return <DescriptionInfo {...reset} options={data} />;
// });
const DescriptionInfo = ({ options, ...reset }: IDesFieldProps) => {
  return (
    <Descriptions
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      layout="horizontal"
      bordered
      size="small"
      {...reset}
    >
      {options?.length
        ? options.map((item, index) => {
            return (
              <Item key={`${item.code}_${index}`} label={item.label}>
                {item.value}
              </Item>
            );
          })
        : null}
    </Descriptions>
  );
};

const DescriptionWrap = ({ fieldProps }: IProps) => {
  return (
    <DescriptionInfo {...fieldProps} />
    // <>
    //   {urlMap ? <RemoteDescription urlMap={urlMap} {...reset} /> : <DescriptionInfo {...reset} />}
    // </>
  );
};
export default DescriptionWrap;
