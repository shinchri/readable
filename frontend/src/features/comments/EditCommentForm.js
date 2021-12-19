import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CategoryList } from '../categories/CategoryList'

import { editComment } from './commentsSlice'

export const EditCommentForm = ({match}) => {

    const { id } = match.params
    const comment = useSelector(state => state.comments.find(comment => comment.id === id))

    if (!comment) {
        // if comment does not exist display Error
    }

    const [body, setBody] = useState(comment.body)
    const [ editRequestStatus, setEditRequestStatus ] = useState('idle')

    const dispatch = useDispatch()
    const history = useHistory()

    const onBodyChange = e => setBody(e.target.value)

    const canSave = [body].every(Boolean) && editRequestStatus === 'idle'

    const onEditCommentClicked = () => {
        if (canSave) {
            const editedComment = {
                id: comment.id,
                body: body,
                author: comment.author,
                timestamp: comment.timestamp,
                parentId: comment.parentId
            }
            setEditRequestStatus('pending')
            dispatch(editComment(editedComment))
            setBody('')
            history.push(`/posts/${comment.parentId}`)
        }
    }
    return (
        <div>
            <CategoryList />
            <section>
                <form>
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
                    <button type="button" className="button" onClick={onEditCommentClicked} disabled={!canSave}>
                        Save Post
                    </button>
                </form>
            </section>
        </div>
    )
}