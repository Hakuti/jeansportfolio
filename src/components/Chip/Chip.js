import React, { Component } from 'react'

export default class Chip extends Component {

    state = {
        boxActive: false
    }

    boxActiveOrNot = e => {
        this.setState({
            boxActive: !this.state.boxActive
        })
    }
    render(){


        return(
           
                // <div onClick={this.boxActiveOrNot} class={`tagBox ${this.state.boxActive ? "tagBox-active": ""}`}>
                    <p onClick={this.boxActiveOrNot} className={`chipBox ${this.state.boxActive ? "chipBox-active": ""}`}>
                        {this.props.theme}
                    </p>
                
                //  </div>
                
                
        );
    }
}