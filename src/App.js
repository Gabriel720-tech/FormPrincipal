import './App.css';
import Categoria from './componentes/Categorias.js'

function App() {
  return (
    <div className="App">
      <div className='titulo'>Formulario</div>
      <Categoria
        cat='Nombre'
      />
      <Categoria
        cat='Apellido'
      />
      <Categoria
        cat='Edad'
      />
      <Categoria
        cat='Dni'
      />
      <Categoria
        cat='Telefono'
      />
      <Categoria
        cat='Correo'
      />
      
    </div>
  );
}

export default App;
