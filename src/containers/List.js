import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Button from '../components/Button';
import Item from '../components/Item';
import ItemAdd from '../components/ItemAdd';
import SectionTitle from '../components/SectionTitle';

const StyleItems = styled.div`
    padding: 60px 0 120px 0;
`;
const StyleFixedBottom = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
`;

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddingItem: false,
            isEditingItem: false,
            itemQuantity: 1,
            itemName: ''
        }

        this.nameInputTextRef = React.createRef();
    }

    showAddItem() {
        this.setState({
            isAddingItem: true,
            itemQuantity: 1,
            itemName: ''
        }, () => {
            this.nameInputTextRef.current.focus();
        });
    }

    hideAddItem() {
        this.setState({ isAddingItem: false, isEditingItem: false });
    }

    onClickMinus() {
        this.setState({
            itemQuantity: _.max([this.state.itemQuantity - 1, 1])
        }, () => {
            this.nameInputTextRef.current.focus();
        });
    }

    onClickPlus() {
        this.setState({
            itemQuantity: this.state.itemQuantity + 1
        }, () => {
            this.nameInputTextRef.current.focus();
        });
    }

    onChangeText(event) {
        this.setState({ itemName: event.target.value });
    }

    onClickCancel() {
        this.hideAddItem();
    }

    onClickAdd() {
        this.props.addItem(this.state.itemQuantity, this.state.itemName);
        this.hideAddItem();
    }

    onClickAddAnother() {
        this.props.addItem(this.state.itemQuantity, this.state.itemName);
        this.showAddItem();
    }

    onChangeCheckbox() {
        console.log('checkbox changed');
    }

    onClickUpdate() {
        console.log('update');
    }

    displayItems(items, checked) {
        return _.map(items, (item, id) => {
            if (item.checked === checked) {
                return (<Item
                    id={id}
                    key={id}
                    quantity={item.quantity}
                    name={item.name}
                    checked={item.checked}
                    onChangeCheckbox={this.onChangeCheckbox.bind(this)}
                />);
            }
        });
    }

    inputSetter(ref) {
        this.setState({ inputElement: ref });
    }

    render() {
        return (
            <div>
                <StyleItems>
                    {this.displayItems(this.props.items, false)}
                    <SectionTitle>Crossed off</SectionTitle>
                    {this.displayItems(this.props.items, true)}
                </StyleItems>
                <StyleFixedBottom>
                    {(() => {
                        if (this.state.isAddingItem)
                            return (
                                <ItemAdd
                                    quantity={this.state.itemQuantity}
                                    name={this.state.itemName}

                                    onClickMinus={this.onClickMinus.bind(this)}
                                    onClickPlus={this.onClickPlus.bind(this)}
                                    onChangeText={this.onChangeText.bind(this)}
                                    onClickCancel={this.onClickCancel.bind(this)}
                                    onClickAdd={this.onClickAdd.bind(this)}
                                    onClickAddAnother={this.onClickAddAnother.bind(this)}

                                    nameInputTextRef={this.nameInputTextRef}
                                />
                            );
                        else if (this.state.isEditingItem)
                            return (
                                <div />
                            );
                        else
                            return (
                                <Button
                                    primary large wide
                                    style={{ boxShadow: "rgba(0,0,0,0.1) 0 -1px 8px 0" }}
                                    onClick={this.showAddItem.bind(this)}
                                >Add item</Button>
                            );
                    })()}
                </StyleFixedBottom>
            </div>
        );
    }
}

List.propTypes = {
    items: PropTypes.object
};
List.defaultProps = {
};
export default List;