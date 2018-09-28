import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconHamburger from '../static/hamburger.svg';
import IconEllipsis from '../static/ellipsis.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: rgba(0,0,0,0.1) 0 1px 8px 0;
    height: 60px;
`;
const IconButton = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 16px;
    margin: 0 8px;
`;

const HeaderMobile = props => {
    return (
        <Wrapper>
            <IconButton onClick={props.onClickHamburger}>
                <img src={IconHamburger} alt="navigation menu" height="20px" />
            </IconButton>
            <div><h1>{props.title}</h1></div>
            <IconButton onClick={props.onClickEllipsis}>
                <img src={IconEllipsis} alt="shopping list menu" />
            </IconButton>
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