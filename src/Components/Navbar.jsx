import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, toggleTheme } = useContext(ContextGlobal);
  const {theme} = state;


  return (
    <nav className={`${theme}`}>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>


      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar