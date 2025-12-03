import { fetchApi } from "apiServices";

export const getStateDropdownApi = async (payload) => {
    try {
        const response = await fetchApi.post("/auth/dropdown/dropdown-states", payload);
        return response;
    } catch (error) {
        return error;
    }
};

export const getFileBufferApi = async (payload) => {
    try {
        const response = await fetchApi.post("/auth/file-buffer", payload);
        return response;
    } catch (error) {
        return error;
    }
};