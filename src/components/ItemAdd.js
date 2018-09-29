import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import InputText from './InputText';
import InputStepper from './InputStepper';

const Wrapper = styled.div`
    width: 100%;
    box-shadow: rgba(0,0,0,0.1) 0 1px 8px 0, rgba(253,116,108,0.08) 0 0 100px 40px;
`;
const WrapperInputs = styled.div`
    display: flex;
    padding: 8px 16px 8px 0;
    background: #fff;
`;
const WrapperButtons = styled.div`
    display: flex;
    border-top: 1px #ddd solid;
`;

const ItemAdd = props => {
    return (
        <Wrapper>
            <WrapperInputs>
                <InputStepper
                    value={props.quantity}
                    onClickMinus={props.onClickMinus}
                    onClickPlus={props.onClickPlus}
                />
                <InputText
                    style={{marginLeft: '8px'}}
                    value={props.name}
                    onChange={props.onChangeText}
                    innerRef={props.nameInputTextRef}
                />
            </WrapperInputs>
            <WrapperButtons>
                <Button wide style={{borderRight: '1px #ddd solid'}} onClick={props.onClickCancel}>Cancel</Button>
                <Button wide style={{borderRight: '1px #ddd solid'}} onClick={props.onClickAddAnother}>Add Another</Button>
                <Button primary wide onClick={props.onClickAdd}>Add</Button>
            </WrapperButtons>
        </Wrapper>
    );
}

ItemAdd.propTypes = {
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string,
    onClickMinus: PropTypes.func.isRequired,
    onClickPlus: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired,
    onClickAddAnother: PropTypes.func.isRequired
};
export default ItemAdd;