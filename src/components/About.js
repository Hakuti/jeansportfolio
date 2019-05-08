import React, { Component } from 'react'
import { BrowserRouter as Router, Route,  Switch, Link, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ArrowKeysReact from 'arrow-keys-react';
import AddName from './AddName';
import AddAlcohol from './AddAlcohol';
/*
Jean Github @Hakuti
This following file is the navigator between allowing a user to create a party
This file could apply in any case of just simply dealing with nested routes and going back and forth between them.
It was done for animation purposes and to play with moving between routes using a BACK BUTTON and FORWARD BUTTON

The 
*/

const Topic = ({ match }) => (

  <div style={styles.fill}>
    <h3>
        Content
      {/* {match.params.topicId} */}
      <form>
     <div className="input-field focus col s12">
     <input>
     </input>

     </div>
     </form>
    </h3>
  </div>
)

const routes = [
    'addname', 'addpartyname', 'addalcohol', 'randomroute'  
]
const maxPage = 4 - 1;

const boundaryPage = 0;

export default class About extends Component {
    
    constructor(props){
        super();
        this.props = props;
        this.state = {
            currentPage: 0
        }
        
        this.child = React.createRef();

    }


    componentDidMount() {
        // console.log(this.props);
        const { location } = this.props;
        console.log(location);
        if(location.pathname == "/About/addname"){
            this.setState({
                currentPage: 0
            })
        } 
        else if(location.pathname == "/About/addpartyname"){
            this.setState({
                currentPage: 1
            })
        } 
        else if(location.pathname == "/About/addalcohol"){
            this.setState({
                currentPage: 2
            })
        }
        else if(location.pathname == "/About/randomroute"){
            this.setState({
                currentPage: 3
            })
        } 
    }
    
    onRightArrowKeyPress = e => {
        console.log(e);
        console.log(e.key);
        // if(e.keyCode === 39 ){
        //     console.log("I'm here right arrow");
        // }
    }

    onLeftArrowKeyPress = e => {
        console.log(e);
         console.log(e.key)
        // if(e.keyCode === 37 ){
        //     console.log("I'm here left arrow");
        // }
    }

   

    onForwardClick = e => {
        //When the button is clicked check to see if possible to go forward
        e.preventDefault();
        // console.log(maxPage);

        const { location } = this.props
        console.log( location);
        // if((this.state.currentPage == 2) && (location.pathname == "/About/addalcohol")) {
        //     console.log("Here in inner function");
        //      this.child.current.ChildFunction();
        // }

        if(this.state.currentPage < maxPage){
            // console.log("Here")
            
            this.setState({
              currentPage: this.state.currentPage + 1
            })
            console.log(this.setState.currentPage);

           
        }

        // console.log(this.state.currentPage);

        
        console.log("From forward click")
    }


      

    onBackClick = e => {
        e.preventDefault();
        //If someone presses back button while on the last page
        const { location } = this.props;
        console.log(location.pathname);
        // if((location.pathname == "/About/addalcohol") && this.state.currentPage == 2) {
        //     console.log("Here in inner function");
        //      this.child.current.ChildFunction();
        // }


        //When the button is clicked check to see if possible to go backward
        if(this.state.currentPage > 0){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        console.log(this.state.currentPage);

        }
        console.log("From backclick")

    }

    saveItemsToStore = items => {
        // console.log(items)

    }

    render(props){
        // console.log(this.props);
        const { match } = this.props;
        // console.log(this.state.currentPage);
        /*
        Current Design Flaw
        My Design makes it so the only way I can get anything done is to pass a function that will go down a component level
        So when the next button is clicked
        save values to local storage

        saveItemsToStore = items => {
            itemsSaveToStorage(items: items);
        }
        */
        return(
            <React.Fragment>
                {/* <h1>
                    About
                   
                </h1> */}
                <Router>
                    <Route render={({location}) => (
                    <div style={styles.fill}>
                    <Route exact path="/about" render={() => (
                        <Redirect to="/about/addname"/>
                    )}/>
                    
                        {/* <p> {routes[this.state.currentPage]}</p> */}
                    <ul>
                    {/* <li><Link to={`${match.url}/${routes[this.state.currentPage]}`}></Link></li> */}
                    </ul>

                    {/*
                    Okay my current logic has the information out of sync with the routes array
                    */}

                    <h5 style={styles.titleHeader}>{location.pathname == "/About/addalcohol" ? "Select your Alcohol": "" }</h5>
                    <button className="button-directional" onClick={this.onBackClick} disabled={this.state.currentPage == 0 ? true : false}><Link to={`${match.url}/${routes[this.state.currentPage > boundaryPage ? this.state.currentPage - 1: boundaryPage]}`}><p className="button-arrows">{`<- `}</p><p>{`Prev`}</p></Link></button>
                    <div style={styles.liner}></div>
                    <button className="button-directional" onClick={this.onForwardClick} disabled={this.state.currentPage == maxPage ? true : false}><Link to={`${match.url}/${routes[ this.state.currentPage < maxPage ? this.state.currentPage + 1: maxPage]}`}><p>{`Next`}</p><p className="button-arrows">{` ->`}</p></Link></button>
                    {/* {console.log(this.state.currentPage)} */}
                    <div style={styles.content}>
                    <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    classNames="slide"
                    timeout={300}
                    >
                    <Switch location={location}>
                    <Route path='/about/addname' component={Topic}></Route>
                    <Route path={`/about/addpartyname`} component={AddName}></Route>
                    <Route path={`/about/addalcohol`} render={(props) => <AddAlcohol {...props} ref={this.child} saveItems={this.saveItemsToStore}/>}/>
                    <Route path={`/about/randomroute`} component={Topic}></Route>
                    </Switch>
                    </CSSTransition>
                    </TransitionGroup>
                    </div>
                    </div>
                    )}/>
                    
                </Router>

            </React.Fragment>

            
        );
    }
}
const styles = {}

styles.titleHeader = {
    
    color: "#50575F",
    fontFamily: "Roboto",
    fontWeight: "500"
}
styles.liner = {
    display: "inline-block",
    backgroundColor: "gray",
    width: "10px !important",
    height: "3px !important"
}
styles.fill = {
    marginTop: "15px",
    background: "",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center'
  }

  styles.content = {
      ...styles.fill,
      top: "80px",
    //   marginTop: "10px",
    // background: "blue",
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    // textAlign: 'center'
  }

