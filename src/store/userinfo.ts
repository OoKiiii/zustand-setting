import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosResponse } from 'axios';

interface userInfoType {
    isLogin: boolean;
    token: string;
}

interface ServerResponse {
    data: ServerData;
    message?: string;
    status?: number;
}

interface ServerData {
    data: string;
    message?: string;
    status?: number;
}

const initialState: userInfoType = {
    isLogin: false,
    token: '',
    
};

export const juno = create(
    persist(
        set => ({
            initialState,
            isText: '123',
            onLogin: async (request: string) => {
                console.log('1');
                try {
                    const response: ServerResponse = await openAPI(request);
                    set({
                        isLogin: true,
                    });
                } catch (error) {
                    set({
                        isLogin: false,
                    });
                }
            },
            setText: (request: string) => {set({
                isText: request,
            })}
        }),
        {
            name: 'userinfo',
            partialize: (state: any) => ({ isLogin: state.isLogin }),
        },
    ),
);

const openAPI = (request: string) => {
    const response = axios.get(`https://api.github.com/users/${request}`);
    console.log(response);
    return response;
};
