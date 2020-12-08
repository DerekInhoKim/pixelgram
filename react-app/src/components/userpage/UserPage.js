import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import UserPageHeader from './UserPageHeader'


const UserPage = () => {
    const {userId} = useParams()

    return (
        <div className="userpage_container">
            <UserPageHeader userId={userId} />
            {/* User's posts will go here */}
            {/* <h1>{userId}</h1> */}
        </div>
    )
}

export default UserPage
