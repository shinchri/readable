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
export const getPostsByCategory = (category) => 
    fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())
    .then(data => data)

// GET /posts
export const getAllPosts = () =>
    fetch(`${api}/posts`, {headers})
    .then(res => res.json())
    .then(data => data)

// POST /posts

// GET /posts/:id
export const getPostById = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
    .then(res => res.json())
    .then(data => data)

// POST /posts/:id

// PUT /posts/:id

// DELETE /posts/:id

// GET /posts/:id/comments
export const getCommentsByPostId = (id) => 
    fetch(`${api}/posts/${id}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)

// POST /comments

// GET /comments/:id

// POST /comments/:id

// PUT /comments/:id

// DELETE /comments/:id
