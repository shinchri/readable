import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CategoryList } from '../categories/CategoryList'
import { addNewPost } from './postsSlice'

// What I need:
// title, body, author, category

export const AddPostForm = () => {

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ addRequestStatus, setAddRequestStatus ] = useState('idle')

    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories)

    const onTitleChange = e => setTitle(e.target.value)
    const onBodyChange = e => setBody(e.target.value)
    const onAuthorChange = e => setAuthor(e.target.value)
    const onCategoryChange = e => setCategory(e.target.value)

    const canSave = [title, body, author, category].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = async () => {
        if (canSave) {
            const newPost = {
                id: nanoid(),
                timestamp: Date.now(),
                title: title,
                body: body,
                author: author,
                category: category
            }
            try {
                setAddRequestStatus('pending')
                await dispatch(addNewPost(newPost)).unwrap()
                setTitle('')
                setBody('')
                setAuthor('')
                setCategory('')
            } catch( err ) {
                console.log("Failed to save the post: ", err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const categoriesOptions = categories.map(category => (
        <option key={category.name} value={category.name}>
            {category.name}
        </option>
    ))

    return (
        <div>
            <CategoryList />
            <section>
                <h2>Add a New Post</h2>
                <form>
                    <label htmlFor="postTitle">Post Title:</label>
                    <input 
                        type='text'
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChange}
                    />
                    <label htmlFor="postAuthor">Post Author:</label>
                    <select id="postAuthor" value={author} onChange={onAuthorChange}>
                        <option value=""></option>
                        <option value="authorOne">authorOne</option>
                        <option value="authorTwo">authorTwo</option>
                        <option value="authorThree">authorThree</option>
                    </select>
                    <label htmlFor="postCategory">Post Category:</label>
                    <select id="postCategory" value={category} onChange={onCategoryChange}>
                        <option value=""></option>
                        {categoriesOptions}
                    </select>
                    <label htmlFor="postBody">Post Content:</label>
                    <input 
                        type='text'
                        id="postBody"
                        name="postBody"
                        value={body}
                        onChange={onBodyChange}
                    />
                    <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
                        Save Post
                    </button>
                </form>
            </section>
        </div>
    )
}