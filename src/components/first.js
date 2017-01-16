import React from 'react';
import styles from '../css/first.scss';
import Background from './background.js';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Trending from './trending.js';

injectTapEventPlugin();

const materialStyle ={
	ddm: {
		textAlign: 'center',
		justifyContent: 'center',
		width: 200,
		},
	paper: {
				height: 200,
				width: 200,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
	}
}	


export default class First extends React.Component{

	constructor(props){
		super(props);
	}
	
	render(){
		return(
		<div className={styles.container}>
			<div className={styles.overlayBox}>
				<Paper zDepth={2} style={materialStyle.paper}>
				<br />
				<br />
					Select A Location.
					<DropDownMenu style={materialStyle.ddm} value={this.props.currentLocation} onChange={this.props.handleChange} autoWidth={false}>
						<MenuItem value={1} primaryText="Toronto" />
						<MenuItem value={2} primaryText="New York City" />
						<MenuItem value={3} primaryText="London" />
						<MenuItem value={4} primaryText="Tokyo" />
					</DropDownMenu>

					<RaisedButton label="start" onClick={this.props.start}/>
				</Paper>
			</div>
			<div className={styles.background}>
				<Background />
			</div>
			</div>
		)
	}
}
