import React from 'react';
import Paper from 'material-ui/Paper';
import {Line} from 'react-chartjs-2';

const options = {
  maintainAspectRatio: "false",
};

export default class TrendingDisplay extends React.Component{
  	displayName: 'TrendingDisplay';
  	props: any;
 	  data = {
  		datasets: [
    		{
      		label: 'Item Name',
      		fill: false,
      		lineTension: 0.1,
      		backgroundColor: 'rgba(75,192,192,0.4)',
      		borderColor: 'rgba(75,192,192,1)',
      		borderCapStyle: 'butt',
      		borderDash: [],
      		borderDashOffset: 0.0,
      		borderJoinStyle: 'miter',
      		pointBorderColor: 'rgba(75,192,192,1)',
      		pointBackgroundColor: '#fff',
      		pointBorderWidth: 1,
      		pointHoverRadius: 5,
      		pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      		pointHoverBorderColor: 'rgba(220,220,220,1)',
      		pointHoverBorderWidth: 2,
      		pointRadius: 1,
      		pointHitRadius: 10,
    		}
  		]
	};


  	constructor(props) {
  		super(props);
  		this.data.labels = this.props.data.labels;
  		this.data.datasets[0].data = this.props.data.sales;
  	};

    getWidth = (size) => {
      return size*100;
    }

    getHeightRatio = (width) => {
      return (300*100)/width;
    }

  render() {
    var width = this.getWidth(8);

    return (
      <div style={{height:500, width:300, overflowX:"scroll"}}>
      <div style={{height:300,width:width}}>
        <Line data={this.data} height={this.getHeightRatio(width)} width={100} options={options}/>
      </div> </div>
    );
  }
};