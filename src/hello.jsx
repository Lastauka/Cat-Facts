import React from "react";
import ReactDOM from "react-dom";
import Editor from './editor.jsx';

export class App extends React.Component { 

     constructor() {
        super();
        this.state = {
            contacts: []
        };
      }      
      componentDidMount() {
            console.log('we mounted')
            fetch("http://localhost:3000/messages")
              .then(res => res.json())
              .then(json => {
                  console.log(json)
                  this.setState({ contacts: json })});
         }
    render(){
        return (
            <div>
            Hello,{
                this.state.contacts.map(el => <div>{el.text}</div>)
                }
            <Editor/>
            </div>
        )
    }

 }
const view = <App />;

const element = document.getElementById("app");
ReactDOM.render(view, element);


//
