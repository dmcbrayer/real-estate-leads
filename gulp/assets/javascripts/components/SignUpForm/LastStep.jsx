import React from 'react';

export default class LastStep extends React.Component {
  constructor(props) {
    super(props);

    this.renderValue = this.renderValue.bind(this)
  }

  componentWillMount() {
    this.props.getValue();
  }

  renderValue() {
    if(this.props.value) {
      return <p>This property's value is { this.props.value }</p>

    } else {
      return <p>No value is listed for this property!</p>
    }
  }

  render() {
    return(
      <div className="form-sidebar">
        <h1>Success!</h1>

        <p>Your information will be sent to you shortly!</p>
        
        { this.renderValue() }
      </div>
    )
  }
}