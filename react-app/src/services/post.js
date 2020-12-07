export const getPost = async (postId) => {
    const response = await fetch(`/api/posts/${postId}`)
    return await response.json()
}
