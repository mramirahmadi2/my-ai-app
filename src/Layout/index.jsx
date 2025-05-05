import React from 'react';
import Header from './Header/index.jsx';

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
