const api = "http://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want' 
}

// GET /categories 
export const getAllCategories = () =>
    fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data.categories)

// GET /:category/posts

// GET /posts
export const getAllPosts = () =>
    fetch(`${api}/posts`, {headers})
    .then(res => res.json())
    .then(data => data)

// POST /posts

// GET /posts/:id

// POST /posts/:id

// PUT /posts/:id

// DELETE /posts/:id

// GET /posts/:id/comments

// POST /comments

// GET /comments/:id

// POST /comments/:id

// PUT /comments/:id

// DELETE /ccomments/:id
