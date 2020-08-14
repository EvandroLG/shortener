import { normalizeUrl } from './utils';

test('normalize url', () => {
  expect(normalizeUrl('google.com')).toBe('https://google.com');
  expect(normalizeUrl('http://google.com')).toBe('http://google.com');
  expect(normalizeUrl('https://google.com')).toBe('https://google.com');
});
