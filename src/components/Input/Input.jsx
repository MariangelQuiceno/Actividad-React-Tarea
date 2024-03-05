import React, { useRef, useState } from 'react';
import './inputCss.css';

const homeworkBurn = ['Tarea Ingles', 'Organizar Habitación', 'Organizar Cuarto'];

export const Input = () => {
    
  const inputReference = useRef('');

  const handleSetTask = () => {
    let response = inputReference.current.value;
    console.log(response);
  };

  const [tasks, setTasks] = useState(homeworkBurn);

  return (
    <div>
      <label>
        <input ref={inputReference} className='homework-input' placeholder='Ingrese la Tarea' type="text" />
      </label>
      <button onClick={handleSetTask}> Crear Tarea</button>
      <hr />

      <div className='lists-items-div'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
