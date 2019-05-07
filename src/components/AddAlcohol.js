import React, { Component } from 'react'
import { BrowserRouter as Router, Route,  Switch, Link, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ArrowKeysReact from 'arrow-keys-react';
import CheckCard from './CheckCard/CheckCard';

/* 
This page contains the following UI
Title of Page
SearchBar
Previous Button, Next Button
CheckCard

Design consideration.
The searchbar must be able to refer to the content with said data
So the order of operations of goes as so:
A list with items within it
Render a CheckCard with said data in it
kinda like so

alcoholArray apply filter method
return the filtered array
map the data accordingly
filterArray.map(item => {
return(
    <CheckCard img="", brand="", flavor="">
)
})

at the point the checkcards are rendered with the information
This part can be done on its own to make it work
<------Begin the process of creation CheckCard----------->
So when you click on a CheckCard it has to activate a chain of events
Lets start with something easy.

Okay so I was able to add a checkmark that would activate if it was clicked.

*/

let randomItems = [
    "Hip-Hop",
    "Trap",
    "Heavy",
]



export default class AddAlcohol extends Component {
    
    state = {
        initialItems: [
            "Hip-Hop",
            "Trap",
            "Heavy",
            "Bird",
            "Red",
            "Friends",
            "More",
            "Testing",
            "Stuff",
            "MoreSt00f",
            "Ack","po",
            "poo"
            
        ],
        itemsState: []
    };

    componentDidMount(){
        // this.nameInput.focus();
        this.selectedBoxes = new Set();
        this.setState({itemsState: this.state.initialItems});
        let retrievedObject = localStorage.getItem('test');
        let ObjectParsed = JSON.parse(retrievedObject);
        for(let item of ObjectParsed){
            this.selectedBoxes.add(item);
        }
        // this.selectedBoxes.add(ObjectParsed);
        // retrievedObject = JSON.parse(retrievedObject);
        // console.log(retrievedObject[0]);
        // this.selectedBoxes.add(retrievedObject);
        console.log('retrieveObject: ', JSON.parse(retrievedObject));
      }

    componentWillUnmount(){
        console.log("Component will unmount");

        let myTempArray = Array.from(this.selectedBoxes);        
        // let testObject = {'one': 1, 'two': 2, 'three': 3};
        localStorage.setItem('test', JSON.stringify(myTempArray));
    }

    toggleCheckBox = label => {
        //This will simply add this item to the set
        if(this.selectedBoxes.has(label)) {
            this.selectedBoxes.delete(label)
        } else {
            this.selectedBoxes.add(label);
        }

        // console.log(this.selectedBoxes);
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        for(const checkbox of this.selectedBoxes){
            // console.log(checkbox, "is selected.");
        }
    }

    filterList = e => {

        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(items => {
            return items.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        })
        this.setState({itemsState: updatedList});
        

    }

    createSingleBox = label => {
        // console.log("Here");
        // console.log(`label: ${label}`)
        let valueToggled = false;
        if(this.selectedBoxes.has(label)){
            valueToggled = true;
            // console.log(valueToggled)
            // console.log("isToggled");
        }

        return(
            <div className="col s6 m4 l3 ">
            <CheckCard
                label={label}
                handleCheckBoxChange={this.toggleCheckBox}
                isCurrentlyInSet={valueToggled}
                key={label}

            ></CheckCard>
            </div>
        )
    };

   
    ChildFunction = () => {
        console.log("I'm a child function");
    }
    saveOurItemsToLocal = () => {
        const { saveItems } = this.props;
        saveItems(this.state.initialItems);
    }

    createMultipleBoxes = () => this.state.itemsState.map(this.createSingleBox);

    render(){
        // console.log(this.state.itemsState);
        this.saveOurItemsToLocal();
        return(
            <div style={styles.fill}>
            <div className="searchbox-wrapper">
            <input className="searchbox-alcohol" placeholder="Type an alcohol here" onChange={this.filterList}>
            </input>
            </div>
            <div className="row  outer-alcohol-list-div">
            {/*
            This component gets passed a prop called handleCheckBox change
            which brings allow a function called this.toggleCheckBox
            */}

            {this.createMultipleBoxes()}
          
        
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
      width: "100px",
  }

  styles.flexed = {
      display: "flex",
      justifyContent: "space-around"
  }