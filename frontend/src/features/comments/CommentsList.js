import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate } from '../../utils/helper'
import { AddCommentForm } from './AddCommentForm'

import { Link } from 'react-router-dom'

import {
    fetchCommentsByPost
} from './commentsSlice'

import { VoteButtons } from './VoteButtons'

export const CommentsList = ({post}) => {
    const postId = post.id

    const dispatch = useDispatch()

    let comments = useSelector(state => state.comments)
   
    useEffect(() => {
        dispatch(fetchCommentsByPost(postId))
        
    }, [dispatch, postId])

    return (
        <div className="posts-list">
            <h3>Comments List ({post.commentCount} {post.commentCount === 1 ? "comment" : "comments"})</h3>
            <AddCommentForm postId={postId} /> <br />
            {comments.map(comment => (
                <section key={comment.id} className="post-excerpt">
                    <h4>By {comment.author}</h4>
                    <span title="{comment.timestamp}"><i>{formatDate(comment.timestamp)}</i></span>
                    <p>{comment.body}</p>
                    <VoteButtons comment={comment} />
                    <div className="edit-delete">
                        <Link to={`/comments/${comment.id}/edit`}>edit</Link>&nbsp; | &nbsp;
                        <Link to={`/comments/${comment.id}/delete`}>delete</Link>
                    </div>
                </section>
            ))}
        </div>
    )
}