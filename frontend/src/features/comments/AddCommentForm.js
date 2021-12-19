import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import { addNewComment } from './commentsSlice'
import { commentAdded } from '../posts/postsSlice'

// What I need:
// id, timestamp, body, author, parentId: id of post

export const AddCommentForm = ({ postId }) => {

    const [ body, setBody ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ addRequestStatus, setAddRequestStatus ] = useState('idle')

    const dispatch = useDispatch()

    const onBodyChange = e => setBody(e.target.value)
    const onAuthorChange = e => setAuthor(e.target.value)

    const canSave = [body, author].every(Boolean) && addRequestStatus === 'idle'

    const onSaveCommentClicked = async () => {
        if (canSave) {
            const newComment = {
                id: nanoid(),
                timestamp: Date.now(),
                body: body,
                author: author,
                parentId: postId
            }
            try {
                setAddRequestStatus('pending')
                await dispatch(addNewComment(newComment)).unwrap()
                dispatch(commentAdded({id: postId}))
                setBody('')
                setAuthor('')
            } catch(err) {
                console.log("Failed to save the comment: ", err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="postAuthor" className="form-label">Post Author:</label>
                    <select id="postAuthor" value={author} onChange={onAuthorChange} className="form-input">
                        <option value=""></option>
                        <option value="authorOne">authorOne</option>
                        <option value="authorTwo">authorTwo</option>
                        <option value="authorThree">authorThree</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="commentBody" className="form-label">Comment:</label>
                    <textarea 
                        id="commentBody"
                        name='commentBody'
                        value={body}
                        onChange={onBodyChange}
                        className='form-input form-text-area'
                        placeholder="Write comments here..."
                    ></textarea>
                </div>
                <button className="button" type="button" onClick={onSaveCommentClicked} disabled={!canSave}>
                    Save Comment
                </button>
            </form>
        </div>
    )
}
