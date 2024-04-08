import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    window.history.back(); // Esta línea realiza la acción de retroceder en la historia del navegador
  };

  return (
    <button className='bg-green-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded' onClick={handleGoBack}>
      Atrás
    </button>
  );
};

export default BackButton;
