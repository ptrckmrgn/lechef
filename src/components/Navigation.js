import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../static/logo-white.svg';

const Wrapper = styled.div`
    height: 100%;
    width: 375px;
    max-width: 80%;
    box-shadow: rgba(0,0,0,0.1) 1px 0 8px 0;
`;
const Header = styled.div`
    height: 120px;
    background: linear-gradient(-20deg, #FD746C, #FF9068);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SectionTitle = styled.div`
    color: #666;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 24px;
    padding-bottom: 16px;
`;
const MenuItem = styled.div`
    padding: 24px;
    font-size: 1.1em;
    background: #F5F5F5;
`;

const Navigation = props => {
    return (
        <Wrapper>
            <Header>
                <img src={Logo} />
            </Header>
            <SectionTitle>Lists</SectionTitle>
            <MenuItem>Shopping List</MenuItem>
        </Wrapper>
    );
}

Navigation.propTypes = {
};
Navigation.defaultProps = {
};
export default Navigation;