import React from 'react';
import { Todo } from '../../../types/Todo';

const TodoListItem: React.FC<{ item: Todo | null }> = ({ item }) => {
  if (!item) {
    return <li key="no-key"></li>;
  }

  return (
    <li key={item.id}>
      {item.message} - {item.completed}
    </li>
  );
};

export default TodoListItem;
