import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Random from "./Components/Random/Random";
import ListItem from "./Components/Item-list/ListItem";
import Person from "./Components/Person/Person";

export default class App extends Component {
    
    state = {
        selectedItem: null,        
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }


    render() {
        console.log('render APP')
        return (
            <div className="App container">
                <Header />
                <Random />
                <div className="container d-flex content justify-content-between">
                    <ListItem onItemSelected={this.onItemSelected}/>
                    <Person currentItem={this.state.selectedItem}/>
                </div>
            </div>
        );
    }
}
