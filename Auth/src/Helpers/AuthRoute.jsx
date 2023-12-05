import React, { useContext } from 'react'
import { userContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AuthRoute({ children }) {
    const { user } = useContext(userContext)
    if (user) return children;
    else if (user === null) return <h1>... loading</h1>;
    else {
        return <Navigate to={"/auth/login"}/>
    }

}
