import React from 'react';
import styles from "../css/RecoInfo.scss";
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70px",
      height: "30px",
      position: "absolute",
      marginTop: this.state.height*parseFloat(this.props.marginTop)+"px",
      marginLeft: "-75px",
    }

    const crossBackground = {
      background: "#A9A9A9",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "-30px",
    }

    return(
        <div style = {cardStyle}>
          <div className = {styles.line}></div>
          <div style = {crossBackground}>
            <div className = {styles.cross}></div>
          </div>
        </div>
      
    );
  }
}
