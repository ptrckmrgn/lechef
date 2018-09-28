import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../components/List';
import Loader from '../components/Loader';

import {
    fetchItems
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
                    <List items={this.props.items}/>
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
        fetchItems
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);