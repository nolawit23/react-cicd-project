import { test, expect } from 'vitest';

test('setupTests is loaded', () => {
  console.log('SetupTests loaded - ResizeObserver:', typeof global.ResizeObserver);
  expect(typeof global.ResizeObserver).toBe('function');
});
