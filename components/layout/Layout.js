import React from 'react';
import Link from 'next/link';
import Header from './Header';

const Layout = props => {
    return ( 
        <>
            <Header />

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;