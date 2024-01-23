import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Common Layouts/Footer'
import Nav from './Common Layouts/Nav'

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout