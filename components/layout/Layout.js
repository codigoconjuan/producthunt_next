import React from 'react';

const Layout = props => {
    return ( 
        <>
            <h1>Header</h1>
            
            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;