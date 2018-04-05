const name = 'alexeyvax';

describe('check name', () => {
  test('check passed name to component Hello', () => {
    expect('alexeyvax').toBe(name);
  });
});
