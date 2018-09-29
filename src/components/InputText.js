import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
    outline: none;
    font-size: 1.1em;
    height: 40px;
    padding: 0 8px;
    border: 1px solid;
    border-color: #aaa;
    border-radius: 2px;
    width: calc(100% - 18px); ${'' /* minus padding and border */}
    &:focus {
        border-color: #FD746C;
    }
`;

const InputText = props => {
    return (
        <Input
            type="text"
            autoCapitalize="none"
            style={props.style}
            value={props.value}
            onChange={props.onChange}
            innerRef={props.innerRef}
        />
    );
}

InputText.propTypes = {
    style: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
export default InputText;