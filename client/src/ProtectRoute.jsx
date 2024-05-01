import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectRoute = () => {
    const { loading, isAuth } = useAuth()

    if (loading) return <p>Loading...</p>
    if (!loading && !isAuth) return <Navigate to="/login" replace />

    return <Outlet />
}