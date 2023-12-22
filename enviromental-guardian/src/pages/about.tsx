
import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '@/app/layoutdiBarraza';
import AtroposComponent from '../app/component/TestComponents/Atropos';
export default function Page() {
    return(
      <Layout>
              <div>
                <h1 className="text-xl font-bold mb-4">About</h1>
                <h2 className="text-xl font-bold mb-4">About this</h2>
              </div>
              
              <div className="mx-auto w-1/2">
                {/* Contenido del segundo div */}
                <AtroposComponent></AtroposComponent>  
              </div>         
        </Layout>
    )
}