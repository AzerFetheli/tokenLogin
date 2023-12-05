import React from 'react'
import { MainRouter } from './Router'
import AuthContext from './context/AuthContext'


export default function App() {
  return (
    <AuthContext>
      <MainRouter />
    </AuthContext>
  )
}
