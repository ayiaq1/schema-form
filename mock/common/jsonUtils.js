import Mock from 'mockjs';

export const getListFunc = (values, total) => {
  const data = [];
  for (let i = 0; i < total; i++) {
    data.push(Mock.mock(values));
  }
  const list = Mock.mock({
    [`value|${total}`]: data,
  }).value;
  return list;
};

export const jsonUtils = {
  success(resInfo, isMerge) {
    return (req, res) => {
      res.json(
        Mock.mock({
          respCode: '2000',
          respMsg: 'success',
          respData: isMerge
            ? resInfo
            : {
                ...resInfo,
              },
        }),
      );
    };
  },

  error(resInfo) {
    return (req, res) => {
      res.json(
        Mock.mock({
          respCode: '2000',
          respMsg: 'error',
          respData: {
            ...resInfo,
          },
        }),
      );
    };
  },

  list(value = {}, count = 23, resInfo) {
    const list = Mock.mock({
      [`value|${count}`]: [value],
    }).value;
    return (req, res) => {
      let { pageNum = 1, pageSize = 10 } = req.body;
      pageNum *= 1;
      pageSize *= 1;

      const data = list.slice((pageNum - 1) * pageSize, pageNum * pageSize);

      res.json({
        respCode: '2000',
        respMsg: 'success',
        respData: {
          pageNum,
          pageSize,
          total: list.length,
          list: data,
          ...resInfo,
        },
      });
    };
  },

  listNoPage(value = {}, count = 23, resInfo) {
    const list = Mock.mock({
      [`value|${count}`]: [value],
    }).value;

    return (req, res) => {
      res.json({
        respCode: '2000',
        respMsg: 'success',
        respData: list,
        ...resInfo,
      });
    };
  },
};

export default (req, res) =>
  res.send({
    respCode: '2000',
    respMsg: '操作成功',
  });
/** 获取时间戳 */
export const getUnixValueOf = () => {
  return /170\d{10}/;
};
