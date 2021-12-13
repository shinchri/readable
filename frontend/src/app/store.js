import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/categories/categoriesSlice'
import postReducer from '../features/posts/postsSlice'
import commentReducer from '../features/comments/commentsSlice'

export default configureStore({
    reducer: {
        categories: categoryReducer,
        posts: postReducer,
        comments: commentReducer
    }
})