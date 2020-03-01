import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
  addTodo: addTodo;
}

export const TodoForm: React.FC<AddTodoFormProps>= ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  //For the argument of useState() you could let it infer that newTodo is a string because of the default value
    //or we can add <string> to make sure it's a string, if we passed it an array it would get angry

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //Here we can check that it is a chnage event on an input element 
    setNewTodo(e.target.value)
  } 
  
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo)
    setNewTodo('')
  }

  return(
    <form>
      <input type='text' value={newTodo} onChange={handleChange}/>
      <button type='submit' onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}