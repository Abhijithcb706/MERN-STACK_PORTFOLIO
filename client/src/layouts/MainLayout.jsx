import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"

function MainLayout() {
  return (
    <div className='min-h-screen bg-black'>
<Navbar/>
<main className='max-w-7xl mx-auto p-6'>
    <Outlet/>
</main>
    </div>
  )
}

export default MainLayout