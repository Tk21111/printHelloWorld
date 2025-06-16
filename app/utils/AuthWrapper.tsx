"use client"; // Make this a client-side component

import useAuth from "./useAuth";

const AuthProvider  = ({children} : {children: React.ReactNode}) => {
    useAuth();
    return <>{children}</>;
}

export default AuthProvider;