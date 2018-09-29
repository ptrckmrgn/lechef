import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    outline: none;
    border: none;
    color: ${props => props.primary ? '#fff' : '#666'};
    ${'' /* height: ${props => props.large ? '56px' : '48px'}; */}
    height: 48px;
    font-size: ${props => props.large ? '1.2em' : '0.9em'};
    width: ${props => props.wide ? '100%' : 'auto'};
    padding: ${props => props.wide ? '0' : '0 32px'};
    font-weight: 800;
    background: transparent;
`;
const BackgroundPrimary = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 800%;
    z-index: -1;
    background: #FD746C;
    background-image: linear-gradient(20deg, #4BC0C8 0%, #C779D0 30%, #FF9068 70%, #FD746C 100%);
    transition: all 0.2s ease-in-out 0s;
    transform: translateY(0%);
    ${Wrapper}:hover & {
        transform: translateY(-87.5%); // 100% - (100% / height%)
    }
    ${Wrapper}:focus & {
        transform: translateY(-87.5%); // 100% - (100% / height%)
    }
`;
const BackgroundSecondary = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.2s ease-in-out 0s;
    background: #fff;
    ${Wrapper}:hover & {
        background: #eee;
    }
    ${Wrapper}:focus & {
        background: #eee;
    }
`;

const Button = props => {
    return (
        <Wrapper
            style={props.style}
            primary={props.primary}
            wide={props.wide}
            large={props.large}
            onClick={props.onClick}
        >
            {props.primary ? <BackgroundPrimary /> : <BackgroundSecondary />}
            {props.children}
        </Wrapper>
    );
}

Button.propTypes = {
    style: PropTypes.object,
    primary: PropTypes.bool,
    wide: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};
export default Button;