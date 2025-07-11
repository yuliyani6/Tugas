const greet = require('../app');

test('greets user correctly', () => {
  expect(greet('ChatGPT')).toBe('Hello, ChatGPT');
});
