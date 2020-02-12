import React from "react";
import styled from "styled-components";

const CardTwo = styled.div`
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

const FollowerCard = props => {
    return (
        <CardTwo>
            <h2>{props.followerData.login}</h2>
            <h3>Repos: {props.followerData.repos_url}</h3>
            <h3>Type: {props.followerData.type}</h3>
        </CardTwo>
    )
}
export default FollowerCard;