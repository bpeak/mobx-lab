import React from 'react';
import { useStore } from '../store';
import Header from './Header';

// no observer
export default function Login() {
    const { user } = useStore();
    const login = () => user.login('dooli');
    const logout = () => user.logout();
    return (
        <div>
            <Header />
            <h1>login</h1>
            <button onClick={login}>login</button>
            <button onClick={logout}>logout</button>
        </div>
    );
}
