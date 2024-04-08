import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '@/app/layoutdiBarraza';
import TablaCredenciales from '../../../app/credenciales/TablaCredenciales';
import { useRouter } from 'next/router';
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
      <Layout>
        <div className="flex flex-col mb-4">        
          <div className="mx-8 my-8">
            <TablaCredenciales id_lote={id}/>            
            {/* Contenido adicional de la página de características */}
          </div>             
        </div> 
        <div id='root-modal-solicitudes'>
          
        </div>       
      </Layout>
  )
}