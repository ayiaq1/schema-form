import moment from 'moment';
import { subtractRangeDays } from '../tests/utils';

export const initValues = {
  sel: 'hide',
  inp: '测试input',
  txt: '普通文本，可自动缩略。普通文本，可自动缩略。普通文本，可自动缩略。',
  pwd: '123456',
  radioGroup: 'a',
  inputNumber: 123,
  txtarea: '默认文本域文案',
  date: moment(new Date()),
  dateRange: subtractRangeDays(7),
  time: moment(new Date()),
  timeRange: [moment(new Date()), moment(new Date())],
  check: true,
  boxgroup: ['B'],
  rate: 2.5,
  slider: 12,
  sliderRange: [23, 55],
  multipleSelect: ['669e6220bb8e4f95b3976410582f5ea6'],
  customTree: ['menu_frontAccess', 'btn_frontAccess_userManagement_query'],
  cascader: ['zhejiang', 'hangzhou', 'xihu'],
  treeSelect: '0-0-1',
  upload: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://www.baidu.com/img/flexible/logo/pc/index@2.png',
    },
  ],
  image: 'https://www.baidu.com/img/flexible/logo/pc/index@2.png',
  tag: 'default Tag',
  progress: 48,
  groupinputdefault: 'groupinputdefault',
  grouptextareadefault: 'grouptextareadefaultgrouptextareadefault',
};

export const CascaderOptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
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
