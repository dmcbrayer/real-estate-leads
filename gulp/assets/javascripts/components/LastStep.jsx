import React from 'react';

export default class LastStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Last Step!</h1>
        <h5>Why are you requesting this report?</h5>

        <select value={this.props.selectValue} 
                onChange={this.props.handleChange.bind(this, 'selectValue')}>
          <option value="A">I'm selling in 1-3 months</option>
          <option value="B">I'm selling in 3-6 months</option>
          <option value="C">I'm selling in 6-12 months</option>
          <option value="D">I'm just curious</option>
          <option value="E">I'm refinancing</option>
        </select>
        <br />
        <input type="tel" value={this.props.phone} onChange={this.props.handleChange.bind(this, 'phone')} />
        <br />


        <button onClick={this.props.buttonClick}>Go Back</button>
      </div>
    )
  }

}