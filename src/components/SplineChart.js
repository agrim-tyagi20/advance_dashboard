import React, { useState } from 'react'
import Chart from "react-apexcharts";


const SplineChart = () => {
  const [state, setState] = useState({

    series: [{
      name: 'Current',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Previous',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        stacked:false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: false,
            selection: true,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="20">',
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
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ["#3b76e1", "#f56e6e"],
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      yaxis: {
        labels:{
        categories: [20,40,60,80,100]
        }
      },

      fill: {
        colors: ["#3b76e1", "#f56e6e"],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },


  })

  return (
    <>
      <div >
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          height="200"

        />
      </div>
    </>
  )
}

export default SplineChart
