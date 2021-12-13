import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Posts } from './Posts'

import {
    fetchPosts,
} from './postsSlice'

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <Posts posts={posts}/>
    )

}