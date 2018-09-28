import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import InputText from './InputText';
import InputStepper from './InputStepper';

const Wrapper = styled.div`
    max-width: 375px;
    box-shadow: rgba(0,0,0,0.1) 0 1px 8px 0, rgba(253,116,108,0.08) 0 0 100px 40px;
`;
const WrapperInputs = styled.div`
    display: flex;
    padding: 8px 16px 8px 4px;
`;
const WrapperButtons = styled.div`
    display: flex;
    border-top: 1px #ddd solid;
`;

const ItemEdit = props => {
    return (
        <Wrapper>
            <WrapperInputs>
                <InputStepper
                    value={props.stepperValue}
                    onClickMinus={props.onClickMinus}
                    onClickPlus={props.onClickPlus}
                />
                <InputText
                    style={{marginLeft: '8px'}}
                    value={props.textValue}
                    onChange={props.onChangeText}
                />
            </WrapperInputs>
            <WrapperButtons>
                <Button wide style={{borderRight: '1px #ddd solid'}} onClick={props.onClickCancel}>Cancel</Button>
                <Button primary wide onClick={props.onClickUpdate}>Update</Button>
            </WrapperButtons>
        </Wrapper>
    );
}

ItemEdit.propTypes = {
    stepperValue: PropTypes.number.isRequired,
    onClickMinus: PropTypes.func.isRequired,
    onClickPlus: PropTypes.func.isRequired,
    textValue: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
    onClickUpdate: PropTypes.func.isRequired
};
export default ItemEdit;