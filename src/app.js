import React from 'react';
import styles from './css/index.scss';
import RecoDisplay from './components/recoDisplay.js';
import First from './components/first.js';
import Result from './components/result.js';

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
      <div /*className = {styles.main}*/>
        <Result />
      </div>
    );
  }
}
