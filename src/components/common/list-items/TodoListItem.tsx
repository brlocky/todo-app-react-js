import React from 'react';
import { Todo } from '../../../types/todo';

const TodoListItem: React.FC<{ item: Todo | null }> = ({ item }) => {
  if (!item) {
    return <li key="no-key"></li>;
  }

  return (
    <li key={item.id} className="py-4 flex">
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{item.message}</p>
        <p className="text-sm text-gray-500">{item.completed}</p>
      </div>
    </li>
  );
};

export default TodoListItem;
