import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const currentUser = useSelector(state => state.users.user)

    return (
        <h1>{currentUser.username}</h1>
    )

}

export default HomePage
