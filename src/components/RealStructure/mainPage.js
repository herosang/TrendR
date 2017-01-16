import React from 'react';
import { Link } from 'react-router';
import Card from 'material-ui/Card';
import Trending from '../trending.js';
export default class MainPage extends React.Component{
	render(){
		
		const temp = {
			position: "fixed",
			height: "50px",
			width: "50px",
			left: "50%",
			top: "50%",
			background: "black",
		}

		//code with jeff's stuff
		const data = {
			image: "http://i.imgur.com/q8BVEaM.png",
			data: {labels: ['jan','feb'] ,
					sales: [1, 2]},
			link: "google.com"
		}
		return(
			<div>
				<Trending data={data} /> //code with jeff's stuff
				<Trending data={data} />
				<Link to={'/'}><div style = {temp}></div></Link>
			</div>
		)
	}
}


