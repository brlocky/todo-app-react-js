import React from 'react';
import { Todo } from '../../../types/Todo';

const TodoListItem: React.FC<{ data: Todo | null }> = ({ data }) => {
  if (!data) {
    return <li key="no-key"></li>;
  }

  return (
    <li key={data.id}>
      {data.message} - {data.completed}
    </li>
  );
};

export default TodoListItem;
