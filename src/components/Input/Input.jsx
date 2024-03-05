import React, { useRef, useState } from 'react';
import './inputCss.css';

const homeworkBurn = ['Tarea Ingles', 'Organizar Habitación', 'Organizar Cuarto'];

export const Input = () => {
    
  const inputReference = useRef('');

  const handleSetTask = () => {
    const newTask = inputReference.current.value;
    if (newTask.trim() !== '') { // Verifica que la nueva tarea no esté vacía
      setTasks(prevTasks => [...prevTasks, newTask]); // Agrega la nueva tarea al arreglo tasks
      inputReference.current.value = ''; // Limpia el input después de agregar la tarea
    }
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
