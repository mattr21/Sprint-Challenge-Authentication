import React from 'react';
import axios from 'axios';
import Nav from '../nav/Nav.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
    text-align: center;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  margin-top: 16px;
  font-size: 18px;
  width: 308px;
  margin: 16px auto 0 auto;

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

axios.defaults.baseURL = 'http://localhost:3300/api';

axios.interceptors.request.use(function(requestConfig) {
    const token = localStorage.getItem('token');
    requestConfig.headers.authorization = token;
    return requestConfig;
});

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('token');
            const notLoggedIn = 
                <div>
                    <Nav />
                    <H1>Please login to see jokes</H1>
                    <LinkDiv>
                        <Link to="/login"> Login </Link>
                    </LinkDiv>
                </div>

            return <>{token ? <Component {...this.props} /> : notLoggedIn}</>
        }
    };
}