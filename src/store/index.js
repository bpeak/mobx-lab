import { createContext, useContext } from 'react';
import Board from './Board';
import User from './User';
import Service from './Service';
import Rect from './Rect';
import Chat from './Chat';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => (
    <StoreContext.Provider
        value={{
            board: new Board(),
            user: new User(),
            service: new Service(),
            rect: new Rect(),
            chat: new Chat(),
        }}
    >
        {children}
    </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
