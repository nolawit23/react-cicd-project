import React from 'react';

// Test importing App directly
test('Import App directly', async () => {
  const module = await import('./App');
  console.log('App module keys:', Object.keys(module));
  console.log('App default:', module.default);
  
  // Try to see if it's a function
  if (module.default) {
    console.log('Type of App.default:', typeof module.default);
    console.log('Is function?', typeof module.default === 'function');
  }
});