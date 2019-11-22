import React, { useState } from 'react';
import Todo from './components/Todo';
import Input from './components/Input';
import './App.css';
import { TodoModel } from './models/todo';

const App: React.FC = () => {
  const [todolist, setState] = useState([
    { id: '0', text: 'Study Javascript', iscompleted: true },
    { id: '1', text: 'Example With Javascript', iscompleted: true }
  ]);

  const addTodo = (todo: TodoModel) => {
    setState([...todolist, todo]);
  };

  const deleteTodo = (id: string) => {
    const todolistAfterDelete: TodoModel[] = todolist.filter(
      todo => todo.id !== id
    );

    setState([...todolistAfterDelete]);
  };

  const completedTodo = (id: string) => {
    const todolistAfterCompleted: TodoModel[] = todolist.map(todo => {
      if (todo.id === id) {
        todo.iscompleted = !todo.iscompleted;
      }

      return todo;
    });

    setState([...todolistAfterCompleted]);
  };

  return (
    <div className='App'>
      <h1 className='title'>Todo App</h1>
      <Input addTodo={addTodo} />
      <Todo
        todolist={todolist}
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
      />
    </div>
  );
};

export default App;
