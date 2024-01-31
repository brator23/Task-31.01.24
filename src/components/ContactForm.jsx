import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodo({ name, phone }));
    setName("");
    setPhone("");
  };
  return (
    <form className="inpi">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Link to="/list">
        <button onClick={handleClick}>Add</button>
      </Link>
    </form>
  )
}

export default ContactForm
