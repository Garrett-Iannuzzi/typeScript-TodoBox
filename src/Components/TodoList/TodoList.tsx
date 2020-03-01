import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  //Since Todo is defined in types.d.ts we can check again that it has the correct values
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  const displayTodos = todos.map(todo => {
    return(
      <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
    )
  });

  return(
    <ul>
      {displayTodos}
    </ul>
  )
}