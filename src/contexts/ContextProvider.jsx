import React from 'react';
import { AuthContext } from './AuthContext';

const ContextProvider = ({ children }) => {
    const data = {
        name: "Alice"
    }
    return (
        <AuthContext value={data}>
            {children}
        </AuthContext>
    );
};

export default ContextProvider;