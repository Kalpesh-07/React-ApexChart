import Chart from 'react-apexcharts'
import {Component} from "react";
class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
         options : {
            chart: {
              height: 380,
              type: "line"
            },
            stroke: {
              width: [0, 4],
              curve: 'smooth'
            },
            title: {
              text: "Traffic Sources"
            },
            // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: [
              "01 Jan 2001",
              "02 Jan 2001",
              "03 Jan 2001",
              "04 Jan 2001",
              "05 Jan 2001",
              "06 Jan 2001",
              "07 Jan 2001",
              "08 Jan 2001",
              "09 Jan 2001",
              "10 Jan 2001",
              "11 Jan 2001",
              "12 Jan 2001"
            ],
            xaxis: {
              type: "datetime"
            },
            yaxis: [
              {
                title: {
                  text: "Website Blog"
                }
              },
              {
                opposite: true,
                title: {
                  text: "Social Media"
                }
              }
            ]
},
        series: [
              {
                name: "Website Blog",
                type: "column",
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
              },
              {
                name: "Social Media",
                type: "column",
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
              }
            ]
      // options: {
      //   chart: {
      //     id: 'apexchart-example'
      //   },
      //   xaxis: {
      //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      //   }
      // },
      // series: [{
      //   name: 'series-1',
      //   data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      // }]
    }
  }
  render() {
    return (
        <>
            <h2>Mixed Column Chart</h2>
             <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        </>

    )
  }
}

export default Barchart