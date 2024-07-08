
import { cookies } from "next/headers";
import { ILogin } from "../types";
import api from "./api";

const authService = {
    setTokenCookie: (token: string) => {
        console.log('inside server', token)
    },

    login: async (login: ILogin) => {
        try {
            return await api.post("/signin", login);
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    getUser: async (token: string) => {
        try {
            return await api.get("/user/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    },
}

export default authService