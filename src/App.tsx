import './App.css'
import Tablero from './components/tablero'

function App() {

  return (
    <>
      <div className='contenedor'>
        <h1>Life Lab</h1>
        <Tablero></Tablero>
        <div>
          <p>1. Cualquier célula viva con dos o tres vecinos vivos sobrevive.</p>
          <p>2. Cualquier célula muerta con tres vecinos vivos se convierte en una célula viva.</p>
          <p>3. Todas las demás células vivas mueren en la próxima generación. Del mismo modo, todas las demás células muertas permanecen muertas.</p>
        </div>
      </div>
    </>
  )
}

export default App
