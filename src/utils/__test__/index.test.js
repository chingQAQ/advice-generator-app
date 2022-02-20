import { Random } from '../';

describe('Random id function', () => {
    test('max value to call function successfully', () => {

        const MAX_SLIP_ID = 224;

        const actual = Random.id();

        const isNumberInRange = (x) => 0 < x && MAX_SLIP_ID >= x;

        const expected = true;

        expect(isNumberInRange(actual)).toBe(expected);

    });

    test('max value to call function successfully', () => {

        const MAX_SLIP_ID = 1;

        const actual = Random.id(MAX_SLIP_ID);

        const isNumberInRange = (x) => 0 < x && MAX_SLIP_ID >= x;

        const expected = true;

        expect(isNumberInRange(actual)).toBe(expected);

    });
});
