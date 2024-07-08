const { createSlice } = require("@reduxjs/toolkit");

export const initialState = {
    products: [],
    isGridView: true,
    filter: {
        categories: [],
        brands: [],
        min_price: 0,
        max_price: 100000,
        sizes: [],
        colors: [],
        sort_by: "title",
        descending: false,
        page: 1,
        limit: 9,
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductFilter: (state, { payload }) => {
            state.filter = payload
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setIsGridView: (state, { payload }) => {
            state.isGridView = payload
        }
    }
})

export const { setProductFilter, setProducts, setIsGridView } = productSlice.actions
export default productSlice.reducer