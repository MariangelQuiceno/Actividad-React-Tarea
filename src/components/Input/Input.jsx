import React from 'react'
import './inputCss.css'
import { Lists } from '../Lists/Lists'

const homeworkBurn = ['Tarea Ingles', 'Organizar Habitación']

const listItems = homeworkBurn.map((homework) =>  <li>{homework}</li>);

export const Input = () => {
  return (
    <div>
        <label>
        <input className='homework-input' placeholder='Ingrese la Tarea' />
      </label>
      <button> Crear Tarea</button>
      <hr />

   

    </div>


  )
}

