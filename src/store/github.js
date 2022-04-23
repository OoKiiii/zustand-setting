import create from 'zustand';
import axios from 'axios';

export const useStoreGithub = create(set => ({
    data: {},
    fetch: async request => {
        console.log(request);
        const response = await getUserData(request);
        set({ data: response.data });
    },
}));

const getUserData = request => {
    const response = axios.get(`https://api.github.com/users/${request}`);
    return response;
};
