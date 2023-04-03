import { ContextGlobal } from '../Components/utils/global.context'
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const [dentist, setDentist] = useState({});

  const { state } = useContext(ContextGlobal);
  const {theme} = state;
  const navigate = useNavigate()
  const {id} = useParams()


  const getDentist = async()=>{
    //Deberas completar este fetch con el parametro correspondiente
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const dentist = await res.json()
    setDentist(dentist)
}
useEffect(()=>{
    getDentist()
},[])

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={`${theme}`}>
      <h1>Detail Dentist {id} </h1>
      <div className='card'>
            <img src="../images/doctor.jpg" alt="" />
            <h3>{dentist?.name}</h3>
            <h3>{dentist?.username}</h3>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail