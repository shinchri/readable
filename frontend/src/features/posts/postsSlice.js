import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import { Redirect } from 'react-router'

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
        try {
            const response = await ReadableAPI.getPostById(id)
        return response
        }
        catch {
            <Redirect to="/404" />
        }
        
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
    async (params) => {
        const response = await ReadableAPI.vote(params)
        return response
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        commentAdded(state, action) {
            const { id } = action.payload
            const post = state.find(post => post.id === id)
            post.commentCount += 1
        },
        sortBy(state, action) {
            let { type } = action.payload
            let posts
            if (type === 'time') {
                posts = state.sort((a,b) => b.timestamp - a.timestamp)
            }
            else {
                // type is vote
                posts = state.sort((a,b) => b.voteScore - a.voteScore)
            }
            return posts
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                let posts = [...action.payload]
                posts = posts.sort((a,b) => b.timestamp - a.timestamp)
                return posts
            })
            .addCase(fetchPostsByCategory.fulfilled, (state, action) => {
                let posts = [...action.payload]
                posts = posts.sort((a,b) => b.timestamp - a.timestamp)
                return posts
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
                const { id, voteScore } = action.payload
                const post = state.find(post => post.id === id)
                post.voteScore = voteScore
            })
    }
})
export const { commentAdded, sortBy } = postsSlice.actions

export default postsSlice.reducer