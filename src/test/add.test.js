const { test } = require('@jest/globals');
const add = require('../add.js');

test('', () => {
  //테스트작성
  expect(add(1, 2)).toBe(3);
});
