import React from 'react';
import { TodoModel } from '../models/todo';
import './TodoItem.css';

interface TodoItemProps {
  item: TodoModel;
  deleteTodo: (id: string) => void;
  completedTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { item, deleteTodo, completedTodo } = props;

  const onDeleteClick = (id: string) => {
    deleteTodo(id);
  };

  const onCompletedClick = (id: string) => {
    completedTodo(id);
  };

  return (
    <div className='todo-item'>
      <p
        className={item.iscompleted === true ? 'is-completed' : 'not-completed'}
      >
        {item.text}
      </p>
      <button
        className='btn-completed'
        onClick={() => onCompletedClick(item.id)}
      >
        completed
      </button>
      <button className='btn-delete' onClick={() => onDeleteClick(item.id)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
