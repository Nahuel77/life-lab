import './App.css'
import { useState, useEffect } from 'react';
import Tablero from './components/tablero'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(isMobile);

  return (
    <>
      <div className='contenedor'>
        {isMobile && <h1>Life Lab</h1>}
        <Tablero></Tablero>
        <div className='seccion'>
          {!isMobile && <h1>Life Lab</h1>}
          <div>
            <p>1. Cualquier célula viva con dos o tres vecinos vivos sobrevive.</p>
            <p>2. Cualquier célula muerta con tres vecinos vivos se convierte en una célula viva.</p>
            <p>3. Todas las demás células vivas mueren en la próxima generación. Del mismo modo, todas las demás células muertas permanecen muertas.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
