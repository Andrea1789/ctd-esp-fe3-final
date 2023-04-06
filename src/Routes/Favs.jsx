import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useContextGlobal() 

  return (
      <div className="card-grid">
        {favState.map(dentist => (
            <div className="card" key={dentist?.name}>
                <h3>{dentist?.name}</h3>
                <img src="/images/doctor.jpg" alt="" />
            </div>
        ))}
      </div>
    
  );
};

export default Favs;
