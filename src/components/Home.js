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
    background: "white",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 26,
    bottom: 0,
    textAlign: 'center'
  }