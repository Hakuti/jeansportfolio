import React, { Component } from 'react';
import Home from "./components/Home";
import About from "./components/About";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,  Switch, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// const Topic = ({match}) => (
//   <div style={{position: "absolute"}}>
//     <h3>
//       {match.params.topicId}
//     </h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//     <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
//     <li><Link to={`${match.url}/components`}>Components</Link></li>
//     <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
//     </ul>

//     <Route path='/topics/:topicId' component={Topic}></Route>
//     <Route exact path={match.url} render={()=> (
//       <h3> Please select a topic </h3>
//     )}/>

//   </div>
// )


class App extends Component {
  render(){
  return (
<Router>  
<Route render={({location}) => (
 <div style={styles.fill}>
    

  <nav>
    <div className="nav-wrapper blue">
      <a className="brand-logo"><Link to="/About">Create</Link></a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">Create</Link></li>
        {/* <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li> */}
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    {/* <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li> */}
  </ul>
   {/* <ul style={styles.nav}>
   <li style={styles.navItem}><Link to="/">Home</Link></li>
   <li style={styles.navItem}><Link to="/About">About</Link></li>
  </ul>

  <ul class="sidenav">
  <li>Test</li>
  </ul> */}


  <div style={styles.content}> 
  <TransitionGroup>
    <CSSTransition
    key={location.key}
    classNames="opacity"
    timeout={300}
    >
    <Switch location={location}>
    <Route exact path='/' component={Home} />
    <Route path='/About' component={About} />
    </Switch>
    </CSSTransition>
  </TransitionGroup>

 </div>
  
</div>
)}/>

</Router>
  );
  }
}

const styles = {}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  borderBottom: "1px solid lightgray",
  top: 0,
  height: '50px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}
styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: "40px"
}
export default App;
