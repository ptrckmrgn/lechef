import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconMinus from '../static/minus.svg';
import IconPlus from '../static/plus.svg';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    ${'' /* justify-content: space-between; */}
`;
const IconButton = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
`;
const Count = styled.div`
    min-width: 22px;
    font-size: 1.1em;
    text-align: center;
`;

const InputStepper = props => {
    return (
        <Wrapper>
            <IconButton onClick={props.onClickMinus}>
                <img src={IconMinus} />
            </IconButton>
            <Count>{props.value}</Count>
            <IconButton onClick={props.onClickPlus}>
                <img src={IconPlus} />
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