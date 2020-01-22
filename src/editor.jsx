import React from "react";
import OurButton from "./button.jsx"
export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {

    this.setState({ value: e.target.value });
    
  }

  render () {
    return (
      <div>
        
        <input onChange={this.handleChange}/>
        {/* <div>one more div</div> */}
        <OurButton data= {this.state.value}
        /> 
      </div>
    )
  }
}

