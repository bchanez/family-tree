import React, { Component } from 'react';
import Person from './tree/person/Person';

class App extends Component {
  render() {
    const persons = [];

    for (const data of this.props.datas) {
      persons.push(<Person identity={data} />);
    }

    return <div className="App">{persons}</div>;
  }
}

export default App;
