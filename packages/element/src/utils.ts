import {
  FormatTimeType,
  Unix,
  UnixValueOf,
  MOMENT,
  HMS,
  DataType,
  IConverTimeType,
} from './typings';
import moment, { isMoment } from 'moment';
// 转换为 日期的格式化值
const formatMomentFunc = (item: any, format: FormatTimeType, convertResult?: IConverTimeType) => {
  switch (format) {
    case Unix:
      // 时间戳 秒
      return isMoment(item) ? item.unix() : moment(item).unix();
    case UnixValueOf:
      // 时间戳 毫秒
      return isMoment(item) ? item.valueOf() : moment(item).valueOf();
    case MOMENT:
      // moment
      return isMoment(item) ? item : moment(item);
    case HMS:
      return isMoment(item) ? item.format(HMS) : moment(item, HMS).format(HMS);
    default:
      if (typeof item === 'string') {
        return item;
      } else if (isMoment(item)) {
        return item.format((convertResult as DataType) ?? format);
      } else if (Number.isInteger(item)) {
        return moment(item).unix();
      } else {
        return moment(item).format(format);
      }
    // return typeof item === 'string'
    //   ? item
    //   : isMoment(item)
    //   ? item.format((convertResult as DataType) ?? format)
    //   : Number.isInteger(item)
    //   ? moment.unix(item)
    //   : moment(item).format(format);
  }
};
export { formatMomentFunc };
