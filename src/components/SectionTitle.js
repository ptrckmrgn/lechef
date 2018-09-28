import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: #666;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 24px;
    padding-bottom: 16px;
    border-bottom: 1px #ddd solid;
`;

const SectionTitle = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

SectionTitle.propTypes = {
    children: PropTypes.string
};
SectionTitle.defaultProps = {
};
export default SectionTitle;