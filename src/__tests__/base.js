import vitalStatus from '../index';

test.each([
  [{ name: 'Маг', health: 90 }, 'health'],
  [{ name: 'Маг', critical: 10 }, 'critical'],
  [{ name: 'Маг', wounded: 45 }, 'wounded'],
])('live indicator', (obj, str) => {
  const result = vitalStatus(obj);
  expect(result).toBe(str);
});
