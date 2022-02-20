const MAX_SLIP_ID = 224;

export const Random = {
    id: (max = MAX_SLIP_ID) => max ? ~~(Math.random() * max) + 1 : 1
};