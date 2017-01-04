import React from 'react';
import styles from "../css/recoDisplay.scss";
import RecoPart from "./recoPart.js";
import RecoInfo from "./recoInfo.js";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class RecoDisplay extends React.Component {

  displayName: 'RecoDisplay';
  props: any;
  constructor(props){
    super(props);
    this.state = { };
  }


  generateColor(){
    return "rgb("+ (Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120))+")"
  }


  render () {


    return (
      <div className = {styles.allDisplay}>
        <div className = {styles.cardDisplay}>
        <div className = {styles.mainDisplay}>
          <div className  = {styles.recoMain}>
            <RecoPart color = {this.generateColor()} height = "0.18" marginTop = "0"/>
            <RecoPart color = {this.generateColor()} height = "0.32" marginTop = "0.18"/>
            <RecoPart color = {this.generateColor()} height = "0.35" marginTop = "0.50"/>
            <RecoPart color = {this.generateColor()} height = "0.15" marginTop = "0.85"/>

            <img src = "http://i.imgur.com/q8BVEaM.png"  className = {styles.image}/>

          </div>
        </div>
        </div>
        <div className = {styles.infoDisplay}>
          <RecoInfo height = "0.18" marginTop = "0"/>
          <RecoInfo height = "0.20" marginTop = "0.25"/>
          <RecoInfo height = "0.20" marginTop = "0.57"/>
          <RecoInfo height = "0.15" marginTop = "0.85"/>
        </div>
      </div>
    );
  }
}
