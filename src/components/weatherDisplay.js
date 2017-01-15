import React from 'react';
import Styles from '../css/weatherInfo.scss';

class WeatherInformation extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let props = this.props
		let stuff = [props.temp, props.status, props.wind]
		let info = stuff.map((item) => {
			return <span className={Styles.infoItem}>{item}</span>
		})
		console.log(info)
		return (
			<div className={Styles.info}>
				{info}
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