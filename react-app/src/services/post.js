export const getPost = async (postId) => {
    const response = await fetch(`/api/posts/${postId}`)
    return await response.json()
}

export const createPost = async(caption, imageUrl) => {
    const response = await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        caption,
        content: imageUrl,
      })
    });
    return await response.json()
}

export const uploadImage = async (data) => {
    const res = await fetch('/api/s3/upload', {
      method: 'POST',
      body: data
    })

    return await res.json()
}
