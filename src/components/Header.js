import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store';

const Header = observer(() => {
    const { user } = useStore();
    return (
        <div>
            {user.isLogin ? (
                <h1 style={{ backgroundColor: 'green' }}>welcome {user.name}</h1>
            ) : (
                <h1 style={{ backgroundColor: 'red' }}>guest</h1>
            )}
        </div>
    );
});

export default Header;
