import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px #ddd solid;
    margin-top: -1px; ${'' /* bottom border */}
`;
const Checkbox = styled.input`
    display: none;
    &:checked + ${Icon}:before {
        content: "\f14a";
    }
`;
const Icon = styled.label`
    cursor: pointer;
    font-size: 1.2em;
    color: ${props => props.checked ? '#aaa' : '#333'};
    &:before {
        font-family: 'Font Awesome 5 Free';
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        content: "\f0c8";
    }
`;
const Text = styled.span`
    font-size: 1.1em;
    padding: 0 2px;
    color: ${props => props.checked ? '#aaa' : '#333'};
    background-image: ${props => props.checked ? (
        "linear-gradient(to bottom, transparent, transparent 55%, #FD746C 55%, #FD746C 65%, transparent 65%)"
    ):(
        "none"
    )};
`;

const uniqueId = "item-" + _.random(99999999);

const Item = props => {
    return (
        <Wrapper>
            <Checkbox
                id={props.id}
                type="checkbox"
                checked={props.checked}
                onChange={props.onChangeCheckbox}
            />
            <Icon htmlFor={props.id} checked={props.checked}></Icon>
            <span style={{paddingRight: '8px'}}>
                <Text checked={props.checked}>{props.quantity}</Text>
            </span>
            <span>
                <Text checked={props.checked}>{props.value}</Text>
            </span>
        </Wrapper>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChangeCheckbox: PropTypes.func.isRequired
};
export default Item;