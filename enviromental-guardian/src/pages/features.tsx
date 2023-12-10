import 'tailwindcss/tailwind.css';
import Layout from '@/app/layoutdiBarraza';
import NineVisitCards from '../app/component/cards/NineVisitCards';

export default function Page() {
    const visitCount = 100;
    return (
        <Layout>
            <div className="flex flex-col mb-4">        
                <div className="mx-8 my-8"> {/* Utiliza la clase 'flex' para que los elementos hijos se coloquen en línea */}
                    <NineVisitCards/>
                    
                   
                    {/* Contenido adicional de la página de características */}
                </div> 
                
                   

            </div>
            
        </Layout>
    
    )
}