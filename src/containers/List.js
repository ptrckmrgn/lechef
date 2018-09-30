import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Button from '../components/Button';
import Item from '../components/Item';
import ItemAddEdit from '../components/ItemAddEdit';
import SectionTitle from '../components/SectionTitle';

const StyleItems = styled.div`
    padding: 60px 0 120px 0;
`;
const StyleFixedBottom = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
`;
const StyleCheckedHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px #ddd solid;
`;
const Link = styled.button`
    padding: 16px;
    font-weight: 800;
    color: #FF9068;
    text-transform: uppercase;
    font-size: 0.8em;
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
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.showEditItem = this.showEditItem.bind(this);
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

    showEditItem(item) {
        this.setState({
            isEditingItem: true,
            itemId: item.id,
            itemQuantity: item.quantity,
            itemName: item.name
        }, () => {
            this.nameInputTextRef.current.focus();
        });
    }

    hideAddEditItem() {
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
        this.hideAddEditItem();
    }

    onClickAdd() {
        this.props.addItem(this.state.itemQuantity, this.state.itemName);
        this.hideAddEditItem();
    }

    onClickAddAnother() {
        this.props.addItem(this.state.itemQuantity, this.state.itemName);
        this.showAddItem();
    }

    onClickUpdate() {
        this.props.updateItem(this.state.itemId, {
            quantity: this.state.itemQuantity,
            name: this.state.itemName
        });
        this.hideAddEditItem();
    }

    onChangeCheckbox(item) {
        this.props.updateItem(item.id, {checked: !item.checked});
    }

    deleteItems() {
        this.props.deleteItems(_.filter(this.props.items, { 'checked': true }));
    }

    displayItems(items, checked) {
        if (checked) {
            items = checked && _.chain(items).filter({ 'checked': true }).orderBy('updated_at', 'desc').value();
        }
        else {
            items = !checked && _.chain(items).filter({ 'checked': false }).orderBy('created_at', 'asc').value();
        }

        return _.map(items, item => {
            return (
                <Item
                    id={item.id}
                    key={item.id}
                    quantity={item.quantity}
                    name={item.name}
                    checked={item.checked}
                    onChangeCheckbox={() => this.onChangeCheckbox(item)}
                    onClickEdit={() => this.showEditItem(item)}
                />
            );
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
                    <StyleCheckedHeader>
                        <SectionTitle style={{ marginLeft: "16px" }}>Crossed off</SectionTitle>
                        <Link onClick={this.deleteItems.bind(this)}>Clear</Link>
                    </StyleCheckedHeader>
                    {this.displayItems(this.props.items, true)}
                </StyleItems>
                <StyleFixedBottom>
                    {(() => {
                        if (this.state.isAddingItem || this.state.isEditingItem)
                            return (
                                <ItemAddEdit
                                    isAddingItem={this.state.isAddingItem}
                                    isEditingItem={this.state.isEditingItem}
                                    quantity={this.state.itemQuantity}
                                    name={this.state.itemName}

                                    onClickMinus={this.onClickMinus.bind(this)}
                                    onClickPlus={this.onClickPlus.bind(this)}
                                    onChangeText={this.onChangeText.bind(this)}
                                    onClickCancel={this.onClickCancel.bind(this)}
                                    onClickAdd={this.onClickAdd.bind(this)}
                                    onClickAddAnother={this.onClickAddAnother.bind(this)}
                                    onClickUpdate={this.onClickUpdate.bind(this)}

                                    nameInputTextRef={this.nameInputTextRef}
                                />
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