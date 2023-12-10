import 'tailwindcss/tailwind.css';
import Layout from '@/app/layoutdiBarraza';
import VisitCard from '../app/component/VisitCard';

export default function Page() {
    const visitCount = 100;
    return (
        <Layout>
            <div className="flex flex-col mb-4">        
                <div className="ml-64 p-8 flex"> {/* Utiliza la clase 'flex' para que los elementos hijos se coloquen en línea */}
                    <VisitCard visitCount={visitCount} />
                    <VisitCard visitCount={visitCount} />
                    <VisitCard visitCount={visitCount} />
                   
                    {/* Contenido adicional de la página de características */}
                </div>  
                <div className='ml-64 p-8'>
                    <p className="text-xl font-bold mb-4">Features Page</p>                   
                </div>    

            </div>
            
        </Layout>
    
    )
}