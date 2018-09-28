import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 170px;
    box-shadow: rgba(0,0,0,0.1) 0 1px 8px 0;
`;
const Link = styled.a`
    cursor: pointer;
    outline: none;
    font-size: 1.1em;
    color: #333;
    padding: 16px;
    &:hover, :focus {
        background: #F5F5F5;
    }
`;

const Menu = props => {
    return (
        <Wrapper>
            <Link onClick={props.onClickClearChecked}>Clear checked</Link>
            <Link onClick={props.onClickClearAll}>Clear all</Link>
        </Wrapper>
    );
}

Menu.propTypes = {
    onClickClearChecked: PropTypes.func.isRequired,
    onClickClearAll: PropTypes.func.isRequired
};
Menu.defaultProps = {
};
export default Menu;