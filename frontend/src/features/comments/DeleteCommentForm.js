import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { CategoryList } from '../categories/CategoryList'

import { deleteComment } from './commentsSlice'

export const DeleteCommentForm = ({match}) =>{

    const { id } = match.params

    const comment = useSelector(state => state.comments.find(comment => comment.id === id))

    if (!comment) {
        // if comment does not exist, display erro rmessage or 404 page
    }

    const [ deleteClicked, setDeleteClicked ] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const onDeleteClicked = async () => {
        try {
            dispatch(deleteComment(comment)).unwrap()
        } catch (err) {
            console.log('Error happened: ', err)
        } finally {
            setDeleteClicked(true)
        }
    }

    const onNoClicked = () => {
        history.push(`/posts/${comment.parentId}`)
    }

    if (deleteClicked) {
        return <Redirect to={`/posts/${comment.parentId}`} />
    }

    return (
        <div>
            <CategoryList />
            <section className="delete-post">
                <h2>Would you like to delete this comment?</h2>
                <button type="button" className="button delete-button" onClick={onDeleteClicked}>Delete</button>
                <button type="button" className="button" onClick={onNoClicked}>Return to Post Detail</button>
            </section>
        </div>
    )
}