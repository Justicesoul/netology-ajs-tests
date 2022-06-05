import { lifeLine, sortedLifeLines } from '../index.js';

test('characters lifeline test', () => {
  const Mar = { name: 'Маг', health: 90 };
  const Rick = { name: 'Rick', health: 40 };
  const Nick = { name: 'Nick', health: 15 };

  expect(lifeLine(Mar)).toBe('healthy');
  expect(lifeLine(Rick)).toBe('wounded');
  expect(lifeLine(Nick)).toBe('critical');
});

test('should be sorted by health', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  expect(sortedLifeLines(characters)[0].health).toEqual(100);
  expect(sortedLifeLines(characters)[2].health).toEqual(10);
});
