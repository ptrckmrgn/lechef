import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FiEdit2 } from 'react-icons/fi';
import { FiSquare } from 'react-icons/fi';
import { FiCheckSquare } from 'react-icons/fi';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    ${'' /* justify-content: space-between; */}
    height: 56px;
    border-bottom: 1px #ddd solid;
`;
const Checkbox = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5em;
    padding: 8px 16px;
    color: ${props => props.checked ? '#aaa' : '#333'};
    -webkit-tap-highlight-color: transparent;
`;
const Text = styled.div`
    font-size: 1.1em;
    color: ${props => props.checked ? '#aaa' : '#333'};
    text-decoration: ${props => props.checked && "line-through"};
    white-space: pre;
`;
const Edit = styled.button`
    font-size: 1em;
    padding: 8px 16px;
    color: ${props => props.checked ? '#aaa' : '#aaa'};
    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
`;

const Item = props => {
    return (
        <Wrapper>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    id={props.id}
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.onChangeCheckbox}
                    style={{ display: "none" }}
                />
                <Checkbox htmlFor={props.id} checked={props.checked}>
                    {props.checked ? (
                        <FiCheckSquare />
                    ) : (
                        <FiSquare />
                    )}
                </Checkbox>
                <Text checked={props.checked}> {props.quantity}  {props.name}</Text>
            </div>
            <div>
                {!props.checked && (
                    <Edit onClick={props.onClickEdit} checked={props.checked} aria-label="item options">
                        <FiEdit2 />
                    </Edit>
                )}
            </div>
        </Wrapper>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChangeCheckbox: PropTypes.func.isRequired
};
export default Item;