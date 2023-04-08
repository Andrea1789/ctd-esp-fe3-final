import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
const {globalState} = useContextGlobal() 

  return (
    <div className="favsContainer">
      <div className="card-grid">
        {globalState.favs?.map(dentist => (
            <Card 
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
      </div>
  );
};

export default Favs;
