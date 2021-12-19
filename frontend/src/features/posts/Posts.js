import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/helper'

import { VoteButtons } from './VoteButtons'

import { useDispatch } from 'react-redux'

import { sortBy } from './postsSlice'

export const Posts = ({posts}) => {

    const dispatch = useDispatch()

    const [ sort, setSort ] = useState('time')

    const onChangeSort = async e => {
        setSort(e.target.value)
    }

    useEffect(() =>{
        dispatch(sortBy({type: sort}))
    }, [dispatch, sort])

    return (
        <section className="posts-list">
            <h2>All Posts</h2>
            <div>
                Sort By: 
                <select id="sort" value={sort} onChange={onChangeSort}>
                    <option value="time">Date</option>
                    <option value="vote">Vote Score</option>
                </select>
            </div>
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
                    <p>&#128172; &nbsp;<span>{post.commentCount}</span></p>
                    <Link to={`/posts/${post.id}`} className="button muted-button">
                        View Post
                    </Link>
                </article>
            ))}
        </section>
    )
}