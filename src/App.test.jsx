import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock ALL components
vi.mock('./components/Sidebar', () => ({
  default: () => <div>Sidebar</div>
}));

vi.mock('./components/Content', () => ({
  default: () => <div>Content</div>
}));

vi.mock('./components/Profile', () => ({
  default: () => <div>Profile</div>
}));

import App from './App.jsx';

test('renders app', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});
