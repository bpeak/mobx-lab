import React from 'react';
import { useStore } from '../store';
import { observer } from 'mobx-react';
import { toJS, trace } from 'mobx';
import './Chat.css';

function Chat() {
    const { chat } = useStore();
    trace(true);
    console.log('[rerendering]', chat.status, chat.isLoaded, toJS(chat.items), chat.items);

    return (
        <div className="chat">
            <h1>chat</h1>
            <div>status: {chat.status}</div>
            {chat.isLoaded ? (
                <>
                    <div>
                        {chat.items.map((chat, i) => (
                            <div key={i}>chat: {chat.title}</div>
                        ))}
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
            <div>
                <button onClick={() => chat.fetchItem()}>GET</button>
                <button onClick={() => chat.fetchItemAction()}>GET(action)</button>
                <button
                    onClick={() => {
                        chat.init();
                        setTimeout(() => console.clear(), 0);
                    }}
                >
                    INIT
                </button>
            </div>
        </div>
    );
}

export default observer(Chat);
