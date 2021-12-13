import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { formatDate } from '../../utils/helper'
import { CategoryList } from '../categories/CategoryList'
import { CommentsList } from '../comments/CommentsList'

import {
    fetchPostById
} from './postsSlice'

let PostExcerpt = ({post}) => {
    return(
        <div>
            <CategoryList />
            <section>   
                <article className="post">
                <h3>{post.title}</h3>
                <div>
                    <span>By {post ? post.author : "Unknown Author"}</span>
                    <span title="{post.timestamp}">&nbsp; <i>{formatDate(post.timestamp)}</i></span>
                </div>
                <p className="post-content">{post.body}</p>
                <p>Vote Score: {post.voteScore}</p>
                </article>
                <CommentsList postId={post.id}/>
            </section>
            
        </div>
    )
}
export const PostDetail = (props) => {
    const postId = props.match.params.id
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(fetchPostById(postId))
    }, [dispatch, postId])

    const post = useSelector(state => state.posts.find(post => post.id === postId))

    return (
        <PostExcerpt post={post}/>
    )
}