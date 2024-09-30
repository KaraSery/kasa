import React, { Component } from "react";
import "./App.css";

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
                <AppTitle/>
            </div>
        );
    }
}
export default App;