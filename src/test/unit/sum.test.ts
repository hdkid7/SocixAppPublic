import util from '../../usecase/example';

test('adds 1 + 2 to equal 3', () => {
  expect(util.sum(1, 2)).toBe(3);
});

test('adds 2 * 2 to equal 4', () => {
  expect(util.mult(2, 2)).toBe(4);
});