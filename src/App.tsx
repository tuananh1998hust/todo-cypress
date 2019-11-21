import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css';

const App: React.FC = () => {
  const [todolist, setState] = useState([
    { id: 0, text: 'Study Javascript', iscompleted: true },
    { id: 1, text: 'Example With Javascript', iscompleted: true }
  ]);

  return (
    <div className='App'>
      <Todo todolist={todolist} />
    </div>
  );
};

export default App;
