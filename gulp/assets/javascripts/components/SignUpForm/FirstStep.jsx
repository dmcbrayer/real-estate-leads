import React from 'react';
import NameAndEmail from './NameAndEmail.jsx';

export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="form-sidebar">
        <h1>Got it!</h1>
        <p>Where should we email your free report?</p>

        <NameAndEmail name={this.props.name} 
                      email={this.props.email} 
                      handleChange={this.props.handleChange} />

        <div className="text-center">
          <button onClick={this.props.buttonClick} className="btn btn-primary btn-xl">Send my report</button>
        </div>
      </div>
    )
  }

}