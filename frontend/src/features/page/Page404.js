import React from 'react'

import { CategoryList } from '../categories/CategoryList'

export const Page404 = () => {

    return (
        <div>
            <CategoryList />
            <section>
                <h2>The page requested does not exist.</h2>
            </section>
        </div>
    )
}