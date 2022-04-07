/*
 * @Author: yihuang
 * @Date: 2022-03-21 20:09:36
 * @Description:
 * @LastModifiedBy: yihuang
 */
const transformIgnorePatterns = [
  '/lib/',
  // Update: @babel/runtime should also be transformed
  'node_modules/(?!.*@(babel|ant-design))[^/]+?/(?!(es|node_modules)/)',
];

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns,
  // setupFiles: ['<rootDir>/tests/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*/typings.{ts,tsx}'],
  testURL: 'http://localhost',
};
