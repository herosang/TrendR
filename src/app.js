import React from 'react';
import styles from './css/index.scss';
import RecoDisplay from './components/recoDisplay.js';


export default class App extends React.Component {
  
  displayName: 'App';
  props: any;
  constructor(props){
    super(props);
    this.state = { };
  }

  //display is just there for test
  render () {


    return (

      <div className = {styles.main}>
        <RecoDisplay />
      </div>
    );
  }
}
