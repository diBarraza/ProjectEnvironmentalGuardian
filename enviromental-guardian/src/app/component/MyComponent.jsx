import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
       try {
      const response = await fetch('http://localhost:8000/json/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMensaje(data.mensaje);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>JSON Data from Django</h1>
      {mensaje ? (
        <p>{mensaje}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
