import React, { Component } from 'react'
import Chip from './Chip/Chip';

export default class Themes extends Component {

  state = {
      initialItems: [
          "RnB", 
          "Hip-Hop",
          "Rock",
          "Metal",
          "Indie/Alternative",
          "Soul", "Rap", "EDM", "Funk", "Jazz", "Blues"
      ]
  }

  createSingleChip = (item) => {
      console.log(this.state.initialItems);
      return(
    <Chip theme={item}></Chip>
      );
  }

  createMultipleChips = () => this.state.initialItems.map(this.createSingleChip);

    render(){


        return(
            <div style={styles.fill}>
               <div className="themes-div">
               {this.createMultipleChips()}
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
    top: 26,
    bottom: 0,
    textAlign: 'center'
  }