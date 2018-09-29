import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from './List';
import HeaderMobile from '../components/HeaderMobile';
import Loader from '../components/Loader';

import {
    fetchItems,
    addItem,
    updateItem
} from '../actions/firebase';

class App extends Component {
    componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        if (!this.props.items) {
            return (
                <Loader fill="#FD746C" />
            );
        }
        else {
            return (
                <div id="app">
                    <HeaderMobile
                        onClickHamburger={() => console.log('hamburger')}
                        onClickEllipsis={() => console.log('ellipsis')}
                    />
                    <List
                        items={this.props.items}
                        addItem={this.props.addItem}
                        updateItem={this.props.updateItem}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        items: state.firebase.items
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchItems,
        addItem,
        updateItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);