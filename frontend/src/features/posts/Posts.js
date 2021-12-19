import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/helper'

import { VoteButtons } from './VoteButtons'
export const Posts = ({posts}) => {

    return (
        <section className="posts-list">
            <h2>All Posts</h2>
            {posts.map(post => (
                <article className="post-excerpt" key={post.id}>
                    <h3>{post.title}</h3>
                    <div>
                        <span>By {post ? post.author : "Unknown Author"}</span>
                        <span title="{post.timestamp}">&nbsp; <i>{formatDate(post.timestamp)}</i></span>
                    </div>
                    <p className="post-content">{post.body}</p>
                    <VoteButtons post={post}/>
                    <div className="edit-delete">
                        <Link to={`/posts/${post.id}/edit`}>edit</Link>&nbsp; | &nbsp;
                        <Link to={`/posts/${post.id}/delete`}>delete</Link>
                    </div>
                    <Link to={`/posts/${post.id}`} className="button muted-button">
                        View Post
                    </Link>
                </article>
            ))}
        </section>
    )
}