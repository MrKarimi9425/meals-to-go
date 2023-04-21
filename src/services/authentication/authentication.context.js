import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useRef, useState } from 'react'
import { LoginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth();

    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    })

    const onLogin = (email, password) => {
        setIsLoading(true);
        setError(null);
        LoginRequest(auth, email, password).then(u => {
            setIsLoading(false);
            setUser(u);
        }).catch(error => {
            setIsLoading(false);
            setError(error.toString());
        })
    }

    const onRegister = (email, password, repeadedPassword) => {
        setError(null);
        setIsLoading(true);
        if (password != repeadedPassword) {
            setError("Error: Password do not match");
            setIsLoading(false);
            return;
        }
        createUserWithEmailAndPassword(auth, email, password).then(user => {
            setUser(user);
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);
            setError(error.toString());
        })
    }

    const onLogout = () => {
        console.log("logout");
        setUser(null);
        signOut(auth);
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onRegister,
                onLogin,
                onLogout
            }}>
            {children}
        </AuthenticationContext.Provider>
    )
}