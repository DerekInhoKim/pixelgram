export const getFollowingPosts = async (userId) => {
    const response = await fetch(`/api/follows/${userId}/posts`)
    return await response.json()
}
