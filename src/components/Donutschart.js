import Chart from 'react-apexcharts'
import {Component} from "react";
class Barchart extends Component {
  constructor(props) {
    super(props);

     this.state = {

            series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'Gradient Donut'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },


          };
  }
  render() {
    return (
        <>
            <h2>Donut Chart</h2>
             <Chart options={this.state.options} series={this.state.series} type="donut" width={380}  />
        </>

    )
  }
}

export default Barchart