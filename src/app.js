import React from 'react';
import styles from './css/index.scss';
import First from './components/first.js';
import Result from './components/result.js';
import WeatherContainer from './components/weatherContainer.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends React.Component {

  displayName: 'App';
  props: any;

  constructor(props){
    super(props);
    this.state = {value : 1, start: 0};
  }

	handleDropDownMenu = (event, index, value) => this.setState({value: value});

	start = (event) => this.setState({start : 1});

  getChildContext() {
    return {muiTheme: getMuiTheme()};
  };
  //display is just there for test
  render () {
    return (
      <div className = {styles.main}>
      <First currentLocation={this.state.value} handleChange={this.handleDropDownMenu} start={this.start}/>
      {/*<WeatherContainer />*/}
      </div>
    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
