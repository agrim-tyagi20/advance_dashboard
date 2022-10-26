import React from 'react'
import RadialBar from "../components/RadialBar"

const UserProfile = () => {
    return (
        <>
            <div className="part2">
                <div className="user_img_div">

                    <img src="https://images.unsplash.com/photo-1593455934166-118c2a4aa67e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" alt="img" />
                    <div className="overlay_content">
                        <div className="user-nav">
                            <div className="user-nav-dropdown">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="user_prifilepic" >
                    <div className="inner_profile_div" >
                        <img src="https://tse1.mm.bing.net/th?id=OIP.uMfq46b0Bt9KZ8r2PdTwmAHaJ5&pid=Api&rs=1&c=1&qlt=95&w=81&h=108" alt="img" />
                        <div className="user_name_desg" style={{ backgroundColor: "white" }}>
                            <h5>Jennifer Bennett</h5>
                            <p>Product Designer</p>
                        </div>
                    </div>


                </div>

                <div className="user_mid_sec" style={{ backgroundColor: "white" }}>
                    <div className="user_deatils">
                        <div className="user_deatils_product_p">
                            <div className="user_detail_product_inner" style={{ padding: "0.25rem" }}>
                                <h5>1,269</h5>
                                <p>Products</p>
                            </div>

                        </div>
                        <div className="user_deatils_product_p" style={{ border: "none" }}>
                            <div className="user_detail_product_inner" style={{ padding: "0.25rem" }}>
                                <h5>5.2k</h5>
                                <p>Followers</p>
                            </div>

                        </div>

                        <div className="user_deatils_followers_p">

                        </div>

                    </div>
                    <hr className="hr_first" />
                    <div className="earning_parent" >
                        <div className="earning_head" >
                            <h5>Earning</h5>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                        </div>

                        <div className="radial_chart_div">
                            <RadialBar />

                        </div>

                        <div className="earning_record">
                            <h5>$26,256</h5>
                            <p>Earning this Month</p>
                            <div className="earning_percent" >
                                <h4>+ 2.65%</h4>
                                <p>From previous period</p>
                            </div>
                        </div>

                        <hr className="hr_sec" />

                        <div className="recent_activity_parent">
                            <div className="div_recent_ac">
                                <h5>Recent Activity</h5>
                            </div>

                            <div className="recent_ac_conatiner" >
                                <div className="recent_activity_dates">
                                    <div className="ra_date_month">
                                        <h5>12</h5>
                                        <p>Sep</p>

                                    </div>
                                    <div className="recent_ac_paragraph">
                                        <p>Responded to need “Volunteer Activities"</p>
                                    </div>

                                </div>
                                <div className="recent_activity_dates">
                                    <div className="ra_date_month">
                                        <h5>11</h5>
                                        <p>Sep</p>

                                    </div>
                                    <div className="recent_ac_paragraph">
                                        <p>Everyone realizes would be desirable...</p>
                                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                                            <p style={{ color: "#3b76e1" }}>Read more</p>
                                        </div>

                                    </div>

                                </div>
                                <div className="recent_activity_dates">
                                    <div className="ra_date_month">
                                        <h5>10</h5>
                                        <p>Sep</p>

                                    </div>
                                    <div className="recent_ac_paragraph">
                                        <p>Joined the group "Boardsmanship</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
