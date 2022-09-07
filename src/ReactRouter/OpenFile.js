import React from 'react'
import './Menu.css'

function OpenFile({name, image, price}) {
  return (
    <div className='menuLink'  data-aos="flip-left">
        <div className='openFile' style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <h3>${price}</h3>
        <button className='order'>Order now</button>
    </div>
  )
}

export default OpenFile