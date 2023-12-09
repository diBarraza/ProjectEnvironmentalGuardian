import Sidebar from '../app/side_bar/side_bar';
import MyComponent from '../app/component/MyComponent'
import React from 'react';
export default function Page() {
    return(
        <div className="flex">
            <Sidebar />
            <div className="ml-64 p-8">
                <MyComponent></MyComponent>
            {/* Ajusta la clase 'ml-64' según el ancho de la barra lateral */}
            <p className="text-xl font-bold mb-4">Json back</p>
            {/* Contenido adicional de la página de características */}
        </div>
        
    </div>
    )
}