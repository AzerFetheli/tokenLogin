import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/Main/MainLayout'
import Home from './Layouts/Main/pages/Home'
import About from './Layouts/Main/pages/About'
import AuthLayout from './Layouts/Auth/AuthLayout'
import Login from './Layouts/Auth/pages/Login'
import Register from './Layouts/Auth/pages/Register'
import AuthRoute from './Helpers/AuthRoute'
import { ProfileCall } from './services/auth'
import { userContext } from './context/AuthContext'
import Details from './Layouts/Main/pages/Details'


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "details",
                element: <AuthRoute> <Details /></AuthRoute>
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },

        ]
    }
])

export const MainRouter = () => {
    const { setUser } = useContext(userContext)
    useEffect(() => {
        ProfileCall().then(({ data }) => {
            console.log(data.data.client)
            setUser(data.data.client)
        }).catch(() => {
            setUser(false)
        })
    }, [])
    return <RouterProvider router={router} />;
};
