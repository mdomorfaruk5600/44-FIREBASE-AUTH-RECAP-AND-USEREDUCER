import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [loggedInUser] = useContext(UserContext);
    const location = useLocation();
    return (
        <div>
            {loggedInUser.email ? children:<Navigate to={'/login'} state={{ from: location.pathname }} />}
        </div>
    );
};

export default RequireAuth;