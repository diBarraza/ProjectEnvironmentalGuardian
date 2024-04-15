import React from 'react';
import CardOficios from '../../app/component/cards/cardOficios';
import Layout from '@/app/layoutdiBarraza';
const HomeOficios = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Oficios disponibles</h1>
        <div className="flex flex-col gap-4">
          {/* Lista de CardOficios */}
          <CardOficios
            imagen="/images/Oficios/electricista.jpg"
            titulo="Electricista"
            monto="$50 por hora"
            evaluacion={4}
            descripcion="Ofrezco servicios de electricidad para hogares y negocios. Experiencia de 10 años en el campo."
          />
          <CardOficios
            imagen="/images/Oficios/plomero.jpg"
            titulo="Plomero"
            monto="$40 por hora"
            evaluacion={5}
            descripcion="Reparación de tuberías, instalación de grifos y sanitarios. Experiencia certificada."
          />
          <CardOficios
            imagen="/images/Oficios/carpintero.jpg"
            titulo="Carpintero"
            monto="$60 por hora"
            evaluacion={3}
            descripcion="Fabricación de muebles a medida, reparación y mantenimiento de estructuras de madera."
          />
          {/* Puedes agregar más CardOficios según sea necesario */}
        </div>
      </div>
    </Layout>
    
  );
};

export default HomeOficios;
