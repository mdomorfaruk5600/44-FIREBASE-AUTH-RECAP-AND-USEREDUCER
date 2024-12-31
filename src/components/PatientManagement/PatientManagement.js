import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../Reducers/PatientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState)
    const nameRef = useRef();
    console.log(state);
    const handleSubmit = event => {
        dispatch({
            type:"ADD_PATIENT", 
            name:nameRef.current.value, 
            id:state.patients.length + 1,
        });
        nameRef.current.value = "";
        event.preventDefault();
    }
    return (
        <div>

            <h1>Patient Management: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
            </form>
            {
                state.patients.map(pt => <li key={pt.id} onClick={()=>dispatch({type:"REMOVE_PATIENT", id:pt.id})}>{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;