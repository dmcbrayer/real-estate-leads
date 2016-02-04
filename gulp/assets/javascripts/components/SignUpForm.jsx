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
      step: 1
    }

    this.advanceStep      = this.advanceStep.bind(this);
    this.handleChange     = this.handleChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.previousStep     = this.previousStep.bind(this);
    this.renderStep       = this.renderStep.bind(this);
    this.advanceAndSubmit = this.advanceAndSubmit.bind(this);
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
      console.log(res);
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

  previousStep() {
    var step = this.state.step;
    step--;

    this.setState({
      step: step
    });
  }

  handleChange(name, event) {
    var change = {};
    change[name] = event.target.value;
    this.setState(change);
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
      console.log(res);
      if(err) {
        console.log(err);
      } else {
        this.setState({lead: res.body});
      }
    }.bind(this));
  }

  renderStep() {
    switch(this.state.step) {
      case 1:
        return <FirstStep name={this.state.name} 
                          email={this.state.email} 
                          handleChange={this.handleChange}
                          buttonClick={this.advanceAndSubmit} />;
      case 2:
        return <SecondStep  phone={this.state.phone}
                            selectValue={this.state.selectValue}
                            handleChange={this.handleChange}
                            buttonClick={this.previousStep}
                            onSubmit={this.advanceAndSubmit} />;
      case 3:
        return <LoadingStep onLoaded={this.advanceStep} />;
      case 4:
        return <LastStep />;
    }
  }

  render() {
    return(
      <div>
        { this.renderStep() }
      </div>
    )
  }
}