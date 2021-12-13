import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate } from '../../utils/helper'

import {
    fetchCommentsByPost
} from './commentsSlice'

export const CommentsList = ({postId}) => {
    
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(fetchCommentsByPost(postId))
    }, [dispatch, postId])

    return (
        <div className="posts-list">
            <h3>Comments List</h3>
            {comments.map(comment => (
                <section key={comment.id} className="post-excerpt">
                    <h4>By {comment.author}</h4>
                    <span title="{comment.timestamp}"><i>{formatDate(comment.timestamp)}</i></span>
                </section>
            ))}
        </div>
    )
}