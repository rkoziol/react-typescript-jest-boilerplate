import { initialComponentProps, dummyFunc } from '@components/Hello/handlers';

describe('Hello component handlers specs', () => {
  describe('initialComponentProps', () => {
    test('should return object with default props for component', () => {
      // when
      const result = initialComponentProps;

      // then
      expect(result).toEqual({
        bar: 'Ipsum',
        foo: 'Lorem',
      });
    });
  });

  describe('dummyFunc', () => {
    test('should return number', () => {
      // when
      const result = dummyFunc(1, 2);

      // then
      expect(result).toEqual(3);
    });
  });
});
