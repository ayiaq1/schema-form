const React = require('react');
const Enzyme = require('enzyme');

// console.log('Current React Version:', React.version, 'indexOf 16:', React.version.indexOf('16'));

const Adapter =
  React.version.indexOf('16') > -1
    ? require('enzyme-adapter-react-16')
    : require('@wojtekmaj/enzyme-adapter-react-17');
/** 需要全局注册 */
Enzyme.configure({ adapter: new Adapter() });

Object.assign(Enzyme.ReactWrapper.prototype, {
  findObserver() {
    return this.find('ResizeObserver');
  },
  triggerResize() {
    const ob = this.findObserver();
    ob.instance().onResize([{ target: ob.getDOMNode() }]);
  },
});
/** 解决 TypeError: window.matchMedia is not a function */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
