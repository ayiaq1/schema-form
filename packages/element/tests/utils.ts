import MockDate from 'mockdate';
import moment from 'moment';
import { act } from 'react-dom/test-utils';

export function setMockDate(dateString = '2017-09-18T03:30:07.795') {
  MockDate.set(dateString);
}

export function resetMockDate() {
  MockDate.reset();
}

export const waitForComponentToPaint = async (wrapper: any, time = 50) => {
  await act(async () => {
    wrapper.update?.();
    await new Promise((resolve) => setTimeout(resolve, time));
    wrapper.update?.();
  });
};

/** 返回最近n天的 开始、结束时间 */
export const subtractRangeDays = (time = 7) => [
  moment().startOf('day').subtract(time, 'days'),
  moment().endOf('day'),
];
