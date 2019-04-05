import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const UserWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  background-color: #dedfe0;
`;

const NavDiv = styled.div`
  background-color: #24292d;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  img {
      width: 50px;
      height: 50px;
  }

  h1 {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
  }
  
  a {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: white;
    transition: all 0.1s ease;
    cursor: pointer;
    margin-right: 10px;
    text-decoration: none;
    &:hover {
      color: #9f86ff;
    }
  }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    margin-left: 10px;
`;

const Right = styled.div`

`;

class Nav extends React.Component {
    render() {
        return (
            <UserWrapper>
            <NavDiv>
                <Left>
                  <Link to="/"> Dad Jokes </Link>
                </Left>
                <Right>
                  <Link to="/login"> Login </Link>
                  <Link to="/jokes"> Jokes </Link>
                  <Link to="/" onClick={this.logout}>Logout</Link>
                </Right>
            </NavDiv>
        </UserWrapper>
        );
    }
    
    logout= () => {
        localStorage.removeItem('token');
        this.props.history.push('/');
    }
}

export default Nav;