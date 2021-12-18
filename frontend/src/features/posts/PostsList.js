import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Posts } from './Posts'

import {
    fetchPosts,
} from './postsSlice'

export const PostsList = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const posts = useSelector(state => state.posts)

    return (
        <Posts posts={posts}/>
    )

}