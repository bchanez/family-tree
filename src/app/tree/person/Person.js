import React, { Component } from 'react';
import StringHelper from './../../helper/StringHelper';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    const identity = this.props.identity;

    this.firstName = identity.firstName === undefined ? '...' : StringHelper.capitalize(identity.firstName);
    this.lastName = identity.lastName === undefined ? '...' : StringHelper.capitalize(identity.lastName);
    this.birthName = identity.birthName === undefined ? '...' : StringHelper.capitalize(identity.birthName);
    this.birthDate = identity.birthDate || '...';
    this.deathDate = identity.deathDate || '...';
  }
  render() {
    return (
      <div className="Person">
        <div>
          <span>{this.firstName}</span>&nbsp;<span>{this.lastName}</span>&nbsp;<span>(né&nbsp;{this.birthName})</span>
        </div>
        <div>
          <span>{this.birthDate}</span>&nbsp;-&nbsp;<span>{this.deathDate}</span>
        </div>
      </div>
    );
  }
}

export default Person;
