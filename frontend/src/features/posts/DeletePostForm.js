import React, { useState } from 'react'

import { useDispatch, useSelector} from 'react-redux'
import { Redirect, useHistory } from 'react-router'

import { CategoryList } from '../categories/CategoryList'

import { deletePost } from './postsSlice'

export const DeletePostForm = ({match}) => {

    const { id } = match.params

    const post = useSelector(state => state.posts.find(post => post.id === id))

    if (!post) {
        // if post doe not exist, display error message or 404 form
    }

    const [ deleteClicked, setDeleteClicked ] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const onDeleteClicked = async () => {
        try {
            dispatch(deletePost(post)).unwrap()
        } catch (err) {
            console.log('Error happened: ', err)
        } finally {
            setDeleteClicked(true)
        }
    }

    const onNoClicked = () => {
        history.push(`/posts/${post.id}`)
    }
    
    if (deleteClicked) {
        return <Redirect to="/" />
    }
    
    return (
        <div>
            <CategoryList />
            <section className="delete-post">
                <h2>Would you like to delete this post?</h2>
                <button type="button" className="button delete-button" onClick={onDeleteClicked}>Delete</button>
                <button type="button" className="button" onClick={onNoClicked}>Return to Post Detail</button>
            </section>
        </div>
    )
}