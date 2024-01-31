import React from 'react'
import Contactitem from './Contactitem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const todos = useSelector((state) => state.todos1.todos)
    console.log(todos);
  return (
    <div>
      {todos.map((elem) => (
        <Contactitem {...elem} key={elem.id} />
      ))}
    </div>
  )
}

export default ContactList
