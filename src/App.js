import React, {Component} from 'react';

import MenuHome from "./Page/MenuHome"

class App extends Component  {

  componentDidMount() {
    console.log("masuk..")
  }

  render() {
    return (
        <div>
          <MenuHome />
          <br/>
        </div>
    )
  }
}

export default App;
