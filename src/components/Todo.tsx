import React from 'react';
import TodoItem from './TodoItem';
import { TodoModel } from '../models/todo';

interface TodoProps {
  todolist: TodoModel[];
  deleteTodo: (id: string) => void;
  completedTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { todolist, deleteTodo, completedTodo } = props;

  return (
    <div className='todo-list'>
      {todolist.map((todo: TodoModel) => (
        <TodoItem
          key={todo.id}
          item={todo}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
        />
      ))}
    </div>
  );
};

export default Todo;
