import React from 'react';
import Nav from '../nav/Nav.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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

const Home = props => {
    return (
        <div>
            <Nav />
            <h1>Welcome to Dad Jokes</h1>
            <LinkDiv>
                <Link to="/register"> Register </Link> &nbsp;/&nbsp; <Link to="/login"> Login </Link> &nbsp;to see jokes
            </LinkDiv>
        </div>
    )
};

export default Home;