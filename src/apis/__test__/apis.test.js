import {
    getRandomAdviceSlip as mockGetRandomAdviceSlip,
    getAdviceSlipById as mockGetAdviceByIdSlip
} from '../apis';

jest.mock('../apis');

describe('call API function', () => {

    const fakeSlip = {
        slip: {
            id: 58,
            advice: "Don't give a speech. Put on a show."
        }
    };

    mockGetRandomAdviceSlip.mockResolvedValueOnce(fakeSlip);
    mockGetAdviceByIdSlip.mockResolvedValueOnce(fakeSlip);

    test('is base api function call successfully?', async () => {
        
        const getAdvice = await mockGetRandomAdviceSlip();

        expect(getAdvice).toHaveProperty('slip.id');

        expect(getAdvice).toHaveProperty('slip.advice');
    });

    test('is call api by successfully?', async () => {

        const { slip } = await mockGetAdviceByIdSlip(58);

        expect(slip.id).toBe(fakeSlip.slip.id);

        expect(slip.advice).toBe(fakeSlip.slip.advice);
    });

});
