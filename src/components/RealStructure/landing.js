import React from 'react';
import { Link } from 'react-router';
import Card from 'material-ui/Card';
import Background from '../background.js';
export default class Landing extends React.Component{
	render(){
		const temp = {
			position: "fixed",
			height: "50px",
			width: "50px",
			left: "50%",
			top: "50%",
			background: "black",
		}
		return(
			<div>
				<Background />
				<Link to={'/main'}><div style = {temp}></div></Link>
			</div>
		)
	}
}


