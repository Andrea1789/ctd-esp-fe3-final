import React from "react";
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = ({favorites}) => {
  const { state } = useContext(ContextGlobal);
  const {theme} = state;


  return (
    <div className={`${theme}`}>
      <div className="card-grid">
      {favorites ? (favorites.map((favorite) => (
        <div key={favorite.id}>
          <h3>{favorite.name}</h3>
          <h4>{favorite.username}</h4>
          <p>{favorite.id}</p>
          </div>
      ))
      ): null}
      </div>
    </div>
  );
};

export default Favs;
{/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}