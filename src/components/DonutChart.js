import React, { useState } from 'react'
import Chart from "react-apexcharts";

const DonutChart = () => {

    const [state, setState] = useState({

        series: [70,25,15],
      
        options: {
            dataLabels: {
                enabled: false,
                
                formatter: function (val) {
                    return val + "%"
                },
            
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                    },

                },
            },

            colors: ["#3b76e1", "#f1f3f7", "#f56e6e"],
            plotOptions: {
                pie: {
                  
                  size: 100,
                }
            },
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 80

                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    })
    return (
        <>  
        <div style={{position:"relative",left:"5rem"}}>
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                height="160"

            />
            </div>

        </>
    )
}

export default DonutChart
