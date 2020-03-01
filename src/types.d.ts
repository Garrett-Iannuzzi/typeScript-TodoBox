//All types defined in this file can be accessed anywhere!!

type Todo = {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
//Similar to languages like Java, void is used where there is no data type. For example, in return type of functions that do not return any value. There is no meaning to assign void to a variable, 
  //as only null or undefined is assignable to void.


type addTodo = (newTodo: string) => void