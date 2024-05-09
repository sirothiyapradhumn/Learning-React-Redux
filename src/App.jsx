import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'


export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}