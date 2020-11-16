import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StoreProvider } from './store';
import Board from './components/Board';
import Write from './components/Write';
import Login from './components/Login';

export default function App() {
    return (
        <StoreProvider>
            <Router>
                <Link to="/board">board</Link>
                <Link to="/write">write</Link>
                <Link to="/login">login</Link>
                <Route path="/board" component={Board} />
                <Route path="/write" component={Write} />
                <Route path="/login" component={Login} />
            </Router>
        </StoreProvider>
    );
}
