import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])



    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
        // Profile Update
        await updateProfile(auth.currentUser, { displayName: username });
        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    // Login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }


    const value = {
        currentUser,
        signup,
        login,
        logout,

    };
    return (

        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;