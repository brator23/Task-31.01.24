import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'

const MainRouts = () => {
  return (
    <Routes>
      <Route path='/list' element={<ContactList />} />
      <Route path='/' element={<ContactForm />} />
    </Routes>
  )
}

export default MainRouts
