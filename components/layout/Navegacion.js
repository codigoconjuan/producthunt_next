import React from 'react';
import Link from 'next/link';

const Navegacion = () => {
    return ( 
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Populares</Link>
            <Link href="/">Nuevo Producto</Link>
        </nav>
     );
}
 
export default Navegacion;