import React, { useReducer, useState } from 'react';

const initialState = {count: 0};

const reducer = (state, action) => {

}

const ReducerCount = () => {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>This is Reducer Count</h1>
        </div>
    );
};

export default ReducerCount;