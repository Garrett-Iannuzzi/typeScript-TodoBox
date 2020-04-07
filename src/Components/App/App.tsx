import React, { useState } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { TodoList } from '../TodoList/TodoList';
import { TodoForm } from '../TodoForm/TodoForm';

export const initialTodos: Array<Todo> = [
  { text: 'Be fresh', complete: true },
  { text: 'Hit the Edgewater Market', complete: false },
]

const App: React.FC = () => {
  //React.FC is checking that App is indeed a functional component 
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo  => {
    //we don't need to specify that selectedTodo is of type Todo becuase that is happening in types.d.ts
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo = (newTodo: string) => {
    //Here TS helps, I was reminded I can't just spread in the string but I need to spread in an obj
    newTodo.trim() !== '' && 
      setTodos([...todos, { text: newTodo, complete: false }])
    //The trim() method removes whitespace from both ends of a string
  }

  return (
    <div className="App">
      <Header 
        greeting='Hi!' 
        person={{ firstName: 'Travis', lastName: 'TheDude' }}
      />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}


//When creating your file structure react files are .tsx and non react files are .ts
//You can right click on things like useState() to see TS information
//Using a types.d.ts file can allow you to make types to use gloablly without needing to inport or export the functions


//If we did not pass any props to TextInput we would see the read error line under the name, 
  //if we hovered over it we would be shown what is missing! Amazing!

//Using control + spacebar over the error will show you what props need to be passed down, from there you can click and it will auto fill
