import React from 'react';

export default class LoadingStep extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    setTimeout(this.props.onLoaded, 2000);
  }

  render() {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}