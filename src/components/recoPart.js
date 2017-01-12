import React from 'react';
import styles from "../css/recoPart.scss";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


export default class RecoPart extends React.Component {
  
  displayName: 'RecoPart';
  props: any;
  constructor(props){
    super(props);
    this.state = {height: 400};
  }

  render () {
    console.log(this.state.height*parseFloat(this.props.marginTop));

    const testStyle = {
      width: "200px",
      display: "flex",
      opacity: "0.4",
      position: "absolute",
      marginTop: this.state.height*parseFloat(this.props.marginTop)+"px",
      height: this.state.height*parseFloat(this.props.height)+"px",
      background: this.props.color,
    }


    return (
        <div style = {testStyle}>
        </div>
      
    );
  }
}
