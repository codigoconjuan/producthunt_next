import React from 'react'
import Layout from '../components/layout/Layout';


const CrearCuenta = () => (
  <div>
    <Layout>
      <>
        <h1>Crear Cuenta</h1>
        <form>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    placeholder="Tu Nombre"
                    name="nombre"
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Tu Email"
                    name="email"
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Tu Password"
                    name="password"
                />
            </div>

            <input 
              type="submit"
              value="Crear Cuenta"
            />
        </form>
      </>
    </Layout>
  </div>
)

export default CrearCuenta