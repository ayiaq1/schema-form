import { jsonUtils } from './common/jsonUtils';

export default {
  'GET /api/getInfo': jsonUtils.success({
    sel: 'hide',
    inp: '@name()',
    txt: '@word(2,40)',
    pwd: '@integer()',
    search: '@name()',
    radioGroup: '@name()',
    inputNumber: '@integer()',
    txtarea: '@name()',
    check: true,
    boxgroup: ['B'],
    rate: 2.5,
    slider: 12,
    sliderRange: [23, 55],
    multipleSelect: ['669e6220bb8e4f95b3976410582f5ea6'],
    treeSelect: [],
    upload: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        url: '@image()',
      },
    ],
    image: '@image()',
    tag: 'default Tag',
    progress: 48,
    groupinputdefault: '@title()',
    grouptextareadefault: '@cword(5,40)',
    customTree: [],
  }),
  'GET /api/save': jsonUtils.success(),
  'GET /api/select': jsonUtils.success(
    [
      {
        roleName: 'hhhhhhhhh',
        roleCode: '669e6220bb8e4f95b3976410582f5ea6',
      },
      {
        roleName: 'hhh',
        roleCode: '970dd562b21b4477803b107e2b6fba53',
      },
      {
        roleName: 'hyhy',
        roleCode: '9a7900fd13e2458f895a8cc172f33bf0',
      },
    ],
    true,
  ),
  'GET /api/tree': jsonUtils.success(
    [
      {
        funcName: '@cname()',
        funcCode: '@guid()',
        childElementList: [
          {
            funcName: '@cname()',
            funcCode: '@guid()',
          },
          {
            funcName: '@cname()',
            funcCode: '@guid()',
          },
        ],
      },
      {
        funcName: '@cname()',
        funcCode: '@guid()',
        childElementList: [
          {
            funcName: '@cname()',
            funcCode: '@guid()',
          },
        ],
      },
    ],
    true,
  ),
};
