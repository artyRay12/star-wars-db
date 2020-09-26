import ListItemContainer from "../hoc/with-data";
import SwapiService from "../Services/swapi";
import React from "react";
import ListItem from "../Item-list/ListItem";

const { getAllChars, getAllStarships, getAllPlanets } = new SwapiService();


export const PersonList = ListItemContainer(getAllChars);
export const PlanetList = ListItemContainer(getAllPlanets);
export const StarshipsList = ListItemContainer(getAllStarships);
