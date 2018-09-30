import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: #666;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 16px;
    padding-top: 24px;
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