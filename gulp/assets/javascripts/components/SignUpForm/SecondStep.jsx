import React from 'react';
import SelectAndPhone from './SelectAndPhone.jsx';

export default class SecondStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="form-sidebar">
        <button onClick={this.props.buttonClick} 
                className="btn btn-default btn-sm"><span className="fa fa-arrow-left"></span></button>
        <h1>Last Step!</h1>
        <p>Why are you requesting this report?</p>

       <SelectAndPhone  phone={this.props.phone}
                        selectValue={this.props.selectValue}
                        handleChange={this.props.handleChange} />

        <button onClick={this.props.onSubmit} className="btn btn-primary btn-lg">Submit</button>
      </div>
    )
  }

}