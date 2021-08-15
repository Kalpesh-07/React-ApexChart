import Chart from 'react-apexcharts'
import {Component} from "react";
class ColumnChart extends Component {
    constructor(props) {
          super(props);

          this.state = {

            series: [{
              data: [21, 22, 10, 28, 16, 21]
            }],
            options: {
              chart: {
                height: 350,
                type: 'bar',
                events: {
                  click: function(chart, w, e) {
                    // console.log(chart, w, e)
                  }
                }
              },
              colors: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966'],
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
              xaxis: {
                categories: [
                  ['Electronics'],
                  ['Grocery'],
                  ['Mobiles'],
                  ['Fashion'],
                  ['Home Appliances'],
                  ['Beauty & Toys']
                ],
                labels: {
                  style: {
                    colors:  ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333'],
                    fontSize: '12px'
                  }
                }
              }
            },


          };
        }
  render() {
    return (
        <>
           <h2>Column Chart</h2>
           <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        </>

    )
  }
}

export default ColumnChart