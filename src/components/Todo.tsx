import React from 'react';
import TodoItem from './TodoItem';
import { TodoModel } from '../models/todo';

interface TodoProps {
  todolist: TodoModel[];
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { todolist } = props;

  return (
    <div>
      {todolist.map((todo: TodoModel) => (
        <TodoItem item={todo} />
      ))}
    </div>
  );
};

export default Todo;