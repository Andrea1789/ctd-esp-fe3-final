import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";



const Card = ({ name, username, id, dentist }) => {
  const {globalDispatch} = useContextGlobal()
  
  const addFav = () => {
    globalDispatch({type: 'ADD_FAV', payload: {...dentist, name, username}})
}
  

  return (
    <div className="card">
        <Link  to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="" />
        <h5>{name}</h5>
        <h5>{username}</h5>
        <p>{id}</p>
        </Link>
        <button onClick={addFav} className="favButton">Favorite ⭐</button>
    </div>
  );
};

export default Card;
