import calc from './calc';

test('check result value', () => {
    let result = calc(10, 20, 30);
    expect(result).toBe(60);
})