import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    return (
        <div>
            <h1>Friends Detail: {friend.name} </h1>
            <p>Number: {friend.phone} </p>
            <h2>Everything You Need To Know</h2>
        </div>
    );
};

export default FriendDetails;