import React from 'react';
import { Card } from 'material-ui/Card';
import Styles from '../css/resultLayout.scss';
import Paper from 'material-ui/Paper';
import RecoDisplay from './recoDisplay.js';

class InfoCard extends React.Component {
	// Where the recommendation mannequin could be placed
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Card className={this.props.className} zDepth={1}>
				<span className={Styles.mainHeader}>{this.props.temp}</span>
				<div className={Styles.trending}>
					<RecoDisplay />
				</div>

			</Card>
		)
	}
}

// Going to combine the two weather components when actual data has to be displayed
class CurrentWeather extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={Styles.weatherContainer}>
				<img src={'http://i.imgur.com/um2zoar.png'} alt={"test"} className={Styles.weatherImage}/>
				<div className={Styles.weatherInfo}>
					<span className={Styles.temperature}>23°C</span>
					<span className={Styles.desc}>Cloudy</span>
					<span className={Styles.additionalInfo}>NW 24km/h</span>
				</div>
			</div>
		)
	}
}

class Forecast extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={Styles.weatherContainer}>
				<img src={'http://i.imgur.com/ljPoLSE.png'} alt={"test"} className={Styles.weatherImage}/>
				<div className={Styles.weatherInfo}>
					<span className={Styles.temperature}>14°C</span>
					<span className={Styles.desc}>Rainy</span>
					<span className={Styles.additionalInfo}>NW 13km/h</span>
				</div>
			</div>
		)
	}
}


// Still need to add some images to the list
class Recommendations extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: ["An Umbrella", "A Hat"]
		};
	}
	render() {
		let items = this.state.items.map((item) => {
			return <li className={Styles.recItem}>{item}</li>
		});
		return (
			<Paper className={Styles.sidebarContent}>
				<span className={Styles.recHeader}>You should bring...</span>
				<ul className={Styles.recList}> {items} </ul>
			</Paper>
		)
	}
}

export default class Result extends React.Component {
	render(){
		return (
			<div className={Styles.main}>
				<InfoCard className={Styles.rec} temp={"What's Trending..."} />
				<Paper className={Styles.sidebar} zDepth={2} rounded={false}>
					<Paper className={Styles.sidebarContent}>
						<span className={Styles.sidebarHeader}> It is currently... </span>
						<CurrentWeather />
					</Paper>
					<Paper className={Styles.sidebarContent}>
						<span className={Styles.sidebarHeader}> It will be... </span>
						<Forecast />
					</Paper>
					<Recommendations />
				</Paper>
			</div>
		)
	}
}