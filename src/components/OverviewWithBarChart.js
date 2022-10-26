import React from 'react'
import BarChart from "../components/BarChart"

const OverviewWithBarChart = () => {
    return (
        <>
            <div className="big_card_container">

                <div className="big_card_header">

                    <div className="overview_div">
                        <p>Overview</p>
                    </div>

                    <div className="dropdown_div">
                        <p><span style={{ color: "#0000009c" }}>Sort By: </span>Yearly  <i class="fa-solid fa-chevron-down" style={{ marginLeft: "5px", fontSize: "10px" }}></i></p>
                    </div>

                </div>

                <div className="bg_card_middle">

                    <div className="bg_middle_left">
                        <div className="bg_middle_first">

                            <p style={{ color: " #7f838b" }}>This Month</p>
                            <div className="bg_contain_price_percent">
                                <div className="bg_card_price">
                                    <h2>$24,568</h2>

                                </div>

                                <div className="bg_card_percent_div">
                                    <h4>+ 2.65%</h4>

                                </div>
                            </div>
                        </div>

                        <div className="bg_middle_second">

                            <div className="bg_ms_os_container">
                                <div className="bg_ms_order">
                                    <p>Orders</p>
                                    <h5>5,643</h5>
                                </div>
                                <div className="bg_ms_sales">
                                    <p>Sales</p>
                                    <h5>16,273</h5>
                                </div>


                            </div>
                            <div className="bg_ms_os_container">
                                <div className="bg_ms_order" style={{ paddingRight: "4px" }}>
                                    <div style={{ position: "relative", top: "5px", right: "5px" }}>
                                        <p>Order Value</p>
                                        <h5>12.03%</h5>
                                    </div>
                                </div>
                                <div className="bg_ms_sales">
                                    <div style={{ position: "relative", top: "5px", right: "1px" }}>
                                        <p>Customers</p>
                                        <h5>21,456</h5>
                                    </div>
                                </div>


                            </div>
                            <div className="bg_ms_os_container">
                                <div className="bg_ms_order" style={{ paddingRight: "10px" }}>
                                    <div style={{ position: "relative", top: "5px", right: "5px" }}>
                                        <p>Income</p>
                                        <h5>$35,652</h5>
                                    </div>
                                </div>
                                <div className="bg_ms_sales">
                                    <div style={{ position: "relative", top: "5px", right: "1px" }}>
                                        <p>Expenses</p>
                                        <h5>$12,248</h5>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg_middle_right">
                        <BarChart />
                    </div>
                </div>

            </div>
        </>
    )
}

export default OverviewWithBarChart
