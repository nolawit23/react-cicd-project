// src/test-recharts.test.jsx
import React from 'react';

test('Test recharts import', async () => {
  try {
    const recharts = await import('recharts');
    console.log('Recharts imports successfully:', Object.keys(recharts));
  } catch (error) {
    console.error('Recharts import error:', error.message);
  }
});