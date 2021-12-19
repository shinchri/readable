import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import * as ReadableAPI from '../../utils/ReadableAPI'

export const fetchCommentsByPost = createAsyncThunk(
    'comments/fetchCommentsByPost',
    async(postId) => {
        const response = await ReadableAPI.getCommentsByPostId(postId)
        return response
    }
)

export const addNewComment = createAsyncThunk(
    'comments/addNewComment',
    async(newComment) => {
        const response = await ReadableAPI.addNewComment(newComment)
        return response
    }
)

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async(comment) => {
        const response = await ReadableAPI.deleteComment(comment)
        return response
    }
)

export const vote = createAsyncThunk(
    'comments/vote',
    async(params) => {
        const response = await ReadableAPI.voteComment(params)
        return response
    }
)

export const editComment = createAsyncThunk(
    'comments/editComment',
    async(comment) => {
        const response = await ReadableAPI.editComment(comment)
        return response
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCommentsByPost.fulfilled, (state, action) => {
            let comments = [...action.payload]
            comments = comments.sort((a,b) => b.timestamp - a.timestamp)
            return comments
        })
        .addCase(addNewComment.fulfilled, (state ,action) => {
            state.push(action.payload)
            state.sort((a,b) => b.timestamp - a.timestamp)
        })
        .addCase(deleteComment.fulfilled, (state, action) => {
            const { id } = action.payload
            const comments = state.filter(comment => comment.id !== id)
            return comments
        })
        .addCase(vote.fulfilled, (state, action) => {
            const { id, voteScore } = action.payload
            const comment = state.find(comment => comment.id === id)
            comment.voteScore = voteScore
        })
        .addCase(editComment.fulfilled, (state, action) => {
            return [action.payload]
        })
    }
})


export default commentsSlice.reducer