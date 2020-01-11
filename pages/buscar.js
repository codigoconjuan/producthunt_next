import React from 'react'
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';

const Buscar = () => {

  const router = useRouter();
  const { query: { q }} = router;
  console.log(q);


  return (
    <div>
      <Layout>
        <h1>Buscar</h1>
      </Layout>
    </div>
  )
}

export default Buscar