import create from 'zustand';
import { persist } from 'zustand/middleware';

export const countStore = create(
    persist(
        set => ({
            isNumber: 0,
            isTest: '1',
            setAddcount: () =>
                set(state => ({
                    isNumber: state.isNumber + 1,
                })),
            setDiscount: () =>
                set(state => ({
                    isNumber: state.isNumber - 1,
                })),
        }),
        {
            // persist settting
            name: 'counter', // unique
            partialize: state => ({ isNumber: state.isNumber }), // 저장하고 싶은 데이터만 저장
        },
    ),
);
