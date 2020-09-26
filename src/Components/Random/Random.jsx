import React, { Component } from "react";
import "./Random.css";
import SwapiService from "../Services/swapi";
import Loader from "../assets/Loader/Loader";

export default class Random extends Component {
    swapi = new SwapiService();
    
    state = {
        planet: {},
        isLoaded: false,
    };


    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(() => this.updatePlanet(), 5000);
        console.log("Component did mount");
    }


    onPlanetLoaded = (planet) => {
        this.setState({ planet, isLoaded: true });
    };

    updatePlanet() {
        const planetId = Math.floor(Math.random() * 25 + 2);
        this.swapi.getPlanet(planetId).then(this.onPlanetLoaded);
    }

    render() {
        const {
            planet: { id, planetName, population, rotationPeriod, diameter },
            isLoaded,
        } = this.state;

        if (!isLoaded) return <Loader />;

        return (
            <div className="container random-wrapper">
                <div className="row">
                    <div className="image-wrapper col-md-5">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                            alt=""
                            className="image"
                        />
                    </div>
                    <div class="random-description-wrapper">
                        <h2 className="text-left">{planetName}</h2>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-left">
                                {population}
                            </li>
                            <li class="list-group-item text-left">
                                {rotationPeriod}
                            </li>
                            <li class="list-group-item text-left">
                                {diameter}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
