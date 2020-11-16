import React from 'react';
import { Observer, useObserver } from 'mobx-react';
import { useStore } from '../store';

const Header = () => {
    const { user } = useStore();
    return (
        <Observer>
            {() => (
                <div>
                    {user.isLogin ? (
                        <h1 style={{ backgroundColor: 'green' }}>welcome {user.name}</h1>
                    ) : (
                        <h1 style={{ backgroundColor: 'red' }}>guest</h1>
                    )}
                </div>
            )}
        </Observer>
    );
    // return useObserver(() => (
    //     <div>{user.isLogin ? <h1>welcome {user.name}</h1> : <h1>guest</h1>}</div>
    // ));
    // Observer of observe or useObserver
};

export default Header;
