import React from 'react';
import { TodoModel } from '../models/todo';

interface TodoItemProps {
  item: TodoModel;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { item } = props;
  return <div className='todo-item'>{item.text}</div>;
};

export default TodoItem;
