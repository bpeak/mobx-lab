import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StoreProvider } from './store';
import Board from './components/Board';
import Write from './components/Write';
import Login from './components/Login';
import Service from './components/Service';
import Rect from './components/Rect';
import Chat from './components/Chat';

export default function App() {
    return (
        <StoreProvider>
            <Router>
                <Link to="/board">board</Link>
                <Link to="/write">write</Link>
                <Link to="/login">login</Link>
                <Link to="/service">service</Link>
                <Link to="/rect">rect</Link>
                <Link to="/chat">chat</Link>
                <Route path="/board" component={Board} />
                <Route path="/write" component={Write} />
                <Route path="/login" component={Login} />
                <Route path="/service" component={Service} />
                <Route path="/rect" component={Rect} />
                <Route path="/chat" component={Chat} />
            </Router>
        </StoreProvider>
    );
}
