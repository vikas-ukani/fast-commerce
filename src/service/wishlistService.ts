import api from "./api";


const wishlistService = {
    getAll: async (token: string) => {
        if (token == null) return [];
        try {
            const res = await api.get("/wishlist", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data || []
        } catch (error: any) {
            console.error("Failed to fetch wishlists : ", error.message);
            return []
        }
    },

}

export default wishlistService