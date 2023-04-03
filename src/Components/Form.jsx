import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)
    if(emailTest && user.name.length > 5){
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Full Name</label>
        <input type="text" 
          onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label htmlFor="">Email</label>
        <input type="email" 
          onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
