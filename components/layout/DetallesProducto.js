import React from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale'

const Imagen = styled.img`
    width: 200px;
`;

const DetallesProducto = ({producto}) => {

    const { id, comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos } = producto;


    return ( 
        <li>
            <div>
                <div>
                    <Imagen src={urlimagen}  />
                </div>

                <div>
                    <h1>{nombre}</h1>

                    <p>{descripcion}</p>

                    <div>
                        <img src="/static/img/comentario.png" />
                        <p>{comentarios.length} Comentarios</p>
                    </div>

                    <p>Publicado hace: { formatDistanceToNow( new Date(creado), {locale: es} )} </p>
                </div>
            </div>

            <div>
                <div> &#9650; </div>
                <p>{votos}</p>
            </div>
        </li>
     );
}
 
export default DetallesProducto;