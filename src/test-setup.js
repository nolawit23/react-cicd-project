// src/setupTests.js
import { vi } from 'vitest';
import '@testing-library/jest-dom';

// ===== ADD THESE 2 MOCKS =====
// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
global.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));
// ===== END OF ADDED CODE =====

// Your existing code below...
// Mock image imports
vi.mock('*.png', () => ({
  default: 'test-image.png'
}));
// ... rest of your file