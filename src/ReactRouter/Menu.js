import React from 'react'
import OpenFile from './OpenFile'
import { JsonFile } from './JsonFile'
import './Menu.css'

function Menu() {
  return (
    <div className='ourMenu'>
      <div className='menuItem'>
        <h1>Our Menu</h1>
      </div>
      <div className='menu'>
        {
          JsonFile.map((img, key) => {
            return (
              <OpenFile className='openFile' image={img.image} name={img.name} price={img.price} key={key}   />
            )
          })
        }
      </div>
    </div>
  )
}

export default Menu