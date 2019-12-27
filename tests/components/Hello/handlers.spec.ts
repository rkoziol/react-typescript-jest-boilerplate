import { initialComponentProps } from '@components/Hello/handlers';

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
});
