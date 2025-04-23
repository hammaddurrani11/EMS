import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    // localStorage.clear()
    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, [])


    return (
        <AuthContext.Provider value={userData}>
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default AuthProvider