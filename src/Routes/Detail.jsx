import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const [dentist, setDentist] = useState({});
const {id} = useParams()
const navigate = useNavigate()
const {favDispatch} = useContextGlobal()

const url = 'https://jsonplaceholder.typicode.com/users/' + id;
  


useEffect(() => {
  const fetchDentist = async () => {
      const res= await fetch(url);
      const data = await res.json();
      setDentist(data)
  };
  fetchDentist()
  }, []);

  const addFav = () => {
    favDispatch({type: 'ADD_FAV', payload: dentist})
}
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      <h1>Detail Dentist {id} </h1>
      <div className='card'>
            <img src="/images/doctor.jpg" alt="" />
            <h3>{dentist?.name}</h3>
            <h3>{dentist?.username}</h3>
            <button onClick={addFav}>⭐</button>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail