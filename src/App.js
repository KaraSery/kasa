import React, { Component } from "react";
import "./App.scss";

class AppTitle extends Component {
    render() {
        return(
            <h1>Hello World!</h1>
        )
    }
}
class App extends Component{
    render(){
        return(
            <div className="App">
                <h1>Hello World!</h1>
                <AppTitle/>
            </div>
        );
    }
}

export default App;