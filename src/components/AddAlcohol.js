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

let alcoholItems = [
    {id: "1", title: "Patron", subset: "Anejo", img: "https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/641/images/674/PatronAnejo__37566__97112.1358534099.1280.1280.jpg?c=2"}
    ,{id: "2", title: "Ciroc", subset: "Apple", img: "https://www.lcbo.com/content/dam/lcbo/products/481614.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"},
    {id: "3", title: "Ciroc", subset: "Moschino", img: "https://img.thewhiskyexchange.com/900/vodka_cir27.jpg"}, {
        id: "4", title: "Ciroc", subset: "Black Raspberry", img: "https://cdn.shopify.com/s/files/1/0013/2477/7569/products/ciroc-black-raspberry_v2_large.jpg?v=1542766635"
    },
    {id: "5", title: "Bacardi", subset: "Major Lazer", img: "https://cdn11.bigcommerce.com/s-e6b77/images/stencil/1280x1280/products/20574/20985/bacardi-limited-edition-major-lazer-rum__94416.1503926050.jpg?c=2"}, 
    {
       id: "6", title: "Bacardi", subset: "Dragonberry", img: "https://www.totalwine.com/media/sys_master/twmmedia/h6a/h30/9977673711646.png"}
]

//This is the hack version of making this work
let convertToArray = () => {
    let alcoholDict = alcoholItems;
    // let initialItems = [];
    // for(let item of alcoholItems){
    //     initialItems.push(item.title) 
    // }

    return alcoholItems;
    
}




export default class AddAlcohol extends Component {
    
    state = {
        // initialItems: [
        //     "Hip-Hop",
        //     "Trap",
        //     "Heavy",
        //     "Bird",
        //     "Red",
        //     "Friends",
        //     "More",
        //     "Testing",
        //     "Stuff",
        //     "MoreSt00f",
        //     "Ack","po",
        //     "poo"
            
        // ]
        initialItems: convertToArray()
        ,
        itemsState: []
    };

    



    componentDidMount(){
        // this.nameInput.focus();
        this.selectedBoxes = new Set();
        this.setState({itemsState: this.state.initialItems});

        if(localStorage.getItem('test')){
        let retrievedObject = localStorage.getItem('test');
        let ObjectParsed = JSON.parse(retrievedObject);
        for(let item of ObjectParsed){
            this.selectedBoxes.add(item);
        }
        }
        
        // this.selectedBoxes.add(ObjectParsed);
        // retrievedObject = JSON.parse(retrievedObject);
        // console.log(retrievedObject[0]);
        // this.selectedBoxes.add(retrievedObject);
        // console.log('retrieveObject: ', JSON.parse(retrievedObject));
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

        console.log(this.selectedBoxes);
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
            return items.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        })
        this.setState({itemsState: updatedList});
        

    }

    createSingleBox = label => {
        // console.log("Here");
        // console.log(`label: ${label}`)
        let valueToggled = false;
        if(this.selectedBoxes.has(label.id)){
            valueToggled = true;
            // console.log(valueToggled)
            // console.log("isToggled");
        }
        console.log(label);

        return(
            <div className="col s6 m4 l3 ">
            
            <CheckCard
                label={label.id}
                handleCheckBoxChange={this.toggleCheckBox}
                isCurrentlyInSet={valueToggled}
                key={label.id}
                title={label.title}
                subset={label.subset}
                Img={label.img}

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
            <div className="row outer-alcohol-list-div">
            {/* <div className="inner-alcohol-list-div"> */}
            {/*
            This component gets passed a prop called handleCheckBox change
            which brings allow a function called this.toggleCheckBox
            */}

            {this.createMultipleBoxes()}
            {/* </div> */}
          
        
            </div>

          

            </div>
        );
    }
}

const styles = {}
styles.fill = {
    background: "",
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