import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const displayItems = (items, checked) => {
    return _.map(items, (item, id) => {
        if (item.checked === checked) {
            return (<Item
                id={id}
                key={id}
                quantity={item.quantity}
                value={item.value}
                checked={item.checked}
                onChangeCheckbox={item.onChangeCheckbox}
            />);
        }
    });
}

const SectionTitle = styled.div`
    color: #666;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 24px;
    padding-bottom: 16px;
    border-bottom: 1px #ddd solid;
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

const List = props => {
    let checked;
    return (
        <div>
            {displayItems(props.items, checked=false)}
            <SectionTitle>Crossed off</SectionTitle>
            {displayItems(props.items, checked=true)}
        </div>
    );
}

List.propTypes = {
    items: PropTypes.object
};
List.defaultProps = {
};
export default List;