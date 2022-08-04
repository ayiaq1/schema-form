import { IBaseFieldProps } from '../../typings';
import { DescriptionsProps } from 'antd';

export interface IDescOption {
  /** 标题 */
  label: string;
  /** 字段名 */
  value: string;
  /** 对应的key，一般给远程加载使用 */
  code: string;
}
export interface IUrlMap {
  url: string;
  method: 'post' | 'get';
  params?: any;
}
export interface IDescProps {
  /** 是否需要查询 */
  urlMap?: IUrlMap;
  options?: IDescOption[];
}

export type IDesFieldProps = IBaseFieldProps & DescriptionsProps & IDescProps;
