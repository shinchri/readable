import {
    createSlice,
    createAsyncThunk,
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
    async (post) => {
        const response = await ReadableAPI.addNewPost(post)
        return response
    }
)

export const editPost = createAsyncThunk(
    'posts/editPost',
    async (post) => {
        const response = await ReadableAPI.editPost(post)
        return response
    }
)

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (post) => {
        const response = await ReadableAPI.deletePost(post)
        return response
    }
)

export const vote = createAsyncThunk(
    'posts/vote',
    async (post, option) => {
        const response = await ReadableAPI.vote(post, option)
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
                return [action.payload]
            })
            .addCase(editPost.fulfilled, (state, action) => {
                return [action.payload]
            })
            .addCase(deletePost.fulfilled, (state, action) =>{
                return [action.payload]
            })
            .addCase(vote.fulfilled, (state, action) => {
                console.log(action)
            })
    }
})

export default postsSlice.reducer