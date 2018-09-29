import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FiMenu } from 'react-icons/fi';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: rgba(0,0,0,0.1) 0 1px 8px 0;
    height: 60px;
`;
const Hamburger = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.5em;
    color: #FD746C;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    -webkit-tap-highlight-color: transparent;
`;

const HeaderMobile = props => {
    return (
        <Wrapper>
            <Hamburger onClick={props.onClickHamburger} aria-label="navigation menu">
                <FiMenu />
            </Hamburger>
            <h1>{props.title}</h1>
            {/* <IconButton onClick={props.onClickEllipsis}>
                <img src={IconEllipsis} alt="shopping list menu" />
            </IconButton> */}
        </Wrapper>
    );
}

HeaderMobile.propTypes = {
    title: PropTypes.string.isRequired,
    onClickHamburger: PropTypes.func.isRequired,
    onClickEllipsis: PropTypes.func.isRequired
};
HeaderMobile.defaultProps = {
    title: 'Shopping List'
};
export default HeaderMobile;