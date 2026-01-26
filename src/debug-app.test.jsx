// src/debug-app.test.jsx
import React from 'react';

test('Debug App imports', async () => {
  // Test each component App imports
  console.log('=== Testing App imports ===');
  
  try {
    const Sidebar = (await import('./components/Sidebar')).default;
    console.log('✓ Sidebar:', typeof Sidebar);
  } catch (error) {
    console.error('✗ Sidebar error:', error.message);
  }
  
  try {
    const Content = (await import('./components/Content')).default;
    console.log('✓ Content:', typeof Content);
  } catch (error) {
    console.error('✗ Content error:', error.message);
  }
  
  try {
    const Profile = (await import('./components/Profile')).default;
    console.log('✓ Profile:', typeof Profile);
  } catch (error) {
    console.error('✗ Profile error:', error.message);
  }
  
  // Test the App itself
  try {
    const App = (await import('./App')).default;
    console.log('✓ App:', typeof App);
  } catch (error) {
    console.error('✗ App error:', error.message);
  }
});