import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '@/app/layoutdiBarraza';
import TablaCredenciales from '../../app/credenciales/TablaCredenciales';
import TablaLotes from '../../app/credenciales/TablaLotes';



export default function Page() {
  return (
      <Layout>
        <div className="flex flex-col mb-4">        
          <div className="mx-8 my-8"> {/* Utiliza la clase 'flex' para que los elementos hijos se coloquen en línea */}
            <TablaLotes/>
            
            {/* Contenido adicional de la página de características */}
          </div>             
        </div> 
        <div id='root-modal-solicitudes'>
          
        </div>       
      </Layout>
  )
}