import React from 'react';
import styles from './css/index.scss';
import First from './components/first.js';
import Result from './components/result.js';
import WeatherContainer from './components/weatherContainer.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Landing from './Components/RealStructure/landing.js';
import Start from './Components/start.js';
import MainPage from './Components/RealStructure/mainPage.js';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'

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
      <Router history={browserHistory}>
           <Route path="/" component={Start}>
             <IndexRoute component={Landing} />
             <Route path="main" component={MainPage}/>
           </Route>
       </Router>
    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
