import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form action='https://hh.ru/vacancy/68067343'>
          <label>Full Name</label>
          <input placeholder='Enter Full Name ...' />
          <label>Email</label>
          <input placeholder='Enter Email ...' />
          <label>Massege</label>
          <textarea placeholder='Enter Massege ...'></textarea>
          <button>Send Massege</button>
        </form>
      </div>
    </div>
  )
}

export default Contact