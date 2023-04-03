import React, { useState } from "react";
import Favs from "../Routes/Favs";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const [favorites, setFavorites] = useState([]);

  const addFav = (event)=>{
    event.stopPropagation();
    localStorage.setItem('fav', JSON.stringify([...favorites, {name, username, id}]))
    setFavorites([...favorites, {name, username, id}]);
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src="./images/doctor.jpg" alt="" />
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
