import React from "react";
import FollowerCard from "./FollowerCard";

const FollowerList = props => {

    return (
        <div>
            {props.followerData.map(follower => {
                console.log("followers",follower);
                return <FollowerCard followerData={follower} />
            })}
        </div>
    )
}
export default FollowerList;