import { render } from 'enzyme';
import type { ReactElement } from 'react';

export default function toMatchRenderedSnapshot(
  this: jest.MatcherUtils,
  jsx: ReactElement<unknown>,
): { message: (e: any) => string; pass: boolean } {
  try {
    expect(render(jsx)).toMatchSnapshot();

    return {
      message: () => 'expected JSX not to match snapshot',
      pass: true,
    };
  } catch {
    return {
      message: (e: any) => `expected JSX to match snapshot: ${e.message}`,
      pass: false,
    };
  }
}
