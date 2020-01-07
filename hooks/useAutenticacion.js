import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

function useAutenticacion() {
    const [ usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if( user ) {
                guardarUsuarioAutenticado(user);
            } else {
                guardarUsuarioAutenticado(null);
            }
        });
        return () => unsuscribe();
    }, []);

    return usuarioAutenticado;
}
export default useAutenticacion;