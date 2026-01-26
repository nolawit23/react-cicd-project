// setupTests.jsx
import { vi } from 'vitest';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock image imports
vi.mock('*.png', () => ({
  default: 'test-image.png'
}));

vi.mock('*.jpg', () => ({
  default: 'test-image.jpg'
}));

// Mock CSS imports
vi.mock('*.css', () => ({}));
