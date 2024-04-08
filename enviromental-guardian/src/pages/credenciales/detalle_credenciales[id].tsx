import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '@/app/layoutdiBarraza';
import TablaCredenciales from '../../app/credenciales/TablaCredenciales';

export default function Page() {
  return (
      <Layout>
        <div className="flex flex-col mb-4">        
          <div className="mx-8 my-8"> {/* Utiliza la clase 'flex' para que los elementos hijos se coloquen en línea */}
            
            
            {/* Contenido adicional de la página de características <TablaCredenciales/> */}
          </div>             
        </div> 
        <div id='root-modal-solicitudes'>
          
        </div>       
      </Layout>
  )
}