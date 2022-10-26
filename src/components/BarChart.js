import { Opacity } from '@mui/icons-material';
import React, { useState } from 'react'
import Chart from "react-apexcharts";


const BarChart = () => {

    const [state, setState] = useState({
        options: {
            chart: {
                toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                      download: false,
                      selection: true,
                      zoom: true,
                      zoomin: true,
                      zoomout: true,
                      pan: true,
                      reset: true | '<img src="/static/icons/reset.png" width="20">',
                      customIcons: []
                    },
                    export: {
                      csv: {
                        filename: undefined,
                        columnDelimiter: ',',
                        headerCategory: 'category',
                        headerValue: 'value',
                        dateFormatter(timestamp) {
                          return new Date(timestamp).toDateString()
                        }
                      },
                      svg: {
                        filename: undefined,
                      },
                      png: {
                        filename: undefined,
                      }
                    },
                    autoSelected: 'zoom' 
                  },

                id: "basic-bar",
                width:20,
          


            },
            plotOptions: {
                bar: {
                  borderRadius: 10,
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
            xaxis: {
                categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
            },

            yaxis: {
                  labels:{
                    formatter:(val)=>{
                      return `${val}k`
                    },
                  }
            },

          
            fill: {
                colors: ["#f1f3f7", "#3b76e1"],
               
               
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "vertical",
                    shadeIntensity: 1,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 0.9,
                    stops: [40, 1000,200],
                    colorStops: [],

                },
            }
            },
            series: [
                {
                    name: "",
                    data: [50, 9, 45, 50, 49, 60, 70, 91, 92]
                },
                {
                    name: "",
                    data: [45, 40, 45, 50, 49, 60, 70, 91, 92]
                }
            ]

        })
    return (
        <>
            <div >
                <Chart 
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="800"
                    height="350"
                />

            </div>
        </>
    )
}

export default BarChart
