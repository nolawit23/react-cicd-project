// setup-check.test.jsx
import { test, expect } from 'vitest';

test('ResizeObserver is defined', () => {
  console.log('ResizeObserver type:', typeof global.ResizeObserver);
  expect(typeof global.ResizeObserver).toBe('function');
});
