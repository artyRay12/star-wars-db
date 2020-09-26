import React, { Component } from "react";
import "./ListItem.css";
import Loader from "../assets/Loader/Loader";
import SwapiService from "../Services/swapi";
import ListItemContainer from "../hoc/with-data";

const ListItem = (props) => {
    const { itemList, onItemSelected, renderItem } = props;

    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item item-list-link"
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    };
    return (
        <div className="row col-lg-6 col-md-6 list-item-wrapper">
            <ul class="list-group entity-list">{renderItems(itemList)}</ul>
        </div>
    );
};

export default ListItem;
