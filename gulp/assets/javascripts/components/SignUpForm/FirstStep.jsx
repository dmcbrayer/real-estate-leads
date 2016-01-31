import React from 'react';
import NameAndEmail from './NameAndEmail.jsx';

export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Got it!</h1>
        <h3>Where should we email your free report?</h3>

        <NameAndEmail name={this.props.name} 
                      email={this.props.email} 
                      handleChange={this.props.handleChange} />

        <button onClick={this.props.buttonClick}>Send my report</button>
      </div>
    )
  }

}