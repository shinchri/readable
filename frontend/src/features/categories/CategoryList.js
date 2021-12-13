import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const CategoryList = () => {
    const categories = useSelector(state => state.categories)

    return (
        <nav>
            <section>
                <h1>Readable</h1>
                <div className='navContent'>
                    <div className='navLinks'>
                        <Link key="all" to='/'>All Categories</Link>
                        {categories.map(category => (
                            <Link 
                                key={category.name} 
                                to={`/category/${category.name}`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </nav>
    )
}