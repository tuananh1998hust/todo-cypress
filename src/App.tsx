import React, { useState } from 'react';
import Todo from './components/Todo';
import Input from './components/Input';
import './App.css';
import { TodoModel } from './models/todo';

const App: React.FC = () => {
  const [todolist, setState] = useState([
    { id: 0, text: 'Study Javascript', iscompleted: true },
    { id: 1, text: 'Example With Javascript', iscompleted: true }
  ]);

  const addTodo = (todo: TodoModel) => {
    setState([...todolist, todo]);
  };

  return (
    <div className='App'>
      <Input addTodo={addTodo} todolist={todolist} />
      <Todo todolist={todolist} />
    </div>
  );
};

export default App;
