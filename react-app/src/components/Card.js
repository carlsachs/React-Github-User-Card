import React from "react";
import styled from "styled-components";
import axios from "axios";

const CardMain = styled.div`
    background-color: lightgreen;
    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
    h2 {
        color: forestgreen;
    }
    h3{
        color: forestgreen;
    }
    padding-bottom: 20px;
    padding-top: 20px;
    box-shadow: 8px 5px 5px darkgreen;

`;

const Card = props => {
        return (
            <CardMain>
                <h2>this.props.state.login</h2>
                <a href src="this.state.html_url">Link to Github</a>
                <h3>Repos:</h3>
                <h3>this.state.repos_url</h3>
                <h3>Followers: this.state.followers_url</h3>
            </CardMain>
        )
    }
export default Card;