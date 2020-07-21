import React, { Component } from "react";
import "./ListItem.css";
import SwapiService from "../Services/swapi";
import Loader from "../assets/Loader/Loader";

class ListItem extends Component {
    swapiService = new SwapiService();

    state = {
        itemList: null,
        isLoaded: false,
    };

    componentDidMount() {
        this.swapiService.getAllChars().then((itemList) => {
            this.setState({
                itemList,
            });
        });
        console.log("Залупа дид маунт");
    }

    renderItems = (arr) => {
        return arr.map((elem) => {
            return (
                <li
                    key={elem.id}
                    className="list-group-item item-list-link"
                    onClick={() => this.props.onItemSelected(elem.id)}
                >
                    {elem.name}
                </li>
            );
        });
    };

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Loader />;
        }

        return (
            <div className="row col-lg-6 col-md-6 list-item-wrapper">
                <ul class="list-group entity-list">
                    {this.renderItems(itemList)}
                </ul>
            </div>
        );
    }
}

export default ListItem;
