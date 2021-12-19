import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { CategoryList } from '../categories/CategoryList'
import { editPost } from './postsSlice'

export const EditPostForm = ({match}) => {
    const { id } = match.params

    console.log(id)

    const post = useSelector(state => state.posts.find(post => post.id === id))

    if (!post) {
        // if post doe not exist, display error message or 404 form
    }

    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    const [ editRequestStatus, setEditRequestStatus ] = useState('idle')

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChange = e => setTitle(e.target.value)
    const onBodyChange = e => {
        setBody(e.target.value)
    }

    const onEidtPostClicked = () => {
        if (title && body && editRequestStatus === 'idle') {
           
            const editedPost = {
                id: post.id,
                title: title,
                body: body,
                timestamp: post.timestamp,
                category: post.category,
                author: post.author
            }
            setEditRequestStatus('pending')
            dispatch(editPost(editedPost))
            setTitle('')
            setBody('')
            history.push(`/posts/${post.id}`)
            
               
        }
    }

    return (
        <div>
            <CategoryList />
            <section>
                <h2>Edit Post</h2>
                <form>
                    <div>
                        <label htmlFor="postTitle" className="form-label">Post Title:</label>
                        <input 
                            type='text'
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChange}
                            className="form-input"
                            placeholder="Title goes here"
                        />
                    </div>
                    <div>
                        <label htmlFor="postBody" className="form-label">Post Content:</label>
                        <textarea
                            id="postBody"
                            name="postBody"
                            value={body}
                            onChange={onBodyChange}
                            className="form-input form-text-area"
                            placeholder="Post content..."
                        ></textarea>
                    </div>
                    <button type="button" className="button" onClick={onEidtPostClicked}>
                        Save Post
                    </button>
                </form>
            </section>
        </div>
    )
}