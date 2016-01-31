import React from 'react';
import FirstStep from './FirstStep.jsx';
import LastStep from './LastStep.jsx';
import request from 'superagent';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      selectValue: 1,
      step: 1
    }

    this.advanceStep = this.advanceStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.renderStep = this.renderStep.bind(this);
  }

  advanceStep() {
    this.setState({
      step: 2
    });
  }

  previousStep() {
    this.setState({
      step: 1
    });
  }

  handleChange(name, event) {
    var change = {};
    change[name] = event.target.value;
    this.setState(change);
  }

  handleSubmit() {
    console.log("submit");
    var url = '/leads';
    
    var data = {
      lead: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        survey: this.state.selectValue,
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
        window.location = "/thanks";
      }
    });
  }

  renderStep() {
    switch(this.state.step) {
      case 1:
        return <FirstStep name={this.state.name} 
                          email={this.state.email} 
                          handleChange={this.handleChange}
                          buttonClick={this.advanceStep} />;
      case 2:
        return <LastStep  phone={this.state.phone}
                          selectValue={this.state.selectValue}
                          handleChange={this.handleChange}
                          buttonClick={this.previousStep}
                          onSubmit={this.handleSubmit} />;
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