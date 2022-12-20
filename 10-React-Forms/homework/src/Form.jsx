import React from 'react';
import { useState } from 'react';

export const validate = (input) => {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }

  return errors;
}

export default function Form() {

  const[errors, setError] = useState({
    username: "",
    password: "",
  })
  const[input, setInput] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setInput({...input, [e.target.name]:e.target.value})

    setError(validate(
      {...input, [e.target.name]:e.target.value}
    ))
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'} type="text" name="username" onChange={handleInputChange} value={input.username}></input>
        {errors.username && (<p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label>Password:</label>
         <input className={errors.password && 'danger'} type="password" name="password" onChange={handleInputChange} value={input.password}></input>
         {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
