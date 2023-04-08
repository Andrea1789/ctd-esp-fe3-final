import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {globalState, globalDispatch} = useContextGlobal();

const toggleTheme = () => globalDispatch({ type: 'TOGGLE_THEME' });

return (
  <nav>
    <Link to='/'><h5>Home</h5></Link>
    <Link to='/favs'><h5>Favs</h5></Link>
    <Link to='/contact'><h5>Contact</h5></Link>


    {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    
    <button className='themeButton' onClick={toggleTheme}>{globalState.theme === "light"?'🌒' : '🌞'}</button>
  </nav>
)
}

export default Navbar