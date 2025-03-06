import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}
