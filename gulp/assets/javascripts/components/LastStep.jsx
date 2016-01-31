import React from 'react';

export default class LastStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Last Step</h1>

        <button onClick={this.props.buttonClick}>Go Back</button>
      </div>
    )
  }

}