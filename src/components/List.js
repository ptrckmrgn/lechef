import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Item from './Item';
import SectionTitle from './SectionTitle';

const displayItems = (items, checked) => {
    return _.map(items, (item, id) => {
        if (item.checked === checked) {
            return (<Item
                id={id}
                key={id}
                quantity={item.quantity}
                value={item.value}
                checked={item.checked}
                onChangeCheckbox={() => console.log('changed')}
            />);
        }
    });
}

const List = props => {
    return (
        <div>
            {displayItems(props.items, false)}
            <SectionTitle>Crossed off</SectionTitle>
            {displayItems(props.items, true)}
        </div>
    );
}

List.propTypes = {
    items: PropTypes.object
};
List.defaultProps = {
};
export default List;