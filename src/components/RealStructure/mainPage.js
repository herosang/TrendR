import React from 'react';
import { Link } from 'react-router';
import Card from 'material-ui/Card';
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
		return(
			<div>
				<Link to={'/'}><div style = {temp}></div></Link>
			</div>
		)
	}
}


