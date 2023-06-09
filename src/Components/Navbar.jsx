import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';
import {FaMoon, FaSun} from 'react-icons/fa'

const Navbar = () => {
  const {state, dispatch} = useContextGlobal()
  const changeTheme = () =>{
    !localStorage.getItem('theme') && localStorage.setItem('theme', state.theme)
    localStorage.getItem('theme') === 'light'
      ? dispatch({type: localStorage.getItem('theme'), payload: 'dark'})
      : dispatch({type: localStorage.getItem('theme'), payload: 'light'})
  }

  return (
    <nav>
      <Link to='/'>
        <h3 className='logo-nav'><span>D</span>H Odonto</h3>
      </Link>
      <div className="links">
      <Link to='/'> Home</Link>
      <Link to='/contact'> Contact</Link>
      <Link to='/favs'> Favs</Link>

      <button onClick={changeTheme} className="btn-theme">
        {state.theme === "dark"
          ? <FaSun/>
          : <FaMoon/>
        }
      </button>
      </div>
    </nav>
  )
}

export default Navbar