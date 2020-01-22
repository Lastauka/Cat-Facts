import React from "react";


export default class OurButton extends React.Component { 
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
     }
  
     click(e){
        // e.preventDefault();
        
        fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             text: this.props.data
            }),
          });


    }
  
    render(){
        return (
               <button onClick={this.click}>Send</button>
         )
    }
  }
