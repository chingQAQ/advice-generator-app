import axios from 'axios';

export const BASE_URL = 'https://api.adviceslip.com/advice';

const adviceSlipAPI = axios.create({
    baseURL: BASE_URL
});

export const getRandomAdviceSlip = () =>
    adviceSlipAPI()
        .then(res => res.data)
        .catch(errorHandler);

/**
 * @param  {number} id - Get advice by id
 */
export const getAdviceSlipById = async (id) => {
    try {
        const adviceId = '/' + id;

        const res = await adviceSlipAPI.get(adviceId);

        return res.data;
    } catch (err) {
        errorHandler(err);
    }
};

function errorHandler (error) {
    console.dir(error);

    return '';
}
