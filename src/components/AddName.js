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
            
                <input style={styles.input} ref={(input) => { this.nameInput = input}} >
                </input>
            </div>
        );
    }
}

const styles = {}
styles.fill = {
    background: "red",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center'
  }

  styles.input = {
      width: "100px",
  }