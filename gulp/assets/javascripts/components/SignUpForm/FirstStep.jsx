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
        <p>Where should we email your free report?</p>

        <NameAndEmail name={this.props.name} 
                      email={this.props.email} 
                      handleChange={this.props.handleChange} />

        <button onClick={this.props.buttonClick} className="btn btn-primary">Send my report</button>
      </div>
    )
  }

}