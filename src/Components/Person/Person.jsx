import React, { Component } from "react";
import "./Person.css";
import SwapiService from "../Services/swapi";
import Loader from "../assets/Loader/Loader";

export default class Person extends Component {
    swapi = new SwapiService();

    state = {
        itemInfo: null,
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentItem !== prevProps.currentItem)
            this.updatePerson();
    }

    updatePerson() {
        const { currentItem } = this.props;
        if (!currentItem) return;

        this.swapi.getChar(this.props.currentItem).then((itemInfo) => {
            this.setState({
                itemInfo,
            });
        });
    }

    render() {
        if (!this.props.currentItem)
            return <span>Выбери блядского персонажа даун</span>;

        if (!this.state.itemInfo) return <Loader />;

        return (
            <div className="row col-lg-6 col-md-6 d-flex person-content">
                <div className="person-image-wrapper col-lg-6">
                    <img
                        src="https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914"
                        alt=""
                        className="person-image"
                    />
                </div>
                <div className="person-info col">
                    <ul className="list-group">
                        <li className="list-group-item">
                            {this.state.itemInfo.name}
                        </li>
                        <li className="list-group-item"></li>
                        <li className="list-group-item"></li>
                    </ul>
                </div>
            </div>
        );
    }
}
