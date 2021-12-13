import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/categories/categoriesSlice'
import postReducer from '../features/posts/postsSlice'

export default configureStore({
    reducer: {
        categories: categoryReducer,
        posts: postReducer
    }
})