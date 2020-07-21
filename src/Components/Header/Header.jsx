import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <header className="d-flex container">
                <div className="d-flex align-items-center main-title-wrapper">
                    <h1 className="h2">Star Wars</h1>
                </div>
                <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-monospace h5" href="#">
                                    Characters
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-monospace h5" href="#">
                                    Planets
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-monospace h5" href="#">
                                    Starships
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
