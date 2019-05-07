import React, { Component } from 'react'
import "./checkcard.css";
import arrayOfCheckedElements from "../AddAlcohol";

export default class CheckCard extends Component {
    constructor(props){
        super()
        this.props = props;
        this.state = {
            checked: this.props.isCurrentlyInSet ? true : false
            // randomValue: this.props.isCurrentlyInSet
        }
        // console.log(props);
    }

    


    checkAndUncheck = e => {
        const { handleCheckBoxChange, label } = this.props;

        if(this.state.checked) {
            this.setState({
                checked: false
            })
        } else {
            this.setState({
                checked: true
            })
        }
        // console.log(label);
        handleCheckBoxChange(label);
        
    }

    render(){
        // console.log(this.props)
        return(
            <React.Fragment>
                <div onClick={this.checkAndUncheck} className={`checkcard-div ${this.state.checked ? 'active-checkcard-div': ''}`}>
                {
                this.state.checked ?
                <i className="material-icons check-placement">check_circle</i> : ""
                }
                <div className="inner-checkcard">
                <img className="img-size" src="https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/641/images/674/PatronAnejo__37566__97112.1358534099.1280.1280.jpg?c=2"/>
                
                </div>

                <div className="inner-checkcard-text">
                <p className="fonts-1">Patrono</p>
                <br></br>
                <p className="fonts-2">Anejo</p>
                </div>

                </div>
            </React.Fragment>
        );
    }
}

