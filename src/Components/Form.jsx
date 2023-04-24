import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [data, setData] = useState({
    name: '',
    email: ''
  })

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm()
  }

  const validateForm = () =>{
    let regex = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
    
    if(data.name.trim().length < 5){ //validate name
      setMessage(<p className="form-error">Error: <br /> Name must have at least 5 characters</p>)
    }else if(!regex.test(data.email)){ //validate email
      setMessage(<p className="form-error">Error: <br /> Enter a valid email address</p>)
    }else{ // succes
      const text = <h4>Thanks {data.name}. We'll contact you via email </h4>
      setMessage(text)
    }
  }

  return (
    <div className="form-container">
      <form className="form-inputs" onSubmit={handleSubmit}>
        <label htmlFor="">Full Name</label>
        <input type="text" 
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}/>
        <label htmlFor="">Email</label>
        <input type="email" 
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}/>
        <button>Send</button>
      </form>
      <div className="form-info">
      {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Form;
