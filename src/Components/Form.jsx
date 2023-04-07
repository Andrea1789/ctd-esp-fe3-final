import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)
    if(emailTest && user.name.length > 5){
      setMessage(`Welcome ${user.name}!`);
      setUser({ name: "", email: "" });
    }else{
      setMessage("Please enter a valid name and email.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Full Name</label>
        <input type="text" 
          value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label htmlFor="">Email</label>
        <input type="email" 
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button>Send</button>
      </form>
      <div>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Form;
