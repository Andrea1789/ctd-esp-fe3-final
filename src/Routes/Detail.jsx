import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const [dentist, setDentist] = useState({});
const {id} = useParams()
const navigate = useNavigate()
const {globalDispatch} = useContextGlobal()

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
    globalDispatch({type: 'ADD_FAV', payload: dentist})
}
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      <h1>Dentist {dentist?.name} </h1>
      <div className='card'>
            <img src="/images/doctor.jpg" alt="" />
            <h3>{dentist?.name}</h3>
            <p>Email: {dentist?.email}</p>
            <p>Phone number: {dentist?.phone}</p>
            <h5>{dentist?.website}</h5>
            <button className='favButton' onClick={addFav}>⭐</button>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      
    </div>
  )
}

export default Detail