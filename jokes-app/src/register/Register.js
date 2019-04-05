import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav.js';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const H1 = styled.h1`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
    text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #d8dee2;
  align-items: center;
  width: 308px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 85%;

    p {
      font-size: 14px;
      font-weight: 600;
      margin: 20px 0 10px 0;
    }

    input {
      font-size: 16px;
      border-radius: 3px;
      border: 1px solid #d1d5da;
      height: 30px;
      box-shadow: inset 0 1px 2px rgba(27,31,35,.075);

      &:focus {
        border-color: #2188ff;
        box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
        outline: none;
      }
    }
    button {
      margin: 20px 0;
      cursor: pointer;
      height: 35px;
      border-radius: 3px;
      border: 1px solid #9882ef;
      background-image: linear-gradient(-180deg,#937af3,#7759ea 90%);
      color: white;
      font-weight: 800;
      font-size: 14px;

      &:hover {
        border: 1px solid #5738d4;
        background-image: linear-gradient(-180deg,#957aff,#6845ef 90%);
      }
    }
  }
`;

const CreateDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d8dee2;
  align-items: center;
  padding: 4px 0;
  margin-top: 16px;
  font-size: 14px;
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

class Register extends React.Component {
    state = {
        username: "",
        password: "",
    };

    render() {
        return (
          <Wrapper>
            <Nav />
            <H1>Sign up for Dad Jokes</H1>
            <Form>
              <form onSubmit={this.handleSubmit}>
                <p>Username</p>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  required
                />
                 <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
                <button type="submit">Sign Up</button>
              </form>
            </Form>
            <CreateDiv>
              <p>Already have an account? <Link to="/login">Login.</Link></p>
            </CreateDiv>
          </Wrapper>
        );
      }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = "http://localhost:3300/api/register";
        axios
            .post(endpoint, this.state)
            .then(res => {
                // console.log("LOGIN RESPONSE:", res);
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/login');
            })
            .catch(error => {
                console.log("REGISTER ERROR:", error);
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }   
}

export default Register;