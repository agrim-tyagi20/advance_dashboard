import React, { useState } from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Cards from "../components/Cards"
import OverviewWithBarChart from "../components/OverviewWithBarChart"
import UserProfile from "../components/UserProfile"

import MoreDetailsCards from "../components/MoreDetailsCards"

const Layout = () => {


    return (
        <>

            <div className="container">
                <Sidebar />

                <div className="Right_section">
                    <Navbar />

                    <div className="right_container">
                        <div className="part1">
                            <Cards />
                            <OverviewWithBarChart />
                            <MoreDetailsCards/>

                        </div>

                        <UserProfile />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Layout
