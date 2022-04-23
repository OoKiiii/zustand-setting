import create from 'zustand';

export const countStore = create(set => ({
    isNumber: 0,
    setAddcount: () =>
        set(state => ({
            isNumber: state.isNumber + 1,
        })),
    setDiscount: () =>
        set(state => ({
            isNumber: state.isNumber - 1,
        })),
}));
