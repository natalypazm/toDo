import React from 'react';

import { AppUI } from './AppUI';
import { TodoProvider } from '../Context';


// const toDos = [
//   {text:'Learn every day', completed: true},
//   {text:'Read for 30 minutes twice a day', completed: true},
//   {text:'Practice english', completed: false}
// ]


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
