
//Update the App.js by removing the state related information, and make use of the Main component to render the UI:

import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;

/*import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}


export default App; */
