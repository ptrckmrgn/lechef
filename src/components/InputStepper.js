import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
const IconButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.5em;
    color: #333;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    -webkit-tap-highlight-color: transparent;
`;
const Value = styled.div`
    min-width: 22px;
    font-size: 1.1em;
    text-align: center;
`;

const InputStepper = props => {
    return (
        <Wrapper>
            <IconButton onClick={props.onClickMinus} aria-label="reduce quantity by 1">
                <FiMinus />
            </IconButton>
            <Value>{props.value}</Value>
            <IconButton onClick={props.onClickPlus} aria-label="increase quantity by 1">
                <FiPlus />
            </IconButton>
        </Wrapper>
    );
}

InputStepper.propTypes = {
    onClickMinus: PropTypes.func.isRequired,
    onClickPlus: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};
export default InputStepper;