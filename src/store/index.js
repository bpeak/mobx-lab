import { createContext, useContext } from 'react';
import Board from './Board';
import User from './User';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => (
    <StoreContext.Provider
        value={{
            board: new Board(),
            user: new User(),
        }}
    >
        {children}
    </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
