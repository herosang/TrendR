import React from 'react';
import Styles from '../css/weatherInfo.scss';

class WeatherInformation extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={Styles.info}>
				<span className={Styles.infoTemp}>{this.props.temp}</span>
				<span className={Styles.infoStatus}>{this.props.status}</span>
				<span className={Styles.infoWind}>{this.props.wind}</span>
			</div>
		)
	}
}

export default class WeatherDisplay extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<WeatherInformation 
				temp={this.props.temp} 
				status={this.props.status} 
				wind={this.props.wind} 
			/>
		)
	}
}