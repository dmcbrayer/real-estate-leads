import React from 'react';
import NameAndEmail from './NameAndEmail.jsx';

export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);

    this.validateEmail = this.validateEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleClick() {
    var emailValid = this.validateEmail(this.props.email);

    if(emailValid) {
      this.props.clearError();
      this.props.buttonClick();
    } else {
      this.props.handleError('Please enter a valid email address');
    }
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
          <button onClick={this.handleClick} className="btn btn-primary btn-xl">Send my report</button>
        </div>
      </div>
    )
  }

}