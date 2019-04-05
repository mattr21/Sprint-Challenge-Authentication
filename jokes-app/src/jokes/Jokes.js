import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth.js';
import styled from 'styled-components'
import Nav from '../nav/Nav.js';

const WrapperDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const JokesCard = styled.div`
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    max-width: 800px;
    background-color: white;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.1);
    margin: 20px;
    text-align: left;

    &:hover {
      box-shadow: 0 8px 15px 0 rgba(0,0,0,.1);
    }
`;

class Jokes extends React.Component {
    state = {
        jokes: [],
    }

    render() {
        return (
            <WrapperDiv>
                <Nav />
                <h2>List of Jokes</h2>
                <div>
                        {this.state.jokes.map(joke => (
                            <JokesCard>{joke.joke}</JokesCard>
                        ))}
                </div>
            </WrapperDiv>
        )
    }

    componentDidMount() {
        const endpoint = '/jokes';
        axios
            .get(endpoint)
            .then(res => {
                this.setState({ jokes: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
};

export default requiresAuth(Jokes);