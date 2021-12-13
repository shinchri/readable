import React from 'react'
import { CategoryList } from '../categories/CategoryList'
import { PostsList } from '../posts/PostsList'


export const Dashboard = () => {

    return (
        <div>
            <CategoryList />
            <PostsList />
        </div>
        
    )
}