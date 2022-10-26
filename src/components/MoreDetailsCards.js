import { DoNotDisturb } from '@mui/icons-material'
import React from 'react'
import SplineChart from "../components/SplineChart"
import DonutChart from "../components/DonutChart"

const MoreDetailsCards = () => {
    return (
        <>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                <div className="below_card_1">
                    <div className="below_card1_head">
                        <div className="usr_activity_div">
                            <h5>User Activity</h5>
                        </div>
                        <div className="weekly_dropdown">
                            <p>Weekly<i class="fa-solid fa-chevron-down"></i></p>
                        </div>


                    </div>
                    <div className="below_card1_month_price">
                        <p>This Month</p>
                        <h5>16,543</h5>
                    </div>

                    <SplineChart />

                </div>

                <div className="below_card_2">
                    <div className="below_card2_head">
                        <div className="orderstats_div">
                            <h5>Order Stats</h5>
                        </div>
                        <div className="ellipis_div_card2">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>


                    </div>
                    <div style={{ marginTop: "2rem",  overflow: "hidden",position:"relative" }}>
                        <div style={{position:"absolute",height:"9rem",width:"6rem",left:"26.6rem",zIndex:"1",backgroundColor:"white"}}></div>
                        <DonutChart />
                    </div>

                    <div className="below_card2_titles">
                        <div>
                            <p>Completed</p>
                        </div>
                        <div>
                            <p>Pending</p>
                        </div>
                        <div>
                            <p>Cancel</p>
                        </div>
                    </div>

                </div>

                <div className="below_card_3">
                    <div className="below_card3_head">
                        <div className="top_product_div">
                            <h5>Top Product</h5>
                        </div>
                        <div className="monthly_dropdown">
                            <p>Monthly<i class="fa-solid fa-chevron-down"></i></p>
                        </div>

                    </div>

                    <div className="bellow_c3_middle">
                        <div className="b_c3_md1">
                            <div className="b_c3_middle_items">
                                <div className="c3_md_numbers">
                                    <p>#1</p>
                                </div>

                                <div className="c3_md_item_title_price">
                                    <p className="c3_md_price_p">Polo blue T-shirt</p>
                                    <p className="c3_md_price">$ 25.4</p>
                                </div>

                            </div>
                            <div className="b_c3_middle_K">
                                <h5>3.82k</h5>

                            </div>

                        </div>


                        <div className="b_c3_md1">
                            <div className="b_c3_middle_items">
                                <div className="c3_md_numbers">
                                    <p>#2</p>
                                </div>

                                <div className="c3_md_item_title_price">
                                    <p className="c3_md_price_p">Hoodie for men</p>
                                    <p className="c3_md_price">$ 24.5</p>
                                </div>

                            </div>
                            <div className="b_c3_middle_K">
                                <h5>3.14k</h5>

                            </div>

                        </div>



                        <div className="b_c3_md1">
                            <div className="b_c3_middle_items">
                                <div className="c3_md_numbers">
                                    <p>#3</p>
                                </div>

                                <div className="c3_md_item_title_price">
                                    <p className="c3_md_price_p">Red color Cap</p>
                                    <p className="c3_md_price">$ 22.5</p>
                                </div>

                            </div>
                            <div className="b_c3_middle_K">
                                <h5>2.84k</h5>

                            </div>

                        </div>

                        <div className="b_c3_md1">
                            <div className="b_c3_middle_items">
                                <div className="c3_md_numbers">
                                    <p>#4</p>
                                </div>

                                <div className="c3_md_item_title_price">
                                    <p className="c3_md_price_p">Pocket T-shirt</p>
                                    <p className="c3_md_price">$ 22.5</p>
                                </div>

                            </div>
                            <div className="b_c3_middle_K">
                                <h5>2.06k</h5>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default MoreDetailsCards
