import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import * as ReadableAPI from '../../utils/ReadableAPI'

export const fetchCategories = createAsyncThunk (
    'categories/fetchCategories',
    async() => {
        const response = await ReadableAPI.getAllCategories()
        return response
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.push(...action.payload)
        })
    }
})

export default categoriesSlice.reducer