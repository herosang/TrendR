import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

const PlaceholderCard = () => {
	<Card>
		<CardHeader
			title="hahahahhahaha"
			subtitle="lol"
			actAsExpander={true}
			showExpandableButton={true}
		/>
		<CardActions>
      <FlatButton label="A" />
      <FlatButton label="B" />
    </CardActions>
    <CardText expandable={true}>
      hi
    </CardText>
	</Card>
};

export default PlaceholderCard;