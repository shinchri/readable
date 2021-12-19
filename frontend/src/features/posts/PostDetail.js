import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { formatDate } from '../../utils/helper'
import { CategoryList } from '../categories/CategoryList'
import { CommentsList } from '../comments/CommentsList'

import { Link } from 'react-router-dom'

import { VoteButtons } from './VoteButtons'

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
                    <VoteButtons post={post}/>
                    <div>
                        <Link to={`/posts/${post.id}/edit`}>edit</Link>&nbsp; | &nbsp;
                        <Link to={`/posts/${post.id}/delete`}>delete</Link>
                    </div>
                </article>
                <CommentsList post={post}/>
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

    if (post) {
        return (
            <PostExcerpt post={post}/>
        )
    }

    // for some reason, the dispatch doesn't happen when the component is mounted
    // thus check is 'post' exists
    return null
}