// src/debug-imports.test.jsx
import React from 'react';

test('Check component imports', async () => {
  // Test each import individually
  const SidebarModule = await import('./components/Sidebar');
  console.log('Sidebar module:', SidebarModule);
  
  const ContentModule = await import('./components/Content');
  console.log('Content module:', ContentModule);
  
  const ProfileModule = await import('./components/Profile');
  console.log('Profile module:', ProfileModule);
});