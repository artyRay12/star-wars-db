import React, { Component } from 'react';
import Loader from '../assets/Loader/Loader';
import ListItem from '../Item-list/ListItem';

const ListItemContainer = (getData, Component = ListItem,) => {
    return class extends React.Component {
        state = {
            itemList: null,
            isLoaded: false,
        };

        componentDidMount() {
            getData().then((itemList) => {
                this.setState({
                    itemList,
                });
            });
            console.log("Залупа дид маунт");
        }

        render() {
            const { itemList } = this.state;

            if (!itemList) {
                return <Loader />;
            }

            return <Component {...this.props} itemList={itemList} />;
        }
    };
};

export default ListItemContainer;