import React, { Component } from 'react';
import Family from './tree/family/Family';

class App extends Component {
  render() {
    const membersFamily = this.props.datas.families[0];
    const persons = this.props.datas.persons;

    return (
      <div className="App">
        <Family members={membersFamily} persons={persons} />
      </div>
    );
  }
}

export default App;
