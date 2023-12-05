import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Main/components/Header'

export default function AuthLayout() {
  return (
    <div>

      <Outlet />
    </div>

  )
}
