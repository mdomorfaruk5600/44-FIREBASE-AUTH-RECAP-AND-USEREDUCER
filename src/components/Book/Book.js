import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    return (
        <div>
            <h1>Let's book a {bedType} Room</h1>
            <p>Want a <a href="/">different room?</a></p>
        </div>
    );
};

export default Book;