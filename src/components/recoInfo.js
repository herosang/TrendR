import React from 'react';
import styles from "../css/recoPart.scss";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


export default class RecoPart extends React.Component {
  
  displayName: 'RecoInfo';
  props: any;
  constructor(props){
    super(props);
    this.state = {height: 400};
  }

  render () {
    console.log(this.state.height*parseFloat(this.props.marginTop));

    const cardStyle = {
      width: "100px",
      opacity: "1",
      position: "absolute",
      marginTop: this.state.height*parseFloat(this.props.marginTop)+"px",
      height: this.state.height*parseFloat(this.props.height)+"px",
      marginLeft: "-25px",
      boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
    }

    return (
        <div style = {cardStyle}>
        </div>
      
    );
  }
}
