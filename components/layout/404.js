import React from 'react';
import { css } from '@emotion/core';

const Error404 = () => {
    return ( <h1
                css={css`
                    margin-top: 5rem;
                    text-align: center;
                `}
            >Producto no existente</h1> );
}
 
export default Error404;