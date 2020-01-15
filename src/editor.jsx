import React from "react";

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    console.log(this.state.value);
    this.setState({ value: e.target.value });
    
  }

  render () {
    return (
      <div>
        <div>{this.state.value}</div>
        <input onChange={this.handleChange}/>
      </div>
    )
  }
}