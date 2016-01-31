import React from 'react';

export default class SelectAndPhone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <select value={this.props.selectValue} 
                onChange={this.props.handleChange.bind(this, 'selectValue')}>
          <option value="A">I'm selling in 1-3 months</option>
          <option value="B">I'm selling in 3-6 months</option>
          <option value="C">I'm selling in 6-12 months</option>
          <option value="D">I'm just curious</option>
          <option value="E">I'm refinancing</option>
        </select>
        <br />
        <input type="tel" value={this.props.phone} 
                          onChange={this.props.handleChange.bind(this, 'phone')} 
                          placeholder="Phone (for verification only)"/>
        <br />
      </div>
    )
  }

}