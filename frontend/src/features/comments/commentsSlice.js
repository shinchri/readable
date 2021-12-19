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

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCommentsByPost.fulfilled, (state, action) => {
            return [...action.payload]
        })
        .addCase(addNewComment.fulfilled, (state ,action) => {
            state.push(action.payload)
        })
    }
})


export default commentsSlice.reducer