import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Card = ({ dentists }) => {
  
  const {name, username, id} = dentists
  const {state, dispatch} = useContextGlobal()
  const favs = state.favs
  const isfav = favs.find(fav => fav.id === id)
  
  const addFav = ()=>{
    dispatch({type: "addFav", payload: dentists})
  }
  const removeFav = ()=>{
    dispatch({type:"removeFav", payload: dentists})
  }

  return (
    <div className="card">
    <Link to={"/detail/" + id}>
      <img src="/images/doctor.jpg" alt="" />
      <h3>{name}</h3>
      <p>{username}</p>
    </Link>
      {!isfav 
        ? <button onClick={addFav} className="favButton"> <AiOutlineStar/> </button>
        : <button onClick={removeFav} className="favButton"><AiFillStar/></button>
      }
      
  </div>
);
};

export default Card;
