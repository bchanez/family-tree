import React, { Component } from 'react';
import Person from './../person/Person';
import './Family.css';

class Family extends Component {
  constructor(props) {
    super(props);

    this.wife = this.props.persons.find((person) => {
      return person.id === this.props.members.wife;
    });
    this.husband = this.props.persons.find((person) => {
      return person.id === this.props.members.husband;
    });
    this.children = this.props.persons.filter((person) => {
      return this.props.members.children.includes(person.id);
    });
  }
  render() {
    var wife = this.wife ? <Person identity={this.wife.identity} /> : null;
    var husband = this.husband ? <Person identity={this.husband.identity} /> : null;
    var children = [];
    if (this.children) {
      for (const child of this.children) {
        children.push(<Person key={child.id} identity={child.identity} />);
      }
    }

    return (
      <div className="Family">
        <div class="generation">
          {wife}
          {husband}
        </div>
        <div class="generation">{children}</div>
      </div>
    );
  }
}

export default Family;
