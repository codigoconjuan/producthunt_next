import React, { useState } from 'react';
import { css } from '@emotion/core';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}
 
const CrearCuenta = () => {

  const [ error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al crear el usuario ', error.message);
      guardarError(error.message);
    }
  }


  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Crear Cuenta</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
              <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                      type="text"
                      id="nombre"
                      placeholder="Tu Nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>

              {errores.nombre && <Error>{errores.nombre}</Error> }
  
              <Campo>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
              {errores.email && <Error>{errores.email}</Error> }
  
              <Campo>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
              {errores.password && <Error>{errores.password}</Error> }

              {error && <Error>{error} </Error>}
  
              <InputSubmit 
                type="submit"
                value="Crear Cuenta"
              />
          </Formulario>
        </>
      </Layout>
    </div>
  )
}

export default CrearCuenta