import create from 'zustand';

export const targetStore = create(set => ({
    target: true,
    setTarget: () =>
        set(state => ({
            target: !state.target,
        })),
}));
