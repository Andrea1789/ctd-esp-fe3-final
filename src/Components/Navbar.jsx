import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {themeState, themeDispatch} = useContextGlobal();

const toggleTheme = () => themeDispatch({ type: 'TOGGLE_THEME' });

return (
  <nav>
    <Link to='/'><h3>Home</h3></Link>
    <Link to='/favs'><h3>Favs</h3></Link>
    <Link to='/contact'><h3>Contact</h3></Link>


    {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    
    <button onClick={toggleTheme}>{themeState === "light"?'🌒' : '🌞'}</button>
  </nav>
)
}

export default Navbar