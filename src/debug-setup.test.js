// debug-setup.test.js
console.log('Testing setup...');

test('check setup', () => {
  console.log('ResizeObserver exists:', typeof global.ResizeObserver);
  expect(typeof global.ResizeObserver).toBe('function');
});
