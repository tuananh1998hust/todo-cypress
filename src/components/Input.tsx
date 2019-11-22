import React, { useState } from 'react';
import uuid from 'uuid';
import { TodoModel } from '../models/todo';

interface InputProps {
  addTodo: (todo: TodoModel) => void;
}

const Input: React.FC<InputProps> = props => {
  const { addTodo } = props;
  const [text, setText] = useState('');

  const handleClick = () => {
    const todo: TodoModel = {
      id: uuid(),
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
      <button className='btn-add' onClick={handleClick}>
        ADD TODO
      </button>
    </div>
  );
};

export default Input;
