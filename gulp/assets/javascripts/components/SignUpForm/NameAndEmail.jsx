import React from 'react';

export default class NameAndEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="form-group">
        <input  type="text" 
                className="form-control"
                placeholder="Name" 
                value={this.props.name} 
                onChange={this.props.handleChange.bind(this, 'name')} />
        <br />
        <input  type="text"
                className="form-control" 
                placeholder="Email" 
                value={this.props.email} 
                onChange={this.props.handleChange.bind(this, 'email')}/>
      </div>
    )
  }

}