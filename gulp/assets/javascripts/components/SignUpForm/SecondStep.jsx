import React from 'react';
import SelectAndPhone from './SelectAndPhone.jsx';

export default class SecondStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="form-sidebar">
        <h1>Last Step!</h1>
        <p>Why are you requesting this report?</p>

       <SelectAndPhone  phone={this.props.phone}
                        selectValue={this.props.selectValue}
                        handleChange={this.props.handleChange} />

        <div className="text-center">
          <button onClick={this.props.onSubmit} className="btn btn-primary btn-xl">Submit</button>
        </div>
      </div>
    )
  }

}