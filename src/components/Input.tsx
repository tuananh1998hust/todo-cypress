import React, { useState } from 'react';
import { TodoModel } from '../models/todo';

interface InputProps {
  todolist: TodoModel[];
  addTodo: (todo: TodoModel) => void;
}

const Input: React.FC<InputProps> = props => {
  const { addTodo, todolist } = props;
  const [text, setText] = useState('');

  const handleClick = () => {
    const todo: TodoModel = {
      id: todolist.length,
      text,
      iscompleted: false
    };
    addTodo(todo);
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className='add-todo'>
      <input
        type='text'
        placeholder='add new works'
        value={text}
        onChange={e => handleChange(e)}
      />
      <button onClick={handleClick}>ADD TODO</button>
    </div>
  );
};

export default Input;
