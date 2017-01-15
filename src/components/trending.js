import React from 'react';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';

const trendingStyle = {
	position: "relative",
	height: 100,
	width: 400
};
const itemStyle = {
	position: "absolute",
    margin: "auto auto auto 10px",
    top: 0,
    bottom: 0,
    height: 90,
    width: 90
};
const imageStyle = {
	display: "block",
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%"
}
/* what props.data should contain

this.props.data = {
	image: "http://i.imgur.com/q8BVEaM.png",
	data: [],
	link: "amazon.link.com"
}
*/
var ItemImage = (props) => {
	return (
		<Paper zDepth={1} circle={true} style={itemStyle}>
			<img src={this.props[image]} style={imageStyle}/>
		</Paper>
		)
};

export default class Trending extends Component {
	displayName: 'Trending';
	props: any;
	constructor(props) {
		super(props);
		this.state = {
      		open: false,
    	};
	}

  	handleTouchTap = (event) => {
    	// This prevents ghost click.
   		 event.preventDefault();

    	this.setState({
      		open: true,
     		anchorEl: event.currentTarget,
    	});
  	};

  	handleRequestClose = () => {
    	this.setState({
      	open: false,
    	});
  	};


	render() {
		return (
			<div>
			<Paper zDepth={1} style={trendingStyle}>
				<ItemImage onTouchTap={this.handleTouchTap} />
				<Popover
          		open={this.state.open}
          		anchorEl={this.state.anchorEl}
         		anchorOrigin: {"horizontal":"right","vertical":"top"}
				targetOrigin: {"horizontal":"left","vertical":"top"}
          		onRequestClose={this.handleRequestClose}
        		> 
        		//whatever we want to pop up here
        		</Popover>
			</Paper>
			</div>
			)
	}
}