import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    // localStorage.clear()
    useEffect(() => {
        setLocalStorage();
        const { employees } = getLocalStorage();
        setUserData(employees);
    }, [])


    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default AuthProvider