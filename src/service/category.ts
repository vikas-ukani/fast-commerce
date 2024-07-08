import api from "./api";

export default {
    fetchCategories: async () => {
        try {
            let { data } = await api.get("/get-categories");
            return data
        } catch (error: any) {
            console.error("Failed to fetch categories: ", error.message);
            return []
        }
    }
}