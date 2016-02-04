import React from 'react';

export default class LoadingStep extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    setTimeout(this.props.onLoaded, 2000);
    fbq('track', 'Lead');
  }

  render() {
    return(
      <div className="form-sidebar">
        <h1>Loading...</h1>
        <div className="loading-container">
          <span className="fa fa-spinner fa-spin"></span>
        </div>
      </div>
    )
  }
}