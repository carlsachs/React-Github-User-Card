import React from "react";
import styled from "styled-components";
import { render } from "react-dom";

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
                <h2>{props.userData.login}</h2>
                <h3>Repos: {props.userData.repos_url}</h3>
                <h3>Followers: {props.userData.followers}</h3>
            </CardMain>
        )
}
export default Card;