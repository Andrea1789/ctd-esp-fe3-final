import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const {theme, data} = state;

  return (
    <main className={`${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.length ? data.map(dentist => (
        <Card 
          key={dentist.id}
          name={dentist.name}
          username={dentist.username}
          id={dentist.id}
        />
        ))
        : null
        }
      </div>
    </main>
  )
}

export default Home