import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";



const Card = ({ name, username, id, dentist }) => {
  //const {favDispatch} = useContextGlobal()
  
  const addFav = () => {
    //favDispatch({type: 'ADD_FAV', payload: dentist})
}
  

  return (
    <div className="card">
        <img src="/images/doctor.jpg" alt="" />
        <h3>{name}</h3>
        <Link  to={`/dentist/${id}`}>
        <h3>{username}</h3>
        </Link>
        <p>{id}</p>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav⭐</button>
    </div>
  );
};

export default Card;
