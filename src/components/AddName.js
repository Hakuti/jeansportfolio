import React, { Component } from 'react'
import { BrowserRouter as Router, Route,  Switch, Link, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ArrowKeysReact from 'arrow-keys-react';

export default class AddName extends Component {
    
    componentDidMount(){
        this.nameInput.focus();
      }
     
    render(){
        return(
            <div style={styles.fill}>
            
            <div style={{display: "flex", justifyContent: "center"}}>

            <div className="inputBox-Wrapper">
            <input className="inputBox" placeholder="Enter your party name" ref={(input) => { this.nameInput = input}}>
            </input>
            </div>

                {/* <input className="" ref={(input) => { this.nameInput = input}} >
                </input> */}
            </div>

            </div>
        );
    }
}

const styles = {}
styles.fill = {
    background: "white",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center'
  }

  styles.input = {
      width: "300px",

  }

//   styles.searchboxwrapper = {
//     marginTop: "1px !important",
//     width: "75%",
//     border: "3px solid #3F51B2",
//     borderRadius: "5px",
//     margin: "100px auto",
//     display: "flex",
//   }