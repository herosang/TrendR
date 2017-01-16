import React from 'react';
import Landing from './RealStructure/landing.js';
import MainPage from './RealStructure/mainPage.js';

export default class Start extends React.Component{
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}
