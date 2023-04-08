import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const { dentistList } = useContextGlobal();


  return (
    <main>
      <div className='card-grid'>
        {dentistList.map(dentist => (
        <Card 
          key={dentist.id}
          name={dentist.name}
          username={dentist.username}
          id={dentist.id}
        />
        ))
        }
      </div>
    </main>
  )
}

export default Home