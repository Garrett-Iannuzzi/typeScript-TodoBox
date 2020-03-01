import React, { useRef } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

//A interface in TS defines the syntax that any entity must adhere to
//Adding a ? makes the prop optional
//This all helps other understand what is needed to pass as props  
interface Props {
  greeting: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}


//telling everyone that this variable TextInput is a functional component
//Also this is expecting props and 
//You can use control space on line 24 inside the {} and use auto to show the props
export const Header: React.FC<Props> = ({ greeting, person }) => {

  //EXAMPLE STUFF:
  // const [userFruit, setUserFruit] = useState<TextNode | undefined>({ text: '' });
  // const [count, setCount] = useState<number | null | undefined>(5);
  //With hooks it will actuall infer the value for you, meaning if you put a number in the argument for useState TS will know count is a number
  //if you need the value of useState to be two different things there is no way to set it with two different values so we use < > to define two different values
  //we use a single | as an OR opp on line 26


  const divRef = useRef<HTMLInputElement>(null)
  //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  //we will use our <> before the function to define that type of data useRef() will be holding
  //one way to figure out what you might need in your <> is to hover over your erros, HTMLInoutElement was shown by hovering over ref in the return 


  return(
    <div ref={divRef}>
      <h1>TypeScript Todo List</h1>
      <h1>{greeting} {person.firstName} {person.lastName}! Here is your Todo List:</h1>
    </div>
  )
}