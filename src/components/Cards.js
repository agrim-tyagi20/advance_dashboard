import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="cards">
                <div className="cards1" >
                    <div className="card_subset1">
                        <i class="fa-sharp fa-solid fa-chart-pie"></i>

                        <div className="revenue_div">
                            <p>Revenue</p>
                            <h4>$21,456</h4>
                        </div>
                    </div>
                    <div className="percent_div">
                        <h4>+ 2.65%</h4>

                    </div>
                </div>
                <div className="cards2">
                    <div className="card_subset2">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <div className="orders_div">
                            <p>Orders</p>
                            <h4>5,643</h4>
                        </div>
                    </div>
                    <div className="order_percent_div">
                        <h4>- 0.82%</h4>

                    </div>
                </div>
                <div className="cards3">
                    <div className="card_subset3">
                        <i class="fa-solid fa-user-group"></i>
                        <div className="customers_div">
                            <p>Customers</p>
                            <h4>45,254</h4>
                        </div>
                    </div>
                    <div className="customers_percent_div">
                        <h4>- 1.04%</h4>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Cards
