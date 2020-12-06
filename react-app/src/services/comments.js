export const createComment = async (message, postId, userId) => {
    const response = await fetch('/api/comments/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message,
            postId,
            userId
        })
    })
    const comment = await response.json()
    return comment
}
