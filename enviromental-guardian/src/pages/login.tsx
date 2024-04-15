import React, { useState } from 'react';
import Layout from '@/app/layoutdiBarraza';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar lógica para validar el inicio de sesión
    if (username !== '' && password !== '') {
      // Inicio de sesión exitoso
      console.log('Inicio de sesión exitoso');
    } else {
      // Inicio de sesión fallido
      setError('Nombre de usuario o contraseña incorrectos');
    }
  };
  const handleForgotPassword =  () => { 
    setError('Lo sentimos aún no se ha implementado la funcionalidad de recuperación de contraseña.');
  };

  return (
    
      <Layout>
        <div className="flex flex-col items-center h-screen">
    {/* Primera fila con el icono del login */}
    <div className="bg-cover mt-6 mt-8" style={{ height: "100px", width: "100px", backgroundImage: 'url("/images/Login/Login200x200.png")' }}></div>
    
    {/* Segunda fila con el formulario de inicio de sesión */}
    <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md mt-8 mb-8 w-full md:w-3/4 lg:w-2/4 xl:w-1/3">
      <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
      <div className="mb-4">
        <label className="block mb-2">Nombre de Usuario:</label>
        <input type="text" className="border border-gray-300 p-2 w-full" placeholder='diego.barraza' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Contraseña:</label>
        <input type="password" className="border border-gray-300 p-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4 flex flex-col">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2" onClick={handleLogin}>Iniciar Sesión</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleForgotPassword}>He olvidado mi cuenta</button>
      </div>
    </div>
        </div>
      </Layout>
      
    
  );
};

export default Login;
