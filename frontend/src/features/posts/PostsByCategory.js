import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryList } from '../categories/CategoryList'
import { Posts } from './Posts'
import {
    fetchPostsByCategory
} from './postsSlice'

export const PostsByCategory = (props) => {
    const dispatch = useDispatch()
    const category = props.match.params.category
    const posts = useSelector(state => state.posts.filter(post => post.category === category))
    
    useEffect(() => {
        dispatch(fetchPostsByCategory(category))
    }, [dispatch, category])
    
    return (
        <div>
            <CategoryList />
            <Posts posts={posts} />
        </div>
    )
}