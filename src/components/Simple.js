import React from 'react';

function A({ children }) {
    return <h1>{children}</h1>;
}

function B({ children }) {
    return <h2>{children}</h2>;
}

function C({ children }) {
    return <h3>{children}</h3>;
}

export default function Simple() {
    return (
        <CombineProvider providers={providers}>
            <div>simple mode</div>
        </CombineProvider>
    );
    // return (
    //     <A>
    //         <B>
    //             <C>
    //                 <div>simple mode</div>
    //             </C>
    //         </B>
    //     </A>
    // );
}

const providers = [A, B, C];

function CombineProvider({ children, providers }) {
    return providers.reduce((acc, curr) => React.createElement(curr, null, acc), children);
}
