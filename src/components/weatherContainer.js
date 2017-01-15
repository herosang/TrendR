import React from 'react';
import Paper from 'material-ui/Paper';
import Styles from '../css/weatherInfo.scss';
import WeatherDisplay from './weatherDisplay.js';

var weatherData = {
	temp: "33",
	status: "Partly Cloudy",
	wind: "5"
}

var weatherImgLinks = {
	"Partly Cloudy": 			'http://i.imgur.com/um2zoar.png',
	"Rainy": 							'http://i.imgur.com/ljPoLSE.png'
}

var WeatherHeader = (props) => {
	return <span className={Styles.weatherHeader}>{props.forecast ? "It is currently.." : "It will be.."}</span>
}

var WeatherImage = (props) => {
	return <img src={weatherImgLinks[props.status]}/>
}

export default class WeatherContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Paper zDepth={1} className={Styles.weatherContainer}>
				<WeatherHeader forecast={true} />
				<WeatherImage status={weatherData.status}/>
				<WeatherDisplay 
				temp={weatherData.temp} 
				status={weatherData.status} 
				wind={weatherData.wind}
				className={Styles.weatherDisplay}
				/>
			</Paper>
		)
	}
}