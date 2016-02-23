import React from 'react';
import request from 'superagent';
import FirstStep from './SignUpForm/FirstStep.jsx';
import SecondStep from './SignUpForm/SecondStep.jsx';
import LoadingStep from './SignUpForm/LoadingStep.jsx';
import LastStep from './SignUpForm/LastStep.jsx';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lead: {},
      name: '',
      email: '',
      address: this.props.address,
      phone: '',
      selectValue: 1,
      step: 1,
      error: null,
    }

    this.advanceStep      = this.advanceStep.bind(this);
    this.clearError       = this.clearError.bind(this);
    this.handleChange     = this.handleChange.bind(this);
    this.handleError      = this.handleError.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.renderStep       = this.renderStep.bind(this);
    this.renderError      = this.renderError.bind(this);
    this.advanceAndSubmit = this.advanceAndSubmit.bind(this);
    this.sendEmail        = this.sendEmail.bind(this);
  }

  componentDidMount() {
    var url = '/leads';
    
    var data = {
      lead: {
        address: this.props.address
      }
    }

    request.post(url)
    .send(data)
    .end(function(err, res) {
      if(err) {
        console.log(err);
      } else {
        this.setState({lead: res.body});
      }
    }.bind(this));
  }

  advanceStep() {
    var step = this.state.step;
    step++;

    this.setState({
      step: step
    });
  }

  advanceAndSubmit() {
    this.advanceStep();
    this.handleSubmit();
  }

  clearError() {
    this.setState({error: null});
  }

  handleChange(name, event) {
    var change = {};
    change[name] = event.target.value;
    this.setState(change);
  }

  handleError(error) {
    var thing = error;

    this.setState({
      error: thing,
    });
  }

  handleSubmit() {
    var leadId = this.state.lead.id;
    var url = '/leads/' + leadId;

    var data = {
      lead: {
        address: this.state.lead.address,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        survey: this.state.selectValue,
      }
    };

    request.patch(url)
    .send(data)
    .end(function(err, res) {
      if(err) {
        console.log(err);
      } else {
        this.setState({lead: res.body});
      }
    }.bind(this));
  }

  sendEmail() {
    var leadId = this.state.lead.id;
    var url = '/leads/send_email'

    var data = {
      lead_id: leadId
    };

    request.post(url)
    .send(data)
    .end(function(err, res) {
      if(err) {
        console.log(err);
      } else {
        console.log("Email sent successfully");
      }
    });
  }

  renderError() {
    if(this.state.error !== null) {
      return <h3>{this.state.error}</h3>;
    }
  }

  renderStep() {
    switch(this.state.step) {
      case 1:
        return <FirstStep name={this.state.name} 
                          email={this.state.email} 
                          handleChange={this.handleChange}
                          handleError={this.handleError}
                          clearError={this.clearError}
                          buttonClick={this.advanceAndSubmit} />;
      case 2:
        return <SecondStep  phone={this.state.phone}
                            selectValue={this.state.selectValue}
                            handleChange={this.handleChange}
                            onSubmit={this.advanceAndSubmit} />;
      case 3:
        return <LoadingStep onLoaded={this.advanceStep}
                            sendEmail={this.sendEmail} />;
      case 4:
        return <LastStep />;
    }
  }

  render() {
    return(
      <div>
        { this.renderError() }
        { this.renderStep() }
      </div>
    )
  }
}