import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];
//
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {
  
 return ( 
  <TodoProvider>
    <AppUi/>

  </TodoProvider>
    
 )
}

export default App;