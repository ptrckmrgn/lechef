import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SyncLoader } from 'react-spinners';

import Logo from '../static/logo-icon.svg';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;
const Img = styled.img`
    margin-bottom: 40px;
`;

const Loader = props => {
    return (
        <Wrapper>
            <Img src={Logo} alt="lechef" />
            <SyncLoader color={props.fill} />
        </Wrapper>
    );
}

Loader.propTypes = {
    color: PropTypes.string
};
export default Loader;