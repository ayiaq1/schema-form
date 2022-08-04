import moment from 'moment';
import { subtractRangeDays } from '../tests/utils';

export const initValues = {
  sel: 'hide',
  inp: '测试input',
  search: '搜索框文案搜索框文案搜索框文案搜索框文案搜索框文案搜索框文案搜索框文案搜索框文案',
  inputGroup: 'inputGroup文本组inputGroup文本组inputGroup文本组inputGroup文本组inputGroup文本组',
  txt: '普通文本，可自动缩略。普通文本，可自动缩略。普通文本，可自动缩略。',
  pwd: '123456',
  radioGroup: 'a',
  inputNumber: 123,
  txtarea:
    '默认文本域文案默认文本域文案默认文本域文案默认文本域文案默认文本域文案默认文本域文案默认文本域文案默认文本域文案',
  date: moment(new Date()),
  dateRange: subtractRangeDays(7),
  time: moment(new Date()),
  timeRange: [moment(new Date()), moment(new Date())],
  check: true,
  boxgroup: ['B'],
  rate: 2.5,
  slider: 12,
  sliderRange: [23, 55],
  select: '0-1',
  multipleSelect: ['0-0', '0-1'],
  customTree: ['menu_frontAccess', 'btn_frontAccess_userManagement_query'],
  cascader: ['zhejiang', 'hangzhou', 'xihu'],
  treeSelect: '0-0-1',
  multipleTreeSelect: ['0-0-1', '0-0-2'],
  upload: [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ],
  image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  tag: 'default Tag',
  progress: 48,
  groupinputdefault: 'groupinputdefault',
  grouptextareadefault: 'grouptextareadefaultgrouptextareadefault',
};

export const CascaderData = [
  {
    label: '浙江',
    value: 'zhejiang',
    children: [
      {
        label: '杭州',
        value: 'hangzhou',
        children: [
          {
            label: '西湖',
            value: 'xihu',
          },
        ],
      },
    ],
  },
  {
    label: '江苏',
    value: 'jiangsu',
    children: [
      {
        label: '南京',
        value: 'nanjing',
        children: [
          {
            label: '中华门',
            value: 'zhonghuamen',
          },
        ],
      },
    ],
  },
];
export const CascaderDataFieldNames = [
  {
    title: '浙江',
    value: 'zhejiang',
    options: [
      {
        title: '杭州',
        value: 'hangzhou',
        options: [
          {
            title: '西湖',
            value: 'xihu',
          },
        ],
      },
    ],
  },
  {
    title: '江苏',
    value: 'jiangsu',
    options: [
      {
        title: '南京',
        value: 'nanjing',
        options: [
          {
            title: '中华门',
            value: 'zhonghuamen',
          },
        ],
      },
    ],
  },
];
export const TreeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

export const SelectData = [
  {
    label: 'Node1',
    value: '0-0',
  },
  {
    label: 'Node2',
    value: '0-1',
  },
  {
    label: 'Node3',
    value: '0-2',
  },
  {
    label: 'Node4',
    value: '0-3',
  },
];
