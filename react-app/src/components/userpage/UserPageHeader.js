import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {getUser} from '../../services/user'

const UserPageHeader = ({userId}) => {
    const currentUser = useSelector(state => state.users.user)

    const [user, setUser] = useState({})
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const userRes = await getUser(userId)
            setUser(userRes)
        })()
    },[userId])


    return (
        <div className="userpage_header_container">
            <img className="userpage_image" src={user.profilePicture} alt=""/>
            <div>
                {user.username}
            </div>
        </div>
    )
}

export default UserPageHeader
