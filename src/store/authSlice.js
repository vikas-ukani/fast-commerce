const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: {},
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (store, { payload }) => {
            store.token = payload
        },
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer