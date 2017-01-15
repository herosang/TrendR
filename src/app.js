import React from 'react';
import styles from './css/index.scss';
import RecoDisplay from './components/recoDisplay.js';
import First from './components/first.js';
import Result from './components/result.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends React.Component {

  displayName: 'App';
  props: any;

  constructor(props){
    super(props);
    this.state = { };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme()};
  };

  //display is just there for test
  render () {
    return (
      <div /**className = {styles.main}**/>
        <Result />
      </div>
    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};