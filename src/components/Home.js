import React, { Component } from 'react'

export default class Home extends Component {
    render(){
        return(
            <div style={styles.fill}>
                <h1>
                    Hello
                </h1>
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