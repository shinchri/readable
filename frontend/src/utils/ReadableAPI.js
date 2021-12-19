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
export const addNewPost = (post) => 
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => data)

// GET /posts/:id
export const getPostById = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
    .then(res => res.json())
    .then(data => data)

// POST /posts/:id

// PUT /posts/:id
export const editPost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => data)

// DELETE /posts/:id
export const deletePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: "DELETE",
        headers
    })
    .then(res => res.json())
    .then(data => data)

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
