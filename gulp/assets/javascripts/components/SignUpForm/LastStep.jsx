import React from 'react';

export default class LastStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="form-sidebar">
        <h1>Success!</h1>

        <p>Your information will be sent to you shortly!</p>
      </div>
    )
  }
}