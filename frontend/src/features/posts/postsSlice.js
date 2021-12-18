import {
    createSlice,
    createAsyncThunk,
    nanoid,
} from '@reduxjs/toolkit'

import * as ReadableAPI from '../../utils/ReadableAPI'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async() => {
        const response = await ReadableAPI.getAllPosts()
        return response
    }
)

export const fetchPostsByCategory = createAsyncThunk(
    'posts/fetchPostsByCategory',
    async(category) => {
        const response = await ReadableAPI.getPostsByCategory(category)
        return response
    }
)

export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async(id) => {
        const response = await ReadableAPI.getPostById(id)
        return response
    }
)

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (title, body, author, category) => {
        const id = nanoid()
        const timestamp = Date.now()
        const response = await ReadableAPI.addNewPost(id, timestamp, title, body, author, category)
        return response
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(fetchPostsByCategory.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                return [action.payload]
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            })
    }
})

export default postsSlice.reducer