import React from 'react';
import SelectAndPhone from './SelectAndPhone.jsx';

export default class LastStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Last Step!</h1>
        <h5>Why are you requesting this report?</h5>

       <SelectAndPhone  phone={this.props.phone}
                        selectValue={this.props.selectValue}
                        handleChange={this.props.handleChange} />

        <button onClick={this.props.buttonClick}>Go Back</button>
      </div>
    )
  }

}