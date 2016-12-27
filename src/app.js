import React from 'react';

export default class App extends React.Component {
  
  displayName: 'App';
  props: any;
  constructor(props){
    super(props);
    this.state = { };
  }

  render () {

    console.log(this.state.position);

    return (

      <div>
        lel
      </div>
    );
  }
}
