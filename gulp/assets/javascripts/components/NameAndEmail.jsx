import React from 'react';

export default class NameAndEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <input type="text" placeholder="name" value={this.props.name} onChange={this.props.handleChange.bind(this, 'name')} />
        <input type="text" placeholder="email" value={this.props.email} onChange={this.props.handleChange.bind(this, 'email')}/>

      </div>
    )
  }

}