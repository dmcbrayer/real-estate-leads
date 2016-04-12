import React from 'react';
import accounting from 'accounting';

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
      let moneyValue = accounting.formatMoney(this.props.value);
      return (
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Your home's value is { moneyValue }</h1>

            <h3>Additional information will be emailed to you shortly</h3>
          </div>
        </div>
      )

    } else {
      return <h1>No value is listed for this property!</h1>
    }
  }

  render() {
    return(
      <div className="form-sidebar">
        <h1>Your property has been found!</h1>
        
        { this.renderValue() }
      </div>
    )
  }
}