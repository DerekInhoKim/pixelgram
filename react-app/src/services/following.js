export const getFollowingPosts = async (userId) => {
    const response = await fetch(`/api/follows/${userId}/posts`)
    return await response.json()
}

export const isFollowing = async (userId, postUserId) => {
    const response = await fetch(`/api/follows/${userId}/following/${postUserId}`)
    return await response.json()
}
