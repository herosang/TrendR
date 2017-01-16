import React from 'react';
import Paper from 'material-ui/Paper';
import Styles from '../css/weatherInfo.scss';
import WeatherDisplay from './weatherDisplay.js';
import WeatherData from '../node/nodeTest/weatherMain.js';

var weatherImgLinks = {
	"Partly Cloudy Night":  'http://i.imgur.com/a21gVMV.png',
	"Partly Cloudy Day":    'http://i.imgur.com/um2zoar.png',
	"Rain Night":           'http://i.imgur.com/ljPoLSE.png',
	"Rain Day": 						'http://i.imgur.com/gc5Z59T.png',
	"Clear Night":          'http://i.imgur.com/KMKPSS4.png',
	"Clear Day":            'http://i.imgur.com/CgVrOs4.png',
	"Snow Night":           'http://i.imgur.com/muYsFnI.png',
	"Snow Day":             'http://i.imgur.com/Nvw26nY.png',
	"Cloudy Night":          'http://i.imgur.com/D33TRNK.png',
	"Cloudy Day":           'http://i.imgur.com/D33TRNK.png',
	"Thunderstorm Day":     'http://i.imgur.com/Wfm4k41.png',
	"Thunderstorm Night":   'http://i.imgur.com/buYm0gS.png'
}

var getWeatherFromId = (id) => {
	let status = {
		"2": 'Thunderstorm',
		"3": 'Rain',
		"5": 'Rain',
		"6": 'Snow',
		"7": 'Cloudy',
		"8": 'Partly Cloudy' 
	}
	// the ID for Clear is exactly 800 so I have to check that first
	if (id == 800) return 'Clear'
	// Cloudy is also only 1 case so check for that too
	if (id == 804) return 'Cloudy'
	return status[Math.floor(id/100).toString()]
}

var WeatherHeader = (props) => {
	return <span className={Styles.weatherHeader}>{props.forecast ? "It is currently.." : "It will be.."}</span>
}

var WeatherImage = (props) => {
	return <img src={weatherImgLinks[props.status+(props.day ? " Day" : " Night")]}/>
}

export default class WeatherContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temp: Math.floor(WeatherData.temp.toString()),
			metric: WeatherData.metric,
			status: getWeatherFromId(WeatherData.status),
			wind: WeatherData.wind,
			windDir: WeatherData.windDir,
			day: WeatherData.day
		}
	}
	render() {
		return (
			<Paper zDepth={1} className={Styles.weatherContainer}>
				<WeatherHeader forecast={true} />
				<WeatherImage status={this.state.status} day={this.state.day}/>
				<WeatherDisplay 
				temp={this.state.temp} 
				status={this.state.status} 
				wind={this.state.wind.toString() + " " + this.state.windDir}
				className={Styles.weatherDisplay}
				/>
			</Paper>
		)
	}
}