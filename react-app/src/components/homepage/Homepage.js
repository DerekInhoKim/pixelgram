import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {getFollowingPosts} from '../../services/post'
import DisplayPost from './DisplayPost'

const HomePage = () => {
    // On reload, our redux store is reset. This makes development difficult so use a hard coded current user on line 8 until further development has been completed
    const currentUser = useSelector(state => state.users.user)
    // const currentUser = {id: 1, username: "demo"}
    const [posts, setPosts] = useState([])
    console.log('something')

    useEffect(() => {
        if(currentUser){
            (async () => {
                console.log('here')
                const postList = await getFollowingPosts(currentUser.id)
                setPosts(postList.posts)
            })()
        }
    }, [currentUser])

    if(!currentUser){
        return (
            <h1>no user</h1>
        )
    }
    // console.log(currentUser)
    return (
        <div>
            <h1>{currentUser.username}</h1>
            {posts.map((post) => {
                return (
                    <DisplayPost key={post.id} id={post.id} caption={post.caption} content={post.content} createdAt={post.createdAt} user={post.user}/>
                )
            })}
        </div>
    )

}

export default HomePage
